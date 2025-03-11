"use client";

import { createGlobalStyle, ThemeProvider } from "styled-components";

import { Frame, styleReset } from "react95";
import original from "react95/dist/themes/original";
/* eslint-disable */
// @ts-ignore
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
// @ts-ignore
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

import "./globals.css";

import { AuthProvider } from "./providers/AuthProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
    background: teal;
  }
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased h-screen flex items-center justify-center">
        <AuthProvider>
          <GlobalStyles />
          <ThemeProvider theme={original}>
            <div className="max-w-3xl w-full h-full mx-auto flex flex-col">
              <div className="w-full px-4 h-full flex flex-col">
                <Header />
                <Frame shadow className="h-full">
                  <main className="p-4 flex-1">{children}</main>
                </Frame>
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
