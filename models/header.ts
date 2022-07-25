import { Schema, model, models } from "mongoose";

export const headerSchema = new Schema({
  title: String,
  src: String,
});
export const Header = models.Header || model("Header", headerSchema);
