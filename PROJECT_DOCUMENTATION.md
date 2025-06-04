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

## 🚀 Plan de Lanzamiento (Revisado)

Este plan se enfoca en los aspectos críticos y mejoras específicas para el proyecto UV2025 antes de su lanzamiento.

### 1. Core Vitals y Rendimiento Avanzado
- **Optimización de Imágenes Críticas:**
  - [ ] Implementar `React.lazy` y `Suspense` para componentes de página (`ProjectDetail`, `OurCompany`) y otros componentes pesados identificados.
    - Definir `fallback` UIs (skeletons) atractivos durante la carga.
  - [ ] Optimizar las imágenes en `ProjectDetail.tsx` y galerías:
    - [ ] Convertir imágenes principales a formatos modernos (WebP) y utilizar `<img>` con `<picture>` o `srcset` para adaptabilidad.
    - [ ] Implementar lazy loading nativo (`loading="lazy"`) o con Intersection Observer para imágenes `below-the-fold`.
  - [ ] Revisar el rendimiento de `ProjectVideoPlayer`: considerar lazy loading del componente o del player mismo.
  - [ ] Analizar el bundle de producción (`vite build --profile` o similar) para identificar cuellos de botella y optimizar code splitting.
  - [ ] Evaluar el impacto de `customCursor.js` y animaciones Lottie (`heroAnimations.ts`); optimizar si es necesario.
- **Caching:**
  - [ ] Configurar políticas de caché eficientes para assets estáticos en el servidor de hosting.
  - [ ] Revisar configuración de React Query para caching de datos de proyectos (stale-while-revalidate, cache time).

### 2. SEO Técnico y Contenido Dinámico
- **Meta Tags Dinámicos:**
  - [ ] Implementar una solución (ej. React Helmet, `react-helmet-async`) para generar meta tags (title, description, Open Graph) dinámicamente para las páginas de detalle de proyecto (`ProjectDetail.tsx`) y otras páginas de contenido.
  - [ ] Asegurar que `index.html` tenga meta tags genéricos de fallback sólidos.
- **Structured Data (JSON-LD):**
  - [ ] Implementar Schema Markup para el sitio (`Organization`, `WebSite`) y para los proyectos (`CreativeWork` o similar).
- **Sitemap y Robots:**
  - [ ] Generar y mantener un `sitemap.xml` actualizado que incluya todas las páginas y proyectos.
  - [ ] Verificar que `public/robots.txt` esté correctamente configurado para permitir el rastreo de contenido importante y bloquear áreas no deseadas.
- **Accesibilidad de Contenido:**
  - [ ] Asegurar que el contenido generado por `renderBullets` sea semánticamente correcto y accesible (parece estar bien, pero verificar).

### 3. Analytics (Prioridad Alta - Solicitado) y Monitoreo
- **Configuración de Analytics:**
  - [ ] Integrar Google Analytics 4 (GA4) o la plataforma de análisis elegida.
  - [ ] Configurar el seguimiento de eventos clave:
    - Vistas de página (incluyendo proyectos específicos).
    - Clics en enlaces de navegación y CTAs.
    - Reproducciones de video en `ProjectVideoPlayer`.
    - Interacciones con la galería de proyectos.
    - Envío de formularios (si aplica, ej. Contacto).
- **Monitoreo de Errores:**
  - [ ] Integrar un servicio de seguimiento de errores (ej. Sentry, LogRocket).
  - [ ] Implementar `ErrorBoundary` componentes en React para capturar y manejar errores de renderizado gracefully, mostrando un UI amigable.
- **Monitoreo de Rendimiento (Core Web Vitals):**
  - [ ] Configurar seguimiento de Core Web Vitals en la plataforma de analytics o herramienta dedicada.

### 4. Testing Riguroso y Garantía de Calidad (QA)
- **Suite de Pruebas (Actualmente Ausente o Limitada):**
  - [ ] Configurar un entorno de pruebas (Vitest es una buena opción con Vite).
  - [ ] **Pruebas Unitarias:** Para funciones críticas (ej. `lib/utils.ts`, `hooks/*`, `renderBullets`) y lógica de componentes.
  - [ ] **Pruebas de Integración:** Para flujos de componentes (ej. `Navbar` con sus secciones, `Portfolio` con `ProjectDetail`).
  - [ ] **Pruebas E2E (End-to-End):** (ej. Cypress, Playwright) para los flujos de usuario críticos:
    - Navegación principal.
    - Visualización de un proyecto.
    - Funcionalidad de la página "Our Company".
    - Responsive design en las principales breakpoints.
- **Accesibilidad (A11y):**
  - [ ] Realizar una auditoría de accesibilidad (manual y con herramientas como Axe DevTools).
  - [ ] Verificar navegación por teclado completa.
  - [ ] Contraste de colores.
  - [ ] Uso correcto de ARIA attributes donde sea necesario (especialmente en componentes de UI de ShadCN y custom).
  - [ ] Alt text para todas las imágenes descriptivas (verificar consistencia).
- **Compatibilidad Cross-Browser y Dispositivos:**
  - [ ] Probar en las últimas versiones de Chrome, Firefox, Safari, Edge.
  - [ ] Probar en dispositivos móviles (iOS, Android) y tablets, verificando la responsividad.

### 5. Seguridad
- **Dependencias:**
  - [ ] Auditar dependencias del proyecto (`npm audit` o `yarn audit`) y actualizar paquetes con vulnerabilidades conocidas.
- **Headers de Seguridad:**
  - [ ] Configurar headers de seguridad básicos en el hosting (CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy).
- **Formularios (si aplica):**
  - [ ] Asegurar validación robusta (ya se usa `react-hook-form` y `zod`) y protección contra spam para cualquier formulario público.

### 6. Requisitos Legales y Confianza
- **Páginas Legales:**
  - [ ] Crear y enlazar páginas de Política de Privacidad y Términos de Servicio.
- **Consentimiento de Cookies:**
  - [ ] Implementar un banner de consentimiento de cookies si se utilizan cookies para analytics u otros fines no esenciales.

### 7. Contenido y UX Final
- **Revisión de Contenido:**
  - [ ] Revisión final de todos los textos (copywriting, gramática, ortografía), especialmente en `projectsData.ts` y `OurCompany.tsx`.
  - [ ] Verificar que todos los enlaces internos y externos funcionen.
  - [ ] Confirmar que todas las imágenes y videos se carguen correctamente y tengan la calidad adecuada.
- **Manejo de Errores de Usuario:**
  - [ ] Asegurar que la página `NotFound.tsx` sea amigable y guíe al usuario.
  - [ ] Proveer mensajes de error claros para fallos de carga de datos o interacciones fallidas.

### 8. Build y Despliegue
- **Variables de Entorno:**
  - [ ] Asegurar que las variables de entorno (ej. API keys para Analytics) estén configuradas correctamente para producción.
- **Proceso de Build:**
  - [ ] Realizar un build de producción (`vite build`) y probarlo en un entorno de staging si es posible.
- **Documentación de Despliegue:**
  - [ ] Documentar los pasos para el despliegue y rollback.

### 9. Checklist Pre-Lanzamiento Inmediato
- [ ] **Analytics funcionando y reportando datos.**
- [ ] **SEO dinámico implementado para páginas clave.**
- [ ] **Optimización de imágenes y lazy loading activado.**
- [ ] **Error Boundaries y monitoreo de errores configurado.**
- [ ] **Pruebas E2E básicas pasando para flujos críticos.**
- [ ] **Auditoría de accesibilidad básica realizada y problemas críticos solucionados.**
- [ ] **Páginas legales y banner de cookies (si es necesario) implementados.**
- [ ] **Todos los enlaces rotos corregidos.**
- [ ] **Revisión final de contenido en todos los idiomas (si aplica).**

Este plan revisado debería proporcionar una hoja de ruta más clara. ¿Hay alguna sección específica de este plan en la que te gustaría que empecemos a trabajar ahora?

Este documento debe mantenerse actualizado a medida que el proyecto evoluciona.

## 🚀 Plan de Lanzamiento

### 1. Optimización y Rendimiento
- [ ] Implementar lazy loading para componentes pesados
  - Aplicar React.lazy() para ProjectDetail, OurCompany, y otros componentes grandes
  - Agregar Suspense boundaries con fallbacks apropiados
- [ ] Optimizar imágenes
  - Implementar next-gen formats (WebP)
  - Agregar srcset para responsive images
  - Implementar lazy loading para imágenes fuera de viewport
- [ ] Implementar code splitting
  - Separar rutas en chunks independientes
  - Optimizar bundle size
- [ ] Agregar service worker para PWA capabilities
- [ ] Implementar caching strategies
  - Cache-first para assets estáticos
  - Network-first para datos dinámicos

### 2. SEO y Metadatos
- [ ] Mejorar meta tags
  - Agregar meta description específica para cada página
  - Implementar Open Graph tags para redes sociales
  - Agregar Twitter Cards
- [ ] Implementar sitemap.xml
- [ ] Optimizar robots.txt
- [ ] Agregar JSON-LD para rich snippets
- [ ] Implementar canonical URLs
- [ ] Agregar hreflang tags para internacionalización

### 3. Analytics y Monitoreo
- [ ] Implementar Google Analytics 4
  - Configurar eventos personalizados
  - Implementar ecommerce tracking
  - Configurar goals y conversiones
- [ ] Agregar error tracking
  - Implementar Sentry o similar
  - Configurar error boundaries
- [ ] Implementar performance monitoring
  - Core Web Vitals tracking
  - Real User Monitoring (RUM)
- [ ] Configurar heatmaps y session recording
  - Hotjar o similar
  - User behavior analytics

### 4. Testing y Calidad
- [ ] Implementar test suite
  - Unit tests con Vitest
  - Integration tests
  - E2E tests con Cypress
- [ ] Agregar error boundaries
  - Implementar fallback UI para errores
  - Logging de errores
- [ ] Implementar accessibility testing
  - ARIA labels
  - Keyboard navigation
  - Screen reader compatibility
- [ ] Cross-browser testing
  - Chrome, Firefox, Safari, Edge
  - Mobile browsers

### 5. Seguridad
- [ ] Implementar CSP (Content Security Policy)
- [ ] Configurar CORS
- [ ] Agregar rate limiting
- [ ] Implementar XSS protection
- [ ] Configurar HTTPS
- [ ] Implementar security headers
  - X-Frame-Options
  - X-Content-Type-Options
  - Referrer-Policy

### 6. Documentación
- [ ] Crear documentación técnica
  - API documentation
  - Component documentation
  - Setup instructions
- [ ] Crear guía de estilo
  - Design system documentation
  - Component usage guidelines
- [ ] Documentar procesos de deployment
- [ ] Crear troubleshooting guide

### 7. Deployment y CI/CD
- [ ] Configurar pipeline de CI/CD
  - GitHub Actions o similar
  - Automated testing
  - Automated deployment
- [ ] Implementar staging environment
- [ ] Configurar rollback strategy
- [ ] Implementar blue-green deployment
- [ ] Configurar monitoring y alerting

### 8. Post-Lanzamiento
- [ ] Monitoreo de performance
  - Core Web Vitals
  - Server response times
  - Error rates
- [ ] Análisis de uso
  - User engagement
  - Conversion rates
  - Bounce rates
- [ ] Feedback collection
  - User surveys
  - Feedback forms
  - Analytics insights
- [ ] Plan de mantenimiento
  - Regular updates
  - Security patches
  - Performance optimization

### 9. Optimización de Contenido
- [ ] Revisar y optimizar textos
  - SEO copywriting
  - Call-to-actions
  - Meta descriptions
- [ ] Optimizar imágenes y assets
  - Alt texts
  - File names
  - Compression
- [ ] Implementar schema markup
  - Organization
  - WebSite
  - WebPage
  - BreadcrumbList

### 10. Checklist Final
- [ ] Verificar todos los links
- [ ] Testear formularios
- [ ] Verificar responsive design
- [ ] Comprobar accesibilidad
- [ ] Validar SEO
- [ ] Verificar analytics
- [ ] Comprobar performance
- [ ] Validar seguridad
- [ ] Testear cross-browser
- [ ] Verificar backups 