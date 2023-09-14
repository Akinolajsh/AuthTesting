import mongoose from "mongoose";

const url: string = "mongodb://0.0.0.0:27017/testAuthDB";
export const db = async () => {
  mongoose.connect(url).then((res) => {
    console.log("db connection");
  });
};
