import React from "react";
import {
  Card,
  createStyles,
  Group,
  Title,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import { News as NewsIcon } from "tabler-icons-react";
import { useMediaQuery } from "@mantine/hooks";

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

type Props = {};

export default function News({}: Props) {
  const { classes } = useStyles();
  const breakpoint = useMediaQuery("(min-width:790px)", false);
  return (
    <section className={classes.section}>
      <Title mb="4rem" className={classes.text}>
        Híreink <NewsIcon size={28} />
      </Title>
      <Group position="apart" grow>
        <Card sx={{ minWidth: breakpoint ? "initial" : "100%" }}>
          <Card.Section>
            <Image src="/images/ufoLamps.jpg" alt="ufo lamps" height={160} />
          </Card.Section>
          <Stack mt="1.25rem">
            <Title className={classes.text} order={5}>
              Ufo lámpák
            </Title>
            <Text className={classes.text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              quaerat perferendis ab! Possimus beatae eaque autem ab porro
              quibusdam quaerat voluptatibus quasi tempore doloribus nostrum
              animi eos est, alias iusto?
            </Text>
          </Stack>
        </Card>
        <Card sx={{ minWidth: breakpoint ? "initial" : "100%" }}>
          <Card.Section>
            <Image src="/images/ufoLamps.jpg" alt="ufo lamps" height={160} />
          </Card.Section>
          <Stack mt="1.25rem">
            <Title className={classes.text} order={5}>
              Ufo lámpák
            </Title>
            <Text className={classes.text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              quaerat perferendis ab! Possimus beatae eaque autem ab porro
              quibusdam quaerat voluptatibus quasi tempore doloribus nostrum
              animi eos est, alias iusto?
            </Text>
          </Stack>
        </Card>
        <Card sx={{ minWidth: breakpoint ? "initial" : "100%" }}>
          <Card.Section>
            <Image src="/images/ufoLamps.jpg" alt="ufo lamps" height={160} />
          </Card.Section>
          <Stack mt="1.25rem">
            <Title className={classes.text} order={5}>
              Ufo lámpák
            </Title>
            <Text className={classes.text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              quaerat perferendis ab! Possimus beatae eaque autem ab porro
              quibusdam quaerat voluptatibus quasi tempore doloribus nostrum
              animi eos est, alias iusto?
            </Text>
          </Stack>
        </Card>
      </Group>
    </section>
  );
}
