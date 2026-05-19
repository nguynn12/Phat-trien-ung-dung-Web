// 1. Hàm pha chế (Hàm chính, do tốn thời gian nên phải sử dụng callback)

// Định nghĩa hàm callback
function rungThe(monDaPha) {
    console.log(`Thẻ rung, nhận món ${monDaPha}`);
}

function phaCaPhe(tenKhach, tenMon, thoiGianPha, callback) {
    console.log(`Quán nhận order: ${tenMon} cho ${tenKhach}`);
    // Giả sử thời gian pha chế
    setTimeout(() => {
        let monDaPha = `Ly ${tenMon} đã pha xong cho ${tenKhach}`;
        // Sau khi hết thời gian, cái thẻ rung (Callback) mới rung
        callback(monDaPha);
    }, thoiGianPha);
}

// 2. Tại quầy order
// Khách hàng A bước vào order 1 ly cà phê sữa với thời gian pha là 3 giây

// Cách viết 1: Sử dụng hàm đã định nghĩa sẵn
phaCaPhe("Khách A", "Cà phê sữa", 5000, rungThe);

// Cách viết 2: Sử dụng hàm ẩn danh
phaCaPhe("Khách B", "Cà phê đen", 3000, function (monDaPha) {
    console.log(`Thẻ rung, nhận món ${monDaPha}`);
});

// Cách viết 3: Sử dụng hàm mũi tên
phaCaPhe("Khách C", "Bạc xỉu", 4000, (monDaPha) => {
    console.log(`Thẻ rung, nhận món ${monDaPha}`);
});