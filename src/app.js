const express = require('express');
const analyticsRoutes = require('./routes/analytics.route');

const app = express();

app.use(express.json());

app.use('/analytics', analyticsRoutes);

module.exports = app;