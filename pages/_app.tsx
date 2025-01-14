import "../styles/globals.css";
import type { AppProps } from "next/app";
import PageLayout from "../components/layout/PageLayout";
import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider } from "next-themes";

import { components } from "../components/mdxStyling";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
      <PageLayout>
        <MDXProvider components={components}>
          <Component {...pageProps} />
        </MDXProvider>
      </PageLayout>
    </ThemeProvider>
  );
}

export default MyApp;
