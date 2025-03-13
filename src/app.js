const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const eventRoutes = require('./routes/eventRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
app.use(cors());

const app = express();

// Middleware
app.use(bodyParser.json());

// Serve static files from 'public/images' directory
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Routes
app.use('/api/events', eventRoutes);
app.use('/api/user', userRoutes);

module.exports = app;
