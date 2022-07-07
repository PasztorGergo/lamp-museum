import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import {
  createStyles,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { Testimonial } from "../components";

const useStyles = createStyles((theme) => ({
  section: {
    placeItems: "center",
    alignContent: "center",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gridGap: "20px",
    padding: " 3rem 2rem 3rem",
    [theme.fn.largerThan("sm")]: {
      padding: "3rem 6rem 3rem",
    },
  },
}));

const Referenciak: NextPage = () => {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  return (
    <>
      <Head>
        <title>Referenciák | Villamostechnikai Gyűjtemény</title>
      </Head>
      <Stack pt="8rem" px="6rem">
        <Title sx={{ color: theme.colors.gray[8] }}>Referenciák</Title>
        <Text size="lg" sx={{ color: theme.colors.gray[8] }}>
          Itt találja Partnereink véleményet munkáságunkról.
        </Text>
      </Stack>

      <section className={classes.section}>
        <Testimonial name="John Doe" profileImg="" comment="Hi" />
        <Testimonial name="John Doe" profileImg="" comment="Hi" />
        <Testimonial name="John Doe" profileImg="" comment="Hi" />
        <Testimonial name="John Doe" profileImg="" comment="Hi" />
        <Testimonial name="John Doe" profileImg="" comment="Hi" />
      </section>
      <Title
        sx={{ width: "100%", color: theme.colors.gray[8] }}
        align="center"
        mb="3rem"
      >
        Lépjen kapcsolatba velünk és legyen Ön a következő értékelőnk!
      </Title>
    </>
  );
};

export default Referenciak;
