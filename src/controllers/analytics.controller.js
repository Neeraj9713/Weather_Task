const analyticsService = require('../services/analytics.service');
exports.getCitiesAnalytics = async (req, res, next) => {
    try {
        const {cities} = req.body;

        if(!cities || !Array.isArray(cities) || cities.length === 0) {
            return res.status(400).json({ error: 'Invalid or empty cities array' });
        }

        const analyticsData = await analyticsService.processCities(cities);
        res.status(200).json({
            success: true,
            data: analyticsData
        });
    } catch (error) {
        next(error);
    }
}

exports.getCityAnalytics = async (req, res, next) => {
    try {
        const {name} = req.params;
        if(!name) {
            return res.status(400).json({ error: 'City name is required' });
        }

        const analyticsData = await analyticsService.getCityAnalytics(name);
        res.status(200).json({
            success: true,
            data: analyticsData
        });
    } catch (error) {
        next(error);
    }   
}