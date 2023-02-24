import { Html, Head, Main, NextScript } from "next/document";
import SEO from "@components/SEO";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;0,900;1,400&display=swap"
          rel="stylesheet"
        />
        <SEO />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
