const express = require('express');
const app = express();

// Sample grocery data
const items = [
  { id: 1, name: "Milk", expiry: "2026-05-20" },
  { id: 2, name: "Rice", expiry: "2026-06-10" },
  { id: 3, name: "Eggs", expiry: "2026-05-25" }
];

// Get all items
app.get('/items', (req, res) => {
  res.json(items);
});

// Health check
app.get('/health', (req, res) => {
  res.send('Inventory Service OK');
});

// Start server
app.listen(3001, () => {
  console.log('Inventory Service running on port 3001');
});