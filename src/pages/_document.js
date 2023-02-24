import { Html, Head, Main, NextScript } from "next/document";
import SEO from "@components/SEO";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <SEO />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
