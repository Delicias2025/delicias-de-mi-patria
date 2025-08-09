// Configuración de Stripe
export const STRIPE_CONFIG = {
  publishableKey: 'pk_live_51RrnFeFUnvg6QDt7PtljbmwmA9k2ajnhFm2KEDLQ7ldJ3qZfxMS5mtfR2mCsHvOXuZonIzggaKdXTMwpffDiWBve00ww5Cfe2A',
  // Para la secret key, la configuraremos de forma segura más adelante
  secretKey: '', // NUNCA pongas la secret key aquí
};

// Configuración para el entorno
export const PAYMENT_CONFIG = {
  currency: 'usd',
  country: 'US',
  supportedPaymentMethods: ['card', 'paypal'],
  locale: 'es',
};