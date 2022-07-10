import { Schema, model, models } from "mongoose";

export const electronicSchema = new Schema({
  name: String,
  date: String,
  description: String,
  src: String,
});

export const Electronic =
  models.Electronic || model("Electronic", electronicSchema);
