# 🚀 Tutorial: Cómo Desplegar en Vercel

## ¿Qué es Vercel?

**Vercel** es una plataforma de hosting especializada en aplicaciones web modernas que:
- 🌐 Hace tu website accesible en internet 24/7
- ⚡ Es súper rápido y optimizado
- 🔄 Se actualiza automáticamente cuando cambias tu código
- 💰 Es GRATUITO para proyectos personales
- 🎯 Es la opción MÁS RECOMENDADA para tu tipo de proyecto

---

## 🚀 Paso a Paso: Desplegar en Vercel

### Paso 1: Crear Cuenta en Vercel

1. **Ir a Vercel**:
   - Ve a [vercel.com](https://vercel.com)

2. **Registrarse con GitHub**:
   - Haz clic en **"Sign Up"**
   - Selecciona **"Continue with GitHub"**
   - Autoriza a Vercel a acceder a tu cuenta de GitHub

3. **Confirmar Cuenta**:
   - Vercel te pedirá confirmar tu email
   - Revisa tu email y confirma la cuenta

### Paso 2: Importar tu Proyecto desde GitHub

1. **Dashboard de Vercel**:
   - Una vez logueado, estarás en el dashboard de Vercel
   - Haz clic en **"New Project"**

2. **Conectar Repositorio**:
   - Vercel mostrará tus repositorios de GitHub
   - Busca **"delicias-de-mi-patria"**
   - Haz clic en **"Import"** junto a tu repositorio

3. **Configurar Proyecto**:
   - **Project Name**: `delicias-de-mi-patria` (puedes cambiarlo)
   - **Framework Preset**: Vercel debería detectar automáticamente "Vite"
   - **Build and Output Settings**: Déjalo como está (por defecto)

### Paso 3: Configurar Variables de Entorno

**¡SÚPER IMPORTANTE!** Tu sitio web necesita estas configuraciones para funcionar:

1. **Expandir "Environment Variables"**:
   - En la página de configuración del proyecto
   - Haz clic para expandir la sección "Environment Variables"

2. **Agregar Variables** (agrega una por una):

   **Variable 1:**
   - **Name**: `VITE_STRIPE_PUBLISHABLE_KEY`
   - **Value**: `pk_live_51RrnFeFUnvg6QDt7PtljbmwmA9k2ajnhFm2KEDLQ7ldJ3qZfxMS5mtfR2mCsHvOXuZonIzggaKdXTMwpffDiWBve00ww5Cfe2A`

   **Variable 2:**
   - **Name**: `VITE_APP_URL`
   - **Value**: `https://delicias-de-mi-patria.vercel.app` (o tu dominio personalizado)

   **Variable 3 (opcional):**
   - **Name**: `VITE_SUPABASE_URL`
   - **Value**: `tu-url-de-supabase` (si usas base de datos)

   **Variable 4 (opcional):**
   - **Name**: `VITE_SUPABASE_ANON_KEY`
   - **Value**: `tu-clave-anonima-supabase`

### Paso 4: Desplegar

1. **Iniciar Despliegue**:
   - Haz clic en **"Deploy"**
   - Vercel comenzará a construir tu sitio (toma 2-3 minutos)

2. **Proceso de Construcción**:
   - Verás una pantalla con logs de construcción
   - Si todo sale bien, verás ✅ símbolos verdes
   - Si hay errores, verás ❌ símbolos rojos

3. **¡Sitio Desplegado!**:
   - Al completarse, verás una pantalla de felicitaciones
   - Tendrás un enlace como: `https://delicias-de-mi-patria.vercel.app`

### Paso 5: Verificar tu Sitio Web

1. **Abrir tu Sitio**:
   - Haz clic en el enlace de tu sitio web
   - Tu tienda debería cargar completamente

2. **Probar Funcionalidades**:
   - ✅ Navegación entre páginas
   - ✅ Ver productos
   - ✅ Agregar al carrito
   - ✅ Panel de administración (`/admin`)
   - ✅ Proceso de checkout (¡cuidado! pagos son reales)

---

## 🌐 Configurar Dominio Personalizado (Opcional)

### Si tienes un dominio propio:

1. **Ir a Settings**:
   - En el dashboard de tu proyecto en Vercel
   - Ve a **"Settings"** → **"Domains"**

2. **Agregar Dominio**:
   - Escribe tu dominio (ej: `deliciasdempatria.com`)
   - Haz clic en **"Add"**

3. **Configurar DNS**:
   - Vercel te dará instrucciones específicas
   - Ve al panel de control de tu dominio
   - Agrega los registros DNS que Vercel te indique

4. **Esperar Propagación**:
   - Puede tomar hasta 24 horas
   - Una vez configurado, tu sitio estará disponible en tu dominio

---

## 🔄 Actualizaciones Automáticas

**¡La magia de Vercel!** Cada vez que actualices tu código en GitHub:

1. Haces cambios en tu proyecto local
2. Subes los cambios a GitHub:
   ```bash
   git add .
   git commit -m "Descripción del cambio"
   git push
   ```
3. **¡Vercel actualiza tu sitio automáticamente!** (toma 1-2 minutos)

---

## 📊 Panel de Control de Vercel

En tu dashboard de Vercel puedes:

- 📈 **Analytics**: Ver visitantes y estadísticas
- 🔧 **Settings**: Cambiar configuraciones
- 🌐 **Domains**: Gestionar dominios
- 📝 **Deployments**: Ver historial de despliegues
- ⚙️ **Environment Variables**: Modificar variables de entorno

---

## ❗ Solución de Problemas

### Error: "Build failed"
1. Ve a la pestaña "Deployments" en Vercel
2. Haz clic en el despliegue fallido
3. Revisa los logs para ver el error específico
4. Usualmente es un problema con variables de entorno o código

### Error: "Stripe key not found"
- Verifica que `VITE_STRIPE_PUBLISHABLE_KEY` esté correctamente configurada
- Asegúrate de que empiece con `pk_live_`

### Error: "Site not loading"
1. Espera 2-3 minutos después del despliegue
2. Verifica que todas las variables de entorno estén configuradas
3. Revisa el log de construcción para errores

### Cambiar Variables de Entorno después del Despliegue
1. Ve a **Settings** → **Environment Variables**
2. Edita la variable
3. Haz clic en **"Save"**
4. Ve a **Deployments** → **"Redeploy"**

---

## 💰 Costos de Vercel

- **Plan Gratuito**: 
  - ✅ Perfecto para tu tienda
  - ✅ 100GB de ancho de banda
  - ✅ Dominios personalizados
  - ✅ SSL automático
  - ✅ Despliegues ilimitados

- **Solo pagas si necesitas más recursos** (muy poco probable)

---

## ✅ Lista de Verificación Final

Después del despliegue, verifica que:

- ✅ Tu sitio carga en `https://tu-proyecto.vercel.app`
- ✅ Todas las páginas funcionan correctamente
- ✅ Los productos se muestran
- ✅ El carrito funciona
- ✅ El panel de admin es accesible
- ✅ Los pagos se procesan (¡cuidado! son reales)

---

## 🎉 ¡Felicitaciones!

**¡Tu tienda "Delicias de mi Patria" ya está online y disponible 24/7!**

- 🌐 Accesible desde cualquier parte del mundo
- ⚡ Velocidad optimizada
- 🔒 HTTPS automático y seguro
- 🔄 Actualizaciones automáticas
- 💳 Pagos reales funcionando

**URLs importantes:**
- **Tu tienda**: `https://delicias-de-mi-patria.vercel.app`
- **Admin panel**: `https://delicias-de-mi-patria.vercel.app/admin`
- **Dashboard Vercel**: [vercel.com/dashboard](https://vercel.com/dashboard)

**¡Ya puedes compartir el enlace con tus clientes!** 🚀