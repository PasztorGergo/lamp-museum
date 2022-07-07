import { Schema, model, models } from "mongoose";

export const newsSchema = new Schema({
  title: String,
  src: String,
  date: Date,
  text: String,
});

export const News = models.News || model("News", newsSchema);
