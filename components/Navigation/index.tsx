import React from "react";
import { Navbar, Anchor, Group, Stack, createStyles } from "@mantine/core";
import Link from "next/link";
import { useNav } from "../../Providers/navProvider";

type Props = {};

const useStyles = createStyles((theme) => ({
  brand: {
    fontWeight: 900,
    textTransform: "uppercase",
  },
  nav: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

export default function Navigation({}: Props) {
  const { open, setOpen }: any = useNav();
  const { classes } = useStyles();
  return (
    <Navbar
      height="6rem"
      p="xs"
      width={{ sm: "10rem", base: "100%" }}
      fixed
      className={classes.nav}
      hidden={!open}
    >
      <Navbar.Section>
        <Anchor component={Link} href="/" className={classes.brand}>
          Lámpa Múzeum
        </Anchor>
      </Navbar.Section>
      <Navbar.Section mt="lg">
        <Stack>
          <Anchor component={Link} href="/">
            Történetünk
          </Anchor>
          <Anchor component={Link} href="/">
            Gyűjteményünk
          </Anchor>
          <Anchor component={Link} href="/">
            Referenciák
          </Anchor>
          <Anchor component={Link} href="/">
            Támogatóink
          </Anchor>
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}
