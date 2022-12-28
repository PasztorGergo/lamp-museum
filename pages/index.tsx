import type { NextPage } from "next";
import Head from "next/head";
import { Hero, News, About } from "../components";
import connectDB from "../lib/connect";
import { News as n } from "../models";

const Home: NextPage = ({ newsArray, imgArray }: any) => {
  return (
    <>
      <Head>
        <title>Villamostechnikai Gyűjtemény</title>
        <meta
          name="description"
          content="A Villamostechnikai gyűjtemény hivatalos weboldala. Megmentjük megőrizzük, és megmutatjuk az utókornak a történelem
            fényforrásait amelyeket ránk hagytak őseink."
        />
        <meta
          name="keywords"
          content="Villamostechnikai gyűjtemény, lámpa, lámpa gyűjtemény"
        />
        <meta name="og:title" content="Villamostechnikai gyűjtemény" />
        <meta
          name="og:description"
          content="A Villamostechnikai gyűjtemény hivatalos weboldala. Megmentjük megőrizzük, és megmutatjuk az utókornak a történelem
            fényforrásait amelyeket ránk hagytak őseink."
        />
        <meta name="og:image" content="" />
        <meta name="og:image-width" content="" />
        <meta name="og:image-height" content="" />
      </Head>
      <Hero imgArray={imgArray} />
      <main>
        <About />
        <News newsArray={newsArray} />
      </main>
    </>
  );
};

export async function getStaticProps() {
  await connectDB();

  const newsArray = JSON.parse(JSON.stringify(await n.find({})))
    .sort((x: any) => x.date)
    .reverse();

  return {
    props: {
      newsArray,
    },
    revalidate: 60,
  };
}

export default Home;
