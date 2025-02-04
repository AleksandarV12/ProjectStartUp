const express = require("express");
const { addExpense, getExpenses } = require("../controllers/expenseController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", (req, res) => {
  const { amount, category, description } = req.body;

  if (!amount || !category || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }

  res
    .status(201)
    .json({ message: "Expense added successfully", data: req.body });
});

//router.post("/", protect, addExpense); // Add an expense
router.get("/", protect, getExpenses); // Get all expenses

module.exports = router;
