const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "VASP route is working"
  });
});

module.exports = router;