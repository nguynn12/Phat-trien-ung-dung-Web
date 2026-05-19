'use strict'
const events = require('events');
const eventEmitter = new events.EventEmitter();

// 1. Khai báo sự kiện và viết trực tiếp hàm mũi tên (Arrow function)
eventEmitter.on('vaoLop', (thongBao) => {
    console.log(thongBao);
});

// 2. Hẹn giờ 5 giây (5000 milliseconds) để phát sự kiện (Dùng hàm mũi tên cho setTimeout)
setTimeout(() => {
    eventEmitter.emit('vaoLop', 'Đã đến giờ học');
}, 5000);