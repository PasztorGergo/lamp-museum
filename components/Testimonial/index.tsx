import { Avatar, Card, Paper, Stack, Text, Image } from "@mantine/core";
import React from "react";

type Props = {
  name: string;
  comment?: string;
  contact?: string;
  profileImg: string;
  isPage: boolean;
};

export default function Testimonial({
  name,
  comment,
  contact,
  profileImg,
  isPage,
}: Props) {
  return isPage ? (
    <Card
      component="a"
      href={contact}
      shadow="xs"
      withBorder
      p="md"
      sx={{ width: "40%" }}
    >
      <Card.Section>
        <Image src={profileImg} alt="weblap nézet" />
      </Card.Section>
      <Card.Section p="md">
        <Text
          variant="gradient"
          gradient={{ from: "orange", to: "yellow", deg: 45 }}
          size="lg"
          weight="bold"
        >
          {name}
        </Text>
        <Text variant="text">{comment}</Text>
      </Card.Section>
    </Card>
  ) : (
    <Paper shadow="xs" withBorder p="md" sx={{ width: "100%" }}>
      <Stack justify="center" align="center">
        <Avatar
          radius="xl"
          color="orange"
          src={profileImg}
          component="a"
          href={contact}
        />
        <Text
          variant="gradient"
          gradient={{ from: "orange", to: "yellow", deg: 45 }}
          size="lg"
          weight="bold"
        >
          {name}
        </Text>
        <Text variant="text">{comment}</Text>
      </Stack>
    </Paper>
  );
}
