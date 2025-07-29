export const MESSAGE_EXPIRATION_TIME = 1000 * 60 * 60 * 24 * 30; // 30 day

const getAppUrl = () => {
  // Попробуем получить URL из различных источников
  const url = process.env.NEXT_PUBLIC_URL || 
              process.env.NEXT_PUBLIC_VERCEL_URL || 
              process.env.VERCEL_URL || 
              (typeof window !== 'undefined' ? window.location.origin : null) ||
              'https://farc-miniapp.vercel.app'; // Fallback URL
  
  // Убедимся, что URL начинается с http/https
  if (url && !url.startsWith('http')) {
    return `https://${url}`;
  }
  
  return url;
};

const APP_URL = getAppUrl();

if (!APP_URL) {
  throw new Error('NEXT_PUBLIC_URL or NEXT_PUBLIC_VERCEL_URL is not set');
}

export { APP_URL };
