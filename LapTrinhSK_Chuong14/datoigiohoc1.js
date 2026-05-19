'use strict'
const events = require('events');
const eventEmitter = new events.EventEmitter();

// 1. Khai báo sự kiện 'vaoLop' và gắn với hàm xử lý 'xuLyVaoLop'
eventEmitter.on('vaoLop', xuLyVaoLop);

// 2. Định nghĩa hàm xử lý thông thường
function xuLyVaoLop(thongBao) {
    console.log(thongBao);
}

// 3. Hẹn giờ 5 giây (5000 milliseconds) để phát sự kiện
setTimeout(function() {
    eventEmitter.emit('vaoLop', 'Đã đến giờ học');
}, 5000);