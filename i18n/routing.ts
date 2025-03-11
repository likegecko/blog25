import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ko", "jp"],
  defaultLocale: "ko",
});

export type Locale = (typeof routing.locales)[number];
