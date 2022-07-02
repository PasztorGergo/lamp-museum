import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppShell } from "@mantine/core";
import { Navigation } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppShell navbar={<Navigation />}>
      <Component {...pageProps} />
    </AppShell>
  );
}

export default MyApp;
