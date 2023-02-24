import Layout from "@components/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "@styles/globalStyles";

function MyApp({ Component, pageProps, categories }) {
  return (
    <>
      <GlobalStyle />
      <ToastContainer theme="dark" />
      <Layout categories={categories}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
