const { runAnalysis } = require("../services/analysisService");
const { identifyVasp } = require("../services/vaspService");
const { createEvidence } = require("../services/evidenceService");

const analyzeTransactions = (req, res) => {
  const transactions = req.body.transactions;

  if (!Array.isArray(transactions)) {
    return res.status(400).json({
      success: false,
      error: "transactions must be an array"
    });
  }

  const result = runAnalysis(transactions);

  const walletAddress =
    req.body.walletAddress || "unknown-wallet";

  const vaspResult = identifyVasp(walletAddress);

  const evidence = createEvidence(transactions);

  res.json({
    success: true,
    result,
    vasp: vaspResult,
    evidence
  });
};

module.exports = {
  analyzeTransactions
};