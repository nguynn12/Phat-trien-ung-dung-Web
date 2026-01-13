<style>
   .chia {
      display: flex;
      gap: 20px;
   }

   .cot {
      flex: 1;
   }
</style>

# Chương 1. Một số khái niệm

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
</div> 

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

# Chương 2. Tổng quan về phát triển ứng dụng web

## 2.3. Bài tập

<b>Bài 2.1 Tìm trang (web) chủ của các CMS trong lĩnh vực phát triển ứng dụng web.

- Thương mại điện tử/bán hàng: WordPress, Wix, Joomla, Drupal, Magento, Shopify 

- Hệ thống quản lý học tập: Moodle

- Blogs, thông tin, giới thiệu: Blogger, Wordpress</b>

| Tên CMS   | Trang chủ (Website)                                                                 | Ghi chú                                   |
|-----------|--------------------------------------------------------------------------------------|-------------------------------------------|
| WordPress | [wordpress.org](https://wordpress.org/) <br> [wordpress.com](https://wordpress.com/) | .org là mã nguồn mở (tự cài đặt). <br> .com là dịch vụ lưu trữ sẵn. |
| Wix       | [wix.com](https://www.wix.com/)                                                     |                                           |
| Joomla    | [joomla.org](https://www.joomla.org/)                                               |                                           |
| Drupal    | [drupal.org](https://www.drupal.org/)                                               |                                           |
| Magento   | [Magento Commerce](https://business.adobe.com/products/magento/magento-commerce.html) | Đã thuộc về Adobe Commerce.               |
| Shopify   | [shopify.com](https://www.shopify.com/)                                             |                                           |
| Moodle    | [moodle.org](https://moodle.org/)                                                   | CMS chuyên về giáo dục (LMS).             |
| Blogger   | [blogger.com](https://www.blogger.com/)                                             |                                           |

<b>Bài 2.2 Tìm các trang (web) chủ của các framework và thư viện hỗ trợ trong việc phát triển ứng dụng web.

- Frontend: jQuery, Bootstrap, D3, React, Angular, Vue, Svelte 

- Backend: Express.js (Nodejs), Django, Flask (Python), ASP.NET (C#), Spring Boot (Java), Laravel (PHP), Ruby on Rails (Ruby), Gin, Echo (Go, Golang).</b>

1. Frontend (Giao diện người dùng)

| Tên Framework / Thư viện | Trang chủ                                                                 |
|---------------------------|---------------------------------------------------------------------------|
| jQuery                    | [jquery.com](https://jquery.com/)                                        |
| Bootstrap                 | [getbootstrap.com](https://getbootstrap.com/)                            |
| D3 (D3.js)                | [d3js.org](https://d3js.org/)                                            |
| React                     | [react.dev](https://react.dev/)                                          |
| Angular                   | [angular.dev](https://angular.dev/) <br> [angular.io](https://angular.io/) |
| Vue (Vue.js)              | [vuejs.org](https://vuejs.org/)                                          |
| Svelte                    | [svelte.dev](https://svelte.dev/)                                        |

2. Backend (Xử lý phía máy chủ)

| Tên Framework   | Ngôn ngữ     | Trang chủ                                                                 |
|-----------------|--------------|---------------------------------------------------------------------------|
| Express.js      | Node.js      | [expressjs.com](https://expressjs.com/)                                   |
| Django          | Python       | [djangoproject.com](https://www.djangoproject.com/)                       |
| Flask           | Python       | [flask.palletsprojects.com](https://flask.palletsprojects.com/)           |
| ASP.NET         | C#           | [ASP.NET](https://dotnet.microsoft.com/apps/aspnet)                       |
| Spring Boot     | Java         | [spring.io](https://spring.io/projects/spring-boot)                       |
| Laravel         | PHP          | [laravel.com](https://laravel.com/)                                       |
| Ruby on Rails   | Ruby         | [rubyonrails.org](https://rubyonrails.org/)                               |
| Gin             | Go (Golang)  | [gin-gonic.com](https://gin-gonic.com/)                                   |
| Echo            | Go (Golang)  | [echo.labstack.com](https://echo.labstack.com/)                           |

<b>2.3 Có 3 cách để tạo ra một ứng dụng web? Phát biểu nào không đúng?</b>

A. Sử dụng CMS

B. Sử dụng framework và thư viện hỗ trợ

C. Viết thuần bằng ngôn ngữ lập trình mà không sử dụng framework, thư viện hỗ trợ

<mark>D. Sử dụng trình duyệt web</mark>

<b>2.4 Những ưu điểm khi sử dụng CMS để tạo ra ứng dụng web. Phát biểu nào không đúng?</b>

<mark>A. Cần kiến thức lập trình chuyên sâu</mark>

B. Tối ưu SEO

C. Dễ sử dụng, dễ quản lý, tiết kiệm thời gian

D. Chi phí phát triển ứng dụng thấp

<b>2.5 Những ưu điểm khi sử dụng framework và thư viện để tạo ra ứng dụng web. Phát biểu nào không đúng?</b>

A. Tăng tốc độ phát triển

B. Cải thiện chất lượng viết mã

<mark>C. Giảm khả năng bảo mật</mark >

D. Dễ dàng bảo trì và mở rộng

# Chương 3. Web server

## 3.3 Bài tập

### Bài 3.1 Thực hành lại các cài đặt trong bài học.

[![Thư mục cài đặt nginx](Image/2.1.png)](Image/2.1.png)

<b>Câu 3.2 Một số phần mềm web server phổ biến. Phát biểu nào không đúng?</b>

A. Apache

B. Nginx

<mark>C. SSI</mark>

D. Nodejs

<b>Câu 3.3 Các chức năng của Web server là gì. Phát biểu nào không đúng?</b>

A. Lưu trữ các tập tin của ứng dụng web

B. Nhận request từ client

C. Xử lý request

<mark>D. Nhận response từ máy client</mark>

Bài tập 3.4 Thực hiện một số cấu hình cho Nginx:

- (a) Lắng nghe trên cổng 65535

- (b) Trỏ web root về một thư mục khác ổ đĩa C:\ (ví dụ: D:\TeoShop)

- (c) Khi client gửi request tới web root, tập tin mặc định trả về là index.py, tạo thêm tập tin index.py để kiểm tra.

- (d) Lắng nghe trên cổng 65536 được không? Tại sao

Cổng mạng (port) có giá trị từ 0 đến 65535. Vì vậy, cổng 65536 vượt qua phạm vi hợp lệ của cổng TCP/UDP và sẽ không thể sử dụng được. Các cổng hợp lệ phải trong phạm vi 0-65535.

# Chương 4. 

4.2 Lệnh nào được sử dụng để nhúng Git vào thư mục dự án?

<mark>A. git init</mark>

B. git --init

C. git initialize

D. git embed

4.3 Lệnh nào sử dụng để kiểm tra trên máy tính đã có phần mềm Git hay chưa?

A. git ver

B. git version

<mark>C. git --version hoặc git -v</mark>

D. git --ver

4.4 Trong Git, kho lưu trữ (repo, repository) là gì?

A. Là thư mục dự án

<mark>B. Là thư mục dự án đã được nhúng Git</mark>

C. Là thư mục cài đặt phần mềm Git

D. Là thư mục .git (trong thư mục dự án)

4.5 Bạn có thể sử dụng các công cụ sau để viết mã. Phát biểu nào không đúng?

A. Text editor

<mark>B. MS Word</mark>

C. IDE, Code Editor

D. Chatbot (Gemini), Trang web (https://codepen.io/) 

# Chương 5.

Câu 5.2 Nodejs là gì? Phát biểu nào không đúng?

A. Nodejs là môi trường phát triển ứng dụng

<mark>B. Nodejs là một ngôn ngữ lập trình</mark>

C. Nodejs là nền tảng phát triển ứng dụng

D. Có thể sử dụng Nodejs để tạo web server

Câu 5.3 NPM là gì? Phát biểu nào không đúng?

A. NPM là viết tắt của Node Package Manager

B. NPM là công cụ để quản lý các thư viện dùng trong một ứng dụng chạy trên nền Nodejs

C. NPM được cài đặt mặc định khi cài đặt Nodejs

<mark>D. NPM gồm 3 thành phần: website, GUI và registry</mark>

# Chương 6. 

Bài tập 6.2 Làm sao biết được một gói cài đặt ở chế độ cục bộ (locally) hay toàn cục (globally)? Khi cài đặt các gói (package) ở chế độ cục bộ và toàn cục (globally) thì các gói sẽ được lưu ở đâu? Làm sao bạn biết được?

Trong Node.js, các gói (package) có thể được cài đặt theo hai chế độ là cục bộ (local) và toàn cục (global). Mỗi chế độ có mục đích sử dụng và vị trí lưu trữ khác nhau.

1. Cài đặt gói ở chế độ cục bộ (local)

Gói được cài đặt ở chế độ cục bộ khi sử dụng lệnh:

npm install <tên-gói>


Khi cài đặt theo cách này, gói sẽ được lưu trong thư mục node_modules của chính dự án đang làm việc. Gói cục bộ chỉ được sử dụng trong phạm vi dự án đó và thường là các thư viện cần thiết để ứng dụng có thể chạy được, ví dụ như express, mongoose, axios.

Có thể nhận biết gói cài đặt cục bộ bằng cách:

Kiểm tra thư mục node_modules trong dự án

Hoặc sử dụng lệnh:

npm list <tên-gói>


2. Cài đặt gói ở chế độ toàn cục (global)

Gói được cài đặt ở chế độ toàn cục khi sử dụng lệnh:

npm install -g <tên-gói>


Khi đó, gói sẽ được lưu trong thư mục npm toàn cục của hệ thống (trên Windows thường nằm trong thư mục AppData của người dùng). Các gói cài đặt toàn cục thường là những công cụ dòng lệnh, có thể sử dụng ở bất kỳ thư mục nào, ví dụ như nodemon, npm, pnpm.

Có thể nhận biết gói cài đặt toàn cục bằng cách:

Sử dụng lệnh:

npm list -g <tên-gói>


Hoặc kiểm tra vị trí thực thi của lệnh bằng:

where <tên-gói>

Kết luận

Cài đặt cục bộ dùng cho từng dự án cụ thể và được lưu trong thư mục node_modules của dự án, trong khi cài đặt toàn cục dùng cho toàn hệ thống và thường áp dụng cho các công cụ hỗ trợ phát triển. Việc phân biệt hai chế độ giúp quản lý gói hiệu quả và tránh xung đột phiên bản.


Bài tập 6.3 Sự khác nhau khi cài đặt gói ở chế độ dependencies và devDependencies?

Trong file package.json của một ứng dụng Node.js, các gói phụ thuộc được chia thành hai nhóm chính là dependencies và devDependencies, mỗi nhóm có vai trò khác nhau.

1. dependencies

dependencies là những gói bắt buộc phải có khi ứng dụng chạy thực tế. Các gói này chứa mã cần thiết để chương trình hoạt động đúng. Nếu thiếu các gói trong dependencies, ứng dụng sẽ không thể chạy hoặc sẽ bị lỗi.

Ví dụ, trong một ứng dụng web Node.js, thư viện express thường được cài đặt vào dependencies vì nó được sử dụng trực tiếp khi server xử lý yêu cầu từ người dùng.

Gói được cài vào dependencies bằng lệnh:

npm install <tên-gói>

2. devDependencies

devDependencies là những gói chỉ phục vụ cho quá trình phát triển, không cần thiết khi ứng dụng chạy trên môi trường thật (production). Các gói này giúp lập trình viên làm việc thuận tiện hơn, như tự động khởi động lại server, kiểm tra lỗi cú pháp, hoặc định dạng mã nguồn.

Ví dụ, nodemon thường được cài vào devDependencies vì nó chỉ hỗ trợ trong lúc lập trình và không cần thiết khi triển khai ứng dụng.

Gói được cài vào devDependencies bằng lệnh:

npm install <tên-gói> --save-dev

Kết luận

Sự khác nhau giữa dependencies và devDependencies nằm ở mục đích sử dụng. dependencies là các thư viện cần thiết để ứng dụng hoạt động, còn devDependencies chỉ phục vụ cho quá trình phát triển. Việc phân loại đúng giúp ứng dụng nhẹ hơn và dễ triển khai hơn trên môi trường thực tế.

Câu 6.4 Trong ứng dụng chạy trên nền Nodejs, tập tin package.json dùng để làm gì? Phát biểu nào không đúng?

A. Chứa thông tin mô tả về ứng dụng

B. Quản lý các phụ thuộc

C. Chỉ ra tập tin JavaScript đầu tiên được thực thi

<mark>D. Chứa mã để tạo giao diện ứng dụng</mark>

Câu 6.5 PNPM là gì? Phát biểu nào không đúng?

A. Giúp tiết kiệm dung lượng đĩa

B. Có thể thay thế hoặc bổ sung cho NPM

C. Là viết tắt của Performant Node Package Manager 

<mark>D. Không thể thay thế hoặc bổ sung cho NPM</mark>

Câu 6.6 Express trong Node.js được sử dụng để làm gì?

<mark>A. Tạo ứng dụng web và API</mark>

B. Quản lý cơ sở dữ liệu

C. Thiết kế giao diện người dùng

D. Kiểm tra hiệu suất ứng dụng

Câu 6.7 Nodemon trong Node.js được sử dụng để làm gì?

A. Kết nối với cơ sở dữ liệu

B. Tạo giao diện người dùng cho ứng dụng

C. Quản lý các gói phụ thuộc

<mark>D. Tự động khởi động lại server khi mã thay đổi</mark>

# Chương 7.