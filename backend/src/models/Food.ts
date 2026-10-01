import { Schema, model } from "mongoose";
import { FOOD_CATEGORIES, IFood, SERVING_UNITS } from "../types";

// Nutrition values are stored per servingAmount of servingUnit.
// e.g. Rice: servingAmount 100, servingUnit "g" => values are per 100g.
const foodSchema = new Schema<IFood>(
  {
    name: { type: String, required: true, trim: true, unique: true },
    category: { type: String, enum: FOOD_CATEGORIES, required: true },
    servingUnit: { type: String, enum: SERVING_UNITS, required: true },
    servingAmount: { type: Number, required: true, min: 0.01 },
    calories: { type: Number, required: true, min: 0, default: 0 },
    protein: { type: Number, required: true, min: 0, default: 0 },
    carbohydrates: { type: Number, required: true, min: 0, default: 0 },
    fat: { type: Number, required: true, min: 0, default: 0 },
    fiber: { type: Number, required: true, min: 0, default: 0 },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Food = model<IFood>("Food", foodSchema);
