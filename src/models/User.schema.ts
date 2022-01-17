import mongoose, { Schema } from "mongoose";
import { UserRole } from "../enums";

export interface UserDocument extends mongoose.Document {
  firstName: string;
  secondName: string;
  email: string;
  phone: string;
  password: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    secondName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: UserRole,
      required: true,
    },
  },
  { timeStamps: true }
);

const User = mongoose.model<UserDocument>("User", UserSchema);

export default User;
