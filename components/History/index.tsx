import React from "react";
import {
  Timeline,
  Text,
  Title,
  Image,
  Group,
  createStyles,
} from "@mantine/core";
import { Bulb } from "tabler-icons-react";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  main: {
    [theme.fn.largerThan("sm")]: {
      margin: "3rem 0 6rem 6rem",
    },
    [theme.fn.smallerThan("sm")]: {
      margin: "3rem 0.5rem 6rem 1rem",
    },
  },
  text: {
    color: theme.colors.gray[8],
  },
}));

type Props = {
  historyArray: Array<any>;
  genesis: any;
};

export default function History({ historyArray, genesis }: Props) {
  const { classes } = useStyles();
  const breakpoint = useMediaQuery("(min-width: 690px)", false);
  return (
    <section className={classes.main}>
      <Title>{genesis.title}</Title>
      <Text>{genesis.text}</Text>
      <Group sx={{ width: "100%" }} grow>
        {genesis.src.map((img: any) => (
          <Image src={img} radius="sm" />
        ))}
      </Group>
      <Timeline active={Infinity} color="orange" bulletSize={32} lineWidth={3}>
        {historyArray.map(({ title, text, src }: any, id: number) => (
          <Timeline.Item
            key={id}
            bullet={<Bulb size={24} />}
            title={
              <Title order={2} className={classes.text}>
                {title}
              </Title>
            }
          >
            <Group sx={{ width: "100%" }} position="apart">
              <Text sx={{ width: "50%" }} className={classes.text}>
                {text}
              </Text>
              <Image
                src={src}
                radius="sm"
                width={breakpoint ? "50%" : "100%"}
              />
            </Group>
          </Timeline.Item>
        ))}
      </Timeline>
    </section>
  );
}
