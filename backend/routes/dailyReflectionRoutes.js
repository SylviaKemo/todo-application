const express = require("express");
const requireAuth = require("../middleware/requireAuth");

const {
  getDailyReflections,
  getSingleDailyReflection,
  createDailyReflection,
  deleteDailyReflection,
  updateDailyReflection,
} = require("../controllers/dailyReflectionControllers");

const router = express.Router();

router.use(requireAuth);

// Get all DailyReflections
router.get("/all", getDailyReflections);

// Get a single DailyReflection
router.get("/view/:id", getSingleDailyReflection);

// POST a new DailyReflection
router.post("/new", createDailyReflection);

// DELETE a DailyReflection
router.delete("/remove/:id", deleteDailyReflection);

// Update a DailyReflection
router.patch("/edit/:id", updateDailyReflection);

module.exports = router;
