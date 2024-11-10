const DailyReflection = require("../models/dailyReflectionModel");

const mongoose = require("mongoose");

// Get all DailyReflections
const getDailyReflections = async (req, res) => {
  const userId = req.userId; // Retrieve the user's ID from the request

  const dailyReflection = await DailyReflection.find({ userId }).sort({
    createdAt: -1,
  });

  res.status(200).json(dailyReflection);

  if (!dailyReflection.length) {
    return res.status(404).json({ error: "No notes have been uploaded" });
  }
};

// Get a single dailyReflection
const getSingleDailyReflection = async (req, res) => {
  const { id } = req.params;
  const userId = req.userId; // Retrieve the user's ID from the request

  // this method checks if the id that we got is valid in mongoose
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such note" });
  }
  try {
    const dailyReflection = await DailyReflection.findOne({ _id: id, userId });
    if (!dailyReflection) {
      return res.status(404).json({ error: "No such note was found" });
    }

    res.status(200).json(dailyReflection);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve note" });
  }
};

// POST a new DailyReflections
const createDailyReflection = async (req, res) => {
  const {
    gratitude,
    improvement,
    affirmation,
    amazingEvents,
    selfImprovement,
  } = req.body;

  const userId = req.userId;

  if (
    !gratitude ||
    !improvement ||
    !affirmation ||
    !amazingEvents ||
    !selfImprovement
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const dailyReflection = await DailyReflection.create({
      userId,
      gratitude,
      improvement,
      affirmation,
      amazingEvents,
      selfImprovement,
    });
    res.status(200).json(dailyReflection);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

// DELETE a task
const deleteDailyReflection = async (req, res) => {
  const { id } = req.params;
  const userId = req.userId;

  // this method checks if the id that we got is valid in mongoose
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Id not available in database " });
  }
  try {
    const dailyReflection = await DailyReflection.findOneAndDelete({
      _id: id,
      userId,
    });
    if (!dailyReflection) {
      return res.status(404).json({ error: "No such note was found" });
    }

    res.status(200).json(dailyReflection);
  } catch (err) {
    res.status(500).json({ error: "Failed to delete reflection" });
  }
};

// Update a workout
const updateDailyReflection = async (req, res) => {
  const { id } = req.params;
  const userId = req.userId;

  // this method checks if the id that we got is valid in mongoose
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such daily Reflections" });
  }

  // 1st param - checks the id
  // 2nd param - what is being updated
  try {
    const dailyReflection = await DailyReflection.findOneAndUpdate(
      { _id: id, userId },
      { ...req.body }
    );

    if (!dailyReflection) {
      return res.status(404).json({ error: "No such reflection" });
    }

    res.status(200).json(dailyReflection);
  } catch (err) {
    res.status(500).json({ error: "Failed to update reflection" });
  }
};

module.exports = {
  getDailyReflections,
  getSingleDailyReflection,
  createDailyReflection,
  deleteDailyReflection,
  updateDailyReflection,
};
