import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header, Footer } from "../components";
import { AppShell } from "@mantine/core";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppShell header={<Header />} footer={<Footer />}>
      <Component {...pageProps} />
    </AppShell>
  );
}

export default MyApp;
