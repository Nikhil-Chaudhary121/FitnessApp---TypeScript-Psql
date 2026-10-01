import { Types } from "mongoose";
import { FoodCategory, MealType, ServingUnit, WorkoutType } from "./enums";

export * from "./enums";

export interface NutritionValues {
  calories: number;
  protein: number;
  carbohydrates: number;
  fat: number;
  fiber: number;
}

export interface IUser {
  name: string;
  dailyCalorieTarget: number;
  dailyProteinTarget: number;
  dailyCarbTarget?: number;
  dailyFatTarget?: number;
  dailyFiberTarget?: number;
}

export interface IExercise {
  name: string;
  description: string;
  targetMuscle: string;
  equipment: string;
  videoUrl?: string;
  formInstructions: string[];
  commonMistakes: string[];
  defaultSets: number;
  defaultReps: string; // string so ranges like "8-12" work
  restSeconds: number;
  order: number;
  isActive: boolean;
}

export interface IWorkoutExercise {
  exercise: Types.ObjectId;
  sets: number;
  reps: string;
  restSeconds: number;
  order: number;
}

export interface IWorkout {
  name: string;
  type: WorkoutType;
  exercises: IWorkoutExercise[];
  isActive: boolean;
}

export interface IFood extends NutritionValues {
  name: string;
  category: FoodCategory;
  servingUnit: ServingUnit;
  servingAmount: number; // nutrition values are per this amount, e.g. 100 (g)
  isActive: boolean;
}

export interface ILoggedFoodItem extends NutritionValues {
  food?: Types.ObjectId; // absent for manual cheat-meal entries
  foodName: string; // snapshot
  quantity: number;
  servingUnit: ServingUnit;
  isManualEntry: boolean;
}

export interface ILoggedMeal extends NutritionValues {
  mealType: MealType;
  items: ILoggedFoodItem[];
}

export interface IDailyLog extends NutritionValues {
  user: Types.ObjectId;
  date: string; // "YYYY-MM-DD"
  meals: ILoggedMeal[];
}
