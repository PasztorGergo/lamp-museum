import { Electronic, Lamp, Retro, Special } from "../models";

export async function getLampByType(type: string) {
  const lampArray = await (type == "lamp"
    ? Lamp.find({})
    : type == "retro"
    ? Retro.find({})
    : type == "special"
    ? Special.find({})
    : Electronic.find({}));

  return JSON.parse(JSON.stringify(lampArray.sort((x) => x.date)));
}
