import React from "react";
import {
  Group,
  Image,
  Paper,
  Stack,
  Title,
  Text,
  createStyles,
  Card,
} from "@mantine/core";
import DateText from "../DateText";

const useStyles = createStyles((theme) => ({
  card: {
    [theme.fn.largerThan("xs")]: {
      width: "70vw",
    },
    [theme.fn.largerThan("sm")]: {
      width: "25vw",
    },
  },
  text: {
    color: theme.colors.gray[8],
  },
}));

export default function LampDetails({
  src,
  type,
  name,
  description,
  date,
}: any) {
  const { classes } = useStyles();
  return (
    <Card shadow="xs" withBorder sx={{ marginTop: "6rem", maxWidth: "25vw" }}>
      <Card.Section>
        <Image src={src} alt={name} />
      </Card.Section>
      <Card.Section>
        <Stack p="xl">
          <Title className={classes.text} order={3}>
            {name}
          </Title>
          <Text color="dimmed" size="sm">
            {date}
          </Text>
          <Text className={classes.text}>{description}</Text>
        </Stack>
      </Card.Section>
    </Card>
  );
}
