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
      <Title mb="4rem" className={classes.text}>
        Híreink <NewsIcon size={28} />
      </Title>
      <Group position="apart">
        <Card sx={{ width: "20vw" }}>
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
        <Card sx={{ width: "20vw" }}>
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
        <Card sx={{ width: "20vw" }}>
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
