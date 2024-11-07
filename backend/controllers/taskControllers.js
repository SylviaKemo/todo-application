// const Task = require("../models/taskModels");
// const mongoose = require("mongoose");

// // Get all tasks
// const getTasks = async (req, res) => {
//   // to get all workouts use find({}) with an empty object
//   // sort({createdAt: -1}) - the newest workouts will be at the top
//   const tasks = await Task.find({}).sort({ createdAt: -1 });

//   res.status(200).json(tasks);
// };

// // Get a single task
// const getSingleTask = async (req, res) => {
//   const { id } = req.params;

//   // this method checks if the id that we got is valid in mongoose
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ error: "No such task" });
//   }
//   const task = await Task.findById(id);

//   if (!task) {
//     return res.status(404).json({ error: "No such task" });
//   }

//   // if workout is found
//   res.status(200).json(task);
// };

// // POST a new task
// const createTask = async (req, res) => {
//   const { note } = req.body;

//   try {
//     // workout variable create a new workout document
//     // create() is an asynchronous function
//     const task = await Task.create({ note });
//     res.status(200).json(task);
//   } catch (err) {
//     res.status(400).json({ err: err.message });
//   }
// };

// // DELETE a task
// const deleteTask = async (req, res) => {
//   const { id } = req.params;

//   // this method checks if the id that we got is valid in mongoose
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ error: "No such task" });
//   }
//   const task = await Task.findOneAndDelete({ _id: id });

//   if (!task) {
//     return res.status(404).json({ error: "No such task" });
//   }

//   res.status(200).json(task);
// };

// // Update a workout
// const updateTask = async (req, res) => {
//   const { id } = req.params;

//   // this method checks if the id that we got is valid in mongoose
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ error: "No such task" });
//   }

//   // 1st param - checks the id
//   // 2nd param - what is being updated
//   const task = await Task.findOneAndUpdate(
//     { _id: id },
//     {
//       //  req.body is an object of the data we send to the server
//       // spread the req.body to all updates to all the data sent
//       ...req.body,
//     }
//   );

//   if (!task) {
//     return res.status(404).json({ error: "No such task" });
//   }

//   res.status(200).json(task);
// };

// module.exports = {
//   createTask,
//   getTasks,
//   getSingleTask,
//   deleteTask,
//   updateTask,
// };
