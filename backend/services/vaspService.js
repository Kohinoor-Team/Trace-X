const identifyVasp = (walletAddress) => {
  return {
    walletAddress,
    vasp: "Unknown",
    confidence: 0
  };
};

module.exports = {
  identifyVasp
};