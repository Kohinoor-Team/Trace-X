const express = require("express");
const router = express.Router();

const {
  analyzeTransactions
} = require("../controllers/transactionController");

router.post("/analyze", analyzeTransactions);

module.exports = router;