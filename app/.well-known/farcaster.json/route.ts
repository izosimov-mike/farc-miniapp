import { NextResponse } from "next/server";

// Определяем APP_URL более надежным способом
const getAppUrl = () => {
  // Попробуем получить URL из различных источников
  const url = process.env.NEXT_PUBLIC_URL || 
              process.env.NEXT_PUBLIC_VERCEL_URL || 
              process.env.VERCEL_URL || 
              'https://farc-miniapp.vercel.app'; // Fallback URL
  
  // Убедимся, что URL начинается с http/https
  if (url && !url.startsWith('http')) {
    return `https://${url}`;
  }
  
  return url;
};

export async function GET() {
  try {
    const APP_URL = getAppUrl();
    
    const farcasterConfig = {
      // TODO: Add your own account association
      frame: {
        version: "1",
        name: "Monad Farcaster MiniApp Template",
        iconUrl: `${APP_URL}/images/icon.png`,
        homeUrl: `${APP_URL}`,
        imageUrl: `${APP_URL}/images/feed.png`,
        screenshotUrls: [],
        tags: ["monad", "farcaster", "miniapp", "template"],
        primaryCategory: "developer-tools",
        buttonTitle: "Launch Template",
        splashImageUrl: `${APP_URL}/images/splash.png`,
        splashBackgroundColor: "#ffffff",
        webhookUrl: `${APP_URL}/api/webhook`,
      },
    };

    return NextResponse.json(farcasterConfig);
  } catch (error) {
    // Fallback конфигурация в случае ошибки
    const fallbackConfig = {
      frame: {
        version: "1",
        name: "Monad Farcaster MiniApp Template",
        iconUrl: "https://farc-miniapp.vercel.app/images/icon.png",
        homeUrl: "https://farc-miniapp.vercel.app",
        imageUrl: "https://farc-miniapp.vercel.app/images/feed.png",
        screenshotUrls: [],
        tags: ["monad", "farcaster", "miniapp", "template"],
        primaryCategory: "developer-tools",
        buttonTitle: "Launch Template",
        splashImageUrl: "https://farc-miniapp.vercel.app/images/splash.png",
        splashBackgroundColor: "#ffffff",
        webhookUrl: "https://farc-miniapp.vercel.app/api/webhook",
      },
    };

    return NextResponse.json(fallbackConfig);
  }
}
