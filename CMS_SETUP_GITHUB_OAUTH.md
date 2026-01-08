# 🔐 Configuración de GitHub OAuth para Decap CMS

## ¿Por qué GitHub OAuth?

Netlify Identity está deprecated, así que configuramos GitHub OAuth como método de autenticación para el CMS.

---

## 🚀 Configuración (10 minutos)

### Paso 1: Crear GitHub OAuth App

1. **Ve a GitHub**
   ```
   https://github.com/settings/developers
   ```

2. **OAuth Apps → New OAuth App**

3. **Completar formulario:**
   ```
   Application name: UV Agency CMS
   Homepage URL: https://uv.agency
   Authorization callback URL: https://uv.agency/api/callback
   ```

4. **Click "Register application"**

5. **Copiar credenciales:**
   - Client ID: `Iv1.xxxxxxxxxxxxx`
   - Click "Generate a new client secret"
   - Client Secret: `ghp_xxxxxxxxxxxxx` (copiarlo ahora, no se vuelve a mostrar)

---

### Paso 2: Configurar Variables de Entorno en Netlify

1. **Netlify Dashboard**
   ```
   Tu sitio → Site settings → Environment variables
   ```

2. **Agregar variables:**
   ```
   Key: GITHUB_CLIENT_ID
   Value: [pegar Client ID de GitHub]
   Scopes: All

   Key: GITHUB_CLIENT_SECRET
   Value: [pegar Client Secret de GitHub]
   Scopes: All
   ```

3. **Save**

---

### Paso 3: Rebuild el Sitio

```
Netlify → Deploys → Trigger deploy → Deploy site
```

O hacer push a GitHub (ya desplegará automáticamente).

---

## ✅ Verificar que Funciona

1. **Acceder al admin:**
   ```
   https://uv.agency/admin
   ```

2. **Click "Login with GitHub"**

3. **Autorizar la app** (primera vez)

4. **¡Listo!** Ya puedes crear/editar proyectos

---

## 🔧 Cómo Funciona

```
┌─────────────────────────────────────────────────────┐
│ Usuario va a /admin                                 │
└─────────────────┬───────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────┐
│ Click "Login with GitHub"                           │
└─────────────────┬───────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────┐
│ Redirect a /api/auth                                │
│ (Netlify Function)                                  │
└─────────────────┬───────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────┐
│ Redirect a GitHub OAuth                             │
│ github.com/login/oauth/authorize                    │
└─────────────────┬───────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────┐
│ Usuario autoriza en GitHub                          │
└─────────────────┬───────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────┐
│ GitHub redirect a /api/callback                     │
│ con code de autorización                            │
└─────────────────┬───────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────┐
│ Netlify Function intercambia code                   │
│ por access token                                    │
└─────────────────┬───────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────┐
│ Decap CMS recibe token                              │
│ Usuario autenticado ✅                               │
└─────────────────────────────────────────────────────┘
```

---

## 🔐 Seguridad

- ✅ Client Secret nunca se expone al navegador
- ✅ OAuth flow estándar de GitHub
- ✅ Tokens se manejan en funciones serverless
- ✅ Solo usuarios con acceso al repo pueden editar

---

## 👥 Dar Acceso a Otros Editores

**Opción 1: Collaborators (Recomendado para equipo pequeño)**

```
1. GitHub → Repo → Settings → Collaborators
2. Add people → Email del editor
3. Editor acepta invitación
4. Ya puede usar /admin con su cuenta GitHub
```

**Opción 2: Organization Teams (Para equipos grandes)**

```
1. Crear team en GitHub Organization
2. Agregar miembros al team
3. Dar acceso del repo al team
```

**Permisos recomendados:**
- Para editores: `Write` (pueden editar)
- Para revisores: `Write` (necesario para commits)
- Para admins: `Admin`

---

## 🐛 Troubleshooting

### "Error: GitHub OAuth not configured"

**Solución:**
- Verifica que agregaste `GITHUB_CLIENT_ID` y `GITHUB_CLIENT_SECRET` en Netlify
- Rebuilds el sitio después de agregar las variables

### "Bad credentials" o "Invalid token"

**Solución:**
- Verifica que el Client Secret sea correcto
- Regenera el Client Secret en GitHub si es necesario
- Actualiza en Netlify y rebuild

### "Callback URL mismatch"

**Solución:**
- En GitHub OAuth App settings, verifica:
  ```
  Authorization callback URL: https://uv.agency/api/callback
  ```
- Debe ser EXACTAMENTE el dominio de producción

### "User not authorized"

**Solución:**
- El usuario debe tener acceso al repositorio en GitHub
- Agregar como collaborator o miembro del team

---

## 🔄 Desarrollo Local

Para testear localmente:

```bash
# Terminal 1: Netlify Functions
netlify dev

# Terminal 2: Decap Server (para backend local)
npx decap-server

# Acceder a:
http://localhost:8888/admin
```

**O usar test-repo mode:**

```yaml
# En config.yml (solo para dev)
backend:
  name: test-repo
```

---

## 📊 Comparación: Netlify Identity vs GitHub OAuth

| Aspecto | Netlify Identity | GitHub OAuth |
|---------|------------------|--------------|
| Estado | ❌ Deprecated | ✅ Activo |
| Setup | Simple | Medio |
| Control acceso | Invitaciones email | Repo permissions |
| Multi-usuario | Sí | Sí |
| Seguridad | Alta | Alta |
| Mantenimiento | Poco | Poco |

---

## ✅ Checklist de Setup

- [ ] GitHub OAuth App creada
- [ ] Client ID y Secret copiados
- [ ] Variables agregadas en Netlify
- [ ] Sitio rebuildeado
- [ ] Acceso a `/admin` funciona
- [ ] Login con GitHub exitoso
- [ ] Puede crear/editar proyectos
- [ ] Otros editores agregados como collaborators

---

## 📚 Recursos

- [Decap CMS GitHub Backend](https://decapcms.org/docs/github-backend/)
- [GitHub OAuth Apps](https://docs.github.com/en/developers/apps/building-oauth-apps)
- [Netlify Functions](https://docs.netlify.com/functions/overview/)

---

**¿Todo funcionando?** ¡Ahora puedes gestionar contenido con GitHub OAuth! 🚀
