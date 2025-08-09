# Guía de Despliegue - Delicias de mi Patria

Esta guía te ayudará a publicar tu sitio web de e-commerce "Delicias de mi Patria" en producción.

## 📋 Lista de Verificación Pre-Despliegue

- [ ] Claves de Stripe de producción configuradas
- [ ] Base de datos configurada (si usas Supabase)
- [ ] Productos de prueba creados
- [ ] Información de contacto actualizada
- [ ] Métodos de envío configurados
- [ ] Políticas y términos actualizados

## 🚀 Opciones de Despliegue

### Opción 1: Vercel (Recomendado)

#### Paso 1: Preparar el Repositorio
```bash
# Si no tienes Git configurado
git init
git add .
git commit -m "Initial commit - Delicias de mi Patria"

# Crear repositorio en GitHub y conectar
git remote add origin https://github.com/tu-usuario/delicias-de-mi-patria.git
git push -u origin main
```

#### Paso 2: Desplegar en Vercel
1. Ve a [vercel.com](https://vercel.com) y crea una cuenta
2. Conecta tu cuenta de GitHub
3. Importa tu repositorio
4. Configura las variables de entorno:
   - `VITE_STRIPE_PUBLISHABLE_KEY`: `pk_live_51RrnFeFUnvg6QDt7PtljbmwmA9k2ajnhFm2KEDLQ7ldJ3qZfxMS5mtfR2mCsHvOXuZonIzggaKdXTMwpffDiWBve00ww5Cfe2A`
   - `VITE_APP_URL`: `https://tu-dominio.vercel.app`
5. Haz clic en "Deploy"

#### Paso 3: Configurar Dominio Personalizado (Opcional)
1. En el dashboard de Vercel, ve a Settings > Domains
2. Agrega tu dominio personalizado
3. Configura los DNS según las instrucciones

### Opción 2: Netlify

#### Paso 1: Preparar el Repositorio (igual que Vercel)

#### Paso 2: Desplegar en Netlify
1. Ve a [netlify.com](https://netlify.com) y crea una cuenta
2. Conecta tu repositorio de GitHub
3. Configura:
   - Build command: `pnpm run build`
   - Publish directory: `dist`
4. Configura las variables de entorno en Site settings > Environment variables
5. Haz clic en "Deploy site"

### Opción 3: Despliegue Manual

#### Construir el Proyecto
```bash
# Instalar dependencias
pnpm install

# Construir para producción
pnpm run build
```

El archivo construido estará en la carpeta `dist/`. Puedes subir este contenido a cualquier servicio de hosting estático.

## 🔧 Configuración de Variables de Entorno

### Variables Requeridas:
```
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_tu_clave_publica
VITE_APP_URL=https://tu-dominio.com
```

### Variables Opcionales:
```
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu_clave_anonima_supabase
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
```

## 💳 Configuración de Stripe

1. **Webhook de Stripe**: Configura un webhook en tu dashboard de Stripe:
   - URL: `https://tu-dominio.com/api/stripe/webhook`
   - Eventos: `payment_intent.succeeded`, `payment_intent.payment_failed`

2. **Claves de Producción**: Asegúrate de usar las claves que empiecen con `pk_live_` y `sk_live_`

## 🗄️ Gestión de Productos Después del Despliegue

**¡SÍ! Podrás seguir creando productos después de publicar la página.**

### Cómo agregar productos después del despliegue:
1. **Panel de Administración**: Accede a `https://tu-dominio.com/admin`
2. **Crear Productos**: Usa la interfaz de administración para:
   - Agregar nuevos productos
   - Crear categorías
   - Subir imágenes
   - Configurar precios y descripciones
   - Gestionar inventario

### Ventajas del sistema:
- ✅ **Dinámico**: Todos los cambios se reflejan inmediatamente
- ✅ **Sin re-despliegue**: No necesitas volver a publicar la página
- ✅ **Tiempo real**: Los cambios aparecen instantáneamente para los clientes
- ✅ **Fácil de usar**: Interfaz amigable para gestión de productos

## 🔍 Verificación Post-Despliegue

### Lista de Pruebas:
- [ ] La página principal carga correctamente
- [ ] Las categorías muestran productos
- [ ] El carrito de compras funciona
- [ ] El proceso de checkout funciona
- [ ] Los pagos se procesan correctamente
- [ ] El panel de administración es accesible
- [ ] Se pueden crear productos desde el admin
- [ ] Los emails de confirmación se envían

### URLs Importantes:
- **Sitio Principal**: `https://tu-dominio.com`
- **Panel Admin**: `https://tu-dominio.com/admin`
- **Productos**: `https://tu-dominio.com/productos`
- **Checkout**: `https://tu-dominio.com/checkout`

## 🛠️ Solución de Problemas

### Error: "Stripe key not found"
- Verifica que `VITE_STRIPE_PUBLISHABLE_KEY` esté configurada correctamente
- Asegúrate de que empiece con `pk_live_`

### Error: "Build failed"
- Ejecuta `pnpm run lint` para verificar errores
- Revisa que todas las dependencias estén instaladas

### Productos no aparecen
- Verifica la conexión a la base de datos
- Confirma que los productos estén marcados como "activos"

## 📞 Soporte

Si encuentras problemas durante el despliegue, puedes:
1. Revisar los logs de construcción en tu plataforma de hosting
2. Verificar las variables de entorno
3. Probar localmente con `pnpm run build && pnpm run preview`

## 🎉 ¡Felicitaciones!

Una vez desplegado, tu sitio web estará listo para:
- ✅ Recibir pedidos reales
- ✅ Procesar pagos con Stripe
- ✅ Gestionar productos dinámicamente
- ✅ Administrar tu tienda online completa

**¡Tu tienda "Delicias de mi Patria" estará disponible 24/7 para tus clientes!**