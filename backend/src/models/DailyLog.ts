import { Schema, model } from "mongoose";
import {
  IDailyLog,
  ILoggedFoodItem,
  ILoggedMeal,
  MEAL_TYPES,
  SERVING_UNITS,
} from "../types";

const nutritionFields = {
  calories: { type: Number, required: true, min: 0, default: 0 },
  protein: { type: Number, required: true, min: 0, default: 0 },
  carbohydrates: { type: Number, required: true, min: 0, default: 0 },
  fat: { type: Number, required: true, min: 0, default: 0 },
  fiber: { type: Number, required: true, min: 0, default: 0 },
};

// Snapshot of nutrition at log time. Never recomputed from Food later.
const loggedFoodItemSchema = new Schema<ILoggedFoodItem>({
  food: { type: Schema.Types.ObjectId, ref: "Food" }, // optional for manual cheat meals
  foodName: { type: String, required: true },
  quantity: { type: Number, required: true, min: 0 },
  servingUnit: { type: String, enum: SERVING_UNITS, required: true },
  isManualEntry: { type: Boolean, default: false },
  ...nutritionFields,
});

const loggedMealSchema = new Schema<ILoggedMeal>(
  {
    mealType: { type: String, enum: MEAL_TYPES, required: true },
    items: { type: [loggedFoodItemSchema], default: [] },
    ...nutritionFields,
  },
  { _id: false }
);

const dailyLogSchema = new Schema<IDailyLog>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    date: { type: String, required: true }, // "YYYY-MM-DD"
    meals: { type: [loggedMealSchema], default: [] },
    ...nutritionFields,
  },
  { timestamps: true }
);

dailyLogSchema.index({ user: 1, date: 1 }, { unique: true });

export const DailyLog = model<IDailyLog>("DailyLog", dailyLogSchema);
