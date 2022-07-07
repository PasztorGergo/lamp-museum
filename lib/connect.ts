import mongoose from "mongoose";

export default async function connectDB() {
  //@ts-ignore
  mongoose.connect(
    "mongodb+srv://PGergo:Nemtudom043@gergoapps.81peh.mongodb.net",
    { dbName: "Lampamuzeum" }
  );
}
