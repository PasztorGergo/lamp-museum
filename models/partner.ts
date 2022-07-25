import { Schema, model, models } from "mongoose";

export const partnerSchema = new Schema({
  name: String,
  pageImg: String,
  contact: String,
  description: String,
});

export const Partner = models.Partner || model("Partner", partnerSchema);
