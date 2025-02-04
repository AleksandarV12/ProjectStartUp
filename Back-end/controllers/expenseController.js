const Expense = require("../models/Expense");

// Add Expense
const addExpense = async (req, res) => {
  const { amount, category, description } = req.body;

  if (!amount || !category) {
    return res
      .status(400)
      .json({ message: "Amount and category are required" });
  }

  try {
    const expense = new Expense({
      user: req.user.id,
      amount,
      category,
      description,
    });

    const savedExpense = await expense.save();
    res.status(201).json(savedExpense);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get Expenses
const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { addExpense, getExpenses };
