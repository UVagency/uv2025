# 📄 Documentación del Proyecto UV2025 (Actualizada)

## 🌟 Introducción

Este documento proporciona una visión general de la estructura del proyecto, sus componentes principales y cómo están organizados. El objetivo es facilitar la comprensión del código y la colaboración entre desarrolladores.

### Gestor de Paquetes
Este proyecto utiliza `npm` como gestor de dependencias. Ejecuta `npm install` para instalar todas las dependencias antes de iniciar el desarrollo.

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
│   ├── ContactForm.tsx
│   ├── ErrorBoundary.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Highlights.tsx
│   ├── InfoSection.tsx
│   ├── Navbar.tsx
│   ├── Portfolio.tsx
│   ├── SEO.tsx
│   ├── company/                # Componentes para la sección "Nuestra Empresa"
│   │   ├── CompanyAwards.tsx
│   │   ├── CompanyValues.tsx
│   │   └── CompanyVideo.tsx
│   ├── hero/                   # Componentes específicos para la sección Hero
│   │   ├── HeroBackgroundAnimations.tsx
│   │   ├── HeroContent.tsx
│   │   └── ScrollIndicator.tsx
│   ├── lazy/                   # Lazy loading de páginas
│   │   └── index.ts
│   ├── project/                # Componentes para la visualización de proyectos
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectGallery.tsx
│   │   ├── ProjectHeader.tsx
│   │   ├── ProjectNotFound.tsx
│   │   ├── ProjectVideo.tsx
│   │   ├── ProjectVideoPlayer.tsx
│   │   └── gallery/            # Componentes específicos para la galería de proyectos
│   │       ├── ProjectBanner.tsx
│   │       ├── ProjectFeatureText.tsx
│   │       ├── ProjectImageCarousel.tsx
│   │       ├── ProjectImageGrid.tsx
│   │       └── ProjectTextSection.tsx
│   └── ui/                     # Componentes de UI genéricos (ShadCN/UI + custom)
│       ├── EyeOfCuriosity.tsx
│       ├── VimeoPlayer.tsx
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
│       ├── optimized-image.tsx
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
│   └── navbarConstants.ts
|
├── data/                       # Datos estáticos o mock data
│   ├── highlightsConfig.ts
│   ├── projectsData.ts
│   └── projects/               # Datos detallados de proyectos (JSON)
│       ├── a-great-first-day.json
│       ├── closer-to-sun.json
│       ├── enjoy-the-unexpected.json
│       ├── festival-season.json
│       ├── fly-your-way.json
│       ├── lolla-vibes.json
│       ├── sabor-de-barrio.json
│       ├── turn-up-the-volume.json
│       ├── urban-beat.json
│       └── we-make-your-day.json
|
├── hooks/                      # Hooks personalizados de React
│   ├── use-mobile.tsx
│   ├── use-toast.ts
│   └── useNavigation.ts
|
├── lib/                        # Funciones de utilidad y helpers
│   ├── analytics.ts
│   ├── customCursor.js
│   ├── scrollUtils.ts
│   ├── utils.test.ts
│   └── utils.ts
|
├── pages/                      # Componentes que representan las páginas de la aplicación
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Index.tsx
│   ├── NotFound.tsx
│   ├── OurCompany.tsx
│   ├── ProjectDetail.tsx
│   └── UnitedMedia.tsx
|
├── styles/                     # Archivos CSS globales y específicos
│   ├── base.css
│   ├── carousel.css
│   ├── components.css
│   ├── fonts/
│   │   ├── open-sans-v43-latin-700.woff2
│   │   └── open-sans-v43-latin-regular.woff2
│   ├── fonts.css
│   └── index.css
|
└── types/                      # Definiciones de tipos TypeScript
    ├── gallery.ts
    └── index.ts
```

## 🧬 Componentes Principales

- **App.tsx**: Componente raíz que envuelve toda la aplicación y configura los providers principales.
- **main.tsx**: Punto de entrada de la aplicación. Renderiza el componente `App` y también inicializa el cursor personalizado.
- **components/**: Contiene componentes de alto nivel, específicos de secciones (hero, project, company), y una amplia librería de UI (ShadCN/UI + custom).
- **pages/**: Componentes que actúan como vistas o páginas individuales de la aplicación.
- **data/**: Datos estáticos y mock data, incluyendo archivos JSON para cada proyecto.
- **hooks/**: Hooks personalizados para lógica de navegación, mobile detection y toasts.
- **lib/**: Funciones utilitarias, helpers y lógica de analytics.
- **constants/**: Constantes centralizadas, como las del Navbar.
- **types/**: Tipos TypeScript compartidos y específicos.

## 🎨 Estilos y Animaciones

- **Tipografía**: El proyecto utiliza **Open Sans** como única fuente tipográfica, auto-hospedada en `src/styles/fonts/` y forzada globalmente en `fonts.css`.
- **Paleta de Colores**: Definida en `tailwind.config.ts` bajo la clave `portfolio` y en variables CSS en `base.css`. El color turquesa principal es `#6BD8D7` (`portfolio-accent`).
- **Animaciones**: Las animaciones base (como `fade-in`) se definen en `tailwind.config.ts`. El cursor personalizado está implementado en `base.css` y la lógica en `lib/customCursor.js`.
- **Estilos globales**: `index.css` importa `fonts.css`, `base.css` y `components.css`.

## ⚙️ Lógica y Utilidades

- **hooks/**: Incluye lógica de navegación (`useNavigation.ts`), detección de mobile (`use-mobile.tsx`) y sistema de toasts (`use-toast.ts`).
- **lib/**: Incluye helpers generales (`utils.ts`), utilidades de scroll suave (`scrollUtils.ts`), lógica de analytics y el cursor personalizado.
- **constants/**: Centraliza valores como animaciones y clases del Navbar.
- **types/**: Define interfaces y tipos TypeScript para navegación, proyectos, etc.

## 📊 Datos

- **data/**: Contiene la configuración de highlights, datos de proyectos y archivos JSON detallados para cada proyecto.

## ✨ Mejoras Recientes

1. **Refactorización del Navbar**: Extracción de lógica a hooks personalizados, componentes reutilizables, centralización de constantes y mejora de navegación.
2. **Sistema de Galería Modular**: Componentes flexibles para visualización de proyectos, soporte para distintos tipos de contenido y mejoras de responsividad.
3. **UI Components**: Integración de ShadCN/UI, componentes personalizados, mejoras de accesibilidad y nuevos componentes como Sidebar y Resizable.
4. **SEO y Metadatos**: Componente SEO reutilizable, meta tags dinámicos, sitemap.xml, robots.txt y JSON-LD para rich snippets.
5. **Optimización de Rendimiento**: Lazy loading, code splitting, optimización de imágenes y mejor gestión de efectos.
6. **TypeScript y Seguridad**: Mejoras en interfaces, type safety, constantes tipadas y detección temprana de errores.
7. **Limpieza de iframes y compatibilidad moderna**: Uso de atributos modernos y reducción de advertencias.
8. **Tipografía unificada y auto hospedada**: Open Sans en WOFF2, forzada globalmente y sin dependencias externas.
9. **Actualización de contacto en el Footer**: Nuevo correo principal y evento de analytics para clics.
10. **Optimización de imágenes**: Uso de WebP y reducción de peso en galerías.
11. **Simplificación de estilos y Tailwind**: Consolidación de estilos, animaciones en Tailwind y parámetros nuevos en analytics.

## 🖼️ Optimización de Imágenes (Actualización 2024)

- **Formato WebP universal:** Todas las imágenes de proyectos y assets principales están en formato `.webp`. Se eliminaron los archivos JPEG/PNG redundantes y se actualizaron todas las referencias en el código y HTML para que apunten solo a `.webp`.
- **Lazy loading:** Todas las imágenes relevantes usan lazy loading por defecto gracias al componente `OptimizedImage`, que aplica `loading="lazy"` salvo para imágenes críticas (banners, slides iniciales).
- **Imágenes responsive (`srcSet`):** El componente `OptimizedImage` genera automáticamente un `srcSet` con varias resoluciones (480, 800, 1200, 1600px) y un atributo `sizes` adaptado a breakpoints, sirviendo la mejor versión según el dispositivo.
- **Referencias actualizadas:** No quedan referencias a imágenes JPEG o PNG en el código, HTML ni datos. Todo apunta a `.webp`.
- **SVGs y logotipos:** Los SVGs (por ejemplo, en BrandCarousel) no requieren lazy loading ni srcSet por su bajo peso y naturaleza vectorial.

### Ejemplo de uso de OptimizedImage
```tsx
<OptimizedImage
  src="/projects/ejemplo/ejemplo_profile.webp"
  alt="Ejemplo Proyecto"
  aspectRatio={16/9}
/>
```

## 🚀 Próximos Pasos

### 1. Optimización y Rendimiento (Prioridad Alta)
- [x] Implementar lazy loading para componentes pesados
- [ ] Optimizar imágenes (WebP, srcset, lazy loading)
- [x] Implementar code splitting

### 2. SEO y Metadatos (Prioridad Alta)
- [x] Implementar meta tags dinámicos
- [x] Implementar sitemap.xml
- [x] Optimizar robots.txt
- [x] Agregar JSON-LD para rich snippets

### 3. Analytics y Monitoreo (Prioridad Alta)
- [x] Implementar Google Analytics 4
- [x] Agregar error tracking (Sentry)
- [x] Implementar tracking de eventos básicos

### 4. Testing y Calidad (Prioridad Media)
- [ ] Implementar test suite (Vitest, integración, E2E)
- [ ] Implementar accessibility testing

### 5. Seguridad (Prioridad Media)
- [x] Implementar CSP, CORS y security headers

### 6. Documentación (Prioridad Baja)
- [x] Crear documentación técnica
- [ ] Crear guía de estilo

### 7. Deployment y CI/CD (Prioridad Media)
- [ ] Configurar pipeline de CI/CD
- [ ] Implementar staging environment
- [ ] Configurar rollback strategy

### 8. Post-Lanzamiento (Prioridad Baja)
- [ ] Monitoreo de performance
- [ ] Análisis de uso

## 📋 Checklist Pre-Lanzamiento (Actualización)

### Prioridad Alta
- [x] Analytics funcionando y reportando datos
- [x] SEO dinámico implementado para páginas clave
- [x] Optimización de imágenes y lazy loading activado
  - [x] Todas las imágenes convertidas a WebP
  - [x] Referencias actualizadas a .webp
  - [x] Lazy loading implementado en toda la UI
  - [x] srcSet responsive implementado
- [x] Error Boundaries y monitoreo de errores configurado
- [x] Limpieza de iframes: solo uso de atributo `allow` en vez de `allowfullscreen`

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

## 🛡️ Seguridad (Actualización 2024)

- **CSP (Content Security Policy):** Implementada en `netlify.toml` para restringir orígenes de scripts, imágenes, estilos, fuentes y frames. Permite solo recursos propios y de servicios explícitamente listados (Google Analytics, Vimeo, Apollo, etc.).
- **CORS:** Habilitado con `Access-Control-Allow-Origin: *` y métodos/headers seguros para permitir requests cross-origin donde sea necesario (por ejemplo, para assets públicos o APIs externas).
- **Security Headers:**
  - `X-Frame-Options: DENY` (previene clickjacking)
  - `X-XSS-Protection: 1; mode=block` (protección básica XSS)
  - `X-Content-Type-Options: nosniff` (previene sniffing de tipos MIME)
  - `Referrer-Policy: strict-origin-when-cross-origin` (protege privacidad de referers)
  - `Permissions-Policy` (deshabilita cámara, micrófono, geolocalización)
  - `Strict-Transport-Security` (fuerza HTTPS)
  - `Cross-Origin-Opener-Policy: same-origin` (protege contextos de navegación)
- **Headers de caché:** configurados para assets, imágenes, JS y CSS para optimizar performance y seguridad.

### Ejemplo de configuración en `netlify.toml`
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Content-Security-Policy = "default-src 'self' ..."
    Permissions-Policy = "camera=(), microphone=(), geolocation=()"
    Strict-Transport-Security = "max-age=31536000; includeSubDomains"
    Cross-Origin-Opener-Policy = "same-origin"
    Access-Control-Allow-Origin = "*"
    Access-Control-Allow-Methods = "GET, POST, PUT, DELETE, OPTIONS"
    Access-Control-Allow-Headers = "Content-Type, Authorization"
```

- **Resultado:** El sitio cumple con las mejores prácticas modernas de seguridad web para proyectos estáticos y SPA en Netlify. 