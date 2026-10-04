const createEvidence = (transactions) => {
  return {
    transactionCount: transactions.length,
    evidenceAvailable: transactions.length > 0,
    source: "TRACE-X transaction data"
  };
};

module.exports = {
  createEvidence
};