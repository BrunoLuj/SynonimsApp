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
app.use(express.static(path.join(__dirname, 'build')));

// API Routes
app.use('/api/synonyms', synonymsRouter);

// The "catchall" handler: for any request that doesn't match above,
// send back the React app.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
