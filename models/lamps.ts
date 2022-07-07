import { Schema, model, models } from "mongoose";

export const lampSchema = new Schema({
  name: String,
  type: String,
  date: Date,
  description: String,
  src: String,
});

export const Lamp = models.Lamp || model("Lamp", lampSchema);
