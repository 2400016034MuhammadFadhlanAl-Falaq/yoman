import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/track", async (req, res) => {
  const { courier, awb } = req.query;

  if (!courier || !awb) {
    return res.status(400).json({ error: "courier & awb required" });
  }

  // SIMULASI (NEXT LEVEL BISA REAL API)
  res.json({
    courier,
    awb,
    status: "Dalam pengiriman",
    lastUpdate: new Date().toLocaleString("id-ID"),
  });
});

app.listen(5000, () => {
  console.log("🚚 Tracking API running on http://localhost:5000");
});
