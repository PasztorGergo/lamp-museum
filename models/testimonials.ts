import { Schema, model, models } from "mongoose";

export const testimonialSchema = new Schema({
  name: String,
  profileImg: String,
  contact: String,
  comment: String,
});

export const Testimonial =
  models.Testimonial || model("Testimonial", testimonialSchema);
