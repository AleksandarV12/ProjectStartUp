const Gym = require("../models/gymModel");

const addWorkout = async (req, res) => {
  try {
    const { workoutType, exercises, duration, caloriesBurned, date } = req.body;

    if (!workoutType || !duration || !exercises.length) {
      return res.status(400).json({
        message: "Workout type, duration, and exercises are required",
      });
    }

    const workout = new Gym({
      user: req.user.id,
      workoutType,
      exercises,
      duration,
      caloriesBurned,
      date,
    });

    const savedWorkout = await workout.save();
    res.status(201).json(savedWorkout);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getWorkouts = async (req, res) => {
  try {
    const workouts = await Gym.find({ user: req.user.id }).sort({ date: -1 });
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getWorkoutById = async (req, res) => {
  try {
    const workout = await Gym.findById(req.params.id);

    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }

    if (workout.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
    }

    res.json(workout);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const updateWorkout = async (req, res) => {
  try {
    const workout = await Gym.findById(req.params.id);

    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }

    if (workout.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
    }

    const { workoutType, exercises, duration, caloriesBurned, date } = req.body;
    workout.workoutType = workoutType || workout.workoutType;
    workout.exercises = exercises || workout.exercises;
    workout.duration = duration || workout.duration;
    workout.caloriesBurned = caloriesBurned || workout.caloriesBurned;
    workout.date = date || workout.date;

    const updatedWorkout = await workout.save();
    res.json(updatedWorkout);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const deleteWorkout = async (req, res) => {
  try {
    const workout = await Gym.findById(req.params.id);

    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }

    if (workout.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await workout.deleteOne();
    res.json({ message: "Workout removed" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  addWorkout,
  getWorkouts,
  getWorkoutById,
  updateWorkout,
  deleteWorkout,
};
