import { Schema, model, models } from "mongoose";

export const electronicSchema = new Schema({
  name: String,
  type: String,
  date: Date,
  description: String,
  src: String,
});

export const Electronic =
  models.Electronic || model("Electronic", electronicSchema);
