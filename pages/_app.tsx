import { Layout } from "@/components/Layout";
import "@/styles/main.scss";
import type { AppProps } from "next/app";

import { AuthContextProvider } from "../context/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
}
