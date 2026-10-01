import { Schema, model } from "mongoose";
import { IWorkout, IWorkoutExercise, WORKOUT_TYPES } from "../types";

const workoutExerciseSchema = new Schema<IWorkoutExercise>(
  {
    exercise: { type: Schema.Types.ObjectId, ref: "Exercise", required: true },
    sets: { type: Number, required: true, min: 1 },
    reps: { type: String, required: true },
    restSeconds: { type: Number, required: true, min: 0 },
    order: { type: Number, required: true },
  },
  { _id: false }
);

const workoutSchema = new Schema<IWorkout>(
  {
    name: { type: String, required: true, trim: true },
    type: { type: String, enum: WORKOUT_TYPES, required: true },
    exercises: { type: [workoutExerciseSchema], default: [] },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

workoutSchema.index({ type: 1 });

export const Workout = model<IWorkout>("Workout", workoutSchema);
