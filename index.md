# Chương 1. Một số khái niệm

## 1.5. Bài tập

<b>Câu 1.1 Liệt kê 3 gói thuê bao (tên gói, giá tiền) của 3 nhà cung cấp kết nối Internet tại Việt Nam.</b>

| Nhà cung cấp | Tên gói   | Dung lượng | Giá cước (VNĐ) |
| :--- | :--- | :--- | :--- |
| FPT Telecom  | Super 25  | 25Mbps     | 190.000        |
| FPT Telecom  | Super 45  | 45Mbps     | 200.000        |
| VNPT         | Home 1    | 30Mbps     | 165.000        |
| VNPT         | Home 2    | 50Mbps     | 180.000        |
| Viettel      | NET1PLUS  | 40Mbps     | 165.000        |
| Viettel      | NET2PLUS  | 80Mbps     | 180.000        |

<b>Câu 1.2 Sử dụng trình duyệt để xem mã nguồn của trang web https://react.dev. Chỉ ra được đâu là mã HTML, CSS và JavaScript. Ngoài HTML, CSS, và JavaScript, bạn có biết được lập trình viên đã sử dụng ngôn ngữ lập trình nào ở phía server để tạo ra trang https://react.dev không? Tại sao?</b>

[![Đoạn mã HTML](Image/1.1.png)](Image/1.1.png)
<div align="center"><em>Đoạn mã HTML của trang web https://react.dev</em></div> <br>

[![Đoạn mã CSS](Image/1.2.png)](Image/1.2.png)
<div align="center"><em>Đoạn mã CSS của trang web https://react.dev</em></div> <br>

[![Đoạn mã JavaScript](Image/1.3.png)](Image/1.3.png)
<div align="center"><em>Đoạn mã JavaScript của trang web https://react.dev</em></div> 

> **Trả lời:** Không thể biết chính xác lập trình viên đã sử dụng ngôn ngữ nào ở phía Server chỉ bằng cách xem mã nguồn trình duyệt.
>
> **Lý do:**
> 1.  **Cơ chế hoạt động của Web (Mô hình Client-Server):** Trình duyệt (Client) chỉ có khả năng hiểu và hiển thị 3 thành phần: HTML, CSS và JavaScript. Khi bạn truy cập một trang web, Server sẽ xử lý các logic phức tạp (bằng các ngôn ngữ như Java, C#, PHP, Python, Node.js...) sau đó kết quả trả về cho trình duyệt chỉ là HTML, CSS và JavaScript để hiển thị cho người dùng.
> 2.  **Tính bảo mật:** Mã nguồn phía Server (Backend code) chứa các logic nghiệp vụ quan trọng và kết nối cơ sở dữ liệu. Mã này nằm tuyệt đối trên máy chủ và không bao giờ được gửi xuống máy khách (trình duyệt). Do đó, chức năng "View Source" của trình duyệt chỉ cho thấy "kết quả" chứ không cho thấy "nguyên liệu" gốc.

<b>Câu 1.3 Phát biểu nào không đúng khi nói về web, trang web và website?</b> <br>
A. Web là hệ thống thông tin toàn cầu <br>
B. Web được tạo thành nhờ các trang web và sự liên kết giữa chúng <br>
<mark>C. Một trang web chứa nhiều website</mark> <br>
D. Một website chứa nhiều trang web có liên quan đến nhau

> *Giải thích: Quan hệ bao hàm bị sai. Một Website (tập hợp) chứa nhiều Trang web (phần tử con). Trang web (Web page) chỉ là một tài liệu đơn lẻ hiển thị trên trình duyệt, nó không thể chứa nhiều website bên trong nó được.*

<b>Câu 1.4 Phát biểu nào không đúng khi nói về website và ứng dụng web?</b> <br>
A. Không có sự phân biệt rõ ràng giữa website và ứng dụng web <br>
B. Một website và ứng dụng web có một địa chỉ URL để truy cập <br>
C. Website và ứng dụng web hoạt động dựa trên mô hình client-server <br>
<mark>D. Chỉ cần sử dụng HTML và CSS là có thể tạo ra được ứng dụng web</mark>

> *Giải thích: HTML và CSS chỉ tạo ra được giao diện tĩnh (Static Website). Để tạo ra "Ứng dụng web" (Web App) có khả năng tương tác, xử lý logic và dữ liệu người dùng, bắt buộc phải có ngôn ngữ lập trình (như JavaScript, PHP, Java...) và cơ sở dữ liệu.*



# Chương 2. Tổng quan về phát triển ứng dụng web

## 2.3. Bài tập

<b>Bài 2.1 Tìm trang (web) chủ của các CMS trong lĩnh vực phát triển ứng dụng web.</b>

| Tên CMS   | Trang chủ (Website) | Ghi chú |
| :--- | :--- | :--- |
| **WordPress** | [wordpress.org](https://wordpress.org/) <br> [wordpress.com](https://wordpress.com/) | .org là mã nguồn mở (tự cài đặt). <br> .com là dịch vụ lưu trữ sẵn. |
| **Wix** | [wix.com](https://www.wix.com/) | Nền tảng kéo thả (Drag & Drop). |
| **Joomla** | [joomla.org](https://www.joomla.org/) | |
| **Drupal** | [drupal.org](https://www.drupal.org/) | |
| **Magento** | [Magento Commerce](https://business.adobe.com/products/magento/magento-commerce.html) | Đã thuộc về Adobe Commerce. |
| **Shopify** | [shopify.com](https://www.shopify.com/) | Chuyên TMĐT (SaaS). |
| **Moodle** | [moodle.org](https://moodle.org/) | CMS chuyên về giáo dục (LMS). |
| **Blogger** | [blogger.com](https://www.blogger.com/) | |

<b>Bài 2.2 Tìm các trang (web) chủ của các framework và thư viện hỗ trợ trong việc phát triển ứng dụng web.</b>

**1. Frontend (Giao diện người dùng)**

| Tên Framework / Thư viện | Trang chủ |
| :--- | :--- |
| **jQuery** | [jquery.com](https://jquery.com/) |
| **Bootstrap** | [getbootstrap.com](https://getbootstrap.com/) |
| **D3 (D3.js)** | [d3js.org](https://d3js.org/) |
| **React** | [react.dev](https://react.dev/) |
| **Angular** | [angular.dev](https://angular.dev/) <br> [angular.io](https://angular.io/) |
| **Vue (Vue.js)** | [vuejs.org](https://vuejs.org/) |
| **Svelte** | [svelte.dev](https://svelte.dev/) |

**2. Backend (Xử lý phía máy chủ)**

| Tên Framework | Ngôn ngữ | Trang chủ |
| :--- | :--- | :--- |
| **Express.js** | Node.js | [expressjs.com](https://expressjs.com/) |
| **Django** | Python | [djangoproject.com](https://www.djangoproject.com/) |
| **Flask** | Python | [flask.palletsprojects.com](https://flask.palletsprojects.com/) |
| **ASP.NET** | C# | [dotnet.microsoft.com](https://dotnet.microsoft.com/apps/aspnet) |
| **Spring Boot** | Java | [spring.io](https://spring.io/projects/spring-boot) |
| **Laravel** | PHP | [laravel.com](https://laravel.com/) |
| **Ruby on Rails** | Ruby | [rubyonrails.org](https://rubyonrails.org/) |
| **Gin** | Go (Golang) | [gin-gonic.com](https://gin-gonic.com/) |
| **Echo** | Go (Golang) | [echo.labstack.com](https://echo.labstack.com/) |

<b>Câu 2.3 Có 3 cách để tạo ra một ứng dụng web? Phát biểu nào không đúng?</b> <br>
A. Sử dụng CMS <br>
B. Sử dụng framework và thư viện hỗ trợ <br>
C. Viết thuần bằng ngôn ngữ lập trình mà không sử dụng framework, thư viện hỗ trợ <br>
<mark>D. Sử dụng trình duyệt web</mark>

> *Giải thích: Trình duyệt web (như Chrome, Firefox) là môi trường để thực thi (run) và hiển thị ứng dụng phía Client, không phải là công cụ hay phương pháp để xây dựng (build/create) mã nguồn phần mềm.*

<b>Câu 2.4 Những ưu điểm khi sử dụng CMS để tạo ra ứng dụng web. Phát biểu nào không đúng?</b> <br>
<mark>A. Cần kiến thức lập trình chuyên sâu</mark> <br>
B. Tối ưu SEO <br>
C. Dễ sử dụng, dễ quản lý, tiết kiệm thời gian <br>
D. Chi phí phát triển ứng dụng thấp

> *Giải thích: CMS (Hệ quản trị nội dung) sinh ra để giúp người dùng có thể tạo và quản lý website mà không cần (hoặc cần rất ít) kiến thức lập trình. Yêu cầu kiến thức chuyên sâu là đặc điểm của việc tự viết code (coding from scratch).*

<b>Câu 2.5 Những ưu điểm khi sử dụng framework và thư viện để tạo ra ứng dụng web. Phát biểu nào không đúng?</b> <br>
A. Tăng tốc độ phát triển <br>
B. Cải thiện chất lượng viết mã <br>
<mark>C. Giảm khả năng bảo mật</mark> <br>
D. Dễ dàng bảo trì và mở rộng

> *Giải thích: Framework thường cung cấp các lớp bảo mật mặc định để chống lại các lỗi phổ biến (như SQL Injection, XSS, CSRF). Do đó, sử dụng Framework đúng cách sẽ giúp tăng cường bảo mật chứ không phải làm giảm đi.*



# Chương 3. Web server

## 3.3 Bài tập

<b>Bài 3.1 Thực hành lại các cài đặt trong bài học.</b>

* **Cài đặt Nginx:**
[![Thư mục cài đặt nginx](Image/3.1.png)](Image/3.1.png)

* **Kiểm tra tiến trình trong Task Manager:**
[![Nginx trong Task Manager](Image/3.2.png)](Image/3.2.png)

* **Một số lệnh của Nginx:**
[![Một số lệnh của Nginx](Image/3.3.png)](Image/3.3.png)

* **Tắt Nginx:**
[![Tắt nginx](Image/3.4.png)](Image/3.4.png)

* **Web server sử dụng Nginx:**
[![Sử dụng nginx làm web server](Image/3.5.png)](Image/3.5.png)

* **Đổi cổng kết nối:**
[![Đổi cổng kết nối](Image/3.6.png)](Image/3.6.png)
[![Khắc phục lỗi](Image/3.7.png)](Image/3.7.png)

* **Thay đổi nội dung trang web:**
[![Thay đổi nội dung](Image/3.8.png)](Image/3.8.png)

<b>Câu 3.2 Một số phần mềm web server phổ biến. Phát biểu nào không đúng?</b> <br>
A. Apache <br>
B. Nginx <br>
<mark>C. SSI</mark> <br>
D. Nodejs

<b>Câu 3.3 Các chức năng của Web server là gì. Phát biểu nào không đúng?</b> <br>
A. Lưu trữ các tập tin của ứng dụng web <br>
B. Nhận request từ client <br>
C. Xử lý request <br>
<mark>D. Nhận response từ máy client</mark>

<b>Bài tập 3.4 Thực hiện một số cấu hình cho Nginx:</b>

* (a) Lắng nghe trên cổng 65535
* (b) Trỏ web root về một thư mục khác ổ đĩa `C:\` (ví dụ: `D:\TeoShop`)
* (c) Tạo tập tin `index.py` để kiểm tra tập tin mặc định.
* **(d) Lắng nghe trên cổng 65536 được không? Tại sao?**

> **Trả lời:** Cổng mạng (port) trong giao thức TCP/UDP được định danh bằng 16-bit, có giá trị từ **0 đến 65535**. Vì vậy, cổng **65536** vượt qua phạm vi hợp lệ và sẽ không thể sử dụng được.

[![Ảnh minh họa lỗi cổng](Image/3.9.png)](Image/3.9.png)



# Chương 4. Ứng dụng web bán hàng

<b>Bài tập 4.1 Thực hành các cài đặt trong bài học.</b>

* **Kiểm tra phiên bản Git:**
[![Ảnh](Image/4.1.png)](Image/4.1.png)

* **Cài đặt Git vào thư mục dự án:**
[![Ảnh](Image/4.2.png)](Image/4.2.png)

<b>Câu 4.2 Lệnh nào được sử dụng để nhúng Git vào thư mục dự án?</b> <br>
<mark>A. git init</mark> <br>
B. git --init <br>
C. git initialize <br>
D. git embed

<b>Câu 4.3 Lệnh nào sử dụng để kiểm tra trên máy tính đã có phần mềm Git hay chưa?</b> <br>
A. git ver <br>
B. git version <br>
<mark>C. git --version hoặc git -v</mark> <br>
D. git --ver

<b>Câu 4.4 Trong Git, kho lưu trữ (repo, repository) là gì?</b> <br>
A. Là thư mục dự án <br>
<mark>B. Là thư mục dự án đã được nhúng Git</mark> <br>
C. Là thư mục cài đặt phần mềm Git <br>
D. Là thư mục .git (trong thư mục dự án)

<b>Câu 4.5 Bạn có thể sử dụng các công cụ sau để viết mã. Phát biểu nào không đúng?</b> <br>
A. Text editor <br>
<mark>B. MS Word</mark> <br>
C. IDE, Code Editor <br>
D. Chatbot (Gemini), Trang web (https://codepen.io/)



# Chương 5. Nodejs và NPM

<b>Bài tập 5.1 Tải và cài đặt Nodejs, NPM trên máy tính. Kiểm tra để đảm bảo Nodejs và NPM sẵn sàng sử dụng.</b>
[![Ảnh](Image/5.1.png)](Image/5.1.png)

<b>Câu 5.2 Nodejs là gì? Phát biểu nào không đúng?</b> <br>
A. Nodejs là môi trường phát triển ứng dụng <br>
<mark>B. Nodejs là một ngôn ngữ lập trình</mark> <br>
C. Nodejs là nền tảng phát triển ứng dụng <br>
D. Có thể sử dụng Nodejs để tạo web server

<b>Câu 5.3 NPM là gì? Phát biểu nào không đúng?</b> <br>
A. NPM là viết tắt của Node Package Manager <br>
B. NPM là công cụ để quản lý các thư viện dùng trong một ứng dụng chạy trên nền Nodejs <br>
C. NPM được cài đặt mặc định khi cài đặt Nodejs <br>
<mark>D. NPM gồm 3 thành phần: website, GUI và registry</mark>



# Chương 6. Cấu hình Web server trong Nodejs

<b>Bài tập 6.1 Thực hiện các cài đặt, cấu hình trong bài học.</b>

* **Package.json:** [![Thêm package.json](Image/6.1.png)](Image/6.1.png)
* **Cài đặt PNPM:** [![Cài đặt PNPM](Image/6.2.png)](Image/6.2.png)
* **Chạy tập tin index.js:** [![Chạy index.js](Image/6.3.png)](Image/6.3.png)
* **Cài đặt Nodemon:** [![Cài đặt Nodemon](Image/6.4.png)](Image/6.4.png)
* **Sử dụng Nodemon:** [![Sử dụng Nodemon](Image/6.5.png)](Image/6.5.png)

> *Link tài liệu thực hành: [Click here](https://drive.google.com/drive/u/2/folders/1SLn_8MV9Wh72W1Ja0-DV2bNh-S3l0Nmv)*

<b>Bài tập 6.2 Làm sao biết được một gói cài đặt ở chế độ cục bộ (locally) hay toàn cục (globally)? Khi cài đặt các gói (package) ở chế độ cục bộ và toàn cục (globally) thì các gói sẽ được lưu ở đâu? Làm sao bạn biết được?</b>

> **1. Cài đặt gói ở chế độ cục bộ (local)**
> * **Lệnh:** `npm install <tên-gói>`
> * **Nơi lưu:** Trong thư mục `node_modules` của chính dự án.
> * **Phạm vi:** Chỉ dùng được trong dự án đó (ví dụ: `express`, `mongoose`).
> * **Cách kiểm tra:** Xem thư mục `node_modules` hoặc gõ `npm list <tên-gói>`.

> **2. Cài đặt gói ở chế độ toàn cục (global)**
> * **Lệnh:** `npm install -g <tên-gói>`
> * **Nơi lưu:** Thư mục hệ thống (Windows: `AppData`, Mac/Linux: `/usr/local/lib`).
> * **Phạm vi:** Dùng chung cho mọi dự án (thường là công cụ CLI như `nodemon`, `npm`, `pnpm`).
> * **Cách kiểm tra:** Gõ `npm list -g <tên-gói>` hoặc `where <tên-gói>`.

<b>Bài tập 6.3 Sự khác nhau khi cài đặt gói ở chế độ dependencies và devDependencies?</b>

| Đặc điểm | dependencies | devDependencies |
| :--- | :--- | :--- |
| **Mục đích** | Các gói cần thiết để ứng dụng hoạt động **thực tế** (Production). | Các gói chỉ phục vụ cho quá trình **phát triển** (Development). |
| **Lệnh cài** | `npm install <tên-gói>` | `npm install <tên-gói> --save-dev` |
| **Ví dụ** | `express`, `react`, `axios`. | `nodemon`, `jest`, `eslint`. |
| **Vai trò** | Nếu thiếu, ứng dụng sẽ bị lỗi, không chạy được. | Giúp lập trình viên code nhanh hơn, không cần thiết khi chạy thật. |

<b>Câu 6.4 Trong ứng dụng chạy trên nền Nodejs, tập tin package.json dùng để làm gì? Phát biểu nào không đúng?</b> <br>
A. Chứa thông tin mô tả về ứng dụng <br>
B. Quản lý các phụ thuộc <br>
C. Chỉ ra tập tin JavaScript đầu tiên được thực thi <br>
<mark>D. Chứa mã để tạo giao diện ứng dụng</mark>

<b>Câu 6.5 PNPM là gì? Phát biểu nào không đúng?</b> <br>
A. Giúp tiết kiệm dung lượng đĩa <br>
B. Có thể thay thế hoặc bổ sung cho NPM <br>
C. Là viết tắt của Performant Node Package Manager <br>
<mark>D. Không thể thay thế hoặc bổ sung cho NPM</mark>

<b>Câu 6.6 Express trong Node.js được sử dụng để làm gì?</b> <br>
<mark>A. Tạo ứng dụng web và API</mark> <br>
B. Quản lý cơ sở dữ liệu <br>
C. Thiết kế giao diện người dùng <br>
D. Kiểm tra hiệu suất ứng dụng

<b>Câu 6.7 Nodemon trong Node.js được sử dụng để làm gì?</b> <br>
A. Kết nối với cơ sở dữ liệu <br>
B. Tạo giao diện người dùng cho ứng dụng <br>
C. Quản lý các gói phụ thuộc <br>
<mark>D. Tự động khởi động lại server khi mã thay đổi</mark>



# Chương 7. Local và Global, Dependencies và devDependencies

<b>Bài tập 7.1 Thực hiện các cài đặt trong bài học.</b>

* **Cài đặt cục bộ:** 
[![Package.json cục bộ](Image/7.1.png)](Image/7.1.png) 

[![Express cục bộ](Image/7.2.png)](Image/7.2.png)

* **Gỡ bỏ gói cục bộ:** 
[![Xóa express](Image/7.3.png)](Image/7.3.png)

* **Cài đặt toàn cục:** 
[![Nodemon toàn cục](Image/7.4.png)](Image/7.4.png)

* **Kiểm tra vị trí gói toàn cục:** 
[![Global position](Image/7.5.png)](Image/7.5.png)

* **Xem tất cả gói đã cài:** 
[![All global files](Image/7.6.png)](Image/7.6.png)

> *Link tài liệu thực hành: [Click here](https://drive.google.com/drive/u/2/folders/1SLn_8MV9Wh72W1Ja0-DV2bNh-S3l0Nmv)*

<b>Câu 7.2 Trong môi trường phát triển ứng dụng Nodejs, phát biểu nào không đúng khi nói về gói cục bộ?</b> <br>
A. Gói cục bộ được cài đặt trong thư mục node_modules của dự án <br>
B. Gói cục bộ chỉ có thể được sử dụng trong dự án mà nó được cài đặt <br>
C. Gói cục bộ được quản lý thông qua file package.json và có thể sử dụng các phiên bản khác nhau giữa các dự án <br>
<mark>D. Gói cục bộ luôn được cài đặt toàn cục trên hệ thống để tất cả các dự án đều có thể truy cập</mark>

> *Giải thích: Đây là đặc điểm của gói toàn cục (Global Package). Gói cục bộ (Local Package) được cài riêng biệt trong từng dự án để tránh xung đột phiên bản.*

<b>Câu 7.3 Trong môi trường phát triển ứng dụng Nodejs, phát biểu nào không đúng khi nói về gói toàn cục?</b> <br>
<mark>A. Gói toàn cục luôn được liệt kê trong tập tin package.json của dự án</mark> <br>
B. Gói toàn cục thường được sử dụng cho các công cụ dòng lệnh (CLI) như nodemon <br>
C. Gói toàn cục được lưu trong thư mục toàn cục của hệ thống và có thể truy cập từ bất kỳ dự án nào <br>
D. Gói toàn cục được cài đặt bằng lệnh npm install -g <package-name>

> *Giải thích: Gói toàn cục được cài đặt vào thư mục hệ thống của máy tính, nó không tự động được thêm vào danh sách dependencies trong file `package.json` của một dự án cụ thể.*

<b>Câu 7.4 Trong môi trường phát triển ứng dụng Nodejs, phát biểu nào không đúng khi nói về kiểu cài đặt dependencies?</b> <br>
A. Các gói trong dependencies được cài đặt cục bộ trong dự án bằng lệnh npm install <package-name> <br>
B. Các gói trong dependencies là các phụ thuộc cần thiết để ứng dụng chạy trong môi trường triển khai, sản xuất (production) <br>
<mark>C. Các gói trong dependencies chỉ được sử dụng trong giai đoạn phát triển và không cần thiết khi triển khai ứng dụng (production)</mark> <br>
D. Các gói trong dependencies được liệt kê trong tập tin package.json và tự động cài đặt khi chạy npm install

> *Giải thích: Các gói trong `dependencies` là các thư viện bắt buộc phải có để ứng dụng hoạt động (Runtime dependencies), ví dụ như Express, React, Mongoose. Nếu thiếu chúng ở môi trường Production, ứng dụng sẽ lỗi.*

<b>Câu 7.5 Trong môi trường phát triển ứng dụng Nodejs, phát biểu nào không đúng khi nói về kiểu cài đặt devDependencies?</b> <br>
A. Các gói trong devDependencies được cài đặt bằng lệnh npm install <package-name> --save-dev <br>
<mark>B. Các gói trong devDependencies là các phụ thuộc cốt lõi để ứng dụng chạy trong môi trường triển khai (production)</mark> <br>
C. Các gói trong devDependencies chỉ cần thiết trong giai đoạn phát triển hoặc kiểm thử, không cần cho môi trường triển khai (production) <br>
D. Các gói trong devDependencies không được cài đặt khi chạy npm install --production

> *Giải thích: `devDependencies` chỉ chứa các công cụ hỗ trợ quá trình phát triển (như Nodemon, Jest, ESLint). Khi deploy lên Production, để tối ưu hiệu năng và dung lượng, ta thường bỏ qua các gói này.*



# Chương 8. Lập trình đồng bộ, hàm ẩn danh trong JavaScript

<b>Bài 8.1 Cài đặt các ví dụ trong bài học.<b>

* **Tính toán căn bản:** 
[![Tính toán căn bản](Image/8.1.png)](Image/8.1.png) 

* **Vòng lặp đồng bộ:**
[![Vòng lặp đồng bộ](Image/8.2.png)](Image/8.2.png)

* **Chặn luồng:** 
[![Chặn luồng](Image/8.3.png)](Image/8.3.png)

* **Hàm ẩn danh:** 
[![Hàm ẩn danh](Image/8.4.png)](Image/8.4.png)

> *Link tài liệu thực hành: [Click here](https://drive.google.com/drive/u/2/folders/1SLn_8MV9Wh72W1Ja0-DV2bNh-S3l0Nmv)*

<b>Câu 8.2: Lập trình đồng bộ trong JavaScript là gì? Phát biểu nào sau đây không đúng?</b> <br>
<mark>A. Lập trình đồng bộ không chặn luồng, cho phép các lệnh tiếp theo chạy ngay cả khi tác vụ chưa hoàn tất.</mark> <br>
B. Các lệnh được thực thi tuần tự, theo thứ tự từ trên xuống dưới. <br>
C. Mỗi lệnh phải hoàn thành trước khi lệnh tiếp theo được thực thi. <br>
D. Phù hợp với các tác vụ đơn giản như tính toán cơ bản không cần chờ đợi.

> *Giải thích: Lập trình đồng bộ (Synchronous) hoạt động theo cơ chế "chặn" (blocking). Tức là dòng mã phía sau bắt buộc phải chờ dòng mã phía trước chạy xong hoàn toàn mới được thực thi. Đặc điểm "không chặn luồng" (non-blocking) là tính chất của lập trình bất đồng bộ (Asynchronous).*

<b>Câu 8.3: Hàm ẩn danh (anonymous function) trong JavaScript là gì? Phát biểu nào sau đây không đúng?</b> <br>
A. Hàm ẩn danh có thể truy cập biến trong phạm vi bao quanh nhờ closure. <br>
B. Hàm ẩn danh là hàm không có tên khi được định nghĩa. <br>
C. Hàm ẩn danh thường được gán vào biến hoặc truyền làm tham số cho hàm khác. <br>
<mark>D. Hàm ẩn danh được "nâng lên" (hoisted) giống như hàm khai báo (function declaration).</mark>

> *Giải thích: Trong JavaScript, chỉ có Hàm khai báo (Function Declaration) mới có tính chất Hoisting (được đưa lên đầu phạm vi khi biên dịch). Hàm ẩn danh (thường được dùng trong Function Expression) không được Hoisted; chúng chỉ được khởi tạo khi trình thông dịch chạy đến dòng code định nghĩa chúng.*



# Chương 9. Hàm mũi tên, lập trình bất đồng bộ trong JavaScript

<b>Bài 9.1 Cài đặt các ví dụ trong bài học.<b>

* **Hàm không có tham số:**
[![Hàm không có tham số](Image/9.1.png)](Image/9.1.png)

* **Hàm có một tham số:**
[![Hàm có một tham số](Image/9.2.png)](Image/9.2.png)

* **Từ khóa this trong hàm mũi tên:**
[![Từ khóa this](Image/9.3.png)](Image/9.3.png)

* **Lập trình bất đồng bộ, sử dụng chặn luồng:**
[![Chặn luồng](Image/9.4.png)](Image/9.4.png)

> *Link tài liệu thực hành: [Click here](https://drive.google.com/drive/u/2/folders/1SLn_8MV9Wh72W1Ja0-DV2bNh-S3l0Nmv)*

<b>Câu 9.2: Hàm mũi tên (arrow function) là gì? Phát biểu nào sau đây không đúng về hàm mũi tên?</b> <br>
A. Hàm mũi tên có cú pháp ngắn gọn, giúp viết mã dễ đọc hơn. <br>
<mark>B. Hàm mũi tên có this (ngữ cảnh) riêng, không kế thừa từ phạm vi bên ngoài.</mark> <br>
C. Hàm mũi tên không thể được dùng làm hàm tạo (constructor). <br>
D. Hàm mũi tên không có biến arguments để truy cập danh sách tham số.

> *Giải thích: Một trong những đặc điểm quan trọng nhất của Arrow Function là nó không có context `this` của riêng nó. Thay vào đó, nó kế thừa `this` từ phạm vi cha (lexical scoping) nơi nó được khai báo. Điều này khác với Regular Function (hàm thường) vốn có `this` thay đổi tùy theo cách gọi hàm.*

<b>Câu 9.3: Lập trình bất đồng bộ là gì? Phát biểu nào sau đây không đúng về lập trình bất đồng bộ?</b> <br>
A. Lập trình bất đồng bộ cho phép chương trình thực hiện nhiều tác vụ cùng lúc mà không cần chờ đợi tác vụ trước đó hoàn thành. <br>
B. Lập trình bất đồng bộ đặc biệt hữu ích khi xử lý các tác vụ tốn thời gian như yêu cầu mạng, đọc/ghi tập tin hoặc tương tác với cơ sở dữ liệu. <br>
<mark>C. Callback là một kỹ thuật bất đồng bộ, nó sẽ làm cho code dễ đọc và dễ bảo trì hơn khi code có nhiều callback lồng nhau.</mark> <br>
D. Async/await cho phép viết mã bất đồng bộ trông giống như mã đồng bộ, giúp mã trở nên dễ đọc và dễ hiểu hơn.

> *Giải thích: Khi sử dụng quá nhiều callback lồng nhau, mã nguồn sẽ rơi vào tình trạng "Callback Hell" (địa ngục callback), khiến cấu trúc mã bị phình to sang phải (hình kim tự tháp), rất khó đọc, khó gỡ lỗi và khó bảo trì. Promise và Async/Await sinh ra để khắc phục nhược điểm này.*



# Chương 10. Hàm callback

<b>Câu 10.2 Hàm callback trong JavaScript là gì? Phát biểu nào sau đây không đúng?</b> <br>
A. Hàm callback là một hàm được truyền vào một hàm khác như một tham số. <br>
B. Hàm callback thường được sử dụng để xử lý các tác vụ bất đồng bộ. <br>
C. Hàm callback có thể là hàm ẩn danh, hàm mũi tên hoặc hàm đã được định nghĩa trước. <br>
<mark>D. Hàm callback được thực thi ngay lập tức sau khi hàm "cha" bắt đầu thực hiện.</mark>

> *Giải thích: Hàm callback không nhất thiết phải chạy ngay lập tức. Trong các tác vụ bất đồng bộ (như `setTimeout`, gọi API, đọc file), callback chỉ được thực thi **sau khi** tác vụ của hàm cha đã hoàn thành hoặc khi một sự kiện cụ thể xảy ra.*

<b>Câu 10.3 Callback hell trong JavaScript là gì? Phát biểu nào sau đây không đúng?</b> <br>
A. Callback hell xảy ra khi có quá nhiều hàm callback lồng nhau, khiến mã nguồn khó đọc và bảo trì. <br>
B. Callback hell thường xuất hiện khi xử lý các tác vụ bất đồng bộ phức tạp. <br>
<mark>C. Callback hell là một cách hiệu quả để quản lý các tác vụ bất đồng bộ trong JavaScript.</mark> <br>
D. Callback hell có thể được giải quyết bằng Promise hoặc async/await.

> *Giải thích: Tên gọi "Callback hell" (Địa ngục callback) ám chỉ một vấn đề tiêu cực trong lập trình, nơi cấu trúc mã trở nên rối rắm (hình kim tự tháp) và khó kiểm soát. Đây không phải là một phương pháp hiệu quả, mà là tình trạng cần tránh hoặc cần tái cấu trúc bằng Promise/Async-Await.*


 
# Chương 11. Lập trình giao diện

<b>Câu 11.2 Free HTML template là gì? Phát biểu nào sau đây không đúng?</b> <br>
A. Free HTML template là các mẫu giao diện web được thiết kế sẵn, bao gồm HTML, CSS, và đôi khi JavaScript, được cung cấp miễn phí. <br>
B. Free HTML template thường có giao diện đẹp, cấu trúc cơ bản (header, footer, sidebar), và phù hợp cho nhiều loại dự án như blog, portfolio, hoặc trang doanh nghiệp nhỏ. <br>
<mark>C. Sử dụng Free HTML template tốn nhiều thời gian, phù hợp cho các dự án lớn.</mark> <br>
D. Free HTML template cho phép bạn tùy chỉnh CSS, thay đổi nội dung (văn bản, hình ảnh), tích hợp back-end (như Node.js, PHP).

> *Giải thích: Mục đích chính của việc sử dụng Template là để **tiết kiệm thời gian** thiết kế và dựng khung ban đầu. Đối với các dự án lớn và phức tạp, Template thường không đáp ứng đủ nhu cầu tùy biến sâu, do đó lập trình viên thường tự xây dựng từ đầu (build from scratch).*

<b>Câu 11.3 Static files (tập tin tĩnh) trong Express là gì? Phát biểu nào sau đây không đúng?</b> <br>
A. Static files là các tập tin không thay đổi nội dung hoặc không cần xử lý logic phía server. <br>
B. Static files được gửi trực tiếp cho client thông qua middleware express.static. <br>
C. Mục đích của static files là tối ưu hóa hiệu suất, tổ chức dự án và bảo mật. <br>
<mark>D. Không nên đặt các static files trong thư mục public.</mark>

> *Giải thích: Trong Express.js, `public` là tên thư mục tiêu chuẩn và được khuyến nghị để chứa các tập tin tĩnh (hình ảnh, CSS, Client-side JS). Chúng ta thường cấu hình bằng lệnh `app.use(express.static('public'))`.*



# Chương 12. Ứng dụng client-server

<b>Câu hỏi 12.1 Ứng dụng cục bộ là gì? Phát biểu nào sau đây không đúng?</b> <br>
A. Ứng dụng cục bộ chạy trực tiếp trên thiết bị của người dùng mà không cần kết nối liên tục với máy chủ ở xa. <br>
<mark>B. Ứng dụng cục bộ luôn yêu cầu kết nối internet ổn định để hoạt động hiệu quả.</mark> <br>
C. Ứng dụng cục bộ có thể truy cập trực tiếp vào các tài nguyên của thiết bị như hệ thống tập tin và phần cứng. <br>
D. Dữ liệu của ứng dụng cục bộ thường được lưu trữ trên thiết bị của người dùng, giúp tăng cường bảo mật và quyền riêng tư.

> *Giải thích: Ứng dụng cục bộ (Local Application) như Notepad, Calculator hay các phần mềm offline được thiết kế để chạy trên tài nguyên của máy tính mà không phụ thuộc vào mạng. Yêu cầu kết nối Internet liên tục là đặc điểm của ứng dụng web (Web App) hoặc ứng dụng đám mây (Cloud App).*

<b>Câu hỏi 12.2 Ứng dụng kiểu client-server là gì? Phát biểu nào sau đây không đúng?</b> <br>
A. Client tập trung chủ yếu vào việc hiển thị giao diện người dùng, trong khi server tập trung xử lý logic và dữ liệu. <br>
B. Giao tiếp giữa client và server thường được thực hiện qua mạng, sử dụng các giao thức như HTTP, WebSocket hoặc TCP/IP. <br>
<mark>C. Client và server luôn phải chạy trên các thiết bị riêng biệt, không bao giờ có thể cùng chạy trên một máy tính.</mark> <br>
D. Server có nhiệm vụ nhận yêu cầu từ client, xử lý chúng, và gửi phản hồi lại cho client.

> *Giải thích: Client và Server là hai vai trò logic, không nhất thiết phải là hai thiết bị vật lý tách biệt. Trong quá trình phát triển (development), lập trình viên thường chạy cả Client và Server trên cùng một máy tính (sử dụng `localhost` hoặc `127.0.0.1`).*



# Chương 13. Lập trình client-server

<b>Câu hỏi 13.2 URL (Uniform Resource Locator) là gì? Phát biểu nào sau đây không đúng?</b> <br>
A. URL là một địa chỉ duy nhất xác định vị trí của một tài nguyên trên Internet. <br>
B. URL bao gồm các thành phần như giao thức, tên miền, đường dẫn, truy vấn và phân mảnh. <br>
C. Phần "truy vấn" (query) trong URL được sử dụng để truyền dữ liệu đến máy chủ thông qua các tham số. <br>
<mark>D. Giao thức "FTP" là giao thức phổ biến nhất được sử dụng trong URL để truy cập các trang web.</mark>

> *Giải thích: Giao thức phổ biến nhất để truy cập các trang web (Website) là **HTTP** (Hypertext Transfer Protocol) hoặc **HTTPS**. Giao thức **FTP** (File Transfer Protocol) chủ yếu được sử dụng để truyền tải tập tin giữa máy khách và máy chủ.*



# Chương 14. Lập trình hướng sự kiện

<b>Câu hỏi 14.3 Mô hình lập trình hướng sự kiện trong Node.js là gì? Phát biểu nào sau đây không đúng?</b> <br>
<mark>A. Event Emitter liên tục kiểm tra hàng đợi sự kiện và thực thi các hàm callback khi có sự kiện xảy ra.</mark> <br>
B. Event là các hành động hoặc sự thay đổi trạng thái xảy ra trong ứng dụng. <br>
C. Event Loop liên tục kiểm tra hàng đợi sự kiện và thực thi các hàm callback khi có sự kiện xảy ra. <br>
D. Event Handler là các hàm được gọi khi một sự kiện xảy ra.

> *Giải thích: **Event Loop** (Vòng lặp sự kiện) mới là thành phần chịu trách nhiệm liên tục kiểm tra hàng đợi sự kiện (Event Queue) và đẩy các callback ra ngăn xếp thực thi (Call Stack). **Event Emitter** chỉ là một class giúp các đối tượng có thể phát ra (emit) và lắng nghe (listen) các sự kiện, nó không tự mình quản lý việc kiểm tra vòng lặp.*



# Chương 15. Event-driven, Route handler và Middleware trong Express



# Chương 16. Lập trình trang web động



# Chương 17. Express-handlebars



# Chương 18. Tạo giao diện các trang con



# Chương 19. Thiết kế cơ sở dữ liệu



# Chương 20. Làm việc với Postgresql