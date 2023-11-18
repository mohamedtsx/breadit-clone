import { type IntlConfig } from "next-intl";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { getRequestConfig, unstable_setRequestLocale } from "next-intl/server";

import { locales } from "./config";

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`../messages/${locale}.json`)).default,
  timeZone: "Asia/Riyadh",
  formats: getGlobalFormatOptions(locale),
}));

export function getGlobalFormatOptions(
  locale: "en" | "ar" | Record<never, never>
): IntlConfig["formats"] {
  return {
    dateTime: {
      date: {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
        timeZone: "Asia/Riyadh",
        numberingSystem: locale === "ar" ? "arab" : "latn",
      },
      time: {
        dateStyle: "medium",
        timeStyle: "medium",
        timeZone: "Asia/Riyadh",
        numberingSystem: locale === "ar" ? "arab" : "latn",
      },
    },
    number: {
      currency: {
        style: "currency",
        currency: "KWD",
        maximumFractionDigits: 1,
        numberingSystem: locale === "ar" ? "arab" : "latn",
      },
    },
  };
}

// export { useFormatter } from "@/lib/hooks/use-formatter";
// export { useLocale } from "@/lib/hooks/use-locale";

const {
  Link,
  redirect: __redirect,
  usePathname,
  useRouter,
} = createSharedPathnamesNavigation({
  locales,
});

// Hack to make typescript happy
const redirect: typeof __redirect = __redirect;

export { redirect, Link, usePathname, useRouter };
export { unstable_setRequestLocale as setRequestLocale };
