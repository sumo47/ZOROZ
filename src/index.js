const express = require('express');
const cors = require('cors');

const app = express();

// Middleware setup
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parses incoming JSON requests

// Route imports
const paymentRoutes = require('./routes/paymentRoutes');

// Route setup
app.use('/api/pay', paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
