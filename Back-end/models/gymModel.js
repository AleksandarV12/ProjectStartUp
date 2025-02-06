const mongoose = require("mongoose");

const gymSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // References the User model
      required: true,
    },
    workoutType: {
      type: String,
      required: true,
    },
    exercises: [
      {
        name: String,
        sets: Number,
        reps: Number,
        weight: Number, // Optional for weightlifting
      },
    ],
    duration: {
      type: Number, // Duration in minutes
      required: true,
    },
    caloriesBurned: {
      type: Number,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Gym", gymSchema);
