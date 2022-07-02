import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header, Navigation } from "../components";
import NavProvider from "../Providers/navProvider";
import { AppShell } from "@mantine/core";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavProvider>
      <AppShell navbar={<Navigation />} header={<Header />}>
        <Component {...pageProps} />
      </AppShell>
    </NavProvider>
  );
}

export default MyApp;
