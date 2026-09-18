import mongoose, { Document, Schema } from "mongoose";

export type UserRole = "STUDENT" | "INSTRUCTOR" | "PRINCIPAL";

export interface IUser extends Document {
  userId: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  department?: string;
  isActive: boolean;
}

const userSchema = new Schema<IUser>(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["STUDENT", "INSTRUCTOR", "PRINCIPAL"],
      required: true,
    },

    department: {
      type: String,
      trim: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    collection: "users",
  }
);

const User = mongoose.model<IUser>("User", userSchema);

export default User;