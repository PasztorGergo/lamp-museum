import React from "react";
import Head from "next/head";
import { createStyles, Stack, Text, Title } from "@mantine/core";
import { History } from "../components";
import { NextPage } from "next";
import connectDB from "../lib/connect";
import { Histroy } from "../models";

const useStyles = createStyles((theme) => ({
  header: {
    marginTop: "8rem",
    marginLeft: "6rem",
  },
  text: {
    color: theme.colors.gray[8],
  },
}));

const Tortenetunk: NextPage = ({ historyArray, genesis }: any) => {
  const { classes } = useStyles();
  return (
    <>
      <Head>
        <title>Történetünk | Villamostechnikai Gyűjtemény</title>
      </Head>
      <header className={classes.header}>
        <Stack>
          <Title order={1} className={classes.text}>
            Töténetünk
          </Title>
          <Text className={classes.text}>
            Tudjon meg többet a történetünkről, és jelentősebb eseményekről
            amelyek hatással voltak gyűjteményünkre!
          </Text>
        </Stack>
      </header>
      <History historyArray={historyArray} genesis={genesis} />
    </>
  );
};

export async function getServerSideProps() {
  await connectDB();

  const historyArray = JSON.parse(JSON.stringify(await Histroy.find({})))
    .sort((x: any) => x.date)
    .reverse();

  const genesis = historyArray.find((x: any) => x.genesis);

  return {
    props: {
      historyArray: (historyArray as Array<any>).filter((x: any) => !x.genesis),
      genesis,
    },
  };
}

export default Tortenetunk;
