const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const patientRoutes = require('./routes/patientRoutes');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

// الاتصال بالـ Bypass ذكي للتخطي
connectDB();

const app = express();

app.use(express.json());

// ربط المسارات بالـ Middleware
app.use('/api/patients', patientRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to Clinic API - Secure & Fast Running Server!');
});

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});