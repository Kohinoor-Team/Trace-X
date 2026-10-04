const express = require("express");
const router = express.Router();

const {
  testWalletController
} = require("../controllers/walletController");

router.get("/test", testWalletController);

module.exports = router;