import "../styles/global.css";
import Layout from "../components/layout";

export default function App({ Component, pageProps }) {
  console.log("Rendering Layout");
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
