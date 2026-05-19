'use strict';

// Nhúng thư viện express vào dự án
const express = require('express');
const expressHandlebars = require('express-handlebars');
const events = require('events');
const eventEmitter = new events.EventEmitter();

// Khởi tạo một ứng dụng web
const app = express();

// Cho phép truy cập công khai các file tĩnh (CSS, Hình ảnh)
app.use(express.static(__dirname + '/public'));

// Định nghĩa engine 'hbs' sử dụng express-handlebars
app.engine('hbs', expressHandlebars.engine({
    layoutsDir: __dirname + '/views/layouts', // Thư mục chứa layout
    defaultLayout: 'main', // Layout mặc định
    extname: 'hbs' // Phần mở rộng của file template
}));

// Kích hoạt engine vừa định nghĩa
app.set('view engine', 'hbs');

// Khai báo cổng (port) mà server sẽ chạy
const port = process.env.PORT || 9000;

// Định nghĩa một Route (đường dẫn) cho server
app.get('/', (req, res) => {
    // Trộn file index.hbs vào main.hbs, đồng thời truyền dữ liệu cho biến tenNguoiDung trong template
    res.render('index', { tenNguoiDung: 'Nguyễn Văn A' });
});

// Route cơ bản về res.send()
// app.get('/gioi-thieu', (req, res) => {
//     res.send('<h1> Đây là trang giới thiệu về Web Server </h1>');
// });

// Lấy dữ liệu từ Query String (req.query)
app.get('/tim-kiem', (req, res, next) => {
    
    console.log("Kiểm tra từ khóa tìm kiếm...")

    next();
}, (req, res) => {
    const tuKhoa = req.query.tuKhoa;
    const mau = req.query.mau;
    res.send(`Hiện tại chúng tôi không có ${tuKhoa} màu ${mau} trong kho`);
});


// Lấy dữ liệu từ Dynamic Route (req.params)
// app.get('/san-pham/:tenSanPham', (req, res) => {
//     // URL có biến gì (:tenSanPham) thì req.params có thuộc tính đó
//     const tenSanPham = req.params.tenSanPham;
//     res.send(`Trang chi tiết của sản phẩm ${tenSanPham}`);
// });



// Từ trình duyệt, người dùng gửi GET request, có kèm theo MSSV, HoTen, DiemTrungBinh của một sinh viên. Ví dụ:

// MSSV:11223344

// HoTen:Nguyễn Văn Tèo

// DiemTrungBinh:7.0 

// app.get('/sinh-vien', (req, res) => {
//     const MSSV = req.query.MSSV;
//     const HoTen = req.query.HoTen;
//     const DiemTrungBinh = req.query.DiemTrungBinh;

//     res.send(`
//         Chào bạn ${HoTen} <br>
//         MSSV: ${MSSV} <br>
//         Điểm trung bình của bạn là: ${DiemTrungBinh}`);
// });


// Web server nhận request trên, lấy thông tin từ request và gửi về client dòng thông báo có nội dung và định dạng như sau:

// Chào bạn Nguyễn Văn Teo

// MSSV: 11223344

// Điểm trung bình của bạn là: 7.0




// Bài tập 14.2 Sử dụng module events của Nodejs để lập trình hướng sự kiện. Viết một chương trình đơn giản như sau:

// - Khai báo sự kiện vaoLop (vào lớp), với hàm xử lý đi kèm là xuLyVaoLop

// Cách 1. Viết bằng hàm thông thường (định nghĩa)
// function xuLyVaoLop() {
//     console.log("Đã tới giờ học");
// }

// eventEmitter.on('vaoLop', xuLyVaoLop);

// Cách 2. Viết bằng hàm mũi tên

// eventEmitter.on('vaoLop', () => {
//     console.log("Đã tới giờ học");
// });

// Cách 3. Viết đoạn in ra vào eventEmitter.emit, sử dụng hàm thông thường
// function xuLyVaoLop(thongBao) {
//     console.log(thongBao);
// }

// eventEmitter.on('vaoLop', xuLyVaoLop);

// Cách 4. Viết đoạn in ra vào eventEmitter.emit, sử dụng hàm mũi tên

// eventEmitter.on('vaoLop', (thongBao) => {
//     console.log(thongBao);
//     console.log(thongBao);
// });

// eventEmitter.on('raChoi', (thongBao) => {
//     console.log(thongBao);
//     console.log(thongBao);
//     console.log(thongBao);
// });

// setTimeout(() => {
//     eventEmitter.emit('vaoLop', "Đã tới giờ học");
// }, 3000);

// setTimeout(() => {
//     eventEmitter.emit('raChoi', "Đã tới giờ ra chơi");
// }, 5000);

// - Sử dụng hàm setTimeOut() để hẹn giờ vào lớp là 5 giây

// - Hết 5 giây, web server sẽ thông báo “Đã đến giờ học” tới cửa sổ console của web server

// - Viết bằng 2 cách: hàm thông thường và hàm mũi tên.

// Khởi động server và lắng nghe các yêu cầu từ client
app.listen(port, () => {
    console.log(`Server dang chay tai http://localhost:${port}`);
});