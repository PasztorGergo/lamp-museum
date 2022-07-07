import React from "react";
import {
  Group,
  Image,
  Paper,
  Stack,
  Title,
  Text,
  createStyles,
} from "@mantine/core";
import DateText from "../DateText";

type Props = {
  src: string;
  type: string;
  name: string;
  description: string;
  date: string;
};

const useStyles = createStyles((theme) => ({
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
}: Props) {
  const { classes } = useStyles();
  return (
    <Paper shadow="xs" withBorder sx={{ marginTop: "6rem", maxWidth: "50vw" }}>
      <Group>
        <Image src={src} alt={name} />
        <Stack>
          <Title className={classes.text} order={3}>
            {name}
          </Title>
          <Group>
            <DateText date={date} />
            <Text className={classes.text}>Típus: {type}</Text>
          </Group>
          <Text className={classes.text}>{description}</Text>
        </Stack>
      </Group>
    </Paper>
  );
}
