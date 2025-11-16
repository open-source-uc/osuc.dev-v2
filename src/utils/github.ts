import type { Repo } from "@/types/repos";
import fs from "node:fs";
import path from "node:path";

const GITHUB_API_URL = "https://api.github.com/graphql";
const CACHE_DIR = ".astro/cache";
const CACHE_FILE = "github-repos.json";
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutos en milisegundos

const PINNED_REPOS_QUERY = `
query PinnedRepos($login: String!) {
  organization(login: $login) {
    pinnedItems(first: 6, types: REPOSITORY) {
      edges {
        node {
          ... on Repository {
            name
            description
            owner {
              login
            }
            primaryLanguage {
              name
            }
            stargazerCount
            forkCount
            openGraphImageUrl
          }
        }
      }
    }
  }
}
`;

interface CacheData {
    timestamp: number;
    repos: Repo[];
}

function getCachePath(): string {
    return path.join(process.cwd(), CACHE_DIR, CACHE_FILE);
}

function readCache(): CacheData | null {
    try {
        const cachePath = getCachePath();
        if (!fs.existsSync(cachePath)) {
            return null;
        }

        const cacheContent = fs.readFileSync(cachePath, "utf-8");
        return JSON.parse(cacheContent);
    } catch (error) {
        console.error("Error reading cache:", error);
        return null;
    }
}

function writeCache(repos: Repo[]): void {
    try {
        const cachePath = getCachePath();
        const cacheDir = path.dirname(cachePath);

        if (!fs.existsSync(cacheDir)) {
            fs.mkdirSync(cacheDir, { recursive: true });
        }

        const cacheData: CacheData = {
            timestamp: Date.now(),
            repos,
        };

        fs.writeFileSync(cachePath, JSON.stringify(cacheData, null, 2));
    } catch (error) {
        console.error("Error writing cache:", error);
    }
}

function isCacheValid(cache: CacheData | null): boolean {
    if (!cache) return false;
    return Date.now() - cache.timestamp < CACHE_DURATION;
}

async function fetchReposFromAPI(
    orgName: string,
    token: string
): Promise<Repo[]> {
    const response = await fetch(GITHUB_API_URL, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: PINNED_REPOS_QUERY,
            variables: { login: orgName },
        }),
    });

    const data = await response.json();

    if (data.errors) {
        console.error("GraphQL errors:", data.errors);
        return [];
    }

    return data.data.organization.pinnedItems.edges.map(
        (edge: any) => edge.node
    );
}

export async function getPinnedRepos(
    orgName: string,
    token: string
): Promise<Repo[]> {
    const isDev = import.meta.env.DEV;

    // En desarrollo, intentar usar caché
    if (isDev) {
        const cache = readCache();
        if (isCacheValid(cache)) {
            console.log("✓ Usando repos en caché");
            return cache!.repos;
        }
        console.log("⟳ Caché expirado, obteniendo repos frescos...");
    }

    // Fetch desde la API
    try {
        const repos = await fetchReposFromAPI(orgName, token);
        
        // Guardar en caché solo en desarrollo
        if (isDev) {
            writeCache(repos);
        }
        
        return repos;
    } catch (error) {
        console.error("Error fetching GitHub repos:", error);
        
        // Si hay error y estamos en dev, intentar devolver caché aunque esté expirado
        if (isDev) {
            const cache = readCache();
            if (cache) {
                console.log("⚠ Usando caché expirado debido a error");
                return cache.repos;
            }
        }
        
        return [];
    }
}
