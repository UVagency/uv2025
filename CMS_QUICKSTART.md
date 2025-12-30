# 🚀 Decap CMS - Inicio Rápido (5 minutos)

## ¿Qué es esto?

Un **panel de administración visual** para editar proyectos sin tocar código.

```
Panel Admin → Editar Proyecto → Guardar → Auto-commit a GitHub → Netlify Rebuilds → Sitio Actualizado
```

---

## 🎯 Setup en Netlify (3 pasos)

### 1. Habilitar Identity

```
Netlify Dashboard → Tu sitio → Site settings → Identity
→ Click "Enable Identity"
```

### 2. Habilitar Git Gateway

```
En la misma página → Services
→ Click "Enable Git Gateway"
```

### 3. Invitarte a ti mismo

```
Identity → Invite users
→ Ingresa tu email
→ Revisar bandeja de entrada
→ Click en link y crear password
```

**¡Listo!** Ya puedes usar el CMS.

---

## 📝 Usar el CMS

### Acceder

```
https://uv.agency/admin
```

### Login

1. Click **"Login with Netlify Identity"**
2. Email y password (del email de invitación)

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

**"Error loading entries"**
→ Verifica que Git Gateway esté habilitado

**"Not Found" en /admin**
→ Haz push a GitHub y espera deploy de Netlify

**"Unauthorized"**
→ Verifica que Identity esté habilitado e invitaste tu email

---

## 📖 Documentación Completa

Ver **[DECAP_CMS_SETUP.md](DECAP_CMS_SETUP.md)** para:
- Desarrollo local
- Personalización
- Multiidioma
- Troubleshooting avanzado

---

**¡Empieza ahora!** → https://uv.agency/admin 🚀
