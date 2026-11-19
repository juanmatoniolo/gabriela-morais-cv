# CV online de Gabriela Morais

CV web de Gabriela Vanesa Morais (facturación médica, ART y obras sociales). Pensado primero para celular y con exportación a PDF A4 desde el botón "Descargar PDF".

## Stack
- Next.js 16 (App Router, JavaScript), React 19
- CSS Modules + variables CSS (`src/styles/variables.css`)
- Deploy en Vercel sin configuración extra

## Requisitos
Node.js 20.9 o superior.

## Instalación
```bash
npm install
cp .env.example .env.local   # completar NEXT_PUBLIC_SITE_URL
npm run dev
```

## Variables de entorno
| Variable | Uso |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL pública (canonical, sitemap, Open Graph). Si falta, usa `https://gabriela-morais-cv.vercel.app` en producción. |

## Comandos
- `npm run dev`: servidor de desarrollo
- `npm run build`: build de producción
- `npm run start`: servir el build
- `npm run lint`: ESLint

## Editar el contenido
Todo el texto del CV está en `src/lib/cv.js`; los certificados, en `src/lib/cursos.js` (imágenes en `public/`).

## Deploy en Vercel
Importar el repositorio en Vercel, cargar `NEXT_PUBLIC_SITE_URL` en Environment Variables y desplegar.
