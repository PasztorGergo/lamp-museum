import { Avatar, Paper, Stack, Text } from "@mantine/core";
import React from "react";

type Props = {
  name: string;
  comment?: string;
  contact?: string;
  profileImg: string;
};

export default function Testimonial({
  name,
  comment,
  contact,
  profileImg,
}: Props) {
  return (
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
