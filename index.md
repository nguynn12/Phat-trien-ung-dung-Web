<style>
   .chia {
      display: flex;
      gap: 20px;
   }

   .cot {
      flex: 1;
   }
</style>

# Chương 1. Web back-end - Một số khái niệm

## 1.5 Bài tập

<b>Câu 1.1 Liệt kê 3 gói thuê bao (tên gói, giá tiền) của 3 nhà cung cấp kết nối Internet tại Việt Nam.</b>

| Nhà cung cấp | Tên gói   | Dung lượng | Giá cước (VNĐ) |
|--------------|-----------|------------|----------------|
| FPT Telecom  | Super 25  | 25Mbps     | 190.000        |
| FPT Telecom  | Super 45  | 45Mbps     | 200.000        |
| VNPT         | Home 1    | 30Mbps     | 165.000        |
| VNPT         | Home 2    | 50Mbps     | 180.000        |
| Viettel      | NET1PLUS  | 40Mbps     | 165.000        |
| Viettel      | NET2PLUS  | 80Mbps     | 180.000        |

<b>Câu 1.2 Sử dụng trình duyệt để xem mã nguồn của trang web https://react.dev. Chỉ ra được đâu là mã HTML,CSS và JavaScript. Ngoài HTML, CSS, và JavaScript, bạn có biết được lập trình viên đã sử dụng ngôn ngữ lập trình nào ở phía server để tạo ra trang https://react.dev không? Tại sao?</b>

[![Đoạn mã HTML](Image/1.1.png)](Image/1.1.png)

<div align="center">
<em>Đoạn mã HTML của trang web https://react.dev</em>
</div> <br>

[![Đoạn mã CSS](Image/1.2.png)](Image/1.2.png)

<div align="center">
<em>Đoạn mã CSS của trang web https://react.dev</em>
</div> <br>

[![Đoạn mã JavaScript](Image/1.3.png)](Image/1.3.png)

<div align="center">
<em>Đoạn mã JavaScript của trang web https://react.dev</em>
</div> <br>

Không thể biết chính xác lập trình viên đã sử dụng ngôn ngữ nào ở phía Server chỉ bằng cách xem mã nguồn trình duyệt. Lý do:

1. Cơ chế hoạt động của Web (Mô hình Client-Server):

Trình duyệt (Client) chỉ có khả năng hiểu và hiển thị 3 thành phần: HTML, CSS và JavaScript. Khi bạn truy cập một trang web, Server sẽ xử lý các logic phức tạp (bằng các ngôn ngữ như Java, C#, PHP, Python, Node.js...) sau đó kết quả trả về cho trình duyệt chỉ là HTML, CSS và JavaScript để hiển thị cho người dùng.

2. Tính bảo mật:

Mã nguồn phía Server (Backend code) chứa các logic nghiệp vụ quan trọng và kết nối cơ sở dữ liệu. Mã này nằm tuyệt đối trên máy chủ và không bao giờ được gửi xuống máy khách (trình duyệt). Do đó, chức năng "View Source" của trình duyệt chỉ cho thấy "kết quả" chứ không cho thấy "nguyên liệu" gốc.

<b>Câu 1.3 Phát biểu nào không đúng khi nói về web, trang web và website?</b>

A. Web là hệ thống thông tin toàn cầu

B. Web được tạo thành nhờ các trang web và sự liên kết giữa chúng

<mark>C. Một trang web chứa nhiều website</mark>

D. Một website chứa nhiều trang web có liên quan đến nhau

<b>Câu 1.4 Phát biểu nào không đúng khi nói về website và ứng dụng web?</b>

A. Không có sự phân biệt rõ ràng giữa website và ứng dụng web

B. Một website và ứng dụng web có một địa chỉ URL để truy cập

C. Website và ứng dụng web hoạt động dựa trên mô hình client-server

<mark>D. Chỉ cần sử dụng HTML và CSS là có thể tạo ra được ứng dụng web</mark>
