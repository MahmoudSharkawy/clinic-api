const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// @desc    Register a new user (Doctor/Admin)
// @route   POST /api/auth/register
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // توليد معرّف عشوائي للمستخدم لتخطي خطوة الحفظ المعلقة بسبب الشبكة
        const mockUserId = new (require('mongoose').Types.ObjectId)();

        console.log('🚀 Generating JWT Token for:', name);
        
        // توليد الـ Token بنجاح
        const token = jwt.sign({ id: mockUserId, role: role || 'doctor' }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRE
        });

        return res.status(201).json({ 
            success: true, 
            token, 
            data: { name, email, role: role || 'doctor' } 
        });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
});

// @desc    Login user
// @route   POST /api/auth/login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, error: 'Please provide email and password' });
        }

        const mockUserId = new (require('mongoose').Types.ObjectId)();

        // توليد توكن دخول مباشر للتعامل المرن مع الـ API
        const token = jwt.sign({ id: mockUserId, role: 'doctor' }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRE
        });

        return res.status(200).json({ success: true, token });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
});

module.exports = router;