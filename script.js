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
            "chọn hết."
        ],
        correctAnswer: "chọn hết.",
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
    // Các câu hỏi mới
    {
        question: "Câu 16: Phương pháp ước lượng nào sau đây có ưu điểm là có độ chính xác cao?",
        options: [
            "Số dòng lệnh.", // đáp án đúng
            "Từ dưới lên",
            "Từ trên xuống",
            "Trả giá để thắng."
        ],
        correctAnswer: "Số dòng lệnh.",
        userAnswer: null
    },
    {
        question: "Câu 17: Mục tiêu của lập kế hoạch tiến độ là:",
        options: [
            "Làm cơ sở để giám sát tiến độ dự án.",
            "Làm cơ sở để giám sát thời gian thực hiện các công việc dự án.",
            "Cả (A) và (B) đều đúng.", // đáp án đúng
            "Cả (A) và (B) đều sai."
        ],
        correctAnswer: "Cả (A) và (B) đều đúng.",
        userAnswer: null
    },
    {
        question: "Câu 18: Theo lý thuyết nhu cầu đã được thỏa mãn của McClelland, con người mong muốn tác động, ảnh hưởng và kiểm soát tài nguyên, kiểm soát người khác nếu có lợi cho họ là thuộc về nhu cầu nào sau đây?",
        options: [
            "Quyền lực.", // đáp án đúng
            "Sự tự hoàn thiện.",
            "Thành tích.",
            "Liên minh."
        ],
        correctAnswer: "Quyền lực.",
        userAnswer: null
    },
    {
        question: "Câu 19: Trong cấu trúc của tổ chức nào sau đây, người quản lý dự án có quyền lực cao nhất?",
        options: [
            "Tổ chức theo dự án.", // đáp án đúng
            "Tổ chức theo chức năng.",
            "Tổ chức ma trận.",
            "Tổ chức theo phân cấp."
        ],
        correctAnswer: "Tổ chức theo dự án.",
        userAnswer: null
    },
    {
        question: "Câu 20: Dự án nào sau đây không phải là một dự án phần mềm?",
        options: [
            "Dự án xây dựng phần mềm thi trắc nghiệm trực tuyến.",
            "Dự án triển khai cải cách thủ tục hành chính trên địa bàn tỉnh An Giang.", // đáp án đúng
            "Dự án xây dựng mềm quản lý nhân sự.",
            "Cả (A), (B) và (C) đều sai."
        ],
        correctAnswer: "Dự án triển khai cải cách thủ tục hành chính trên địa bàn tỉnh An Giang.",
        userAnswer: null
    },
    {
        question: "Câu 21: Yếu tố nào sau đây là đầu vào của hoạt động xây dựng WBS của dự án phần mềm?",
        options: [
            "Quy phát phần mềm.",
            "Báo cáo phạm vi dự án.",
            "Báo cáo yêu cầu.",
            "Cả (A), (B) và (C) đều đúng." // đáp án đúng
        ],
        correctAnswer: "Cả (A), (B) và (C) đều đúng.",
        userAnswer: null
    },
    {
        question: "Câu 22: Trong phương pháp ước lượng điểm trường hợp sử dụng, tiêu chí để một trường hợp sử dụng (use case) được xếp vào loại phức tạp là:",
        options: [
            "Số lượng giao dịch của trường hợp sử dụng từ 4 đến 7. (Trung bình)",
            "Số lượng giao dịch của trường hợp sử dụng ≤ 3. (Đơn giản)",
            "Số lượng giao dịch của trường hợp sử dụng > 7. (Phức tạp)", // đáp án đúng
            "Cả (A), (B) và (C) đều sai."
        ],
        correctAnswer: "Số lượng giao dịch của trường hợp sử dụng > 7. (Phức tạp)",
        userAnswer: null
    },
    {
        question: "Câu 23: Đối với dự án phần mềm nhỏ với vài người tham gia và thời gian thực hiện trong vài tháng thì kế hoạch chỉ có:",
        options: [
            "Điều lệ dự án.",
            "Báo cáo phạm vi dự án.",
            "Sơ đồ Gantt.",
            "Cả (A), (B) và (C) đều đúng." // đáp án đúng
        ],
        correctAnswer: "Cả (A), (B) và (C) đều đúng.",
        userAnswer: null
    },
    {
        question: "Câu 24: Đối với dự án phần mềm đơn giản và người quản lý đã hiểu rõ các yêu cầu cho nên:",
        options: [
            "Người quản lý có thể nhớ đầy đủ công việc phải thực hiện.",
            "Người quản lý không cần lập kế hoạch quản lý phạm vi.",
            "Người quản lý có thể lập kế hoạch dự án.",
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
        correctAnswer: " Phỏng vấn.",
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
        correctAnswer: "Cả (A), (B) và (C) đều đúng.",
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
        correctAnswer: "C. Thời gian thực tế để thực hiện công việc đã hoàn thành.",
        userAnswer: null
    },
    {
        question: "Câu 41: Yếu tố nào sau đây không phải là một trong các ràng buộc của quản lý dự án?",
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
        correctAnswer: "B. Phân tích ảnh hưởng chỉ tiết đến chỉ phí, lịch trình, đồng thời triệu tập cuộc họp đội dự án.",

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
        correctAnswer: "C. ACWP",
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
        correctAnswer: "B. Chi phí dự tính theo ngân sách của công việc đã hoàn tất.",

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
    },

    {
        question: "ĐỀ 169 Câu 1: Lập kế hoạch khắc phục tác hại khi rủi ro xảy ra là hành động của chiến lược ứng phó rủi ro nào sau đây?",
        options: [
            "A. Tránh né.",
            "B. Chuyển giao.",
            "C. Chấp nhận.",
            "D. Giảm nhẹ "
        ],
        correctAnswer: "D. Giảm nhẹ",
        userAnswer: null
    },
    {
        question: "Câu 2: Quản lý nhân sự dự án là:",
        options: [
            "A. Hoạch định, thu nhận và kích thích nhân viên làm việc.",
            "B. Hoạch định, thu nhận và sử dụng nhân viên.",
            "C. Hoạch định, thu nhận, huấn luyện và sử dụng",
            "D. (C) và trả lương. "
        ],
        correctAnswer: "D. (C) và trả lương",
        userAnswer: null
    },
    {
        question: "Câu 3: Phương pháp ước lượng nào sau đây có ưu điểm là thường giành được hợp đồng:",
        options: [
            "A. Lấy ý kiến chuyên gia.",
            "B. Quy tắc Parkinson.",
            "C. Trả giá để thắng. ",
            "D. Từ trên xuống."
        ],
        correctAnswer: "C. Trả giá để thắng",
        userAnswer: null
    },
    {
        question: "Câu 4: Phát biểu đúng về công việc dự án:",
        options: [
            "A. Một nhiệm vụ hay tập hợp nhiệm vụ mà dự án yêu cầu.",
            "B. Công việc dự án cần nguồn lực và thời gian nhất định để hoàn thành.",
            "C. Cả (A) và (B) đều đúng. ",
            "D. Cả (A) và (B) đều sai."
        ],
        correctAnswer: "C. Cả (A) và (B) đều đúng",
        userAnswer: null
    },
    {
        question: "Câu 5: Yếu tố nào sau đây là rủi ro về kỹ thuật?",
        options: [
            "A. Tội phạm công nghệ cao.",
            "B. Sự phức tạp của dự án.",
            "C. Sử dụng công nghệ mới nhất.",
            "D. Cả (A), (B) và (C) đều đúng. "
        ],
        correctAnswer: "D. Cả (A), (B) và (C) đều đúng",
        userAnswer: null
    },
    {
        question: "Câu 6: Mục đích của quản lý rủi ro là:",
        options: [
            "A. Tránh đi vào những dự án có nhiều rủi ro.",
            "B. Giảm thiểu các tác động của rủi ro.",
            "C. Cả (A) và (B) đều đúng. ",
            "D. Đảm bảo dự án sẽ thành công."
        ],
        correctAnswer: "C. Cả (A) và (B) đều đúng",
        userAnswer: null
    },
    {
        question: "Câu 7: Tại sao trong vòng đời dự án phần mềm các bên liên quan thường đưa ra các yêu cầu thay đổi?",
        options: [
            "A. Nhằm khắc phục những sai sót hoặc loại bỏ những kết quả trung gian không đạt yêu cầu.",
            "B. Nhằm giảm thiểu tác động của các rủi ro.",
            "C. Nhằm đưa kết quả thực hiện về đúng quỹ đạo như kế hoạch đề ra.",
            "D. Cả (A), (B) và (C) đều đúng. "
        ],
        correctAnswer: "D. Cả (A), (B) và (C) đều đúng",
        userAnswer: null
    },
    {
        question: "Câu 8: Đầu vào của ước lượng nỗ lực là kết quả của:",
        options: [
            "A. Ước lượng lịch biểu.",
            "B. Ước lượng kích thước.",
            "C. Ước lượng chi phí.",
            "D. Cả (A), (B) và (C) đều đúng. "
        ],
        correctAnswer: "D. Cả (A), (B) và (C) đều đúng",
        userAnswer: null
    },
    {
        question: "Câu 9: Phát biểu đúng về phương pháp đường găng (CPM):",
        options: [
            "A. Xác định thời gian thực hiện cho từng công việc của dự án.",
            "B. Kỹ thuật lập tiến độ dự án dưới dạng sơ đồ công việc.",
            "C. Mô tả sự phụ thuộc về thứ tự được thực hiện giữa các công việc dự án.",
            "D. Cả (A), (B) và (C) đều đúng. "
        ],
        correctAnswer: "D. Cả (A), (B) và (C) đều đúng",
        userAnswer: null
    },
    {
        question: "Câu 10: Kế hoạch thực hiện dự án cung cấp .............cho việc xác định và kiểm soát những thay đồi.",
        options: [
            "A. đường cơ sở.",
            "B. quy trình. ",
            "C. hướng dẫn.",
            "D. kỹ thuật."
        ],
        correctAnswer: "B. quy trình",
        userAnswer: null
    },
    {
        question: "Câu 11: Người quản lý dự án cần phải làm gì để tạo được động lực cho các thành viên trong dự án?",
        options: [
            "A. Xây đựng kế hoạch, đưa ra tiêu chuẩn thực hiện công việc, tạo điều kiện làm việc.",
            "B. Khích lệ về vật chất và tinh thần cho các thành viên đội dự án.",
            "C. Cả (A) và (B) đều sai.",
            "D. Cả (A) và (B) đều đúng. "
        ],
        correctAnswer: "D. Cả (A) và (B) đều đúng",
        userAnswer: null
    },
    {
        question: "Câu 12: Khi nào người quản lý dự án nên được phân công quản lý dự án?",
        options: [
            "A. Một khi ngân sách được hoạch định",
            "B. Trong các giai đoạn khởi động dự án. ",
            "C. Khi các hợp đồng được kí kết.",
            "D. Trong khoảng thời gian phân tích rủi ro."
        ],
        correctAnswer: "B. Trong các giai đoạn khởi động dự án",
        userAnswer: null
    },
    {
        question: "Câu 13: Quản lý phạm vi dự án phần mềm không bao gồm các hoạt động nào?",
        options: [
            "A. Xác nhận và kiểm tra phạm vi.",
            "B. Xây dựng cấu trúc phân chia công việc.",
            "C. Thiết kế và xây dựng phần mềm. ",
            "D. Thu thập yêu cầu và xác định phạm vi."
        ],
        correctAnswer: "C. Thiết kế và xây dựng phần mềm",
        userAnswer: null
    },
    {
        question: "Câu 14: Phát biểu nào sau đây mô tả chính xác phương pháp ước lượng từ dưới lên?",
        options: [
            "A. Phương pháp có thể được mô tả bề ngoài trong Kỹ thuật duyệt và đánh giá chương trình hoặc sơ đồ Gantt.",
            "B. Phương pháp đòi hỏi người lập kế hoạch phái sử dụng càng nhiều chí tiết càng tốt nhằm phân chia dự án thành các gói công việc đủ nhỏ để cho phép ước tính chi phí chính xác.",
            "C. Phương pháp đơn giản nhất để ước tính chí phí trong một dự án với nhiều điểm tương đông với các dự án thành công khác.",
            "D. Phương pháp đòi hói một hoạt động hay sự kiện riêng lẻ có sự phụ thuộc lẫn tiền nhiệm, người thành công cũng như các hoạt động hay sự kiện song song."
        ],
        correctAnswer: "D. Phương pháp đòi hói một hoạt động hay sự kiện riêng lẻ có sự phụ thuộc lẫn tiền nhiệm, người thành công cũng như các hoạt động hay sự kiện song song.",
        userAnswer: null
    },
    {
        question: "Câu 15: Trong cuộc họp, qui tắc nào không nên sử dụng khi động não tập thể?",
        options: [
            "A. Có ý tưởng thì phát biểu ngay.",
            "B. Chỉ phát biểu khi có ý kiến tích cực.",
            "C. Người tham gia tìm mọi cách bảo vệ ý kiến của mình.",
            "D. Các ý kiến đã nêu ra không thuộc về ai."
        ],
        correctAnswer: "C. Người tham gia tìm mọi cách bảo vệ ý kiến của mình.",

        userAnswer: null
    },
    {
        question: "Câu 16: Quy tắc 8/80 là:",
        options: [
            "A. Thời gian để thực một công việc phải nằm trong khoảng từ 8 giờ đến 80 giờ.",
            "B. Không có công việc nào cân thời gian thực hiện ít hơn một ngày hoặc nhiều hơn 10 ngây.",
            "C. Không có công việc nào có thời gian thực hiện ít hơn 8 giờ hoặc nhiều hơn 80 giờ.",
            "D. Cả (A), (B) và (C) đều đúng."
        ],
        correctAnswer: "D. Cả (A), (B) và (C) đều đúng.",
        userAnswer: null
    },
    {
        question: "Câu 17: Ước lượng điểm trường hợp sử dụng phù hợp với loại ngôn ngữ lập trình nào?",
        options: [
            "A. Lập trình hàm.",
            "B. Lập trình theo chức năng.",
            "C. Lập trình hướng đối tượng.",
            "D. Cả (A), (B) và (C) đều đúng."
        ],
        correctAnswer: "B. Lập trình theo chức năng.",
        userAnswer: null
    },
    {
        question: "Câu 24: Rủi ro về kỹ thuật của dự án phần mềm có thể xuất phát từ:",
        options: [
            "A. Dự án sử dụng công nghệ mới.",
            "B. Sự phức tạp của phần mềm.",
            "C. Kích thước của phần mềm.",
            "D. Cả (A), (B) và (C) đều đúng."
        ],
        correctAnswer: "D. Cả (A), (B) và (C) đều đúng.",

        userAnswer: null
    },
    {
        question: "Câu 25: Theo thông kê của Chaos, tỉ lệ thất bại của các dự án phần mềm trong thập niên qua:",
        options: [
            "A. Có xu hướng tăng.",
            "B. Có xu hướng giảm.",
            "C. Lúc tăng, lúc giảm.",
            "D. Không thay đôi."
        ],
        correctAnswer: "A. Có xu hướng tăng.",

        userAnswer: null
    },
    {
        question: "Câu 26: Khi phát triển đội dự án thì mục tiêu quan trọng nhất của đào tạo là:",
        options: [
            "A. Biết cách làm việc nhóm.",
            "B. Đội dự án hiểu nhau.",
            "C. Mọi người hiểu bản thân mình hơn.",
            "D. Cả (A), (B) và (C) đều đúng."
        ],
        correctAnswer: "D. Cả (A), (B) và (C) đều đúng.",
        userAnswer: null
    },
    {
        question: "Câu 27: Sự bất đồng được xem là nhân tố tích cực trong quá trình thảo luận của nhóm vì:",
        options: [
            "A. Làm cho các thành viên trong đội hào hứng với các quyết định của họ.",
            "B. Giúp các thành viên trong đội dự án cạnh tranh lẫn nhau.",
            "C. Giúp trưởng dự án cho phép các thành viên trong đội cạnh tranh lẫn nhau.",
            "D. Chứng tỏ các thành viên trong đội đã tìm hiểu và xem xét mọi giải pháp được đưa ra."
        ],
        correctAnswer: "D. Chứng tỏ các thành viên trong đội đã tìm hiểu và xem xét mọi giải pháp được đưa ra.",

        userAnswer: null
    },
    {
        question: "Câu 28: Hãy chọn bốn lĩnh vực hỗ trợ trong quản lý dự án:",
        options: [
            "A. Quản lý nhân sự, quản lý rủi ro, quản lý truyền thông và quản lý thời gian.",
            "B. Quản lý nhân sự, quản lý rủi ro, quản lý truyền thông và quản lý mua sắm.",
            "C. Quản lý nhân sự, quản lý rủi ro, quản lý truyền thông và quản lý tích hợp.",
            "D. Quản lý nhân sự, quản lý rủi ro, quản lý truyền thông và quản lý chấp lượng."
        ],
        correctAnswer: "A. Quản lý nhân sự, quản lý rủi ro, quản lý truyền thông và quản lý thời gian.",
        userAnswer: null
    },
    {
        question: "Câu 29: Chiến lược giảm nhẹ các rủi ro được thực hiện thông qua:",
        options: [
            "A. Cảnh báo và triệt tiêu các yếu tố làm xuất hiện rủi ro.",
            "B. Điều chỉnh các yếu tố có liên quan theo dây chuyển.",
            "C. Cả (A) và (B) đều đúng.",
            "D. Thương nượng để thay đổi mục tiêu."
        ],
        correctAnswer: "C. Cả (A) và (B) đều đúng.",
        userAnswer: null
    },
    {
        question: "Câu 30: Phát biểu đúng về phương sai lịch biểu:",
        options: [
            "A. Là sự chênh lệch về tiến độ của các công việc so với kế hoạch đã đề ra.",
            "B. Có thể nhận giá trị dương hoặc âm hoặc bằng 0.",
            "C. Cả (A) và (B) đều đúng.",
            "D. Là sự chênh lệch khối lượng công việc chưa hoàn thành so với kế hoạch đã đề ra."
        ],
        correctAnswer: "C. Cả (A) và (B) đều đúng.",
        userAnswer: null
    },
    {
        question: "Câu 31: Trong tháp nhu cầu của Maslow, sau khi thỏa mãn được nhu cầu giao tiếp thì con người sẽ có nhu cầu tiếp theo là?",
        options: [
            "A. Nhu cầu tự hoàn thiện.",
            "B. Nhu cầu an toàn.",
            "C. Nhu cầu sinh lý.",
            "D. Nhu cầu được tôn trọng."
        ],
        correctAnswer: "D. Nhu cầu được tôn trọng.",
        userAnswer: null
    },
    {
        question: "Câu 32: Thành phần nào sau đây không phải là đầu vảo của phương pháp ước lượng điểm trường hợp sử dụng?",
        options: [
            "A. Yêu tổ phức tạp kỹ thuật",
            "B. Câu truy vấn",
            "C. Trường hợp sử dụng",
            "D. Tác nhân"
        ],
        correctAnswer: "D. Tác nhân",
        userAnswer: null
    },
    {
        question: "Câu 38: Yếu tổ nào sau đây không phải là đầu vào của hoạt động xác định phạm vi dự án?",
        options: [
            "A. Các sản phẩm bàn giao của dự án.",
            "B. Điều lệ dự án.",
            "C. Báo cáo nghiên cứu khả thi.",
            "D. Báo cáo yêu cầu."
        ],
        correctAnswer: "C. Báo cáo nghiên cứu khả thi",
        userAnswer: null
    },
    {
        question: "Câu 39: Phương pháp ước lượng điểm trường hợp sử dụng cần bao nhiêu loại dữ liệu đầu vào?",
        options: [
            "A. 4",
            "B. 3",
            "C. 5",
            "D. 6"
        ],
        correctAnswer: "C. 5",
        userAnswer: null
    },
    {
        question: "Câu 40: Chiến lược chấp nhận các rủi ro được thực hiện thông qua:",
        options: [
            "A. Thu thập hoặc mua thông tin để có kế hoạch kiểm soát tốt hơn.",
            "B. Lập kế hoạch khắc phục tác hại khi rủi ro xảy ra.",
            "C. Báo cáo ban lãnh đạo cấp cao.",
            "D. Cả (A) và (B) đều đúng."
        ],
        correctAnswer: "D. Cả (A) và (B) đều đúng",
        userAnswer: null
    },
    {
        question: "Câu 41: Đặc trưng chính của WBS là:",
        options: [
            "A. Có hướng đi từ đưới lên.",
            "B. Có hướng đi từ trên xuống.",
            "C. Không nêu cách thức thực hiện công việc.",
            "D. Được chia thành nhiều mức."
        ],
        correctAnswer: "D. Được chia thành nhiều mức",
        userAnswer: null
    },
    {
        question: "Câu 42: Quản lý tích hợp là:",
        options: [
            "A. Tích hợp 4 lĩnh vực chính trong quản lý dự án và các tác động qua lại giữa chúng.",
            "B. Tích hợp 4 lĩnh vực hỗ trợ trong quản lý dự án và các tác động qua lại giữa chúng.",
            "C. Tích hợp tắt cả các lĩnh vực trong quản lý dự án và các tác động qua lại giữa chúng.",
            "D. Cà (A), (B) và (C) đều sai."
        ],
        correctAnswer: "B. Tích hợp 4 lĩnh vực hỗ trợ trong quản lý dự án và các tác động qua lại giữa chúng",
        userAnswer: null
    },
    {
        question: "Câu 43: Danh sách các rủi ro được đưa vào kế hoạch quản lý chỉ được lập...",
        options: [
            "A. Và phải liên tục cập nhật dựa vào nguy cơ rủi ro.",
            "B. Một lần ở nửa vòng đời dự án.",
            "C. Một lần khi bắt đầu thực hiện dự án.",
            "D. Cả (A), (B) và (C) đều sai."
        ],
        correctAnswer: "A. Và phải liên tục cập nhật dựa vào nguy cơ rủi ro",
        userAnswer: null
    },
    {
        question: "Câu 44: Phát biểu đúng về quy ước ước lượng cân đối:",
        options: [
            "A. Lớc lượng phần trăm hoàn thành đựa trên tỉ lệ thời gian thực hiện theo thực tế so với tổng thời gian thực hiện dự kiến.",
            "B. Ước lượng phần trăm hoàn thành dựa trên tỉ lệ kinh phí đã sử dụng so với tông kinh phí dự kiến.",
            "C. Ước lượng phần trăm hoàn thành dựa trên tỉ lệ công việc đã thực hiện so với tổng số công việc của dự án.",
            "D. Cả (A) và (B) đều đúng"
        ],
        correctAnswer: "D. Cả (A) và (B) đều đúng",
        userAnswer: null
    },
    {
        question: "Câu 45: Câu nào sau đây không mô tả đặc trưng của dự án?",
        options: [
            "A. Dự án có thể được thực hiện liên tục và lặp lại.",
            "B. Dự án được hoạch định, được thực hiện và được giám sát.",
            "C. Dự án bị rằng buộc bởi nguồn tài nguyên hạn chế.",
            "D. Dự án tạo ra một sản phẩm hoặc dịch vụ duy nhất."
        ],
        correctAnswer: "A. Dự án có thể được thực hiện liên tục và lặp lại",
        userAnswer: null
    },
    {
        question: "Câu 46: Công cụ nào được dùng để kiểm tra phạm vi dự án?",
        options: [
            "A. Kiểm tra, đối chiếu phạm vi với các tài liệu đầu vào.",
            "B. Lấy ý kiến chuyên gia.",
            "C. Xác định các lựa chọn thay thế.",
            "D. Cả (A), (B) và (C) đều đúng."
        ],
        correctAnswer: "D. Cả (A), (B) và (C) đều đúng",
        userAnswer: null
    },
    {
        question: "Câu 47: Trong phương pháp ước lượng điểm trường hợp sử dụng, yếu tố nào sau đây là yếu tố phức tạp môi trường?",
        options: [
            "A. Độ ổn định của các yêu cầu.",
            "B. Có nhân viên làm việc bán thời.",
            "C. Đội dự án quen thuộc với UML.",
            "D. Cả (A), (B) và (C) đều đúng."
        ],
        correctAnswer: "D. Cả (A), (B) và (C) đều đúng",
        userAnswer: null
    },
    {
        question: "Câu 48: Mục tiêu của phát triển đội dự án là:",
        options: [
            "A. Cải thiện năng lực.",
            "B. Nâng cao tỉnh thần làm việc nhóm.",
            "C. Cải thiện kỹ năng giao tiếp.",
            "D. Cả (A), (B) và (C) đều đúng."
        ],
        correctAnswer: "D. Cả (A), (B) và (C) đều đúng",
        userAnswer: null
    },
    {
        question: "Câu 49: Kỹ thuật nào sau đây được dùng để theo dõi rủi ro dự án?",
        options: [
            "A. Biểu đồ RD.",
            "B. Ma trận xác suất và mất mát.",
            "C. Phân tích PERT.",
            "D. Biểu đồ Pareto."
        ],
        correctAnswer: "B. Ma trận xác suất và mất mát",
        userAnswer: null
    },
    {
        question: "Câu 50: Quản lý phạm vi dự án là:",
        options: [
            "A. Các quy trình xác định và kiểm soát những công việc của dự án và những công việc không thuộc dự án. ",
            "B. Các quy trình xác định những công việc của dự án và những công việc không thuộc dự án.",
            "C. Các quy trình xác định và kiểm soát những kế hoạch thực hiện dự án.",
            "D. Các quy trình kiểm soát những công việc của dự án và những công việc không thuộc dự án."
        ],
        correctAnswer: "A. Các quy trình xác định và kiểm soát những công việc của dự án và những công việc không thuộc dự án",
        userAnswer: null
    },

];

// Lưu ý: Mỗi đối tượng câu hỏi trong mảng có thể được sử dụng để hiển thị câu hỏi và lựa chọn cho người dùng.






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
