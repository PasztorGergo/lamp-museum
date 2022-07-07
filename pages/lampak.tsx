import Head from "next/head";
import { NextPage } from "next/types";
import React from "react";
import { LampDetails } from "../components";
import connectDB from "../lib/connect";
import { getLampByType } from "../lib/fetch";

const Lampak: NextPage = ({ lamps }: any) => {
  return (
    <>
      <Head>
        <title>Lámpák</title>
      </Head>
      {lamps.map(({ src, name, type, description, date }: any) => (
        <LampDetails
          date={date}
          src={src}
          name={name}
          type={type}
          description={description}
        />
      ))}
    </>
  );
};

export async function getStaticProps() {
  await connectDB();

  const lamps = await getLampByType("lamp");

  return {
    props: {
      lamps,
    },
  };
}

export default Lampak;
