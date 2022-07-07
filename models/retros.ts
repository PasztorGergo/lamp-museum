import { Schema, model, models } from "mongoose";

export const retroSchema = new Schema({
  name: String,
  type: String,
  date: Date,
  description: String,
  src: String,
});

export const Retro = models.Retro || model("Retro", retroSchema);
