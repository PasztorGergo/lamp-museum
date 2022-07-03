import { Title, Blockquote, Group, createStyles, Image } from "@mantine/core";
import React from "react";

type Props = {};

const useStyles = createStyles((theme) => ({
  imageOne: {
    width: "30%",
    height: "auto",
  },
  section: {
    marginTop: "12rem",
    padding: "0 6rem",
  },
  title: {
    marginBottom: "2rem",
  },
}));

export default function About({}: Props) {
  const { classes } = useStyles();
  return (
    <section className={classes.section} style={{ height: "100vh" }}>
      <Title className={classes.title}>Kik vagyunk?</Title>
      <Group position="center" spacing="xl">
        <Image
          src="/images/measure.jpg"
          className={classes.imageOne}
          alt="Fénykép Csíkász Leventéről"
          radius="sm"
        />
        <Blockquote cite="- Csíkász Levente" sx={{ width: "50%" }}>
          Célom a Magyar ipar világítástechnika, és villamos ipar megmentése,
          megmutatása az utókornak. Szeretném az összes, az országban
          legyártott, illetve a keleti blokkban forgalomba hozott összes
          közvilágítási lámpatestet összegyűjteni, és bemutatni a
          nagyközönségnek.
        </Blockquote>
      </Group>
    </section>
  );
}
