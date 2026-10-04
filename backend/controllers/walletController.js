const { getWalletInfo } = require("../services/walletService");

const testWalletController = (req, res) => {
  const walletAddress = req.query.address || "test-wallet";

  const result = getWalletInfo(walletAddress);

  res.json({
    success: true,
    result
  });
};

module.exports = {
  testWalletController
};