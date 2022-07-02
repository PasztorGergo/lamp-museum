import React from "react";
import { Navbar, Anchor, Group } from "@mantine/core";
import Link from "next/link";

type Props = {};

export default function Navigation({}: Props) {
  return (
    <Navbar height={144} p="xs" width={{ base: "100%" }}>
      <Group>
        <Anchor component={Link} href="/">
          Lámpa Múzeum
        </Anchor>
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
    </Navbar>
  );
}
