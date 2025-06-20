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
│   ├── SEO.tsx                 # Componente para manejo de SEO
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
│   │   ├── ProjectVideoPlayer.tsx
│   │   └── gallery/            # Componentes específicos para la galería de proyectos
│   │       ├── ProjectImageCarousel.tsx
│   │       ├── ProjectFeatureText.tsx
│   │       ├── ProjectBanner.tsx
│   │       ├── ProjectImageGrid.tsx
│   │       ├── ProjectTextSection.tsx
│   │       └── ProjectMixedGrid.tsx
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
│       ├── carousel/
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
│   └── projects/               # Datos detallados de proyectos
│       ├── closer-to-sun.json
│       └── united-media.json
|
├── hooks/                      # Hooks personalizados de React
│   ├── use-mobile.tsx
│   ├── use-toast.ts
│   └── useNavigation.ts        # Hook para la lógica de navegación del Navbar
|
├── lib/                        # Funciones de utilidad y helpers
│   ├── customCursor.js         # Implementación del cursor personalizado
│   ├── scrollUtils.ts          # Utilidades para scroll suave
│   └── utils.ts                # Funciones de utilidad generales (cn)
|
├── pages/                      # Componentes que representan las páginas de la aplicación
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Index.tsx
│   ├── NotFound.tsx
│   ├── ProjectDetail.tsx
│   └── OurCompany.tsx          # Página sobre la empresa
│
├── styles/                     # Archivos CSS globales y específicos
│   ├── animations.css
│   ├── base.css
│   ├── carousel.css
│   ├── components.css
│   ├── fonts/                  # Tipografías en formato WOFF2
│   ├── fonts.css               # Carga y forzado de la fuente global
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
- **Componentes de alto nivel**: Como `Navbar`, `Footer`, `Portfolio`, `SEO`, etc.
- **`hero/`**: Componentes específicos para la sección "Hero" de la página principal.
- **`project/`**: Componentes utilizados para mostrar detalles de proyectos, incluyendo una galería modular y flexible.
- **`ui/`**: Contiene una gran cantidad de componentes de UI reutilizables, muchos de ellos provenientes de la librería ShadCN/UI, junto con componentes personalizados como `EyeOfCuriosity`.

### `src/pages/`
Contiene los componentes que actúan como vistas o páginas individuales de la aplicación. Cada archivo representa una ruta principal:
- `Index.tsx`: Página principal con Hero, Highlights y Portfolio
- `About.tsx`: Sección de información sobre la empresa
- `Contact.tsx`: Formulario de contacto
- `ProjectDetail.tsx`: Vista detallada de proyectos individuales
- `OurCompany.tsx`: Página detallada sobre UV, incluyendo historia, valores, equipo y premios
- `NotFound.tsx`: Página 404 personalizada

## ⚙️ Lógica y Utilidades

### `src/hooks/`
Aquí se definen hooks personalizados para encapsular lógica de estado y efectos secundarios reutilizables. 
- `useNavigation.ts`: Maneja el estado de apertura/cierre de las secciones "Info", "Contact" y "OurCompany" del `Navbar`.
- `use-mobile.tsx`: Detecta si el usuario está en un dispositivo móvil.
- `use-toast.ts`: Relacionado con el sistema de notificaciones (toasts).

### `src/lib/`
Contiene funciones de utilidad generales:
- `utils.ts`: Incluye la función `cn` para combinar clases de Tailwind CSS de forma condicional.
- `scrollUtils.ts`: Proporciona la función `smoothScrollToElement` para animaciones de scroll suave.
- `customCursor.js`: Implementa la lógica para un cursor personalizado con estados hover y click.

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
- `heroAnimations.ts`: Define la lógica para animaciones complejas, específicamente para la sección Hero.

## 📊 Datos

### `src/data/`
Contiene datos estáticos que la aplicación utiliza, como información de proyectos.
- `projectsData.ts`: Define los datos para los proyectos que se muestran en el portafolio.
- `highlightsConfig.ts`: Configuración para la sección de destacados.
- `projects/`: Contiene archivos JSON con datos detallados de cada proyecto.

## ✨ Mejoras Recientes

El proyecto ha pasado por varias mejoras significativas:

1. **Refactorización del Navbar**:
   - Extracción de lógica a hooks personalizados (`useNavigation`)
   - Creación de componentes más pequeños y reutilizables (`InfoSection`, `EyeOfCuriosity`)
   - Centralización de constantes (`navbarConstants`)
   - Definición de tipos TypeScript para mejorar la robustez
   - Mejora en la navegación y estados de secciones
   - Reducción del 80% en líneas de código (349 → 70 líneas)

2. **Sistema de Galería Modular**:
   - Implementación de componentes flexibles para la visualización de proyectos
   - Soporte para diferentes tipos de contenido (imágenes, texto, grids mixtos)
   - Componentes reutilizables para banners, carruseles y secciones de texto
   - Mejoras en la responsividad y animaciones
   - Integración con sistema de analytics para tracking de interacciones

3. **UI Components**:
   - Integración completa de ShadCN/UI
   - Componentes personalizados adaptados a las necesidades específicas
   - Sistema de diseño consistente
   - Mejoras en la accesibilidad
   - Nuevos componentes: Sidebar, Resizable, InputOTP, Menubar

4. **SEO y Metadatos**:
   - Implementación de componente SEO reutilizable
   - Meta tags dinámicos para cada página
   - Optimización para motores de búsqueda
   - Implementación de sitemap.xml y robots.txt
   - JSON-LD para rich snippets

5. **Optimización de Rendimiento**:
   - Lazy loading para componentes pesados
   - Code splitting por rutas
   - Optimización de imágenes y assets
   - Eliminación de React.StrictMode duplicado
   - Mejor gestión de efectos y estados

6. **TypeScript y Seguridad**:
   - Interfaces TypeScript mejoradas
   - Mejor type safety en componentes
   - Constantes tipadas con `as const`
   - Detección temprana de errores
   - Mejor autocompletado en IDEs

7. **Limpieza de iframes y compatibilidad moderna**:
   - Eliminación del atributo obsoleto `allowFullScreen` en iframes
   - Uso exclusivo de `allow="fullscreen"` y otros permisos modernos
   - Reducción de advertencias en consola y mejora de compatibilidad con navegadores actuales

8. **Tipografía unificada y auto hospedada**:
   - Inclusión de `Open Sans` en formato WOFF2 dentro del repositorio
   - Se fuerza su uso global mediante `fonts.css` y `base.css`
   - Eliminación de dependencias externas para fuentes

9. **Actualización de contacto en el Footer**:
   - Nuevo correo principal `hello@uv.agency`
   - Evento de analytics para clics en el enlace de correo

10. **Optimización de imágenes**:
   - Sustitución de archivos JPEG por versiones comprimidas
   - Reducción significativa del peso en las galerías de proyectos

## 🚀 Próximos Pasos

### 1. Optimización y Rendimiento (Prioridad Alta)
- [x] Implementar lazy loading para componentes pesados
  - Aplicar React.lazy() para ProjectDetail, OurCompany
  - Agregar Suspense boundaries con fallbacks apropiados
- [ ] Optimizar imágenes
  - Implementar next-gen formats (WebP)
  - Agregar srcset para responsive images
  - Implementar lazy loading para imágenes fuera de viewport
- [x] Implementar code splitting
  - Separar rutas en chunks independientes
  - Optimizar bundle size

### 2. SEO y Metadatos (Prioridad Alta)
- [x] Implementar meta tags dinámicos
  - React Helmet o similar
  - Open Graph tags
  - Twitter Cards
- [x] Implementar sitemap.xml
- [x] Optimizar robots.txt
- [x] Agregar JSON-LD para rich snippets

### 3. Analytics y Monitoreo (Prioridad Alta)
- [ ] Implementar Google Analytics 4
  - Configurar eventos personalizados
  - Implementar ecommerce tracking
- [x] Agregar error tracking
  - Implementar Sentry o similar
  - Configurar error boundaries
- [x] Implementar tracking de eventos básicos
  - Tracking de clicks en proyectos
  - Tracking de navegación
  - Tracking de interacciones con galería

### 4. Testing y Calidad (Prioridad Media)
- [ ] Implementar test suite
  - Unit tests con Vitest
  - Integration tests
  - E2E tests con Cypress
- [ ] Implementar accessibility testing
  - ARIA labels
  - Keyboard navigation
  - Screen reader compatibility

### 5. Seguridad (Prioridad Media)
- [ ] Implementar CSP (Content Security Policy)
- [ ] Configurar CORS
- [ ] Implementar security headers
  - X-Frame-Options
  - X-Content-Type-Options
  - Referrer-Policy

### 6. Documentación (Prioridad Baja)
- [x] Crear documentación técnica
  - API documentation
  - Component documentation
  - Setup instructions
- [ ] Crear guía de estilo
  - Design system documentation
  - Component usage guidelines

### 7. Deployment y CI/CD (Prioridad Media)
- [ ] Configurar pipeline de CI/CD
  - GitHub Actions o similar
  - Automated testing
  - Automated deployment
- [ ] Implementar staging environment
- [ ] Configurar rollback strategy

### 8. Post-Lanzamiento (Prioridad Baja)
- [ ] Monitoreo de performance
  - Core Web Vitals
  - Server response times
  - Error rates
- [ ] Análisis de uso
  - User engagement
  - Conversion rates
  - Bounce rates

## 📋 Checklist Pre-Lanzamiento

### Prioridad Alta
- [ ] Analytics funcionando y reportando datos
  - [ ] Configurar Google Analytics 4
  - [ ] Implementar eventos personalizados
  - [ ] Verificar tracking de conversiones
- [x] SEO dinámico implementado para páginas clave
  - [x] Meta tags dinámicos
  - [x] Open Graph tags
  - [x] Twitter Cards
  - [x] JSON-LD implementado
- [ ] Optimización de imágenes y lazy loading activado
  - [ ] Convertir imágenes a WebP
  - [ ] Implementar srcset para responsive images
  - [ ] Configurar lazy loading para imágenes fuera de viewport
- [x] Error Boundaries y monitoreo de errores configurado
  - [x] Implementación de Error Boundaries
  - [x] Configuración de Sentry
  - [x] Logging de errores críticos
- [x] Limpieza de iframes: solo uso de atributo `allow` en vez de `allowfullscreen` para evitar advertencias y seguir mejores prácticas

### Prioridad Media
- [ ] Pruebas E2E básicas pasando para flujos críticos
  - [ ] Navegación principal
  - [ ] Visualización de proyectos
  - [ ] Formularios de contacto
- [ ] Auditoría de accesibilidad básica realizada
  - [ ] ARIA labels
  - [ ] Navegación por teclado
  - [ ] Compatibilidad con lectores de pantalla
- [ ] Páginas legales y banner de cookies implementados
  - [ ] Política de privacidad
  - [ ] Términos y condiciones
  - [ ] Banner de cookies con consentimiento
- [ ] Pipeline de CI/CD configurado
  - [ ] GitHub Actions o similar
  - [ ] Tests automatizados
  - [ ] Despliegue automático

### Prioridad Baja
- [x] Documentación técnica completa
  - [x] Estructura del proyecto
  - [x] Componentes principales
  - [x] Guías de desarrollo
- [ ] Guía de estilo finalizada
  - [ ] Sistema de diseño
  - [ ] Guías de uso de componentes
  - [ ] Patrones de diseño
- [ ] Plan de mantenimiento establecido
  - [ ] Frecuencia de actualizaciones
  - [ ] Proceso de revisión
  - [ ] Estrategia de versionado
- [ ] Estrategia de backup implementada
  - [ ] Frecuencia de backups
  - [ ] Proceso de restauración
  - [ ] Almacenamiento seguro

### Nuevas Tareas Identificadas
- [ ] Optimización de rendimiento móvil
  - [ ] Revisar Core Web Vitals
  - [ ] Optimizar First Contentful Paint
  - [ ] Mejorar Time to Interactive
- [ ] Internacionalización
  - [ ] Preparar estructura para múltiples idiomas
  - [ ] Implementar sistema de traducciones
  - [ ] Configurar rutas por idioma
- [ ] Monitoreo de rendimiento
  - [ ] Configurar métricas de rendimiento
  - [ ] Implementar alertas
  - [ ] Dashboard de monitoreo

Este checklist debe ser revisado y actualizado regularmente durante el proceso de desarrollo.

Este documento debe mantenerse actualizado a medida que el proyecto evoluciona. 