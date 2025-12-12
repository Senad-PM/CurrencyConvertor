import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const API_KEY = process.env.OPEN_EXCHANGE_API_KEY;

// Middlewares
app.use(express.json());
app.use(cors());

// Currencies endpoint
app.get("/currencies", async (req, res) => {
  try {
    const nameURL = `https://openexchangerates.org/api/currencies.json?app_id=${API_KEY}`;
    console.log("Fetching currencies...");
    const nameResponse = await axios.get(nameURL);
    return res.json(nameResponse.data);
  } catch (err) {
    console.error("Error fetching currencies:", err.message);
    return res.status(500).json({ error: "Failed to fetch currencies" });
  }
});

// Convert endpoint
app.get("/convert", async (req, res) => {
  const { date, sourceCurrency, targetCurrency, ammountInSourceCurrency } = req.query;
  
  console.log("Received conversion request:", {
    date,
    sourceCurrency,
    targetCurrency,
    ammountInSourceCurrency
  });

  try {
    const dataUrl = `https://api.exchangerate-api.com/v4/latest/${sourceCurrency}`;
    console.log("Fetching rates...");
    
    const dataResponse = await axios.get(dataUrl);
    const rates = dataResponse.data.rates;

    console.log("Rates fetched successfully");

    if (!rates[targetCurrency]) {
      return res.status(400).json({ 
        error: "Invalid target currency code",
        message: `Currency ${targetCurrency} not found` 
      });
    }

    const convertedAmount = ammountInSourceCurrency * rates[targetCurrency];

    console.log("Conversion successful:", convertedAmount);

    return res.json({
      convertedAmount: convertedAmount.toFixed(2),
      sourceCurrency,
      targetCurrency,
      date: date || new Date().toISOString().split('T')[0]
    });
    
  } catch (err) {
    console.error("Conversion error:", err.message);
    return res.status(500).json({ 
      error: "Failed to convert currency", 
      message: err.message
    });
  }
});

app.listen(5001, () => {
  console.log("SERVER STARTED ON PORT 5001");
});
