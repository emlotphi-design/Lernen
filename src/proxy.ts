import createIntlMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { routing } from "@/i18n/routing";
import { refreshSession } from "@/lib/supabase/middleware";

const intlProxy = createIntlMiddleware(routing);

export default async function proxy(request: NextRequest) {
  const response = intlProxy(request);
  return refreshSession(request, response);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
