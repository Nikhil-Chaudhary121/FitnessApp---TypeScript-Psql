import { Schema, model } from "mongoose";
import { IExercise } from "../types";

const exerciseSchema = new Schema<IExercise>(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, default: "" },
    targetMuscle: { type: String, required: true },
    equipment: { type: String, required: true },
    videoUrl: { type: String },
    formInstructions: { type: [String], default: [] },
    commonMistakes: { type: [String], default: [] },
    defaultSets: { type: Number, required: true, min: 1 },
    defaultReps: { type: String, required: true },
    restSeconds: { type: Number, required: true, min: 0 },
    order: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

exerciseSchema.index({ targetMuscle: 1 });

export const Exercise = model<IExercise>("Exercise", exerciseSchema);
