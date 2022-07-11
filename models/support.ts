import { Schema, model, models } from "mongoose";

export const supportSchema = new Schema({
  name: String,
  profileImg: String,
  contact: String,
});

export const Support = models.Support || model("Support", supportSchema);
