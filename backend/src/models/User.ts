import { Schema, model } from "mongoose";
import { IUser } from "../types";

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    dailyCalorieTarget: { type: Number, required: true, min: 0 },
    dailyProteinTarget: { type: Number, required: true, min: 0 },
    dailyCarbTarget: { type: Number, min: 0 },
    dailyFatTarget: { type: Number, min: 0 },
    dailyFiberTarget: { type: Number, min: 0 },
  },
  { timestamps: true }
);

export const User = model<IUser>("User", userSchema);
