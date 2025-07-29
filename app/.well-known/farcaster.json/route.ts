import { NextResponse } from "next/server";

// Определяем APP_URL более надежным способом
const getAppUrl = () => {
  return process.env.NEXT_PUBLIC_URL || 
         process.env.NEXT_PUBLIC_VERCEL_URL || 
         process.env.VERCEL_URL || 
         'http://localhost:3000';
};

export async function GET() {
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
}
