# 📄 Documentación del Proyecto UV2025

## 🌟 Introducción

Este documento proporciona una visión general de la estructura del proyecto, sus componentes principales y cómo están organizados. El objetivo es facilitar la comprensión del código y la colaboración entre desarrolladores.

## 📁 Estructura General del Directorio `src`

La carpeta `src` es el corazón de la aplicación y contiene todo el código fuente. Su estructura está diseñada para ser modular y escalable.

```
src/
├── App.css                     # Estilos globales y específicos de App
├── App.tsx                     # Componente raíz de la aplicación
├── main.tsx                    # Punto de entrada de la aplicación React
├── vite-env.d.ts               # Tipos para el entorno Vite
|
├── animations/                 # Lógica y configuraciones de animaciones
│   └── heroAnimations.ts       # Animaciones específicas para la sección Hero
|
├── components/                 # Componentes reutilizables de la interfaz de usuario
│   ├── BrandCarousel.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Highlights.tsx
│   ├── InfoSection.tsx         # Componente extraído del Navbar
│   ├── Navbar.tsx              # Barra de navegación principal (refactorizada)
│   ├── Portfolio.tsx
│   |
│   ├── hero/                   # Componentes específicos para la sección Hero
│   │   ├── AnimatedEye.tsx
│   │   ├── BreathingUVLogo.tsx
│   │   ├── HeroBackgroundAnimations.tsx
│   │   ├── HeroContent.tsx
│   │   └── ScrollIndicator.tsx
│   |
│   ├── project/                # Componentes para la visualización de proyectos
│   │   ├── ProjectGallery.tsx
│   │   ├── ProjectHeader.tsx
│   │   ├── ProjectNotFound.tsx
│   │   ├── ProjectVideoLink.tsx
│   │   └── ProjectVideoPlayer.tsx
│   │   └── gallery/            # Componentes específicos para la galería de proyectos (Contenido no explorado)
│   |
│   └── ui/                     # Componentes de UI genéricos (ShadCN/UI + custom)
│       ├── EyeOfCuriosity.tsx  # Componente de UI extraído del Navbar
│       ├── accordion.tsx
│       ├── alert-dialog.tsx
│       ├── alert.tsx
│       ├── aspect-ratio.tsx
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── breadcrumb.tsx
│       ├── button.tsx
│       ├── calendar.tsx
│       ├── card.tsx
│       ├── carousel/           # Componentes para carruseles (Contenido no explorado)
│       ├── chart.tsx
│       ├── checkbox.tsx
│       ├── collapsible.tsx
│       ├── command.tsx
│       ├── context-menu.tsx
│       ├── dialog.tsx
│       ├── drawer.tsx
│       ├── dropdown-menu.tsx
│       ├── form.tsx
│       ├── hover-card.tsx
│       ├── input-otp.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── menubar.tsx
│       ├── navigation-menu.tsx
│       ├── pagination.tsx
│       ├── popover.tsx
│       ├── progress.tsx
│       ├── radio-group.tsx
│       ├── resizable.tsx
│       ├── scroll-area.tsx
│       ├── select.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       ├── sidebar.tsx
│       ├── skeleton.tsx
│       ├── slider.tsx
│       ├── sonner.tsx
│       ├── switch.tsx
│       ├── table.tsx
│       ├── tabs.tsx
│       ├── textarea.tsx
│       ├── toast.tsx
│       ├── toaster.tsx
│       ├── toggle-group.tsx
│       ├── toggle.tsx
│       ├── tooltip.tsx
│       └── use-toast.ts
|
├── constants/                  # Constantes utilizadas en la aplicación
│   └── navbarConstants.ts      # Constantes específicas del Navbar
|
├── data/                       # Datos estáticos o mock data
│   ├── highlightsConfig.ts
│   ├── projectsData.ts
│   └── projects/               # Datos detallados de proyectos (Contenido no explorado)
|
├── hooks/                      # Hooks personalizados de React
│   ├── use-mobile.tsx
│   ├── use-toast.ts
│   └── useNavigation.ts        # Hook para la lógica de navegación del Navbar
|
├── lib/                        # Funciones de utilidad y helpers
│   ├── customCursor.js
│   ├── scrollUtils.ts          # Utilidades para scroll suave
│   └── utils.ts                # Funciones de utilidad generales (cn)
|
├── pages/                      # Componentes que representan las páginas de la aplicación
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Index.tsx
│   ├── NotFound.tsx
│   ├── ProjectDetail.tsx
│   └── OurCompany.tsx          # ✨ Nueva página sobre la empresa
|
├── styles/                     # Archivos CSS globales y específicos
│   ├── animations.css
│   ├── base.css
│   ├── carousel.css
│   ├── components.css
│   └── index.css               # Estilos principales, importa otros CSS
|
└── types/                      # Definiciones de tipos TypeScript
    └── index.ts                # Tipos principales y compartidos
```

## 🧬 Componentes Principales

### `App.tsx`
Es el componente raíz que envuelve toda la aplicación. Configura los providers principales como `QueryClientProvider` (para React Query), `TooltipProvider`, y el sistema de routing con `BrowserRouter`.

### `main.tsx`
Es el punto de entrada de la aplicación. Renderiza el componente `App` en el DOM y también inicializa el `customCursor`.

### `src/components/`
Esta carpeta se divide en:
- **Componentes de alto nivel**: Como `Navbar`, `Footer`, `Portfolio`, etc.
- **`hero/`**: Componentes específicos para la sección "Hero" de la página principal.
- **`project/`**: Componentes utilizados para mostrar detalles de proyectos.
- **`ui/`**: Contiene una gran cantidad de componentes de UI reutilizables, muchos de ellos provenientes de la librería ShadCN/UI, junto con componentes personalizados como `EyeOfCuriosity`.

### `src/pages/`
Contiene los componentes que actúan como vistas o páginas individuales de la aplicación. Cada archivo representa una ruta principal (ej: `Index.tsx` para la home, `About.tsx` para la página "Acerca de").
- `OurCompany.tsx`: Una nueva página que detalla información sobre UV, incluyendo su historia, un video, valores, premios y un llamado a la acción para colaborar.

## ⚙️ Lógica y Utilidades

### `src/hooks/`
Aquí se definen hooks personalizados para encapsular lógica de estado y efectos secundarios reutilizables. 
- `useNavigation.ts`: Maneja el estado de apertura/cierre de las secciones "Info" y "Contact" del `Navbar`.
- `use-mobile.tsx`: Probablemente detecta si el usuario está en un dispositivo móvil.
- `use-toast.ts`: Relacionado con el sistema de notificaciones (toasts).

### `src/lib/`
Contiene funciones de utilidad generales:
- `utils.ts`: Incluye la función `cn` para combinar clases de Tailwind CSS de forma condicional.
- `scrollUtils.ts`: Proporciona la función `smoothScrollToElement` para animaciones de scroll suave.
- `customCursor.js`: Implementa la lógica para un cursor personalizado.

### `src/constants/`
Almacena valores constantes para evitar números mágicos o strings repetidos en el código.
- `navbarConstants.ts`: Guarda constantes relacionadas con el `Navbar`, como duraciones de animación y nombres de clases.

### `src/types/`
Define interfaces y tipos de TypeScript para asegurar la consistencia y prevenir errores en tiempo de desarrollo.
- `index.ts`: Contiene tipos compartidos como `NavigationState`, `NavItem`, etc.

## 🎨 Estilos y Animaciones

### `src/styles/`
Contiene los archivos CSS. `index.css` actúa como el archivo principal que importa otros, como `base.css` (estilos base/reset), `components.css` (estilos para componentes específicos), y `animations.css`.

### `src/animations/`
- `heroAnimations.ts`: Define la lógica para animaciones complejas, probablemente usando una librería como GSAP o Framer Motion, específicamente para la sección Hero.

## 📊 Datos

### `src/data/`
Contiene datos estáticos que la aplicación utiliza, como información de proyectos.
- `projectsData.ts`: Define los datos para los proyectos que se muestran en el portafolio.
- `highlightsConfig.ts`: Posiblemente configuración para la sección de destacados.

## ✨ Mejoras Recientes (Refactorización)

El proyecto ha pasado recientemente por una refactorización significativa, especialmente en el componente `Navbar`. Los puntos clave de esta refactorización están documentados en `REFACTORING_NOTES.md`. Esto incluye:
- Extracción de lógica a hooks personalizados (`useNavigation`).
- Creación de componentes más pequeños y reutilizables (`InfoSection`, `EyeOfCuriosity`).
- Centralización de constantes (`navbarConstants`).
- Definición de tipos TypeScript para mejorar la robustez.

## 🚀 Próximos Pasos y Mantenimiento

Consultar `REFACTORING_NOTES.md` para una lista de mejoras recomendadas, que incluyen optimización de rendimiento, accesibilidad, implementación de tests y más.

Este documento debe mantenerse actualizado a medida que el proyecto evoluciona. 