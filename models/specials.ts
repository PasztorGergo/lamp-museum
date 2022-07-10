import { Schema, model, models } from "mongoose";

export const specialSchema = new Schema({
  name: String,
  date: String,
  description: String,
  src: String,
});

export const Special = models.Lamp || model("Special", specialSchema);
