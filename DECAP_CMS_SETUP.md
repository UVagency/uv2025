# 🎨 Decap CMS - Guía de Configuración para UV Agency

## ✅ ¿Qué es Decap CMS?

**Decap CMS** (antes Netlify CMS) es un sistema de gestión de contenidos Git-based que:
- ✅ **NO requiere base de datos** - Todo en archivos Git
- ✅ **Panel de administración visual** - Edita sin tocar código
- ✅ **Commits automáticos** - Guarda cambios en GitHub
- ✅ **Multiidioma** - Español e Inglés
- ✅ **100% gratis** - Sin costos adicionales
- ✅ **Ya integrado con Netlify**

---

## 📁 ¿Qué se instaló?

```
uv2025/
├── public/admin/
│   ├── config.yml       ← Configuración de Decap CMS
│   └── index.html       ← Panel de administración
├── netlify.toml         ← Actualizado con permisos para CMS
└── DECAP_CMS_SETUP.md   ← Esta guía
```

---

## 🚀 Configuración en Netlify (5 minutos)

### Paso 1: Habilitar Netlify Identity

1. Ve a tu sitio en Netlify Dashboard
2. **Site settings** → **Identity**
3. Click **"Enable Identity"**

### Paso 2: Configurar Git Gateway

1. En la misma página de Identity
2. Scroll hasta **"Services"**
3. Click **"Enable Git Gateway"**

### Paso 3: Invitar Usuarios

**Opción A: Invitación directa (recomendado)**
```
1. Identity → "Invite users"
2. Ingresa el email de los editores
3. Enviar invitación
4. El editor recibe email y crea su password
```

**Opción B: Registro abierto (temporal)**
```
1. Identity → Settings
2. Registration → "Open" (solo para testing)
3. IMPORTANTE: Cambiar a "Invite only" después
```

### Paso 4: Configurar Roles (opcional)

```
1. Identity → Settings → Registration preferences
2. Default role: "Editor"
3. Custom roles:
   - Admin: acceso total
   - Editor: solo puede editar proyectos
```

---

## 🎯 Acceso al Panel de Administración

### URL del Admin

```
# Producción
https://uv.agency/admin

# Preview deploy
https://deploy-preview-XX--uv2025.netlify.app/admin
```

### Primer Acceso

1. Ve a `/admin`
2. Click **"Login with Netlify Identity"**
3. Ingresa email y password (del email de invitación)
4. ¡Listo! Ya puedes editar proyectos

---

## 📝 Cómo Usar el CMS

### Crear un Nuevo Proyecto

1. **Login** → `/admin`
2. Click **"Projects"** en el sidebar
3. Click **"New Project"**
4. Llenar formulario:

   ```
   ┌─────────────────────────────────────┐
   │ Project ID: expomascotas            │
   │ Project Name: EXPOMASCOTAS          │
   │ Year/Subtitle: INABA CHURU          │
   │ Categories: INTEGRATED              │
   │ Description: As the world's...      │
   │ ...                                 │
   │                                     │
   │ [Save] [Save as Draft]              │
   └─────────────────────────────────────┘
   ```

5. **Subir imágenes**:
   - Click en campo "Main Images"
   - Click "Choose an image"
   - Upload desde tu computadora
   - Automáticamente se guarda en `/public/images/projects/`

6. **Multiidioma**:
   - Selector arriba a la derecha: **EN** | **ES**
   - Cambia idioma y traduce los campos marcados con 🌐

7. **Guardar**:
   - **Save** → Guardado inmediato (draft)
   - **Publish** → Hace commit a GitHub
   - **Set status** → Draft, In Review, Ready

### Editar un Proyecto Existente

1. **Projects** → Click en el proyecto
2. **Edit**
3. Modificar campos
4. **Save** y luego **Publish**

### Workflow Editorial

Decap CMS tiene 3 estados:

```
Draft → In Review → Ready → Published
  ↓         ↓         ↓         ↓
Editor   Revisor   Admin    GitHub
```

**Configurar workflow:**
```yaml
# En config.yml (ya configurado)
publish_mode: editorial_workflow
```

### Galería Avanzada

Para proyectos con galerías complejas:

1. Scroll hasta **"Gallery"**
2. Click **"Add Gallery Sections"**
3. Seleccionar tipo:
   - **Banner Section** - Imagen full-width
   - **Text Section** - Texto markdown
   - **Image Grid** - Grilla de imágenes
   - **Mixed Grid** - Imagen grande + grilla

4. Configurar cada sección
5. **Reordenar** arrastrando las secciones

---

## 🔧 Desarrollo Local

### Opción 1: Con el CMS Local (Recomendado)

```bash
# 1. Instalar Decap Server
npm install -D decap-server

# 2. En una terminal
npx decap-server

# 3. En otra terminal
npm run dev

# 4. Acceder a
http://localhost:8080/admin

# Login con:
- Email: test@example.com
- Password: (cualquiera)
```

### Opción 2: Conectar con GitHub (Producción)

```bash
# 1. Iniciar dev server
npm run dev

# 2. Acceder a
http://localhost:5173/admin

# 3. Login con Netlify Identity
# (Necesitas internet y el sitio debe estar en Netlify)
```

---

## 📊 Estructura de Datos

### Proyecto Individual

```json
{
  "id": "expomascotas",
  "name": "EXPOMASCOTAS",
  "year": "INABA CHURU",
  "categories": ["INTEGRATED"],
  "description": "Texto corto",
  "client": "Inaba Churu",
  "overview": "Markdown text...",
  "execution": "Markdown text...",
  "marketingResults": "Markdown text...",
  "videoUrl": "https://vimeo.com/...",
  "images": [
    "/images/projects/expomascotas/hero.webp"
  ],
  "comingSoon": false,
  "awardWinning": false,
  "gallery": {
    "featureText": "...",
    "sections": [...]
  }
}
```

### Campos Multiidioma

Los campos con 🌐 se guardan así:

```json
{
  "name": {
    "en": "EXPOMASCOTAS",
    "es": "EXPOMASCOTAS"
  },
  "description": {
    "en": "As the world's number one...",
    "es": "Como la marca número uno..."
  }
}
```

**IMPORTANTE**: Tu código actual NO soporta este formato todavía.

### Opción A: Mantener formato actual (Sin i18n en JSON)

```yaml
# En config.yml, ELIMINAR:
i18n:
  structure: single_file
  locales: [en, es]
  default_locale: en

# Y eliminar "i18n: true" de los campos
```

### Opción B: Adaptar código para multiidioma

Necesitarías modificar el código para leer:
```typescript
project.name.en  // en lugar de  project.name
project.name.es
```

**Para empezar, recomiendo Opción A** (sin i18n por ahora).

---

## 🔄 Flujo de Publicación

```
1. Editor crea/edita proyecto en /admin
         ↓
2. Click "Save" (guarda como draft local)
         ↓
3. Click "Publish" o "Set status → Ready"
         ↓
4. Decap CMS hace commit a GitHub
         ↓
5. Netlify detecta el push
         ↓
6. Rebuilds automáticamente
         ↓
7. Proyecto visible en https://uv.agency
```

**Tiempo total**: ~2-3 minutos desde "Publish" hasta que esté live.

---

## 🖼️ Gestión de Imágenes

### Subir Imágenes

1. En cualquier campo de imagen
2. Click **"Choose an image"**
3. **Upload** → Selecciona archivo
4. Imagen se guarda en `/public/images/projects/`
5. Path automático: `/images/projects/[project-id]/nombre.webp`

### Optimización Automática

Netlify optimiza las imágenes automáticamente:
- Conversión a WebP/AVIF
- Compresión
- Lazy loading

No necesitas hacer nada extra.

### Organización

```
public/images/projects/
├── expomascotas/
│   ├── expomascotas-01.webp
│   ├── expomascotas-02.webp
│   └── gallery/
│       └── image.webp
├── lolla-vibes/
│   └── ...
```

---

## ⚙️ Personalización

### Agregar Nuevas Categorías

```yaml
# En public/admin/config.yml
categories:
  widget: "select"
  multiple: true
  options:
    - { label: "Integrated", value: "INTEGRATED" }
    - { label: "Event", value: "EVENT" }
    - { label: "Tu Nueva Categoría", value: "NUEVA" }  # ← Agregar aquí
```

### Agregar Nuevos Campos

```yaml
# En la sección fields:
- label: "Nuevo Campo"
  name: "nuevoCampo"
  widget: "string"
  required: false
  i18n: true  # si quieres que sea traducible
```

### Tipos de Widgets Disponibles

```yaml
widget: "string"        # Texto corto
widget: "text"          # Textarea
widget: "markdown"      # Editor markdown
widget: "number"        # Número
widget: "boolean"       # Checkbox
widget: "select"        # Dropdown
widget: "image"         # Upload de imagen
widget: "file"          # Upload de archivo
widget: "datetime"      # Fecha y hora
widget: "list"          # Lista repetible
widget: "object"        # Objeto anidado
widget: "relation"      # Relación con otra colección
```

---

## 🐛 Troubleshooting

### "Error loading entries"

**Causa**: Git Gateway no está habilitado

**Solución**:
```
1. Netlify → Site settings → Identity
2. Services → Enable Git Gateway
```

### "Not Found" en /admin

**Causa**: No se desplegaron los archivos

**Solución**:
```bash
# Verificar que existen
ls public/admin/

# Rebuilds en Netlify
git add .
git commit -m "Add Decap CMS"
git push
```

### "Unauthorized" al hacer login

**Causa**: Identity no está habilitado o no tienes invitación

**Solución**:
```
1. Netlify → Identity → Enable
2. Invite users → Tu email
3. Revisar bandeja de entrada
```

### Cambios no se reflejan

**Causa**: Netlify no detectó el cambio

**Solución**:
```
1. Netlify → Deploys
2. Verificar que hay un deploy en proceso
3. Si no, hacer trigger manual:
   Deploys → Trigger deploy → Deploy site
```

### "Config error" al cargar /admin

**Causa**: Sintaxis incorrecta en config.yml

**Solución**:
```bash
# Validar YAML online
# https://codebeautify.org/yaml-validator

# O usar CLI
npm install -g js-yaml
js-yaml public/admin/config.yml
```

---

## 📚 Recursos

### Documentación Oficial

- [Decap CMS Docs](https://decapcms.org/docs/)
- [Configuration Options](https://decapcms.org/docs/configuration-options/)
- [Widgets](https://decapcms.org/docs/widgets/)
- [Netlify Identity](https://docs.netlify.com/visitor-access/identity/)

### Comunidad

- [GitHub Issues](https://github.com/decaporg/decap-cms/issues)
- [Gitter Chat](https://gitter.im/netlify/NetlifyCMS)

---

## ✅ Checklist de Setup

- [ ] Netlify Identity habilitado
- [ ] Git Gateway habilitado
- [ ] Usuario invitado y cuenta creada
- [ ] Acceso a `/admin` funcionando
- [ ] Login exitoso
- [ ] Creado proyecto de prueba
- [ ] Proyecto guardado y publicado
- [ ] Cambios reflejados en el sitio
- [ ] Imágenes suben correctamente
- [ ] Multiidioma configurado (opcional)

---

## 🎯 Próximos Pasos

1. **Testear el CMS**
   - Crear proyecto de prueba
   - Subir imágenes
   - Publicar y verificar

2. **Decidir sobre multiidioma**
   - Opción A: Deshabilitar en config.yml
   - Opción B: Adaptar código frontend

3. **Configurar roles** (si tienes equipo)
   - Admin, Editor, Viewer

4. **Personalizar campos**
   - Agregar categorías
   - Agregar campos custom

5. **Entrenar al equipo**
   - Mostrar cómo usar el CMS
   - Workflow de publicación

---

## 💡 Tips

- **Guardar frecuentemente**: Click "Save" cada pocos cambios
- **Preview antes de publicar**: Usa "Set status → In Review" primero
- **Backups automáticos**: Todo está en Git, siempre puedes volver atrás
- **Mobile-friendly**: El CMS funciona en tablets
- **Shortcuts de teclado**: `Ctrl+S` para guardar

---

**¿Dudas?** Revisa la [documentación oficial](https://decapcms.org/docs/) o abre un issue en GitHub.

**¡Listo para gestionar contenido sin tocar código!** 🚀
