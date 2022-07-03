import React from "react";
import {
  Container,
  createStyles,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  header: {
    height: "100vh",
    marginTop: "6rem",
    padding: `auto ${theme.spacing.xl}`,
    [theme.fn.largerThan("sm")]: {
      padding: "auto 6rem",
    },
  },
}));

export default function Hero() {
  const { classes } = useStyles();
  return (
    <header className={classes.header}>
      <Group>
        <Stack>
          <Title color="" order={1}>
            A múlt fényeinek nyomában
          </Title>
          <Text color="gray">
            Megmentjük megőrizzük, és megmutatjuk az utókornak a történelem
            fényforrásait amelyeket ránk hagytak őseink.
          </Text>
        </Stack>
      </Group>
    </header>
  );
}
