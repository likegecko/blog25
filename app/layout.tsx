import { AuthProvider } from "./providers/AuthProvider";

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import UiLayout from "./components/UiLayout";

import "./globals.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="antialiased h-screen flex items-center justify-center">
        <NextIntlClientProvider messages={messages}>
          <AuthProvider>
            <UiLayout>{children}</UiLayout>
          </AuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
