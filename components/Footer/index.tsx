import React from "react";
import {
  Footer as F,
  Title,
  createStyles,
  Stack,
  List,
  Anchor,
  ThemeIcon,
  Text,
  Group,
} from "@mantine/core";
import { BrandFacebook, BrandTwitter, Mail } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  footer: {
    backgroundColor: theme.colors.gray[8],
    padding: " 2rem 6rem",
  },
  text: {
    color: theme.colors.gray[1],
  },
  icon: {
    color: theme.colors.gray[0],
    background: "none",
  },
}));

export default function Footer() {
  const { classes } = useStyles();
  return (
    <F height="30vh" className={classes.footer}>
      <Group position="apart" align="center">
        <Stack>
          <Title className={classes.text}>Elérhetőségeink</Title>
          <List>
            <List.Item
              icon={
                <ThemeIcon className={classes.icon}>
                  <BrandTwitter />
                </ThemeIcon>
              }
              id="twitter"
            >
              <Anchor href="https://twitter.com">@lampa-muzeum</Anchor>
            </List.Item>
            <List.Item
              icon={
                <ThemeIcon className={classes.icon}>
                  <BrandFacebook />
                </ThemeIcon>
              }
              id="facebook"
            >
              <Anchor href="https://www.facebook.com/levente.csikasz.77">
                Lámpa múzeum
              </Anchor>
            </List.Item>
            <List.Item
              icon={
                <ThemeIcon className={classes.icon}>
                  <Mail />
                </ThemeIcon>
              }
              id="email"
            >
              <Anchor href="mailto:lampamuzeum007@gmail.com">
                lampamuzeum007@gmail.com
              </Anchor>
            </List.Item>
          </List>
        </Stack>
        <Stack align="center" justify="center">
          <Text className={classes.text}>
            <strong>Lámpa múzeum</strong> | Minden jog fentartva! &copy;{" "}
            {new Date().getUTCFullYear()}
          </Text>
          <Text size="xs" className={classes.text}>
            Készítette{" "}
            <Anchor size="xs" href="https://gergopasztor.com">
              Pásztor Gergő
            </Anchor>
          </Text>
        </Stack>
      </Group>
    </F>
  );
}
