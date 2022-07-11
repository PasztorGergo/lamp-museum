import {
  Electronic,
  Lamp,
  News,
  Retro,
  Special,
  Testimonial,
  Histroy,
  Support,
} from "../models";

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

export async function getNews() {
  const newsArray = await News.find({});

  return JSON.parse(JSON.stringify(newsArray.sort((x) => x.date)));
}

export async function getTestimonials() {
  const testimonialArray = await Testimonial.find({});

  return JSON.parse(JSON.stringify(testimonialArray));
}
export async function getHistory() {
  const historyArray = await Histroy.find({});

  return JSON.parse(JSON.stringify(historyArray.sort((x) => x.date)));
}
export async function getSponsors() {
  const supportArray = await Support.find({});

  return JSON.parse(JSON.stringify(supportArray));
}
