import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://saipraneetht:1EO9jd3uWEjkNNpV@cluster0.dbviubx.mongodb.net/portfolio"
    );
    console.log("Database connected successfully");
  } catch (e) {
    console.log(e);
  }
}
