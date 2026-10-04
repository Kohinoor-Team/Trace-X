const runAnalysis = (transactions) => {
  return {
    transactionCount: transactions.length,
    status: "Analysis service is working"
  };
};

module.exports = {
  runAnalysis
};