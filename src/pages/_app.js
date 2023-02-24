import Layout from "@components/Layout";
import { GlobalStyle } from "@styles/globalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
