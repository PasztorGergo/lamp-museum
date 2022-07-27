import { Paper, Select, Title, Text, Stack, Group } from "@mantine/core";
import Head from "next/head";
import { NextPage } from "next/types";
import React, { useEffect, useRef, useState } from "react";
import { LampDetails } from "../components";

const Lampak: NextPage = () => {
  const [lampArray, setLamp] = useState<any>();
  const [type, setType] = useState<string | null>("lamp");

  useEffect(() => {
    //@ts-ignore
    (async () =>
      await fetch("api/lamp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: type == "public" ? "lamp" : type,
        }),
      }))().then((x) => x.json().then((y) => setLamp(y)));
  }, [, type]);

  const types = [
    { value: "lamp", label: "Fényforrások" },
    { value: "public", label: "Közvilágítási Lámpatestek" },
    { value: "electronic", label: "Elektrotechnikai eszközök" },
    { value: "special", label: "Érdekességek" },
    { value: "retro", label: "Retro gyűjtemény" },
  ];

  return (
    <>
      <Head>
        <title>Lámpák</title>
      </Head>
      <Group
        className="lamps"
        sx={{
          minHeight: "80vh",
          margin: "8rem 0 2rem 0",
          padding: "0 6rem",
        }}
        noWrap={false}
      >
        <Paper sx={{ width: "75vw" }} mx="auto" withBorder p="xl">
          <Select
            label="Válasszon kategoriát"
            data={types}
            value={type}
            onChange={(e) => setType(e)}
          ></Select>
        </Paper>
        {lampArray?.length > 0 ? (
          lampArray?.map(
            ({ src, name, description, date }: any, idx: number) => (
              <LampDetails
                date={date}
                src={src}
                name={name}
                description={description}
                key={idx}
              />
            )
          )
        ) : (
          <Stack
            sx={{ height: "100%", width: "100%" }}
            justify="center"
            align="center"
          >
            <Title>Lámpa típus nem található</Title>
            <Text color="dimmed">Kérjük, keressen másra!</Text>
          </Stack>
        )}
      </Group>
    </>
  );
};

export default Lampak;
