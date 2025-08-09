// Supabase configuration with environment variables
export const supabaseConfig = {
  url: import.meta.env.VITE_SUPABASE_URL || '',
  anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || '',
  isEnabled: !!(import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY)
};

console.log('Supabase config:', {
  url: supabaseConfig.url ? 'Set' : 'Missing',
  anonKey: supabaseConfig.anonKey ? 'Set' : 'Missing',
  isEnabled: supabaseConfig.isEnabled
});