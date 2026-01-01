const express = require('express');
const app = express();

// Main app route
app.get('/app', (req, res) => {
  res.send('Hello from App Service!');
});

// Dummy API route
app.get('/api', (req, res) => {
  res.json({ message: 'Dummy API response' });
});

// Health check route (for probes)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Listen on port 3000 (must match containerPort in deployment)
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
