export const WORKOUT_TYPES = ["PUSH", "PULL"] as const;
export type WorkoutType = (typeof WORKOUT_TYPES)[number];

export const SERVING_UNITS = ["g", "ml", "piece", "serving"] as const;
export type ServingUnit = (typeof SERVING_UNITS)[number];

export const FOOD_CATEGORIES = [
  "staple",
  "vegetable",
  "protein",
  "dairy",
  "grain",
  "oil",
  "cheat-meal",
] as const;
export type FoodCategory = (typeof FOOD_CATEGORIES)[number];

export const MEAL_TYPES = ["BREAKFAST", "LUNCH", "DINNER", "SNACK", "CHEAT_MEAL"] as const;
export type MealType = (typeof MEAL_TYPES)[number];
