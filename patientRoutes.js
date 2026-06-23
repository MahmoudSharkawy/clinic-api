const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

// @desc    Get all patients
// @route   GET /api/patients
router.get('/', protect, async (req, res) => {
    try {
        res.status(200).json({ 
            success: true, 
            message: "Authorized! Access granted to protected data.",
            userSession: req.user,
            data: [
                { id: 1, name: "Ahmed Ali", condition: "Stable" },
                { id: 2, name: "Sara Mohamed", condition: "Under Review" }
            ]
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// @desc    Create a patient
// @route   POST /api/patients
router.post('/', protect, async (req, res) => {
    try {
        res.status(201).json({ 
            success: true, 
            message: "Patient saved successfully under secure session!",
            data: req.body 
        });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

module.exports = router;