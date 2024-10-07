const express = require('express');
const Case = require('../models/Case');
const router = express.Router();

// Create a new case
router.post('/', async (req, res) => {
    const { caseId, userId, description } = req.body;
    const newCase = new Case({ caseId, userId, description });
    try {
        const savedCase = await newCase.save();
        res.status(201).json(savedCase);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// Get pending cases for a user
router.get('/:userId', async (req, res) => {
    try {
        const cases = await Case.find({ userId: req.params.userId });
        res.json(cases);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
