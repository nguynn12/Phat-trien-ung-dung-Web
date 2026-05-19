// Ví dụ: Mẹ kêu “Đi chợ mua rau nhe” (hàm chính). Mua xong thì gọi điện cho mẹ (hàm callback)

// Đây là hàm callback (hàm gọi điện)
function goiDienChoMe() {
    console.log("Mẹ ơi, con mua rau rồi nhe");
}

// Đây là hàm chính (hàm đi chợ)
function diChoMuaRau(tenRau, viecCanLamSauKhiMua) {
    console.log(`Đang đi mua ${tenRau}`);
    console.log("Đã mua xong");

    viecCanLamSauKhiMua();
}

// Cách viết 1: Sử dụng hàm đã định nghĩa sẵn
diChoMuaRau("rau cải ngọt", goiDienChoMe);

// Cách viết 2: Sử dụng hàm ẩn danh 
diChoMuaRau("rau muống", function () {
    console.log("Mẹ ơi, con mua rau muống rồi nhe");
})

// Cách viết 3: Sử dụng hàm mũi tên
diChoMuaRau("rau xà lách", () => {
    console.log("Mẹ ơi, con mua rau xà lách rồi nhe");
});