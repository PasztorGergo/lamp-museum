import { Schema, model, models } from "mongoose";

export const historySchema = new Schema({
  title: String,
  date: Date,
  text: String,
  src: String,
});
export const Histroy = models.Histroy || model("Histroy", historySchema);
