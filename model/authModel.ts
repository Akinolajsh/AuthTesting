import mongoose, { Schema } from "mongoose";

interface iAuth {
  name: string;
  email: string;
  password: string;
}

interface iAuthData extends iAuth, mongoose.Document {}

const authModel = new Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<iAuthData>("auths", authModel)
