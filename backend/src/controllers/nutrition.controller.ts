import { Request, Response } from "express";
import { foods } from "../data/food";

export const calculateNutrition = (req: Request, res: Response) => {
  const { food, quantity } = req.body;

  if (!food || !quantity) {
    return res.status(400).json({
      message: "Food and quantity are required"
    });
  }

  const selectedFood = foods.find(
    (item) => item.food.toLowerCase() === food.toLowerCase()
  );

  if (!selectedFood) {
    return res.status(404).json({
      message: "Food not found"
    });
  }

  const nutrition = selectedFood.nutritionPerGram;

  return res.json({
    food: selectedFood.food,
    quantity,
    nutrition: {
      calories: nutrition.calories * quantity,
      protein: nutrition.protein * quantity,
      carbs: nutrition.carbs * quantity,
      fat: nutrition.fat * quantity,
      fiber: nutrition.fiber * quantity
    }
  });
};



// export const addFood = (req: Request, res: Response) => {
//   try {
//     const { food, grams } = req.body;

//     const result = calculateNutrition ({
//       food,
//       grams,
//     });

//     res.status(200).json(result);
//   } catch (error) {
//     res.status(400).json({
//       message: error instanceof Error
//         ? error.message
//         : "Something went wrong",
//     });
//   }
// };