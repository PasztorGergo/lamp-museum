import React from "react";
import {
  Anchor,
  Burger,
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
  const breakPoint = useMediaQuery("(min-width: 790px)", false);
  const [scroll, scrollTo] = useWindowScroll();
  const { open, setOpen }: any = useNav();
  const theme = useMantineTheme();
  return (
    <H
      height="6rem"
      px={breakPoint ? "6em" : "xl"}
      sx={{
        borderBottom: scroll.y > 10 ? "1px solid #e9ecef" : "none",
        background:
          scroll.y > 10 ? theme.colors.orange[1] : theme.colors.orange[0],
        transition: "background 250ms cubic-bezier(0.53, 0.16, 0.79, 0.21)",
      }}
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
            color={theme.colors.gray[8]}
            mr="xl"
            sx={{ height: "100%" }}
          />
        </Group>
      </MediaQuery>
      <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
        <Group position="apart" sx={{ height: "100%" }}>
          <Anchor component={Link} href="/">
            <a className="brand" style={{ color: theme.colors.gray[8] }}>
              Lámpa Múzeum
            </a>
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
