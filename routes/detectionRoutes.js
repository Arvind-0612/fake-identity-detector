const express = require('express');
const { analyzeImage, analyzeText } = require('../services/detectionService');
const router = express.Router();

// Detect fake profile image
router.post('/image', async (req, res) => {
    try {
        const { imageUrl } = req.body;
        const result = await analyzeImage(imageUrl);
        res.json({ success: true, result });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Detect fake profile text
router.post('/text', async (req, res) => {
    try {
        const { text } = req.body;
        const result = await analyzeText(text);
        res.json({ success: true, result });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;
