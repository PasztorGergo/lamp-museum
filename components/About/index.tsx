import {
  Title,
  Blockquote,
  Group,
  createStyles,
  Image,
  Box,
  Stack,
  Button,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type Props = {};

const useStyles = createStyles((theme) => ({
  imageOne: {
    width: "100%",
    height: "auto",
  },
  section: {
    marginTop: "12rem",
    padding: "0 6rem",
  },
  title: {
    marginBottom: "2rem",
  },
  imageContainer: {
    border: "4px solid white",
    position: "absolute",
    width: "100%",
    height: "auto",
    top: "0",
    left: "0",
  },
}));

export default function About({}: Props) {
  const [ref, inView] = useInView();
  const controls = useAnimation();
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const breakpoint = useMediaQuery("(min-width: 790px)", false);

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        translateY: 0,
        opacity: 1,
        transition: { delay: i * 0.3 },
      }));
    }
  }, [inView, controls]);

  return (
    <section className={classes.section} style={{ height: "100vh" }}>
      <Title sx={{ color: theme.colors.gray[8] }} className={classes.title}>
        Hagy mutatkozzak be!
      </Title>
      <Group
        position="center"
        spacing="xl"
        direction={breakpoint ? "row" : "column"}
      >
        <Box
          sx={{
            position: "relative",
            width: "40%",
          }}
        >
          <motion.div
            animate={controls}
            ref={ref}
            initial={{ opacity: 0, translateY: "60%" }}
            className={classes.imageContainer}
            custom={3}
          >
            <Image
              src="/images/measure.jpg"
              className={classes.imageOne}
              alt="Fénykép Csíkász Leventéről"
              radius="sm"
              sx={{
                border: "4px solid white",
                borderRadius: "4px",
              }}
            />
          </motion.div>
          <motion.div
            animate={controls}
            ref={ref}
            initial={{ opacity: 0, translateY: "60%" }}
            className={classes.imageContainer}
            custom={4}
          >
            <Image
              src="/images/rozsnyoLamps.jpg"
              className={classes.imageOne}
              alt="Rozsnyo lámpa"
              radius="sm"
              sx={{
                border: "4px solid white",
                position: "absolute",
                width: "70%",
                height: "auto",
                top: "-5rem",
                left: "-2rem",
                borderRadius: "4px",
              }}
            />
          </motion.div>
        </Box>
        <Stack justify="center" align="center" sx={{ width: "50%" }}>
          <Blockquote
            cite="- Csíkász Levente"
            sx={{ color: theme.colors.gray[8] }}
          >
            Célom a Magyar ipar világítástechnika, és villamos ipar megmentése,
            megmutatása az utókornak. Szeretném az összes, az országban
            legyártott, illetve a keleti blokkban forgalomba hozott összes
            közvilágítási lámpatestet összegyűjteni, és bemutatni a
            nagyközönségnek.
          </Blockquote>
          <Button
            variant="outline"
            color="orange"
            sx={{ maxWidth: "fit-content" }}
            component="a"
            href="/tortenetunk"
          >
            Történetünk
          </Button>
        </Stack>
      </Group>
    </section>
  );
}
