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
import { useDocumentTitle } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  main: {
    margin: " 3rem 0 6rem 6rem",
  },
  text: {
    color: theme.colors.gray[8],
  },
}));

type Props = {
  historyArray: Array<any>;
};

export default function History({ historyArray }: Props) {
  const { classes } = useStyles();
  return (
    <section className={classes.main}>
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
              <Image src={src} radius="sm" width="30%" />
            </Group>
          </Timeline.Item>
        ))}
      </Timeline>
    </section>
  );
}
