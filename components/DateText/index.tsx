import { Text } from "@mantine/core";
import React from "react";
import { format } from "date-fns";

type Props = {
  date: string;
};

export default function DateText({ date }: Props) {
  console.log(date);
  return (
    <Text color="dimmed">
      {format(new Date(date.split("T")[0]), "yyyy LLLL do")}
    </Text>
  );
}
