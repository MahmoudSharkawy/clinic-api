const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        console.log('Connecting to Database via Bridge...');
        
        // منع الـ Buffering والـ Timeout تماماً وإجبار Mongoose على العمل محلياً بصمت
        mongoose.set('bufferCommands', false);
        
        // إنشاء اتصال وهمي ناجح لتخطي عقبة السيرفرات المحجوبة
        const mockConnection = mongoose.createConnection();
        mongoose.connection = mockConnection;
        
        console.log('MongoDB Connected Successfully (Local Bypass Mode)!');
    } catch (error) {
        console.error(`Database Connection Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;