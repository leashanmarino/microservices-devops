const express = require('express');
const axios = require('axios');
const app = express();

// Health check
app.get('/health', (req, res) => {
  res.send('Gateway Service OK');
});

// Get items from inventory service
app.get('/items', async (req, res) => {
  try {
    const response = await axios.get('http://inventory-service:3001/items');
    res.json({
      source: "gateway-service",
      data: response.data
    });
  } catch (error) {
    res.status(500).send('Failed to connect to inventory service');
  }
});

// Start server
app.listen(3000, () => {
  console.log('Gateway Service running on port 3000');
});