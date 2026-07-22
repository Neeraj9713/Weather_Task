const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analytics.controller');

router.post('/cities', analyticsController.getCitiesAnalytics);
router.get('/city/:name', analyticsController.getCityAnalytics);

module.exports = router;