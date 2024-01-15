const quizData = [
    {
        question: "câu 1: Trong ước lượng phần mềm, phương pháp ước lượng từ dưới lên (bottom-up) cho rằng:",
        options: [
            "Chi phí sẽ được ước lượng chỉ tiết dựa vào các công việc trong dự án.",
            "Chi phí sẽ được ước lượng ở mức thấp nhất nếu có thể.",
            "Ngân sách năm nay sẽ nhiều hơn 20% so với năm trước.",
            "Ngân sách năm nay sẽ ít hơn 20% so với năm trước."
        ],
        correctAnswer: "Chi phí sẽ được ước lượng chỉ tiết dựa vào các công việc trong dự án.",
        userAnswer: null
    },
    {
        question: "câu 2: Chiến lược chuyển giao các rủi ro được thực hiện thông qua:",
        options: [
            "Mua bảo hiểm để chia sẽ chỉ phí.",
            "Đề nghị với khách hàng chấp nhận, và chia sẻ rủi ro.",
            "Báo cáo ban lãnh đạo cấp cao.",
            "Cả mua bảo hiểm, đề nghị chấp nhận, và báo cáo ban lãnh đạo cấp cao đều đúng."
        ],
        correctAnswer: "Cả mua bảo hiểm, đề nghị chấp nhận, và báo cáo ban lãnh đạo cấp cao đều đúng.",
        userAnswer: null
    },
    {
        question: "câu 3: Hoạt động chính ở giai đoạn khởi động dự án là:",
        options: [
            "Hoạch định nguồn nhân lực dự án.",
            "Phát triển điều lệ dự án.",
            "Phát triển kế hoạch dự án.",
            "Lập báo cáo nghiên cứu khả thi."
        ],
        correctAnswer: "Phát triển kế hoạch dự án.",
        userAnswer: null
    },
    {
        question: "câu4: Các nghiên cứu gần đây chỉ ra lượng phần rằng ước lượng phần mềm có sai số khoảng:",
        options: [
            "30%",
            "20%",
            "25%",
            "35%"
        ],
        correctAnswer: "30%",
        userAnswer: null
    },
    {
        question: "câu 5: Điều chỉnh lịch trình nhiệm vụ để triển khai nguồn nhân lực hiệu quả hơn được gọi là:",
        options: [
            "Tài nguồn lực.",
            "Điều chỉnh nguồn lực.",
            "Tối ưu hoá nguồn lực.",
            "Tăng tốc nguồn lực."
        ],
        correctAnswer: "Tối ưu hoá nguồn lực.",
        userAnswer: null
    },
    {
        question: "câu 6: Trong tháp nhu cầu của Maslow, sau khi thỏa mãn được nhu cầu an toàn thì con người sẽ có nhu cầu tiếp theo là?",
        options: [
            "Nhu cầu giao tiếp.",
            "Nhu cầu được tôn trọng.",
            "Nhu cầu sinh lý.",
            "Nhu cầu tự hoàn thiện."
        ],
        correctAnswer: "Nhu cầu được tôn trọng.",
        userAnswer: null
    },
    {
        question: "câu 7 Khi phân tích giá trị thu được của dự án và biểu diễn trạng thái của dự án bằng biểu đồ thị số khả năng của trạng thái là:",
        options: [
            "6",
            "4",
            "5",
            "3"
        ],
        correctAnswer: "5",
        userAnswer: null
    },
    {
        question: "câu 8: Chọn phát biểu đúng về rủi ro:",
        options: [
            "Rủi ro là một sự kiện hoặc trường hợp có tính xác suất.",
            "Rủi ro có thể ảnh hưởng đến 1 công việc hoặc toàn bộ dự án.",
            "Rủi ro làm cho dự án có khả năng bị chậm trễ hoặc bị thất bại.",
            "Cả rủi ro có thể xảy ra."
        ],
        correctAnswer: "Cả rủi ro có thể xảy ra.",
        userAnswer: null
    },
    {
        question: "câu 9: Kỹ thuật thu thập yêu cầu phần mềm nào dễ thực hiện và thông tin thu thập được sẽ khách quan và chính xác?",
        options: [
            "Xem xét phần mềm hiện có.",
            "Xem xét tài liệu.",
            "Họp nhóm.",
            "Phòng vẫn."
        ],
        correctAnswer: "Phòng vẫn.",
        userAnswer: null
    },
    {
        question: "Câu 10: Những thông tin nào được ghi nhận trong hoạt động giám sát dự án?",
        options: [
            "Hiện trạng các công việc.",
            "Kinh phí đã sử dụng.",
            "Tiến độ thực hiện.",
            "Cả hiện trạng công việc, kinh phí, và tiến độ đều được ghi nhận."
        ],
        correctAnswer: "Cả hiện trạng công việc, kinh phí, và tiến độ đều được ghi nhận.",
        userAnswer: null
    },
    {
        question: "Câu 11: Trong phương pháp ước lượng điểm trường hợp sử dụng, giá trị của tham số C2, của biểu thức tính yếu tố phức tạp môi trường (EF) có giá trị là:",
        options: [
            "- 0,03",
            "0,3",
            "0,03",
            "- 0,3"
        ],
        correctAnswer: "0,03",
        userAnswer: null
    },
    {
        question: "Câu 12: Chọn hoạt động không phải là cách giảm thiểu tác động của rủi ro nhân viên bỏ dự án:",
        options: [
            "Phản ứng nhanh với việc nhân viên bỏ dự án.",
            "Chuẩn bị nhân sự dự phòng để bổ sung cho dự án.",
            "Xoay vòng công việc giữa các thành viên trong nhóm.",
            "Họp để xây dựng đội dự án."
        ],
        correctAnswer: "Xoay vòng công việc giữa các thành viên trong nhóm.",
        userAnswer: null
    },
    {
        question: "Câu 13: Chiến lược tránh né các rủi ro được thực hiện thông qua:",
        options: [
            "Chọn phương pháp, công cụ và con người.",
            "Thương lượng với khách hàng (hoặc nội bộ) để thay đổi mục tiêu.",
            "Chuyển rùi ro cho các bên liên quan.",
            "Cả (A) và (B) đều đúng."
        ],
        correctAnswer: "Cả (A) và (B) đều đúng.",
        userAnswer: null
    },
    {
        question: "Câu 14: Yếu tố nào sau đây không được đề cập trong nghiên cứu khả thi của dự án phần mềm?",
        options: [
            "Nghiên cứu thị trường.",
            "Giải pháp thực hiện dự án.",
            "Thông tin về sản phẩm.",
            "Khả năng thực hiện dự án."
        ],
        correctAnswer: "Thông tin về sản phẩm.",
        userAnswer: null
    },
    {
        question: "Câu 15: Chọn yếu tố không phải là nguồn gốc của rủi ro trong các dự án phần mềm:",
        options: [
            "Ngân sách thực hiện dự án.",
            "Khó khăn về kỹ thuật.",
            "Thay đổi về phạm vi.",
            "Sự hiểu biết về kỹ thuật của người dùng."
        ],
        correctAnswer: "Ngân sách thực hiện dự án.",
        userAnswer: null
    },
    {
        question: "Câu 24: Đối với dự án phần mềm đơn giản và người quản lý đã hiểu rõ các yêu cầu cho nên:",
        options: [
            "Người quản lý có thể nhớ đầy đủ công việc phải thực hiện.",
            "Người quản lý không cần lập kế hoạch quản lý phạm vi.",
            "Người quản lý có tự lập kế hoạch dự án.",
            "Cả (A), (B) và (C) đều đúng."
        ],
        correctAnswer: "C. Người quản lý có thể lập kế hoạch dự án.",
        userAnswer: null
    },
    {
        question: "Câu 25: Phạm vi dự án phần mềm không đề cập đến:",
        options: [
            "Các kỹ thuật được sử dụng để tạo ra sản phẩm phần mềm.",
            "Các công việc liên quan đến việc tạo ra sản phẩm phần mềm.",
            "Thời gian và chi phí phát triển phầm mềm.",
            "Các quá trình được sử dụng để ra sản phẩm phần mềm."
        ],
        correctAnswer: "Thời gian và chi phí phát triển phầm mềm.",
        userAnswer: null
    },
    {
        question: "Câu 26: Kỹ thuật thu thập yêu cầu phần mềm nào hiệu quả nhất nhưng cần rất nhiều thời gian để thực hiện?",
        options: [
            "Xem xét phần mềm hiện có.",
            "Phỏng vấn.",
            "Họp nhóm.",
            "Ẩn định công việc tạm thời."
        ],
        correctAnswer: "B. Phỏng vấn.",
        userAnswer: null
    },
    {
        question: "Câu 27: Trong phương pháp ước lượng điểm trường hợp sử dụng, yếu tố nào sau đây là yếu tố phức tạp kỹ thuật?",
        options: [
            "Tính khả chuyển.",
            "Khả năng tái sử dụng mã nguồn.",
            "Tính bảo cao.",
            "Cả (A), (B) và (C) đều đúng."
        ],
        correctAnswer: "Cả (A), (B) và (C) đều đúng.",
        userAnswer: null
    },
    {
        question: "Câu 28: Dữ liệu nào có thể lý giải số liệu giám sát dự án?",
        options: [
            "Báo cáo so sánh với các dữ liệu thu thập trước đó.",
            "Khuynh hướng tiếp theo của tiến độ dự án.",
            "Các kế hoạch, biểu đồ, và bảng biểu nên được cập nhật theo thời gian.",
            "Cả (A), (B) và (C) đều đúng."
        ],
        correctAnswer: "Cả (A), (B) và (C) đều đúng.",
        userAnswer: null
    },
    {
        question: "Câu 29: Công cụ phổ biến nhất để thiết lập sơ đồ Gantt là:",
        options: [
            "Microsoft Word.",
            "Bảng.",
            "Microsoft Project.",
            "Microsoft Visio."
        ],
        correctAnswer: "Microsoft Project.",
        userAnswer: null
    },
    {
        question: "Câu 30: Yếu tố nào sau đây có thể góp phần ngăn cản nhận diện rủi ro?",
        options: [
            "Kỹ thuật.",
            "Công nghệ.",
            "Xã hội và tổ chức.",
            "Cả (A), (B) và (C) đều đúng."
        ],
        correctAnswer: "D. Cả (A), (B) và (C) đều đúng.",
        userAnswer: null
    },
    {
        question: "Câu 31: Mô hình ước lượng nỗ lực COCOMO có thể áp dụng cho các loại dự án phần mềm nào?",
        options: [
            "Dự án tổ chức tương đối nhỏ.",
            "Dự án bên trong, trung gian.",
            "Dự án nhúng.",
            "Cả (A), (B) và (C) đều đúng."
        ],
        correctAnswer: "Cả (A), (B) và (C) đều đúng.",
        userAnswer: null
    },
    {
        question: "Câu 38: Các dự án sẽ thành công hơn nếu người quản lý dự án gây ảnh hưởng đến các thành viên bằng:",
        options: [
            "A. Tiền thưởng",
            "B. Sự thử thách của công việc.",
            "C. Quyền lực.",
            "D. Kỉ luật."
        ],
        correctAnswer: "B. Sự thử thách của công việc.",
        userAnswer: null
    },
    {
        question: "Câu 39: Nguyên nhân dẫn đến thất bại của một dự án phần mềm có thể xảy ra trong giai đoạn nào của dự án?",
        options: [
            "A. Lập kế hoạch.",
            "B. Khởi động.",
            "C. Thực hiện.",
            "D. Cả (A), (B) và (C) đều đúng."
        ],
        correctAnswer: "D. Cả (A), (B) và (C) đều đúng.",
        userAnswer: null
    },
    {
        question: "Câu 40: ATWP (Actual time of work performed) là:",
        options: [
            "A. Thời gian theo lịch trình cho công việc đã được thực hiện.",
            "B. Thời gian theo lịch trình cho công việc.",
            "C. Thời gian thực tế để thực hiện công việc đã hoàn thành.",
            "D. Cả (A), (B) và (C) đều đúng."
        ],
        correctAnswer: "D. Cả (A), (B) và (C) đều đúng.",
        userAnswer: null
    },
    {
        question: "C. Thời gian thực tế để thực hiện công việc đã hoàn thành.",
        options: [
            "A. Phạm vi.",
            "B. Thời gian.",
            "C. Con người.",
            "D. Chi phí."
        ],
        correctAnswer: "C. Con người.",
        userAnswer: null
    },
    {
        question: "Câu 42: Chiến lược nào sau đây được dùng ứng phó với các rủi ro:",
        options: [
            "A. Chấp nhận.",
            "B. Giảm nhẹ.",
            "C. Tránh.",
            "D. Cả (A), (B) và (C) đều đúng."
        ],
        correctAnswer: "D. Cả (A), (B) và (C) đều đúng.",
        userAnswer: null
    },
    {
        question: "Câu 43: Khách hàng đưa ra yêu  cầu thay đổi sau khi đội dự án đã thực hiện xong giai đoạn thiết kế, với vai trò là người quản lý dự án thì phương pháp tiếp cận tốt nhất là:",
        options: [
            "A. Ước tính tác động của thay đổi về chỉ phí, lịch trình và phê duyệt trước khi tiến hành.",
            "B. Phân tích ảnh hưởng chỉ tiết đến chỉ phí, lịch trình, đồng thời triệu tập cuộc họp đội dự án.",
            "C. Thuyết phục khách hàng không thay đổi yêu cầu.",
            "D. Đưa ra những thay đổi then chốt bắt chấp chi phí và ảnh hưởng của nó, đồng thời thông báo cho quản lý cấp cao."
        ],
        correctAnswer: "D. Đưa ra những thay đổi then chốt bắt chấp chi phí và ảnh hưởng của nó, đồng thời thông báo cho quản lý cấp cao.",
        userAnswer: null
    },
    {
        question: "Câu 44: Trong quản lý nguồn nhân lực dự án, công cụ nào thể hiện cơ cấu của tổ chức theo chức năng?",
        options: [
            "A. OBS.",
            "B. RAM",
            "C. WBS",
            "D. RACI"
        ],
        correctAnswer: "A. OBS.",
        userAnswer: null
    },
    {
        question: "Câu 45: Nhận diện và kiểm soát rủi ro trong các dự án phần mềm là:",
        options: [
            "A. Công việc đơn giản.",
            "B. Công việc tương đối đơn giản.",
            "C. Công việc không hề đơn giản.",
            "D. Cả (A), (B) và (C) đều sai."
        ],
        correctAnswer: "C. Công việc không hề đơn giản.",
        userAnswer: null
    },
    {
        question: "Câu 46: Trong phân tích giá trị thu được, chỉ số then chốt về chỉ phí là:",
        options: [
            "A. BCWS",
            "B. BCWP",
            "C. ACWP",
            "D. Cả (A), (B) và (C) đều đúng."
        ],
        correctAnswer: "B. BCWP",
        userAnswer: null
    },
    {
        question: "Câu 47: BCWP (Budget cost of work performed) là:",
        options: [
            "A. Chi phí thực tế của công việc đã hoàn tất.",
            "B. Chi phí dự tính theo ngân sách của công việc đã hoàn tất.",
            "C. Chi phí dự tính theo ngân sách của công việc theo kế hoạch.",
            "D. Cả (A), (B) và (C) đều đúng."
        ],
        correctAnswer: "A. Chi phí thực tế của công việc đã hoàn tất.",
        userAnswer: null
    },
    {
        question: "Câu 48: Quá trình xem xét tất cả các đề xuất thay đổi, phê duyệt các đề xuất thay đổi và thực hiện các thay đổi là:",
        options: [
            "A. Quản lý thay đổi.",
            "B. Quản lý yêu cầu.",
            "C. Quản lý thay đổi tích hợp.",
            "D. (A), (B) và (C) đều sai."
        ],
        correctAnswer: "A. Quản lý thay đổi.",
        userAnswer: null
    },
    {
        question: "Câu 49: Khi thành lập đội dự án, người quản lý dự án cần phải biết kỹ năng của từng thành viên tương lai để:",
        options: [
            "A. Xác định đội trưởng.",
            "B. Phân công công việc.",
            "C. Xác định ngân sách của dự án.",
            "D. Xác định thời gian thưc hiện dự án."
        ],
        correctAnswer: "B. Phân công công việc.",
        userAnswer: null
    },
    {
        question: "Câu 50: Nhóm quy trình quản lý dự án nào được lặp đi lặp lại trong suốt vòng đời dự án?",
        options: [
            "A. Khởi động, lập kế hoạch, kiểm soát.",
            "B. Khởi động, lập kế hoạch, thực hiện.",
            "C. Lập kế hoạch, kiểm soát, kết thúc.",
            "D. Lập kế hoạch, thực hiện, kiểm soát."
        ],
        correctAnswer: "D. Lập kế hoạch, thực hiện, kiểm soát.",
        userAnswer: null
    }
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
