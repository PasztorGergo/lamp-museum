import type { NextPage } from "next";
import Head from "next/head";
import { Hero, News, About } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Villamostechnikai Gyűjtemény</title>
      </Head>
      <Hero />
      <main>
        <About />
        <News />
      </main>
    </>
  );
};

export default Home;
