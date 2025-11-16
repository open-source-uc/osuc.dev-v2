# Open Source UC - Website

Sitio web oficial de la comunidad Open Source UC, construido con Astro y Tailwind CSS.

## 🚀 Estructura del Proyecto

```text
/
├── public/              # Archivos estáticos (favicon, imágenes, etc.)
├── src/
│   ├── assets/         # Assets procesados por Astro
│   ├── components/     # Componentes reutilizables
│   │   ├── BentoRepo.astro       # Tarjeta de repositorio
│   │   ├── LinkButton.astro      # Botón de enlace estilizado
│   │   ├── Icons/                # Componentes de iconos SVG
│   │   └── Layout/               
│   │       └── Header.astro      # Header con menú responsive
│   ├── content/        # Contenido del sitio
│   │   ├── config.ts             # Configuración de colecciones
│   │   └── resources/            # Páginas en markdown
│   ├── layouts/        # Layouts base
│   │   └── Layout.astro          # Layout principal
│   ├── pages/          # Páginas del sitio (routing automático)
│   │   ├── index.astro           # Página principal
│   │   └── conduct.astro         # Código de conducta
│   ├── styles/         # Estilos globales
│   │   ├── bases.css             # Estilos base
│   │   ├── global.css            # Estilos globales
│   │   ├── markdown.css          # Estilos para markdown
│   │   ├── themes.css            # Temas de color
│   │   └── variables.css         # Variables CSS
│   ├── types/          # Definiciones de TypeScript
│   │   └── repos.ts              # Tipos para repositorios
│   └── utils/          # Utilidades
│       └── github.ts             # Integración con GitHub API
└── astro.config.mjs    # Configuración de Astro
```

## 🛠️ Tecnologías

- **[Astro 5.15.8](https://astro.build)**: Framework web moderno para sitios estáticos
- **[Tailwind CSS 4.1.17](https://tailwindcss.com)**: Framework de CSS utility-first
- **[TypeScript](https://www.typescriptlang.org/)**: Tipado estático para JavaScript
- **[GitHub GraphQL API](https://docs.github.com/en/graphql)**: Para obtener repositorios destacados

## 📦 Funcionalidades

### Integración con GitHub

El sitio obtiene automáticamente los repositorios destacados de la organización `open-source-uc` usando la API de GitHub. La implementación incluye:

- **Caché en desarrollo**: Los datos se cachean por 30 minutos en `.astro/cache/github-repos.json` para optimizar las llamadas a la API durante el desarrollo
- **GraphQL API**: Uso eficiente de la API con consultas específicas
- **Variables de entorno**: Requiere `GITHUB_TOKEN` para autenticación

### Contenido en Markdown

Las páginas de contenido estático (como el código de conducta) están escritas en Markdown y procesadas automáticamente con estilos consistentes.

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando              | Acción                                              |
| :------------------- | :-------------------------------------------------- |
| `npm install`       | Instala las dependencias                            |
| `npm dev`          | Inicia servidor de desarrollo en `localhost:4321`   |
| `npm build`        | Construye el sitio para producción en `./dist/`     |
| `npm preview`      | Previsualiza el build localmente antes de desplegar |

## ⚙️ Configuración

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
GITHUB_TOKEN=tu_token_de_github
```

El token debe tener permisos de lectura para repositorios públicos.

## 🎨 Sistema de Diseño

El proyecto utiliza un sistema de colores definido en variables CSS:

- `--background`: #1f1b19 (fondo oscuro)
- `--foreground`: #E4E4E4 (texto principal)
- `--primary`: #138DFF (azul principal)
- `--secondary`: #B39CD0 (morado)
- `--subtle`: #FFC1CC (rosa suave)

### Nuevo Componente

Los componentes Astro van en `src/components/` y pueden usar TypeScript y JSX-like syntax con estilos de Tailwind.

## 🚀 Despliegue

El sitio está desplegado en **Cloudflare Pages**.

### Configuración en Cloudflare Pages

1. Conecta tu repositorio de GitHub a Cloudflare Pages
2. Configura los siguientes parámetros:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
3. Agrega las variables de entorno:
   - `GITHUB_TOKEN`: Tu token de GitHub con permisos de lectura

Cloudflare Pages detectará automáticamente los cambios en la rama principal y desplegará la nueva versión.

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.
