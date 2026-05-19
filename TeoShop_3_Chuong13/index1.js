'use strict'

const express = require('express')

const app = express();

const port = process.env.PORT || 9000

//xử lý khi người dùng gửi

//request kiểu GET tới thư mục gốc (/)

app.get("/", (req, res) => {

    const mssv = req.query.mssv;

    const hoTen = req.query.hoTen;

    const dtb = req.query.dtb;

    res.send(`
        Chào bạn ${hoTen} <br><br>
        MSSV: ${mssv} <br><br>
        Điểm trung bình của bạn là: ${dtb} <br><br>
        Chúc bạn học chăm!
    `);
});

//khoi dong web server

app.listen(port,() => {

    console.log(`server dang chay tren cong ${port}`);

});