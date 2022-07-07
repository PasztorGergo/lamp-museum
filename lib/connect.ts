import mongoose from "mongoose";

export default async function connectDB() {
  mongoose.connect(
    //@ts-ignore
    "mongodb+srv://PGergo:Nemtudom043@gergoapps.81peh.mongodb.net",
    { dbName: "Lampamuzeum" }
  );
}
