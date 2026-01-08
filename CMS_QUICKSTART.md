# 🚀 Decap CMS - Inicio Rápido (10 minutos)

## ¿Qué es esto?

Un **panel de administración visual** para editar proyectos sin tocar código.

```
Panel Admin → Editar Proyecto → Guardar → Auto-commit a GitHub → Netlify Rebuilds → Sitio Actualizado
```

---

## 🎯 Setup con GitHub OAuth (4 pasos)

### 1. Crear GitHub OAuth App

```
1. Ve a: https://github.com/settings/developers
2. OAuth Apps → New OAuth App
3. Completa:
   - Application name: UV Agency CMS
   - Homepage URL: https://uv.agency
   - Callback URL: https://uv.agency/api/callback
4. Click "Register application"
5. Copia el Client ID
6. Generate a new client secret → Copia el Secret
```

### 2. Configurar en Netlify

```
1. Netlify Dashboard → Tu sitio → Site settings
2. Environment variables → Add a variable
3. Agregar:
   - GITHUB_CLIENT_ID = [tu Client ID]
   - GITHUB_CLIENT_SECRET = [tu Client Secret]
4. Save
```

### 3. Rebuild el Sitio

```
Netlify → Deploys → Trigger deploy → Deploy site
```

### 4. Dar Acceso a Usuarios

Solo usuarios con acceso al repositorio pueden editar:

```
GitHub → Repo → Settings → Collaborators
→ Add people → Email del editor
```

**¡Listo!** Ya puedes usar el CMS.

---

## 📝 Usar el CMS

### Acceder

```
https://uv.agency/admin
```

### Login

1. Click **"Login with GitHub"**
2. Autorizar la app (primera vez)
3. ✅ Autenticado!

### Crear Proyecto

1. **Projects** → **New Project**
2. Llenar campos:
   - **Project ID**: `mi-proyecto` (URL-friendly, sin espacios)
   - **Name**: Nombre del proyecto
   - **Year/Subtitle**: `2024` o un subtítulo
   - **Categories**: Seleccionar una o más
   - **Description**: Descripción breve
   - **Overview, Execution, Marketing Results**: Textos largos (soportan markdown)
   - **Main Images**: Upload de imágenes

3. **Save** (guarda draft)
4. **Publish** (hace commit a GitHub)

**Resultado**: En 2-3 minutos aparece en tu sitio.

---

## 🖼️ Subir Imágenes

1. Click en campo de imagen
2. **Choose an image** → **Upload**
3. Selecciona archivo
4. ✅ Listo! Se guarda automáticamente

---

## 🔄 Workflow

```
Draft     → En edición
In Review → Listo para revisión
Ready     → Listo para publicar
Published → Live en el sitio
```

---

## 🐛 Problemas Comunes

**"GitHub OAuth not configured"**
→ Verifica que agregaste las variables en Netlify y rebuildeaste

**"Not Found" en /admin**
→ Haz push a GitHub y espera deploy de Netlify

**"User not authorized"**
→ Agrega al usuario como collaborator en GitHub

**"Bad credentials"**
→ Verifica que el Client Secret sea correcto

---

## 📖 Documentación Completa

Ver **[CMS_SETUP_GITHUB_OAUTH.md](CMS_SETUP_GITHUB_OAUTH.md)** para:
- Configuración detallada
- Desarrollo local
- Troubleshooting completo
- Gestión de permisos

---

**¡Empieza ahora!** → https://uv.agency/admin 🚀
