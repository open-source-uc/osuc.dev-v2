<h1 align="center">Open Source UC - Website</h1>

<p align="center">
	Sitio web oficial de Open Source UC, construido con Astro y Tailwind CSS.
</p>

<div align="center">

![Astro](https://img.shields.io/badge/Astro-5.15.8-ff5d01?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.1.17-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-Enabled-3178c6?style=for-the-badge&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-a3e635?style=for-the-badge)

</div>

---

## 🚀 Instalación rápida

### Requisitos

- Node.js 20+
- pnpm 10+

### Setup

1. Clona el repositorio:

```bash
git clone <URL_DEL_REPO>
cd osuc.dev-v2
```

2. Instala dependencias:

```bash
pnpm install
```

3. Crea un archivo `.env` en la raíz:

```env
GITHUB_TOKEN=tu_token_de_github
```

4. Inicia el entorno de desarrollo:

```bash
pnpm dev
```

Disponible en: `http://localhost:4321`

---

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando        | Acción                                          |
| :------------- | :---------------------------------------------- |
| `pnpm install` | Instala dependencias                            |
| `pnpm dev`     | Inicia servidor local en `localhost:4321`       |
| `pnpm build`   | Construye el sitio para producción en `./dist/` |
| `pnpm preview` | Previsualiza el build localmente                |

## ✨ Características

- Integración con GitHub GraphQL API para repositorios destacados
- Caché en desarrollo para evitar llamadas repetidas
- Contenido en Markdown con estilos consistentes
- Arquitectura modular con componentes Astro reutilizables
- Preparado para despliegue continuo en Cloudflare Pages

## 🛠️ Stack

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org/)
- [GitHub GraphQL API](https://docs.github.com/en/graphql)

## ⚙️ Configuración

### Variables de entorno

- `GITHUB_TOKEN`: token de GitHub con permisos de lectura para repositorios públicos

### Integración con GitHub

El sitio consume repositorios de `open-source-uc` y, en desarrollo, guarda caché por 30 minutos en `.astro/cache/github-repos.json`.

## 🧱 Estructura del proyecto

```text
/
├── public/           # Archivos estáticos
├── src/
│   ├── components/   # UI reutilizable (incluye Icons y Layout)
│   ├── content/      # Markdown y configuración de colecciones
│   ├── data/         # Datos del sitio
│   ├── pages/        # Rutas del sitio
│   ├── styles/       # Estilos globales y temas
│   └── utils/        # Integraciones (ej: GitHub API)
├── astro.config.mjs
└── package.json
```

## 🚀 Despliegue

Este sitio está preparado para Cloudflare Pages.

Configuración recomendada:

- Framework preset: `Astro`
- Build command: `pnpm build`
- Build output directory: `dist`
- Variable de entorno: `GITHUB_TOKEN`

---

## 📄 Licencia

Este proyecto está bajo licencia MIT. Revisa [LICENSE](LICENSE) para más detalles.
