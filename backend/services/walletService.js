const getWalletInfo = (walletAddress) => {
  return {
    walletAddress,
    status: "Wallet service is working"
  };
};

module.exports = {
  getWalletInfo
};