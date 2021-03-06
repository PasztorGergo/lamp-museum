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
    height: "auto",
    width: "100%",
  },
  section: {
    minHeight: "100vh",
    marginTop: "8rem",
    padding: "2rem",
    [theme.fn.largerThan("sm")]: {
      marginBottom: "2rem",
      padding: "0 6rem",
      marginTop: "12rem",
    },
  },
  title: {
    marginBottom: "6rem",
    [theme.fn.largerThan("sm")]: {
      marginBottom: "2rem",
    },
  },
  imageContainer: {
    border: "4px solid white",
    position: "absolute",
    width: "100%",
    height: "auto",
    top: "0",
    left: "0",
  },
  quote: {
    width: "100%",
    [theme.fn.largerThan("md")]: {
      width: "50%",
    },
  },
  imgHolder: {
    margin: "10% 0 30% 0",
    width: "80%",
    position: "relative",
    height: "30vh",
    [theme.fn.largerThan("sm")]: {
      width: "40%",
      height: "100%",
    },
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
        transition: { delay: i * 0.3, duration: 0.7 },
      }));
    }
  }, [inView, controls]);

  return (
    <section className={classes.section}>
      <Title sx={{ color: theme.colors.gray[8] }} className={classes.title}>
        Hagy mutatkozzak be!
      </Title>
      <Group
        position="center"
        spacing="xl"
        direction={breakpoint ? "row" : "column"}
      >
        <Box className={classes.imgHolder}>
          <motion.div
            animate={controls}
            ref={ref}
            initial={{ opacity: 0, translateY: "60%" }}
            custom={1}
            className={classes.imageContainer}
          >
            <Image
              src="/images/measure.jpg"
              className={classes.imageOne}
              alt="F??nyk??p Cs??k??sz Levent??r??l"
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
            custom={2}
          >
            <Image
              src="/images/rozsnyoLamps.jpg"
              alt="Rozsnyo l??mpa"
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
        <Stack justify="center" align="center" className={classes.quote}>
          <Blockquote
            cite="- Cs??k??sz Levente"
            sx={{ color: theme.colors.gray[8] }}
          >
            C??lom a Magyar ipar vil??g??t??stechnika, ??s villamos ipar megment??se,
            megmutat??sa az ut??kornak. Szeretn??m az ??sszes, az orsz??gban
            legy??rtott, illetve a keleti blokkban forgalomba hozott ??sszes
            k??zvil??g??t??si l??mpatestet ??sszegy??jteni, ??s bemutatni a
            nagyk??z??ns??gnek.
          </Blockquote>
          <Button
            variant="outline"
            color="orange"
            sx={{ maxWidth: "fit-content" }}
            component="a"
            href="/tortenetunk"
          >
            T??rt??net??nk
          </Button>
        </Stack>
      </Group>
    </section>
  );
}
