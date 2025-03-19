import Layout from "../components/Layout";
import "@/styles/globals.css";
import Modal from "components/Modal";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <Modal isOpen/>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
  )
}
