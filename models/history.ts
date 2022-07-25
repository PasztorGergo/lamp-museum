import { Schema, model, models } from "mongoose";

export const historySchema = new Schema({
  title: String,
  date: Date,
  text: String,
  src: String,
  genesis: Boolean,
});
export const Histroy = models.Histroy || model("Histroy", historySchema);
