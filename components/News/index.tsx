import React from "react";
import { Card, createStyles, Title } from "@mantine/core";
import { News as NewsIcon } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  section: {
    padding: "6rem",
    backgroundColor: `${theme.colors.orange[1]}6f`,
  },
  text: {
    color: theme.colors.gray[8],
  },
}));

type Props = {};

export default function News({}: Props) {
  const { classes } = useStyles();
  return (
    <section className={classes.section}>
      <Title className={classes.text}>
        Híreink <NewsIcon size={28} />
      </Title>
    </section>
  );
}
