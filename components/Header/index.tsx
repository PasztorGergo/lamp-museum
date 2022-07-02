import React, { useState } from "react";
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

type Props = {};

export default function Header({}: Props) {
  const { open, setOpen }: any = useNav();
  const theme = useMantineTheme();
  return (
    <H height="6rem" p="xs" sx={{ backgroundColor: "orangered" }}>
      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Burger
          opened={open}
          onClick={() => setOpen((prev: boolean) => !prev)}
          size="md"
          color={theme.colors.gray[6]}
          mr="xl"
        />
      </MediaQuery>
      <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
        <Group position="apart" sx={{ height: "100%" }}>
          <Anchor component={Link} href="/">
            Lámpa Múzeum
          </Anchor>
          <Group position="right" spacing="lg">
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
          </Group>
        </Group>
      </MediaQuery>
    </H>
  );
}
