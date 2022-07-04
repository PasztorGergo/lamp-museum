import React from "react";
import {
  Footer as F,
  Title,
  createStyles,
  Button,
  Stack,
  List,
  Anchor,
  ThemeIcon,
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
      <Stack>
        <Title className={classes.text}>Elérhetőségeink</Title>
        <List>
          <List.Item
            icon={
              <ThemeIcon className={classes.icon}>
                <BrandTwitter />
              </ThemeIcon>
            }
          >
            <Anchor href="https://twitter.com">@lampa-muzeum</Anchor>
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon className={classes.icon}>
                <BrandFacebook />
              </ThemeIcon>
            }
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
          >
            <Anchor href="mailto:lampamuzeum007@gmail.com">
              lampamuzeum007@gmail.com
            </Anchor>
          </List.Item>
        </List>
      </Stack>
    </F>
  );
}
