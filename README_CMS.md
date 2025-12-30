# ✅ Decap CMS Instalado - UV Agency

## 🎉 ¿Qué acabamos de hacer?

Instalamos **Decap CMS** - un panel de administración visual para gestionar tus proyectos **SIN base de datos**.

### ✅ Beneficios

- **Sin MongoDB** - Todo en archivos Git
- **Panel visual** - Edita sin tocar código
- **Commits automáticos** - Cambios en GitHub
- **100% gratis** - Sin costos adicionales
- **Ya integrado** - Listo para usar en Netlify

---

## 📁 Archivos Creados

```
uv2025/
├── public/admin/
│   ├── config.yml                    ← Configuración del CMS
│   ├── config-i18n.yml.backup        ← Configuración con i18n (futuro)
│   └── index.html                    ← Panel de admin
│
├── netlify.toml                      ← ✅ Actualizado con permisos CMS
├── CMS_QUICKSTART.md                 ← 🚀 Guía rápida (5 min)
├── DECAP_CMS_SETUP.md                ← 📖 Documentación completa
└── README_CMS.md                     ← Este archivo
```

---

## 🚀 Próximos Pasos

### 1. Configurar en Netlify (5 minutos)

```
1. Ve a tu sitio en Netlify Dashboard
2. Site settings → Identity → Enable Identity
3. Services → Enable Git Gateway
4. Invite users → Tu email
5. Revisar inbox y crear password
```

**Guía detallada:** Ver [CMS_QUICKSTART.md](CMS_QUICKSTART.md)

### 2. Hacer Deploy

```bash
git add .
git commit -m "Add Decap CMS"
git push origin main
```

Netlify detectará los cambios y rebuildeará automáticamente.

### 3. Acceder al Panel

Una vez desplegado:

```
https://uv.agency/admin
```

1. Click "Login with Netlify Identity"
2. Email y password (del email de invitación)
3. ¡Empieza a editar proyectos!

---

## 📝 Cómo Funciona

```
┌──────────────────┐
│  Editor accede   │
│  a /admin        │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Edita proyecto  │
│  Sube imágenes   │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Click "Publish" │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Decap CMS hace  │
│  commit a GitHub │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Netlify detecta │
│  y rebuilds      │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Sitio           │
│  actualizado! ✅  │
└──────────────────┘
```

**Tiempo total**: 2-3 minutos desde publish hasta que esté live.

---

## 💡 Características Principales

### ✅ Gestión de Proyectos

- Crear, editar, eliminar proyectos
- Upload de imágenes directo
- Markdown para textos largos
- Categorías con multi-select
- Estados: Draft, In Review, Ready, Published

### ✅ Galería Avanzada

Soporta 3 tipos de secciones:
- **Banner** - Imagen full-width
- **Image Grid** - Grilla de imágenes (2-4 columnas)
- **Text Section** - Texto con markdown

### ✅ Media

- Upload directo de imágenes
- Organización automática en `/public/images/projects/`
- Optimización automática por Netlify (WebP, compresión)

### ✅ Workflow Editorial

```
Draft → In Review → Ready → Published
```

Perfecto para equipos con roles de editor y revisor.

---

## 🎯 Ejemplos de Uso

### Crear un Proyecto

1. `/admin` → Login
2. **Projects** → **New Project**
3. Llenar campos:
   ```
   Project ID: mi-nuevo-proyecto
   Name: Mi Nuevo Proyecto
   Year: 2024
   Categories: INTEGRATED, DESIGN
   Description: Descripción breve...
   Overview: ## Texto largo con markdown...
   ```
4. **Save** → **Publish**

### Subir Imágenes

1. En campo "Main Images"
2. **Choose an image** → **Upload**
3. Seleccionar archivo
4. ✅ Listo! Path automático: `/images/projects/mi-proyecto/nombre.webp`

### Editar Proyecto

1. **Projects** → Click en proyecto
2. **Edit**
3. Modificar campos
4. **Save** → **Publish**

---

## 📖 Documentación

| Archivo | Descripción |
|---------|-------------|
| **CMS_QUICKSTART.md** | Guía rápida de 5 minutos |
| **DECAP_CMS_SETUP.md** | Documentación completa, troubleshooting, personalización |
| **README_CMS.md** | Este archivo - Overview general |

---

## 🔧 Desarrollo Local

```bash
# Terminal 1: Decap Server (para CMS local)
npx decap-server

# Terminal 2: Dev Server
npm run dev

# Acceder a:
http://localhost:8080/admin

# Login con:
Email: test@example.com
Password: (cualquiera)
```

**Nota**: En local no hace commits reales, solo guarda archivos directamente.

---

## 🐛 Problemas Comunes

### "Error loading entries"
→ Git Gateway no está habilitado en Netlify

### "Not Found" en /admin
→ No se desplegaron los archivos. Hacer push a GitHub.

### "Unauthorized"
→ Identity no está habilitado o no tienes invitación

**Ver troubleshooting completo**: [DECAP_CMS_SETUP.md](DECAP_CMS_SETUP.md#-troubleshooting)

---

## ⚙️ Configuración

### Agregar Categoría

```yaml
# En public/admin/config.yml
options: ["INTEGRATED", "EVENT", "DESIGN", "MUSIC", "NUEVA"]
```

### Agregar Campo

```yaml
# En la sección fields:
- {label: "Nuevo Campo", name: "nuevoCampo", widget: "string"}
```

### Habilitar i18n (Multiidioma)

```bash
# Reemplazar config.yml con la versión i18n
mv public/admin/config-i18n.yml.backup public/admin/config.yml

# IMPORTANTE: Requiere adaptar código frontend
# Ver: DECAP_CMS_SETUP.md
```

---

## ✅ Checklist de Setup

- [ ] Netlify Identity habilitado
- [ ] Git Gateway habilitado
- [ ] Usuario invitado y cuenta creada
- [ ] Acceso a `/admin` funcionando
- [ ] Login exitoso
- [ ] Creado proyecto de prueba
- [ ] Proyecto visible en el sitio
- [ ] Imágenes suben correctamente

---

## 📊 Comparación: Antes vs Ahora

| Aspecto | Antes | Ahora |
|---------|-------|-------|
| **Editar proyecto** | Editar .json en código | Panel visual en /admin |
| **Subir imagen** | FTP o manual | Upload directo |
| **Publicar** | Git commit manual | Click "Publish" |
| **Multiusuario** | Dar acceso GitHub | Invitar via email |
| **Revisar cambios** | Pull request | Workflow editorial |
| **Costo** | $0 | $0 |

---

## 🎓 Recursos

- [Decap CMS Docs](https://decapcms.org/docs/)
- [Netlify Identity](https://docs.netlify.com/visitor-access/identity/)
- [Widgets](https://decapcms.org/docs/widgets/)

---

## 💬 Soporte

**¿Dudas?** Revisa:
1. [CMS_QUICKSTART.md](CMS_QUICKSTART.md) - Guía rápida
2. [DECAP_CMS_SETUP.md](DECAP_CMS_SETUP.md) - Documentación completa
3. [Decap CMS Docs](https://decapcms.org/docs/) - Documentación oficial

---

## 🎉 ¡Listo!

Tu CMS está **100% configurado** y listo para usar.

**Próximo paso:** Configurar en Netlify y acceder a `/admin`

**¡A gestionar contenido sin tocar código!** 🚀
