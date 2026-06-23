const jwt = require('jsonwebtoken');

const protect = async (req, res, next) => {
    let token;

    // التأكد من أن الـ Token مرسل في الـ Headers وبصيغة Bearer الصحيحة
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // استخراج الـ Token من النص (الكلمة الثانية بعد المسافة)
            token = req.headers.authorization.split(' ')[1];

            // فك تشفير وفحص الـ Token باستخدام مفتاحنا السري
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // إضافة بيانات المستخدم المشفرة داخل الـ Request ليستفيد منها أي مسار لاحق
            req.user = decoded;

            return next(); // السماح بالمرور للمسار التالي بنجاح
        } catch (error) {
            return res.status(401).json({ success: false, error: 'Not authorized, token failed' });
        }
    }

    if (!token) {
        return res.status(401).json({ success: false, error: 'Not authorized, no token provided' });
    }
};

module.exports = { protect };