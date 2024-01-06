const quizData = [
    {
        question: "Giao thức (protocol) là gì?",
        options: ["Là một tiêu chuẩn được sử dụng để định nghĩa một dịch vụ mạng", "Là mô hình mô tả vai trò của các thành phần trong hệ thống mạng", "Là các quy tắc được thiết lập nhằm xác định cách để định dạng, truyền và nhận dữ liệu", "Là tất cả các quy ước để đảm bảo máy tính có thể trao đổi thông tin được với nhau"],
        correctAnswer: "Là các quy tắc được thiết lập nhằm xác định cách để định dạng, truyền và nhận dữ liệu",
        userAnswer: null 
    },
    {
        question: "Mô hình Client - Server là gì? ",
        options: ["là một loại mô hình mạng máy tính bao gồm 02 thành phần là máy chủ và máy khách", "là thể hiện của kiến trúc 2 tầng", "là mô hình mà Client đóng vai trò máy phục vụ, còn Server đóng vai trò giao tiếp người dùng", "là mô hình đơn giản của kiến trúc lập trình MVC"],
        correctAnswer: "Là một loại mô hình mạng máy tính bao gồm 02 thành phần là máy chủ và máy khách",
        userAnswer: null
    },
    {
        question: "Dịch vụ World Wide Web là gì?",
        options: [
            "Dữ liệu truyền tải từ Server dưới dạng siêu văn bản",
            "Là dịch vụ sử dụng giao thức HTTP",
            "Dịch vụ mạng Internet theo mô hình Client-Server",
            "Sử dụng dịch vụ www thông qua trình duyệt"
        ],
        correctAnswer: "Là dịch vụ sử dụng giao thức HTTP và Sử dụng dịch vụ www thông qua trình duyệt ",
        userAnswer: null
    },
    {
        question: "GI-Common Gateway Interface là gì?",
        options: [
            "Là công nghệ thiết kế đồ họa của máy tính giúp cho người dùng có thể tạo ra một hình ảnh mới",
            "Là một thư viện của ngôn ngữ lập trình C",
            "Là một framework của Java hỗ trợ truyền gởi thông điệp",
            "Là một qui ước về cách thức web server gọi thực thi một chương trình"
        ],
        correctAnswer: "Là một qui ước về cách thức web server gọi thực thi một chương trình",
        userAnswer: null
    },
    {
        question: "Cú pháp lệnh gcc nào sau đây là đúng khi biên dịch chương trình C/C++?",
        options: [
            "gcc -o helloworld.cpp helloworld.cgi",
            "gcc -o helloworld.c helloworld.cgi",
            "gcc -o helloworld.cgi helloworld.cpp",
            "gcc -o helloworld.cgi helloworld.c"
        ],
        correctAnswer: "gcc -o helloworld.cgi helloworld.c",
        userAnswer: null
    },
    {
        question: "Lệnh nào sau đây cho phép cài đặt Apache2 vào HĐH Ubuntu?",
        options: [
            "sudo apt add apache2",
            "sudo apt-get install apache2",
            "sudo apt setup apache2",
            "sudo apt install apache2"
        ],
        correctAnswer: "sudo apt-get install apache2",
        userAnswer: null
    },
    {
        question: "Trong lập trình CGI, QUERY_STRING là gì?",
        options: [
            "Chuỗi truy vấn cơ sở dữ liệu",
            "Là các giá trị của các input được nhập bởi người dùng từ form",
            "Dữ liệu của form được mã hóa và nối vào sau URL của CGI",
            "Tham số cấu hình mà Web Server gởi về Client"
        ],
        correctAnswer: "Là các giá trị của các input được nhập bởi người dùng từ form",
        userAnswer: null
    },
    {
        question: "Web server là gì?",
        options: [
            "Là máy chủ cài đặt HDH Ubuntu",
            "Là máy chủ hỗ trợ thực thi Web Service",
            "Là máy chủ cài đặt các chương trình phục vụ các ứng dụng web",
            "Là máy chủ lưu trữ các tập tin html"
        ],
        correctAnswer: "Là máy chủ cài đặt các chương trình phục vụ các ứng dụng web",
        userAnswer: null
    },
    {
        question: "XML là gì?",
        options: [
            "Là dạng tài liệu dùng để đơn giản hóa việc chia sẻ dữ liệu giữa các nền tảng và các hệ thống khác nhau",
            "Là ngôn ngữ đánh dấu như HTML",
            "Là ngôn ngữ đánh dấu được dùng để mô tả dữ liệu",
            "Là định dạng dùng để lưu trữ nội dung của tập tin .docx, .xlsx"
        ],
        correctAnswer: "Là ngôn ngữ đánh dấu được dùng để mô tả dữ liệu",
        userAnswer: null
    },
    {
        question: "Trong đoạn XML sau: <book category=\"CHILDREN\"><title>Harry Potter</title><author>J K. Rowling</author><year>2005</year><price>29.99</price></book> Từ khóa nào là attribute?",
        options: [
            "category",
            "Title",
            "CHILDREN",
            "Harry Potter"
        ],
        correctAnswer: "category",
        userAnswer: null
    },
    {
        question: "Trong XML, “Well Formed” nghĩa là gì?",
        options: [
            "Là tài liệu XML đúng cú pháp",
            "Là tài liệu mà mỗi phần tử phải có một thuộc tính",
            "Là tài liệu có nội dung các thẻ phải đặt trong cặp nháy",
            "Là tài liệu tuân thủ các luật sau: phải có một phần tử gốc, các thẻ phải viết hoa"
        ],
        correctAnswer: "Là tài liệu XML đúng cú pháp",
        userAnswer: null
    },
    {
        question: "\"XML Parser\" dùng để làm gì?",
        options: [
            "Chuyển tài liệu XML thành đối tượng trong Java",
            "Kiểm tra xem tài liệu XML có định dạng thích hợp hay không",
            "Chuyển tài liệu XML thành một đối tượng có thể đọc bởi ngôn ngữ lập trình",
            "Nén tài liệu XML để truyền gởi qua Internet"
        ],
        correctAnswer: "Kiểm tra xem tài liệu XML có định dạng thích hợp hay không",
        userAnswer: null
    },
    {
        question: "Java Standard Edition (Java SE) Platform là gì?",
        options: [
            "Cung cấp các API, các kiến trúc chuẩn, các thư viện để xây các ứng dụng Java",
            "Là một nền tảng được sử dụng để phát triển các ứng dụng web",
            "Là một nền tảng thực thi cho các ứng dụng Java",
            "Được thiết kế để giúp các nhà phát triển tạo ra các ứng dụng doanh nghiệp"
        ],
        correctAnswer: "Cung cấp các API, các kiến trúc chuẩn, các thư viện để xây các ứng dụng Java",
        userAnswer: null
    },
    {
        question: "Java Servlets là gì?",
        options: [
            "Là một thành phần web được triển khai trên máy chủ để tạo ra trang web động",
            "Là công nghệ nhằm thay thế CGI trong việc xây dựng ứng dụng web",
            "Là công nghệ dựa trên tảng Java để mở rộng và tăng cường sức mạnh cho các web server",
            "Là một thành phần web được triển khai trên máy chủ để tạo ra trang web động"
        ],
        correctAnswer: "Là một thành phần web được triển khai trên máy chủ để tạo ra trang web động",
        userAnswer: null
    },
    {
        question: "Phương thức doGet của 1 Servlet dùng để làm gì?",
        options: [
            "Truy xuất vào cơ sở dữ liệu để lấy thông tin người dùng",
            "Xử lý yêu cầu khi người dùng truy xuất vào Servlet thông qua URL",
            "Dùng để khởi tạo Servlet ở phía Server",
            "Lấy dữ liệu mà trình duyệt gởi vào Servlet bằng HTTP GET"
        ],
        correctAnswer: "Lấy dữ liệu mà trình duyệt gởi vào Servlet bằng HTTP GET",
        userAnswer: null
    },
    {
        question: "Nội dung tập JSP bao gồm:",
        options: [
            " Các thẻ định dạng HTML",
            " Thẻ Javascript <script> ....</script>",
            " Thẻ định dạng CSS",
            " Mã Java bao bọc trong thẻ đặc biệt <% .... %>"
        ],
        correctAnswer: "Các thẻ định dạng HTML; d. Mã Java bao bọc trong thẻ đặc biệt <% .... %>",
        userAnswer: null
    },
    {
        question: "Java JDK là gì?",
        options: [
            "Là một bộ phần mềm cung cấp môi trường phát triển ứng dụng viết bằng ngôn ngữ Java",
            " Giúp lập trình viên có thể chạy thử để kiểm tra ứng dụng trong quá trình phát triển ứng dụng Java",
            "Là một công cụ giúp biên dịch các chương trình viết bằng Java",
            "Là một công cụ giúp cài đặt các Web Server như: Apache, Tomcat,..."
        ],
        correctAnswer: "Là một bộ phần mềm cung cấp môi trường phát triển ứng dụng viết bằng ngôn ngữ Java; b. Giúp lập trình viên có thể chạy thử để kiểm tra ứng dụng trong quá trình phát triển ứng dụng Java; c. Là một công cụ giúp biên dịch các chương trình viết bằng Java",
        userAnswer: null
    },
    {
        question: "Công dụng của lệnh ss trong Ubuntu?",
        options: [
            " Kiểm tra trạng thái tường lửa",
            " Liệt kê các tiến trình đang chạy",
            " Liệt kê các kết nối mạng",
            " Kiểm tra trạng thái lắng nghe của 1 dịch vụ mạng"
        ],
        correctAnswer: " Liệt kê các kết nối mạng",
        userAnswer: null
    },
    {
        question: "Tomcat là gì?",
        options: [
            "Là một thành phần nằm trong Java JDK",
            "Là một chương trình giúp thực thi tập tin .WAR",
            "Là Web Server cho ngôn ngữ Java",
            "Là một công cụ giúp kiểm tra hoạt động của Java Servlets"
        ],
        correctAnswer: " Là Web Server cho ngôn ngữ Java",
        userAnswer: null
    },
    {
        question: "JDBC là gì?",
        options: [
            " Cung cấp cách thức kết nối database, thực thi câu lệnh SQL và xử lý kết quả trả về",
            " Là một thành phần nằm trong Java JDK",
            " Là phương tiện dùng để truy xuất CSDL SQL từ một chương trình Java",
            " Là thành phần bắt buộc trong các ứng dụng web"
        ],
        correctAnswer: "Cung cấp cách thức kết nối database, thực thi câu lệnh SQL và xử lý kết quả trả về",
        userAnswer: null
    },
    
     {
        question: "Connector/J là gì?",
        options: [
            " Là một chương trình quản trị CSDL Mysql",
            " Là một thư viện dùng để viết ứng dụng Java Servlets",
            " Là JDBC Driver dùng để kết nối đến CSDL Mysql",
            " Là một thư viện dùng để kết nối đến CSDL MS Sql Server"
        ],
        correctAnswer: "Là JDBC Driver dùng để kết nối đến CSDL Mysql",
        userAnswer: null
    },
    
    {
        question: "Vai trò Servlet & JSP trong mô hình MVC?",
        options: [
            "Servlet chuyển kết quả xử lý cho JSP",
            "JSP dùng để trình bày thông tin",
            "Servlet dùng điều khiển và xử lý nghiệp vụ",
            "JSP dùng để nhận thông tin từ người dùng"
        ],
        correctAnswer: "Servlet dùng điều khiển và xử lý nghiệp vụ",
        userAnswer: null
    },
    {
        question: "Các khó khăn trong quá trình tích hợp ứng dụng doanh nghiệp là gì?",
        options: [
            "Định dạng dữ liệu của các ứng dụng không thống nhất",
            "Các ứng dụng được phát triển dựa trên các ngôn ngữ lập trình khác nhau",
            "Các ứng dụng được xây dựng bởi các công ty khác nhau",
            "Các hệ thống chạy trên các nền tảng khác nhau"
        ],
        correctAnswer: "câu nào cũng đúng",
        userAnswer: null
    },
   {
        question: "Các lĩnh vực áp dụng JMS là gì?",
        options: [
            "Nhiều ứng dụng có thể được viết bằng các ngôn ngữ lập trình khác nhau hoặc chạy trên các máy chủ khác nhau có thể giao tiếp với nhau",
            "Hoạt động của một ứng dụng không phụ thuộc vào hoạt động của ứng dụng khác",
            "Ứng dụng đòi hỏi phải có tính bảo mật cao",
            "Hoạt động của một ứng dụng cần phải chờ nhận được phản hồi của ứng dụng khác ngay lập tức"
        ],
        correctAnswer: "Nhiều ứng dụng có thể được viết bằng các ngôn ngữ lập trình khác nhau hoặc chạy trên các máy chủ khác nhau có thể giao tiếp với nhau",
        userAnswer: null
    },
    
    {
        question: "Phần tử gốc của tất cả các tài liệu WSDL là gì?",
        options: [
            "Definition",
            "Root",
            "Wsdl-root",
            "Description"
        ],
        correctAnswer: "Description",
        userAnswer: null
    },

    {
        question: "Các thành phần chính trong kiến trúc Web Service là gì?",
        options: [
            "Service Provider",
            "Service Requestor",
            "Service Registry",
            "Service Description"
        ],
        correctAnswer: "Service Description",
        userAnswer: null
    },
    
    {
        question: "Các thành phần của Web Service là gì?",
        options: [
            "UDDI, XML, SOAP",
            "HTTP, WSDL",
            "SOAP, UDDI, XML",
            "SOAP, UDDI, WSDL"
        ],
        correctAnswer: "SOAP, UDDI, WSDL",
        userAnswer: null
    },
    
    {
        question: "Điều nào sau đây là đúng về WSDL? ",
        options: [
            "WSDL là một ngôn ngữ lập trình để xây dựng Web Service",
            "WSDL là định dạng tiêu chuẩn để mô tả một Web Service",
            "WSDL là một ngôn ngữ để mô tả cách giao tiếp với các Web Service dựa trên XML",
            "Định nghĩa WSDL mô tả cách truy cập một Web Service và những hoạt động mà nó sẽ thực hiện"
        ],
        correctAnswer: "Định nghĩa WSDL mô tả cách truy cập một Web Service và những hoạt động mà nó sẽ thực hiện",
        userAnswer: null
    },
    
     {
        question: "Điều nào sau đây là đúng về Web Service? ",
        options: [
            "Web Service tương tác với các ứng dụng web khác nhằm mục đích trao đổi dữ liệu",
            "Web Service được phát triển chủ yếu dựa trên ngôn ngữ Java",
            "Web Service dựa trên tiêu chuẩn mở (XML, SOAP, HTTP, v.v.)",
            "Web Service có thể chuyển đổi các ứng dụng hiện có của tổ chức thành các ứng dụng Web"
        ],
        correctAnswer: "Web Service dựa trên tiêu chuẩn mở (XML, SOAP, HTTP, v.v.)",
        userAnswer: null
    },
    
    {
        question: "Web Services là gì?",
        options: [
            "Là một thành phần giúp lưu trữ và xử lý các yêu cầu của người dùng Internet",
            "Là một trình ứng dụng web được lưu trữ trên một Web Server",
            "Là giao diện lập trình ứng dụng cho máy chủ web hoặc trình duyệt web",
            "Là tập hợp những giao thức và tiêu chuẩn mở được sử dụng để trao đổi dữ liệu giữa các ứng dụng hoặc các hệ thống với nhau"
        ],
        correctAnswer: "Là tập hợp những giao thức và tiêu chuẩn mở được sử dụng để trao đổi dữ liệu giữa các ứng dụng hoặc các hệ thống với nhau",
        userAnswer: null
    },
 
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options-container");


    const shuffledOptions = shuffleArray(quizData[currentQuestion].options);

    questionElement.textContent = quizData[currentQuestion].question;
    optionsContainer.innerHTML = "";

    shuffledOptions.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function checkAnswer(selectedOption) {
    if (quizData[currentQuestion].userAnswer !== null) {
        // Người dùng đã chọn câu trả lời, không cho phép chọn lại
        return;
    }

    quizData[currentQuestion].userAnswer = selectedOption; // Lưu câu trả lời của người dùng

    if (selectedOption === quizData[currentQuestion].correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const quizContainer = document.getElementById("quiz-container");
    let resultHTML = `<h2>Your score: ${score}/${quizData.length}</h2>`;

    quizData.forEach((question, index) => {
        const isCorrect = question.userAnswer === question.correctAnswer;

        resultHTML += `<p class="${isCorrect ? 'ĐÚNG RỒI GOOD' : 'SAI RỒI NGU'}">CÂU ${index + 1}: ${isCorrect ? 'ĐÚNG' : 'SAI'}</p>`;
        resultHTML += `<p class="question">CÂU ${index + 1}: ${question.question}</p>`;
        resultHTML += `<p class="user-answer">CÂU TRẢ LỜI CỦA MÀY: ${question.userAnswer}</p>`;
        
        if (!isCorrect) {
            resultHTML += `<p class="correct-answer">CÂU TRẢ LỜI ĐÚNG: ${question.correctAnswer}</p>`;
        }

        resultHTML += `<hr>`;
    });

    quizContainer.innerHTML = resultHTML;
}



// Load the first question when the page loads
window.onload = loadQuestion;
