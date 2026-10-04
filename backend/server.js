require("dotenv").config();
const express = require("express");
const cors = require("cors");
const walletRoutes = require("./routes/walletRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const vaspRoutes = require("./routes/vaspRoutes");

const app = express();


const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/api/wallet", walletRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/vasp", vaspRoutes);


app.get("/", (req, res) => {
  res.json({
    message: "TRACE-X Backend is running"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    service: "TRACE-X Backend",
    status: "healthy"
  });
});

app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    success: false,
    error: "Internal server error"
  });
});

app.listen(PORT, () => {
  console.log(`TRACE-X backend running on http://localhost:${PORT}`);
});