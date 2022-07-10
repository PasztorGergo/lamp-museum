import { Schema, model, models } from "mongoose";

export const lampSchema = new Schema({
  name: String,
  date: String,
  description: String,
  src: String,
});

export const Lamp = models.Lamp || model("Lamp", lampSchema);
