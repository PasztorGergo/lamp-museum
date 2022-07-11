import React from "react";
import Head from "next/head";
import { createStyles, Stack, Text, Title } from "@mantine/core";
import { History } from "../components";
import { NextPage } from "next";
import connectDB from "../lib/connect";
import { getHistory } from "../lib/fetch";

const useStyles = createStyles((theme) => ({
  header: {
    marginTop: "8rem",
    marginLeft: "6rem",
  },
  text: {
    color: theme.colors.gray[8],
  },
}));

const Tortenetunk: NextPage = ({ historyArray }: any) => {
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
            Tudjon meg többet a történetünkről, és jelenetősebb eseményekről
            amelyek hatással voltak cégünkre!
          </Text>
        </Stack>
      </header>
      <History historyArray={historyArray} />
    </>
  );
};

export async function getStaticProps() {
  await connectDB();

  const historyArray = await getHistory();

  return {
    props: {
      historyArray,
    },
  };
}

export default Tortenetunk;
