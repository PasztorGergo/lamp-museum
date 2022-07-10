import { Schema, model, models } from "mongoose";

export const retroSchema = new Schema({
  name: String,
  date: String,
  description: String,
  src: String,
});

export const Retro = models.Retro || model("Retro", retroSchema);
