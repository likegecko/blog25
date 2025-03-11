"use client";

import original from "react95/dist/themes/original";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Frame } from "react95/dist/Frame/Frame";
import styleReset from "react95/dist/common/styleReset";

import Header from "./Header";
import Footer from "./Footer";

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('/fonts/ms_sans_serif.woff2') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('/fonts/ms_sans_serif_bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
    background: teal;
  }
`;

const UiLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
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
    </>
  );
};

export default UiLayout;
