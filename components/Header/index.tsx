import React, { useState } from "react";
import {
  Anchor,
  Burger,
  Container,
  Group,
  Header as H,
  MediaQuery,
  useMantineTheme,
} from "@mantine/core";
import { useNav } from "../../Providers/navProvider";
import Link from "next/link";
import { useMediaQuery, useWindowScroll } from "@mantine/hooks";

type Props = {};

export default function Header({}: Props) {
  const breakPoint = useMediaQuery("(min-width: 790px)");
  const [scroll, scrollTo] = useWindowScroll();
  const { open, setOpen }: any = useNav();
  const theme = useMantineTheme();
  return (
    <H
      height="6rem"
      px={breakPoint ? "6rem" : "xl"}
      sx={{ borderBottom: "none", background: "transparent" }}
      fixed
    >
      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Group position="apart" sx={{ height: "100%" }}>
          <Anchor component={Link} href="/">
            <a className="brand">Lámpa Múzeum</a>
          </Anchor>
          <Burger
            opened={open}
            onClick={() => setOpen((prev: boolean) => !prev)}
            size="md"
            color="#ff9e2f"
            mr="xl"
            sx={{ height: "100%" }}
          />
        </Group>
      </MediaQuery>
      <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
        <Group position="apart" sx={{ height: "100%" }}>
          <Anchor component={Link} href="/">
            <a className="brand">Lámpa Múzeum</a>
          </Anchor>
          <Group position="right" spacing="lg">
            <Anchor component={Link} href="/tortenetunk" className="nav-link">
              <a className="nav-link">Történetünk</a>
            </Anchor>
            <Anchor component={Link} href="/" className="nav-link">
              <a className="nav-link">Gyűjteményünk</a>
            </Anchor>
            <Anchor component={Link} href="/referenciak" className="nav-link">
              <a className="nav-link">Referenciák</a>
            </Anchor>
            <Anchor component={Link} href="/tamogatoink">
              <a className="nav-link">Támogatóink</a>
            </Anchor>
          </Group>
        </Group>
      </MediaQuery>
    </H>
  );
}
