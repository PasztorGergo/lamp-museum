import type { NextPage } from "next";
import Head from "next/head";
import { Hero, News, About } from "../components";
import connectDB from "../lib/connect";
import { News as n } from "../models";

const Home: NextPage = ({ newsArray }: any) => {
  return (
    <>
      <Head>
        <title>Villamostechnikai Gyűjtemény</title>
      </Head>
      <Hero />
      <main>
        <About />
        <News newsArray={newsArray} />
      </main>
    </>
  );
};

export async function getServerSideProps() {
  await connectDB();

  const newsArray = JSON.parse(JSON.stringify(await n.find({})))
    .sort((x: any) => x.date)
    .reverse();

  return {
    props: {
      newsArray,
    },
  };
}

export default Home;
