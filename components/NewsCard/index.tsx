import {
  Card,
  Image,
  Text,
  Title,
  createStyles,
  Stack,
  Modal,
  Button,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import React from "react";
import DateText from "../DateText";

type Props = { src: string; title: string; text: string; date: string };

const useStyles = createStyles((theme) => ({
  text: {
    color: theme.colors.gray[8],
  },
}));

export default function NewsCard({ src, text, title, date }: Props) {
  const { classes } = useStyles();
  const breakpoint = useMediaQuery("(min-width: 790px)", false);
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Card sx={{ minWidth: breakpoint ? "initial" : "100%" }} onClick={open}>
        <Card.Section>
          <Image src={src} alt={title} height={160} />
        </Card.Section>
        <Stack mt="1.25rem">
          <Title className={classes.text} order={5}>
            {title}
          </Title>
          <DateText date={date} />
          <Text className={classes.text}>
            {text.substring(0, (text.length / 100) * 10)}...
          </Text>
          <Button variant="subtle" color="orange" onClick={open}>
            Hír megnyitása
          </Button>
        </Stack>
      </Card>
      <Modal opened={opened} onClose={close} overflow="inside">
        <Image src={src} alt={title} height={300} />
        <Title className={classes.text} order={2}>
          {title}
        </Title>
        <Text>{text}</Text>
      </Modal>
    </>
  );
}
