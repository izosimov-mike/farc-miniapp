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
      // Farcaster Mini-App Manifest Specification
      name: "Monad Farcaster MiniApp Template",
      description: "A template for building mini-apps on Farcaster and Monad",
      icon: `${APP_URL}/images/icon.png`,
      url: `${APP_URL}`,
      screenshot: `${APP_URL}/images/feed.png`,
      screenshots: [],
      tags: ["monad", "farcaster", "miniapp", "template"],
      category: "developer-tools",
      buttonText: "Launch Template",
      splashImage: `${APP_URL}/images/splash.png`,
      splashBackgroundColor: "#ffffff",
      webhookUrl: `${APP_URL}/api/webhook`,
      // Required fields for mini-app validation
      version: "1.0.0",
      permissions: [],
      // Frame metadata for compatibility
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

    return NextResponse.json(farcasterConfig, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  } catch (error) {
    // Fallback конфигурация в случае ошибки
    const fallbackConfig = {
      name: "Monad Farcaster MiniApp Template",
      description: "A template for building mini-apps on Farcaster and Monad",
      icon: "https://farc-miniapp.vercel.app/images/icon.png",
      url: "https://farc-miniapp.vercel.app",
      screenshot: "https://farc-miniapp.vercel.app/images/feed.png",
      screenshots: [],
      tags: ["monad", "farcaster", "miniapp", "template"],
      category: "developer-tools",
      buttonText: "Launch Template",
      splashImage: "https://farc-miniapp.vercel.app/images/splash.png",
      splashBackgroundColor: "#ffffff",
      webhookUrl: "https://farc-miniapp.vercel.app/api/webhook",
      version: "1.0.0",
      permissions: [],
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

    return NextResponse.json(fallbackConfig, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
