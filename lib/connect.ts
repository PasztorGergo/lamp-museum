import mongoose from "mongoose";

export default async function connectDB() {
  mongoose.connect(
    //@ts-ignore
    process.env.MOGNO_URI,
    { dbName: "Lampamuzeum" }
  );
}
