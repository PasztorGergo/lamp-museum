import React from "react";
import {
  createStyles,
  Group,
  Paper,
  Stack,
  Text,
  Title,
  useMantineTheme,
  Divider,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import ScrollIndicator from "../ScrollIndicator";

const useStyles = createStyles((theme) => ({
  header: {
    height: "90vh",
    marginTop: "6rem",
    background: `${theme.colors.orange[0]}6f`,
    backgroundImage: "url('/images/lampSaving-removebg-preview.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain, cover",
    backgroundPositionX: "100%",
    width: "100%",
    position: "relative",
    display: "grid",
  },
  stack: {
    height: "100%",
    [theme.fn.largerThan("sm")]: {
      width: "40%",
    },
  },
  group: {
    height: "100%",
  },
  imageContainer: {
    height: "100%",
  },
  performance: {
    position: "absolute",
    top: "90%",
    width: "60%",
    margin: "auto",
    zIndex: 10,
    placeSelf: "center",
  },
}));

export default function Hero() {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const breakPoint = useMediaQuery("(min-width: 790px)", false);

  return (
    <header className={classes.header}>
      <Group pl={breakPoint ? "6em" : "xl"} className={classes.group}>
        <Stack className={classes.stack} justify="center">
          <Title sx={{ color: theme.colors.gray[8] }} order={1}>
            A múlt fényeinek nyomában
          </Title>
          <Text size="lg" color="gray" sx={{ marginBottom: "8rem" }}>
            Megmentjük megőrizzük, és megmutatjuk az utókornak a történelem
            fényforrásait amelyeket ránk hagytak őseink.
          </Text>
          <Stack justify="center" sx={{ textAlign: "center" }}>
            <Text>Tudjon meg többet</Text>
            <ScrollIndicator />
          </Stack>
        </Stack>
      </Group>
      <Paper p="md" withBorder className={classes.performance}>
        <Group position="center" grow>
          <Stack justify="center" align="center">
            <Title order={5}>Gyűjteményünk</Title>
            <Text>+5000 lámpa</Text>
          </Stack>
          <Divider sx={{ height: "100%" }} orientation="vertical" />
          <Stack justify="center" align="center">
            <Title order={5}>Városok</Title>
            <Text>+10</Text>
          </Stack>
          <Divider sx={{ height: "100%" }} orientation="vertical" />
          <Stack justify="center" align="center">
            <Title order={5}>Cikkek</Title>
            <Text>+10</Text>
          </Stack>
        </Group>
      </Paper>
    </header>
  );
}
