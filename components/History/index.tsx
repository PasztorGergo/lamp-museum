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

const useStyles = createStyles((theme) => ({
  main: {
    margin: " 3rem 0 6rem 6rem",
  },
  text: {
    color: theme.colors.gray[8],
  },
}));

export default function History() {
  const { classes } = useStyles();
  return (
    <section className={classes.main}>
      <Timeline active={Infinity} color="orange" bulletSize={32} lineWidth={3}>
        <Timeline.Item
          bullet={<Bulb size={24} />}
          title={
            <Title order={2} className={classes.text}>
              Ufo lámpák megmentése
            </Title>
          }
        >
          <Group sx={{ width: "100%" }} position="apart">
            <Text sx={{ width: "50%" }} className={classes.text}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              ullam cupiditate amet voluptas neque vero nam, iusto est ratione
              totam vel pariatur voluptatem, deleniti minima odio quaerat
              impedit perspiciatis minus.
            </Text>
            <Image src="/images/ufoLamps.jpg" radius="sm" width="30%" />
          </Group>
        </Timeline.Item>
        <Timeline.Item
          bullet={<Bulb size={24} />}
          title={
            <Title order={2} className={classes.text}>
              Ufo lámpák megmentése
            </Title>
          }
        >
          <Group sx={{ width: "100%" }} position="apart">
            <Text sx={{ width: "50%" }} className={classes.text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus ab quae pariatur voluptatem explicabo tempore
              reprehenderit minus laborum labore necessitatibus corrupti
              officiis, omnis magnam eligendi iste maiores voluptatum cumque
              iusto!
            </Text>
            <Image src="/images/ufoLamps.jpg" radius="sm" width="30%" />
          </Group>
        </Timeline.Item>
      </Timeline>
    </section>
  );
}
