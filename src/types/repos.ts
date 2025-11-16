export interface Repo {
    name: string;
    description: string;
    owner: { login: string; };
    primaryLanguage: { name: string } | null;
    stargazerCount: number;
    forkCount: number;
    openGraphImageUrl: string;
}