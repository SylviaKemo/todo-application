const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DailyReflectionSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  date: {
    type: Date,
    default: Date.now, // Automatically set to the current date
    required: true,
  },
  gratitude: {
    type: String,
    required: true, // Field for "I am grateful for..."
  },
  improvement: {
    type: String,
    required: true, // Field for "What would have made today better"
  },
  affirmation: {
    type: String,
    required: true, // Field for "Daily affirmation, I am..."
  },
  amazingEvents: {
    type: String,
    required: true, // Field for "Amazing things that happened today"
  },
  selfImprovement: {
    type: String,
    required: true, // Field for "How could I make today better"
  },
});

module.exports = mongoose.model("DailyReflection", DailyReflectionSchema);
