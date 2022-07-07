import { Electronic, Lamp, News, Retro, Special } from "../models";

export async function getLampByType(type: string) {
  const lampArray = await (type == "lamp"
    ? Lamp.find({})
    : type == "retro"
    ? Retro.find({})
    : type == "special"
    ? Special.find({})
    : Electronic.find({}));

  return JSON.parse(JSON.stringify(lampArray));
}

export async function getNews() {
  const newsArray = await News.find({});
  console.log(News.collection);

  return newsArray;
}
