import type { NextPage } from "next";
import Head from "next/head";
import { Hero, News, About } from "../components";
import connectDB from "../lib/connect";
import { getNews } from "../lib/fetch";

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

export async function getStaticProps() {
  await connectDB();
  const newsArray = await getNews();

  return {
    props: {
      newsArray,
    },
  };
}

export default Home;
