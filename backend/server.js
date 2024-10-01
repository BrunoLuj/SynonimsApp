const express = require('express');
const cors = require('cors');
const path = require('path');
const synonymsRouter = require('./routes/synonyms');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/build'))); // Adjust path if necessary

// API Routes
app.use('/api/synonyms', synonymsRouter);

// Catch-all route to serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html')); // Adjust path if necessary
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
