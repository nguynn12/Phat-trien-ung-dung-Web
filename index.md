# 1. Một số khái niệm

## 1.5. Bài tập

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



# 2. Tổng quan về phát triển ứng dụng web

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



#  3. Web server

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


#  4. Ứng dụng web bán hàng

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



#  5. Nodejs và NPM

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



#  6. Cấu hình Web server trong Nodejs

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



#  7. Local và Global, Dependencies và devDependencies

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



#  8. Lập trình đồng bộ, hàm ẩn danh trong JavaScript

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



#  9. Hàm mũi tên, lập trình bất đồng bộ trong JavaScript

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



#  10. Hàm callback

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


 
#  11. Lập trình giao diện

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



#  12. Ứng dụng client-server

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



#  13. Lập trình client-server

<b>Câu hỏi 13.2 URL (Uniform Resource Locator) là gì? Phát biểu nào sau đây không đúng?</b> <br>
A. URL là một địa chỉ duy nhất xác định vị trí của một tài nguyên trên Internet. <br>
B. URL bao gồm các thành phần như giao thức, tên miền, đường dẫn, truy vấn và phân mảnh. <br>
C. Phần "truy vấn" (query) trong URL được sử dụng để truyền dữ liệu đến máy chủ thông qua các tham số. <br>
<mark>D. Giao thức "FTP" là giao thức phổ biến nhất được sử dụng trong URL để truy cập các trang web.</mark>

> *Giải thích: Giao thức phổ biến nhất để truy cập các trang web (Website) là **HTTP** (Hypertext Transfer Protocol) hoặc **HTTPS**. Giao thức **FTP** (File Transfer Protocol) chủ yếu được sử dụng để truyền tải tập tin giữa máy khách và máy chủ.*



#  14. Lập trình hướng sự kiện

<b>Câu hỏi 14.3 Mô hình lập trình hướng sự kiện trong Node.js là gì? Phát biểu nào sau đây không đúng?</b> <br>
<mark>A. Event Emitter liên tục kiểm tra hàng đợi sự kiện và thực thi các hàm callback khi có sự kiện xảy ra.</mark> <br>
B. Event là các hành động hoặc sự thay đổi trạng thái xảy ra trong ứng dụng. <br>
C. Event Loop liên tục kiểm tra hàng đợi sự kiện và thực thi các hàm callback khi có sự kiện xảy ra. <br>
D. Event Handler là các hàm được gọi khi một sự kiện xảy ra.

> *Giải thích: **Event Loop** (Vòng lặp sự kiện) mới là thành phần chịu trách nhiệm liên tục kiểm tra hàng đợi sự kiện (Event Queue) và đẩy các callback ra ngăn xếp thực thi (Call Stack). **Event Emitter** chỉ là một class giúp các đối tượng có thể phát ra (emit) và lắng nghe (listen) các sự kiện, nó không tự mình quản lý việc kiểm tra vòng lặp.*



#  15. Event-driven, Route handler và Middleware trong Express

<b>Câu hỏi 15.2 Mô hình lập trình hướng sự kiện của Express. Phát biểu nào sau đây không đúng?</b> <br>
A. Mỗi request từ client (như GET, POST, PUT, DELETE) được xem là một sự kiện (Event). <br>
B. Các module http, fs, stream là các Bộ quản lý sự kiện (Event Emitter) của Express. <br>
<mark>C. Express sử dụng Vòng lặp sự kiện (Event Loop) của trình duyệt để lắng nghe và xử lý các sự kiện theo kiểu bất đồng bộ (asynchronous), không chặn luồng (non-blocking).</mark> <br>
D. Các route handler và middleware đóng vai trò như các Hàm xử lý sự kiện (Event Handler), được gọi khi sự kiện tương ứng xảy ra.

> *Giải thích: Express.js là một framework hoạt động trên môi trường Node.js (phía máy chủ - Server-side), do đó nó sử dụng Event Loop của Node.js chứ không phải Event Loop của trình duyệt (Browser).*

<b>Câu hỏi 15.3 Route handler trong Express là gì? Phát biểu nào sau đây không đúng?</b> <br>
A. Route handler chỉ được gọi khi request khớp với route và HTTP method đã định nghĩa. <br>
B. Route handler thường chứa logic nghiệp vụ như truy vấn cơ sở dữ liệu hoặc xử lý dữ liệu. <br>
C. Route handler có thể chuyển tiếp request sang middleware hoặc handler tiếp theo bằng hàm next(). <br>
<mark>D. Chỉ có duy nhất một Route handler được gắn vào một route.</mark>

> *Giải thích: Trong Express, bạn hoàn toàn có thể gắn nhiều hơn một Route handler cho một route cụ thể bằng cách truyền vào một mảng hoặc chuỗi các callback function (ví dụ: `app.get('/path', handler1, handler2)`). Các handler này sẽ thực thi tuần tự và dùng hàm `next()` để chuyển quyền điều khiển sang handler kế tiếp.*

<b>Câu hỏi 15.4 Middleware trong Express là gì? Phát biểu nào sau đây không đúng?</b> <br>
A. Middleware là các hàm được thực thi trong quá trình xử lý một HTTP request, trước hoặc sau Route handler. <br>
B. Xử lý request (như xác thực, ghi log). <br>
C. Sửa đổi đối tượng req hoặc res. <br>
<mark>D. Middleware nhận 2 tham số: req, res.</mark>

> *Giải thích: Một hàm Middleware tiêu chuẩn trong Express bắt buộc phải có ít nhất 3 tham số: `req` (Request), `res` (Response) và `next` (hàm callback để chuyển tiếp sang middleware tiếp theo). Ngoài ra, Middleware xử lý lỗi (Error-handling middleware) còn có 4 tham số là `err`, `req`, `res`, `next`.*



#  16. Lập trình trang web động

<b>Câu hỏi 16.1 Trang web động là gì. Phát biểu nào sau đây KHÔNG ĐÚNG?</b> <br>
A. Nội dung hiển thị có thể khác nhau tùy thuộc vào người dùng truy cập. <br>
<mark>B. Nội dung trang web luôn cố định và không thay đổi theo thời gian.</mark> <br>
C. Giao diện có khả năng cập nhật một phần mà không cần tải lại toàn bộ trang. <br>
D. Trang web có thể tương tác với người dùng theo thời gian thực.

> *Giải thích: "Nội dung trang web luôn cố định và không thay đổi theo thời gian" là định nghĩa của Trang web tĩnh (Static Website) chỉ được viết bằng HTML/CSS thuần. Trang web động (Dynamic Website) có khả năng thay đổi nội dung linh hoạt dựa trên dữ liệu từ Database, thời gian, hoặc tương tác của từng người dùng cụ thể.*

<b>Câu hỏi 16.2 Ưu điểm của SSR (Server-Side Rendering) là gì? Phát biểu nào dưới đây KHÔNG đúng?</b> <br>
A. Tối ưu hóa SEO vì các công cụ tìm kiếm có thể thu thập và lập chỉ mục nội dung dễ dàng hơn nhờ nội dung đầy đủ trong mã HTML. <br>
B. Tăng tốc độ tải trang ban đầu, giúp người dùng thấy nội dung nhanh hơn, đặc biệt trên thiết bị di động hoặc mạng chậm. <br>
C. Hỗ trợ tốt cho thiết bị cấu hình yếu bằng cách giảm tải việc thực thi JavaScript trên thiết bị. <br>
<mark>D. Loại bỏ hoàn toàn sự phụ thuộc vào JavaScript để hiển thị nội dung trang web.</mark>

> *Giải thích: SSR giúp hiển thị cấu trúc HTML ban đầu rất nhanh từ máy chủ, nhưng nó KHÔNG loại bỏ hoàn toàn JavaScript. Để trang web có thể thực sự tương tác được (như bấm nút, mở menu dropdown, gửi form không tải lại trang...), trình duyệt vẫn cần phải tải và thực thi các tệp JavaScript (quá trình này thường được gọi là Hydration).*

<b>Câu hỏi 16.3 Nhược điểm của CSR (Client-Side Rendering) là gì? Phát biểu nào dưới đây KHÔNG đúng?</b> <br>
<mark>A. CSR luôn tiêu tốn nhiều tài nguyên server hơn so với SSR để hiển thị nội dung trang web.</mark> <br>
B. SEO không tốt vì các công cụ tìm kiếm có thể gặp khó khăn trong việc thu thập và lập chỉ mục nội dung được tạo bởi JavaScript. <br>
C. Tốc độ tải trang ban đầu chậm do người dùng phải chờ trình duyệt tải và thực thi tập tin JavaScript trước khi thấy nội dung. <br>
D. Yêu cầu thiết bị người dùng phải mạnh để xử lý tốt các tác vụ JavaScript.

> *Giải thích: Khẳng định A bị ngược. CSR (Client-Side Rendering) giúp **giảm tải** cho Server vì Server chỉ cần trả về một tệp HTML gần như trống rỗng cùng với các tệp JavaScript/JSON. Việc tính toán và vẽ (render) giao diện được đẩy hết sang máy của người dùng (Client). Ngược lại, SSR mới là mô hình tiêu tốn nhiều CPU và tài nguyên của Server hơn vì Server phải đảm nhận việc tạo ra toàn bộ mã HTML cho mỗi request.*



#  17. Express-handlebars

<b>Câu hỏi 17.1 Express-handlebars là một _________được tích hợp vào framework Express để tạo ra “HTML động” từ phía server.</b> <br>
A. client-side template engine <br>
B. server-side template machine <br>
C. server-site template engine <br>
<mark>D. server-side template engine</mark>

> *Giải thích: Express-handlebars là một "template engine" (công cụ xử lý mẫu) hoạt động ở phía máy chủ (server-side). Nhiệm vụ của nó là kết hợp dữ liệu từ backend (Node.js/Express) với các file giao diện (.handlebars) để tạo ra mã HTML hoàn chỉnh trước khi gửi trả về cho trình duyệt (client). Các đáp án khác bị sai về thuật ngữ ("machine", "site") hoặc sai môi trường hoạt động ("client-side").*




#  18. Tạo giao diện các trang con



#  19. Thiết kế cơ sở dữ liệu

<b>Câu hỏi 19.1 Kiểu dữ liệu VARCHAR trong thiết kế dữ liệu là gì? Phát biểu nào sau đây không đúng?</b> <br>
<mark>A. VARCHAR luôn chiếm một lượng bộ nhớ cố định, bằng với độ dài tối đa đã khai báo.</mark> <br>
B. VARCHAR là kiểu dữ liệu chuỗi ký tự có độ dài thay đổi. <br>
C. VARCHAR(n) định nghĩa một chuỗi ký tự có độ dài tối đa là 'n' ký tự. <br>
D. VARCHAR giúp tiết kiệm không gian lưu trữ so với kiểu CHAR khi độ dài chuỗi thực tế nhỏ hơn độ dài tối đa.

> *Giải thích: Đặc điểm của VARCHAR (Variable Character) là nó chỉ cấp phát bộ nhớ dựa trên số lượng ký tự thực tế cộng thêm 1 hoặc 2 byte để lưu thông tin về độ dài chuỗi, do đó dung lượng thay đổi linh hoạt. Kiểu dữ liệu luôn chiếm một lượng bộ nhớ cố định, bất chấp chuỗi thực tế ngắn hơn khai báo, là kiểu CHAR.*

<b>Câu hỏi 19.2 Các mối quan hệ giữa các bảng trong thiết kế dữ liệu thường bao gồm những kiểu nào? Phát biểu nào sau đây không đúng?</b> <br>
A. Mối quan hệ một-một (1-1), trong đó một bản ghi ở bảng này liên kết với tối đa một bản ghi ở bảng kia và ngược lại. <br>
B. Mối quan hệ một-nhiều (1-N), trong đó một bản ghi ở bảng này có thể liên kết với nhiều bản ghi ở bảng kia, nhưng một bản ghi ở bảng kia chỉ có thể liên kết với một bản ghi ở bảng này. <br>
C. Mối quan hệ nhiều-nhiều (N-N), trong đó nhiều bản ghi ở bảng này có thể liên kết với nhiều bản ghi ở bảng kia và ngược lại, thường được giải quyết bằng bảng trung gian. <br>
<mark>D. Mối quan hệ không-một (0-1), trong đó một bản ghi ở bảng này có thể không liên kết hoặc liên kết với tối đa một bản ghi ở bảng kia. Đây là một kiểu quan hệ cơ bản thường được nhắc đến trong mọi mô hình dữ liệu.</mark>

> *Giải thích: Trong lý thuyết cơ sở dữ liệu quan hệ (Relational Database), 3 loại mối quan hệ cơ bản (Relationship Types) được công nhận là: 1-1 (One-to-One), 1-N (One-to-Many) và N-N (Many-to-Many). Yếu tố "Không" (0) hoặc "Một" (1) thực chất là để chỉ tính bắt buộc hay tùy chọn (Optionality/Cardinality limits) của một thực thể tham gia vào mối quan hệ, chứ không phải là một "kiểu quan hệ cơ bản" độc lập.*



#  20. Làm việc với Postgresql

<b>Câu hỏi 20.1 Postgresql là gì? Phát biểu nào sau đây không đúng?</b> <br>
A. Postgresql là một hệ quản trị cơ sở dữ liệu quan hệ (RDBMS) mã nguồn mở, mạnh mẽ và đáng tin cậy. <br>
<mark>B. Postgresql là một cơ sở dữ liệu mã nguồn mở.</mark> <br>
C. Postgresql tuân thủ chuẩn SQL và hỗ trợ đầy đủ các thuộc tính ACID cho giao dịch. <br>
D. Postgresql hỗ trợ nhiều kiểu dữ liệu đa dạng, bao gồm JSON/JSONB, ARRAY và dữ liệu địa lý (PostGIS).

> *Giải thích: Xét về mặt thuật ngữ chuyên ngành cốt lõi, phát biểu B là thiếu chính xác nhất. PostgreSQL là một **Hệ quản trị cơ sở dữ liệu** (Database Management System - DBMS, cụ thể hơn là ORDBMS: Hệ quản trị CSDL Đối tượng - Quan hệ). "Cơ sở dữ liệu" (Database) chỉ là tập hợp các dữ liệu được lưu trữ, trong khi PostgreSQL là hệ thống/phần mềm để tạo, quản lý và tương tác với các tập dữ liệu đó.*

<b>Câu hỏi 20.2 Bạn có thể sử dụng các công nào để kết nối và làm việc với Postgresql? Phát biểu nào không đúng?</b> <br>
A. Dùng công cụ dòng lệnh: psql. <br>
<mark>B. Dùng giao thức ping</mark> <br>
C. Dùng công cụ GUI: pgAdmin hoặc DBeaver. <br>
D. API/Thư viện (gắn với một ngôn ngữ lập trình): JDBC hoặc Sequelize.

> *Giải thích: Lệnh `ping` (sử dụng giao thức ICMP) là một công cụ mạng dùng để kiểm tra xem một máy chủ có đang kết nối mạng hay không, đo độ trễ đường truyền. Nó hoàn toàn không có khả năng kết nối, truy vấn hay thao tác với hệ quản trị cơ sở dữ liệu (như việc gửi lệnh SQL).*



# 21. Lập trình với cơ sở dữ liệu

<b>Câu hỏi 21.1 Phát biểu nào sau đây KHÔNG đúng về Code First và Database First?</b> <br>
A. Code First là phương pháp định nghĩa mô hình dữ liệu trong mã nguồn trước, sau đó ORM sẽ tạo hoặc cập nhật schema cơ sở dữ liệu. <br>
B. Database First là phương pháp thiết kế cơ sở dữ liệu trước, sau đó ORM sẽ sinh ra các mô hình trong mã nguồn dựa trên schema đã có. <br>
<mark>C. Cả Code First và Database First đều bỏ qua vai trò của ORM và cho phép lập trình viên tương tác trực tiếp với cơ sở dữ liệu bằng SQL.</mark> <br>
D. Code First thường phù hợp với các dự án mới, trong khi Database First thích hợp với các dự án làm việc trên cơ sở dữ liệu đã tồn tại.

> *Giải thích: Sai hoàn toàn vì cả 2 phương pháp này đều **bắt buộc phải sử dụng ORM** để tự động hóa việc ánh xạ. Viết SQL trực tiếp gọi là "Raw Query", không thuộc về triết lý của hai phương pháp này.*

<b>Câu hỏi 21.2 Phát biểu nào sau đây KHÔNG đúng về ORM?</b> <br>
A. ORM là một kỹ thuật lập trình giúp ánh xạ giữa các đối tượng trong mã nguồn và các bảng trong cơ sở dữ liệu quan hệ. <br>
<mark>B. ORM làm tăng độ phức tạp của mã nguồn và giảm hiệu suất phát triển ứng dụng.</mark> <br>
C. ORM cho phép lập trình viên thao tác với cơ sở dữ liệu bằng cú pháp của ngôn ngữ lập trình thay vì viết câu lệnh SQL trực tiếp. <br>
D. Sequelize (Node.js) và Django ORM (Python) là những ví dụ về các ORM phổ biến.

> *Giải thích: Mục đích lớn nhất của ORM là **GIẢM** độ phức tạp (không cần nhớ cú pháp SQL) và **TĂNG** hiệu suất phát triển (code nhanh hơn rất nhiều).*

<b>Câu hỏi 21.3 Phát biểu nào sau đây về mục đích của các thư mục (do `sequelize init` tạo) là KHÔNG đúng?</b> <br>
<mark>A. Thư mục migrations chứa các tập tin SQL script để thực hiện các thay đổi lược đồ cơ sở dữ liệu theo thời gian.</mark> <br>
B. Thư mục config chứa các tập tin cấu hình kết nối đến cơ sở dữ liệu cho các môi trường phát triển, kiểm thử và sản xuất. <br>
C. Thư mục models chứa các tập tin định nghĩa cấu trúc các bảng trong cơ sở dữ liệu dưới dạng các model (lớp) JavaScript. <br>
D. Thư mục seeders chứa các tập tin JavaScript để chèn dữ liệu mẫu ban đầu vào cơ sở dữ liệu.

> *Giải thích: Chữ sai ở đây là "SQL script". Thư mục `migrations` chứa các tập tin **JavaScript** gọi lệnh của Sequelize, chứ không chứa các file thuần SQL (như `.sql`).*



