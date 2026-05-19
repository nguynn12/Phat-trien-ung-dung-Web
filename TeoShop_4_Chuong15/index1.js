'use strict'
const express = require('express');
const app = express();
const port = 9000;

// 1. Application-level Middleware (Ghi log)
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} request tới ${req.url}`);
    req.requestTime = new Date().toISOString(); // Thêm dữ liệu vào req
    next(); // Bắt buộc phải có để chuyển sang handler tiếp theo
});

// 2. Route Handler cho trang chủ
app.get('/', (req, res) => {
    const name = req.query.name || 'Khách';
    res.send(`Web server chào bạn ${name}. Truy cập lúc: ${req.requestTime}`);
});

// 3. Nối tiếp Route Handlers (Chaining) cho /profile
app.get('/profile', 
    (req, res, next) => {
        console.log('Đang kiểm tra quyền...');
        req.user = { id: 1, name: "Ti" };
        next(); 
    }, 
    (req, res) => {
        res.send(`Thông tin cá nhân của: ${req.user.name}`);
    }
);

app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});
