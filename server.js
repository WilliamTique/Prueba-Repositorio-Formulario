/* eslint-disable no-console */
const express = require('express');
const path = require('path');

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));

// For any request that doesnt match a static file, serve the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Expose
const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
