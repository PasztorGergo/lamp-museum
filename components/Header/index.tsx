import React, { useEffect, useState } from "react";
import {
  Anchor,
  Box,
  Burger,
  Group,
  Header as H,
  MediaQuery,
  Stack,
  useMantineTheme,
} from "@mantine/core";
import Link from "next/link";
import {
  useMediaQuery,
  useWindowScroll,
  useClickOutside,
} from "@mantine/hooks";
import { motion, useAnimation } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  const breakPoint = useMediaQuery("(min-width: 790px)", false);
  const [scroll, scrollTo] = useWindowScroll();
  const [open, setOpen] = useState<boolean>(false);
  const theme = useMantineTheme();
  const controls = useAnimation();
  const ref = useClickOutside(() => setOpen(false));

  useEffect(() => {
    if (open) controls.start({ scaleY: 1, transformOrigin: "top" });
    else controls.start({ scaleY: 0, transformOrigin: "top" });
  }, [open]);

  return (
    <H
      height="6rem"
      px={breakPoint ? "6em" : "0"}
      sx={{
        borderBottom: scroll.y > 10 ? "1px solid #e9ecef" : "none",
        background:
          scroll.y > 10 ? theme.colors.orange[1] : theme.colors.orange[0],
        transition: "background 250ms cubic-bezier(0.53, 0.16, 0.79, 0.21)",
        minHeight: "max-content",
      }}
      fixed
      ref={ref}
    >
      <MediaQuery largerThan="md" styles={{ display: "none" }}>
        <Box sx={{ height: "100%", width: "100%", position: "relative" }}>
          <Group position="apart" sx={{ height: "100%", padding: "24px" }}>
            <Anchor
              component={Link}
              href="/"
              sx={{ color: theme.colors.gray[8] }}
            >
              <a className="brand">Villamostechnikai Gyűjtemény</a>
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

          <motion.div animate={controls} initial={{ scaleY: 0 }}>
            <Stack
              sx={{
                background:
                  scroll.y > 10
                    ? theme.colors.orange[1]
                    : theme.colors.orange[0],
                width: "100%",
                padding: "24px",
              }}
            >
              <Anchor
                component={Link}
                href="/tortenetunk"
                className="nav-link"
                sx={{ color: theme.colors.gray[8] }}
              >
                <a className="nav-link">Történetünk</a>
              </Anchor>
              <Anchor
                component={Link}
                href="/lampak"
                className="nav-link"
                sx={{ color: theme.colors.gray[8] }}
              >
                <a className="nav-link">Gyűjteményünk</a>
              </Anchor>
              <Anchor
                component={Link}
                href="/referenciak"
                className="nav-link"
                sx={{ color: theme.colors.gray[8] }}
              >
                <a className="nav-link">Referenciák</a>
              </Anchor>
              <Anchor
                component={Link}
                href="/tamogatoink"
                sx={{ color: theme.colors.gray[8] }}
              >
                <a className="nav-link">Támogatóink</a>
              </Anchor>
            </Stack>
          </motion.div>
        </Box>
      </MediaQuery>
      <MediaQuery smallerThan="md" styles={{ display: "none" }}>
        <Group position="apart" sx={{ height: "100%" }}>
          <Anchor
            component={Link}
            href="/"
            sx={{ color: theme.colors.gray[8] }}
          >
            <a className="brand" style={{ color: theme.colors.gray[8] }}>
              Villamostechnikai Gyűjtemény
            </a>
          </Anchor>
          <Group position="right" spacing="lg">
            <Anchor
              component={Link}
              href="/tortenetunk"
              className="nav-link"
              sx={{ color: theme.colors.gray[8] }}
            >
              <a className="nav-link">Történetünk</a>
            </Anchor>
            <Anchor
              component={Link}
              href="/lampak"
              className="nav-link"
              sx={{ color: theme.colors.gray[8] }}
            >
              <a className="nav-link">Gyűjteményünk</a>
            </Anchor>
            <Anchor
              component={Link}
              href="/referenciak"
              className="nav-link"
              sx={{ color: theme.colors.gray[8] }}
            >
              <a className="nav-link">Referenciák</a>
            </Anchor>
            <Anchor
              component={Link}
              href="/tamogatoink"
              sx={{ color: theme.colors.gray[8] }}
            >
              <a className="nav-link">Támogatóink</a>
            </Anchor>
          </Group>
        </Group>
      </MediaQuery>
    </H>
  );
}
