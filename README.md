# Íñigo Atela

Web editorial en español con Home, Artículos, Sobre mí y dos artículos iniciales editables. React + TypeScript + Vite + Tailwind CSS v4. Estructura compatible con shadcn/ui.

## Desarrollo

Requiere Node.js 22.12+ o 24 y npm.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

## Contenido

- `src/content.ts`: biografía de contacto y artículos. Los dos textos son propuestas iniciales redactadas para esta web; pueden reemplazarse por los artículos definitivos.
- `src/App.tsx`: Home, índice de artículos, Sobre mí y lectura de artículos.
- `src/styles.css`: estilos, colores y composición adaptable a móvil.
- `components/ui/`: Button de shadcn y los tres componentes animados solicitados.
- `lib/utils.ts`: utilidad `cn` para combinar clases.

El alias `@/` apunta a la raíz. Se ha creado `/components/ui` para mantener los imports facilitados y permitir añadir componentes con la CLI de shadcn. `components.json` ya configura esta ruta, TypeScript y `src/styles.css`; no hace falta ejecutar de nuevo el asistente inicial.

Para añadir otros componentes:

```sh
npx shadcn@latest add dialog
```

Para reproducir la configuración desde cero se puede usar `npx shadcn@latest init -t vite -d`, instalar `tailwindcss @tailwindcss/vite` y configurar el plugin de Vite y el alias. En este repositorio ya están instalados y configurados Tailwind, TypeScript y las dependencias de los componentes (`framer-motion`, `lucide-react`, `@radix-ui/react-slot`, `class-variance-authority`, `clsx`, `tailwind-merge`).

### Contacto pendiente

Configurar `profile.email` en `src/content.ts` con el Gmail confirmado. Mientras esté vacío se muestra únicamente el LinkedIn facilitado; no se publica ninguna dirección inventada.

### Añadir artículos

1. Añadir un objeto a `articles` en `src/content.ts`.
2. Crear `articulos/<slug>/index.html` usando uno existente y actualizar título/descripción.
3. Añadir esa entrada a `build.rollupOptions.input` en `vite.config.ts`.
4. Actualizar el contador del índice en `src/App.tsx` si procede.

## Animaciones

- `animated-hero.tsx`: adaptación al español del titular rotativo del adjunto. Termina tras un ciclo para no distraer durante la lectura.
- `tactile-highlight.tsx`: resalte direccional con muelle y contraste mediante diferencia; hover en el contenedor para que la animación funcione aun cuando el fondo está contraído.
- `container-scroll-animation.tsx`: perspectiva, escala y desplazamiento según scroll, con dimensiones adaptadas a una tarjeta editorial, sin los grandes espacios vacíos del demo.
- Todas respetan `prefers-reduced-motion`. Los componentes están tipados sin `any`.

Las fuentes se sirven localmente desde paquetes Fontsource. No se usan cookies, analítica, fotografías de terceros ni servicios de formularios.

## Publicación estática

`npm run build` genera `dist/`, con HTML propio para cada ruta y metadatos por página. El contenido se renderiza con React en el navegador.

Para alojar bajo `/inigoatela/`, establecer `BASE_PATH=/inigoatela/` antes del build. En PowerShell:

```powershell
$env:BASE_PATH = '/inigoatela/'
npm run build
```

El flujo de GitHub Actions comprueba el build en cada push y pull request. Para publicar la web, servir `dist/` en un alojamiento estático con la ruta base correspondiente.
