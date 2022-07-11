import React, { useEffect, useState } from "react";
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
    width: "100%",
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
  newsArray: any;
};

export default function News({ newsArray }: Props) {
  const [page, setPage] = useState(1);
  const [news, setNews] = useState<any>(newsArray[0] || false);
  const { classes } = useStyles();
  const breakpoint = useMediaQuery("(min-width:790px)", false);

  useEffect(() => {
    setNews(newsArray[page - 1] || false);
  }, [page]);

  return (
    <section className={classes.section}>
      <Title mb="4rem" className={classes.text}>
        Híreink <NewsIcon size={28} />
      </Title>
      <Group position="apart" grow>
        {news ? (
          <NewsCard
            key={page}
            src={news.src}
            title={news.title}
            text={news.text}
            date={news.date}
          />
        ) : (
          <Text>Jelenleg nincsenek új híreink</Text>
        )}
      </Group>
      <Pagination
        page={page}
        onChange={(e) => setPage(e)}
        total={newsArray.length}
      />
    </section>
  );
}
