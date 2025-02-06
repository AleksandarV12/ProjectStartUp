const Expense = require("../models/expenseModel");

const addExpense = async (req, res) => {
  try {
    const { amount, category, description } = req.body;

    if (!amount || !category || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const expense = new Expense({
      user: req.user.id, // Gets the logged-in user
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

const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id }).sort({
      createdAt: -1,
    });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    if (expense.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await expense.deleteOne();
    res.json({ message: "Expense removed" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { addExpense, getExpenses, deleteExpense };
