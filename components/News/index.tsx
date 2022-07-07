import React from "react";
import {
  Card,
  createStyles,
  Group,
  Title,
  Image,
  Stack,
  Text,
  Pagination,
} from "@mantine/core";
import { News as NewsIcon } from "tabler-icons-react";
import { useMediaQuery } from "@mantine/hooks";
import NewsCard from "../NewsCard";

const useStyles = createStyles((theme) => ({
  section: {
    padding: "2rem",
    backgroundColor: `${theme.colors.orange[1]}6f`,
    [theme.fn.largerThan("sm")]: {
      padding: "6rem",
    },
  },
  text: {
    color: theme.colors.gray[8],
  },
}));

type Props = {
  newsArray: Array<any>;
};

export default function News({ newsArray }: Props) {
  const { classes } = useStyles();
  const breakpoint = useMediaQuery("(min-width:790px)", false);
  return (
    <section className={classes.section}>
      <Title mb="4rem" className={classes.text}>
        Híreink <NewsIcon size={28} />
      </Title>
      <Group position="apart" grow>
        {newsArray.map(({ src, title, text, date }) => (
          <NewsCard src={src} title={title} text={text} date={date} />
        ))}
      </Group>
      <Pagination total={Math.ceil(newsArray.length / 3)} />
    </section>
  );
}
