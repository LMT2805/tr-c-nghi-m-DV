const quizData = [
  
    {
        question: "Câu 1: Tùy theo tính năng, có thể chia thuốc giải biểu thành 2 loại:",
        options: [
            "Phát tán phong hàn và Tân ôn giải biểu",
            "Phát tán phong nhiệt và Tân lương giải biểu",
            "Phát tán phong hàn và Phát tán phong nhiệt",
            "Ôn trung tán hàn và Hồi dương cứu nghịch"
        ],
        correctAnswer: "Phát tán phong hàn và Phát tán phong nhiệt",
        userAnswer: null
    },
    {
        question: "Câu 2: Một số vị thuốc giải biểu thường dùng:",
        options: [
            "Thiên ma, Câu đằng, Địa Long, Mẫu lệ, Thạch quyết minh",
            "Hoàng cầm, Hoàng liên, Kim ngân hoa, Xuyên tâm liên, Mẫu đơn bì",
            "Phụ tử, Can khương, Quế nhục, Đại hồi, Thảo quả",
            "Ma hoàng, Quế chi, Kinh giới, Tía tô, Sinh khương"
        ],
        correctAnswer: "Ma hoàng, Quế chi, Kinh giới, Tía tô, Sinh khương",
        userAnswer: null
    },
    {
        question: "Câu 3: Thuốc giải biểu Quế chi có tính vị, quy kinh:",
        options: [
            "Vị cay ngọt, tính ấm. Quy vào kinh tâm, phế, bàng quang",
            "Tân, vi khổ, ôn. Quy vào các kinh can, phế",
            "Tân, ôn. Quy vào các kinh phế, tỳ",
            "Cay, ấm. Quy vào kinh phế, vị, tỳ"
        ],
        correctAnswer: "Tân, ôn. Quy vào các kinh phế, tỳ",
        userAnswer: null
    },
    {
        question: "Câu 4: Thuốc giải biểu Cúc hoa có công năng:",
        options: [
            "Sơ tán phong nhiệt, thanh can, minh mục",
            "Sơ phong thanh nhiệt, thấu chẩn, sơ can giải uất",
            "Thanh nhiệt, giải độc, tán phong, minh mục",
            "Giải biểu tán hàn, hành khí hòa vị, lý khí an thai"
        ],
        correctAnswer: "Sơ tán phong nhiệt, thanh can, minh mục",
        userAnswer: null
    },
    {
        question: "Câu 5: Bài thuốc có xuất xứ từ thương hàn luận, gồm 4 vị thuốc có công năng là phát hãn giải biểu, tuyên phế bình suyễn:",
        options: [
            "Ma hoàng thang",
            "Kiều ngân tán",
            "Tứ nghịch thang",
            "Lý trung hoàn"
        ],
        correctAnswer: "Ma hoàng thang",
        userAnswer: null
    },
    {
        question: "Câu 6: Khi dùng thuốc giải biểu cần lưu ý:",
        options: [
            "Không sắc thuốc quá lâu",
            "Không dùng liều quá cao làm ra mồ hôi nhiều",
            "Thận trọng cho người cơ thể hư nhược, trẻ em, người già, phụ nữ mang thai",
            "Cả ba đáp án trên"
        ],
        correctAnswer: "Cả ba đáp án trên",
        userAnswer: null
    },
    {
        question: "Câu 7: Thuốc phát tán phong hàn còn gọi là:",
        options: [
            "Thuốc Tân ôn giải biểu",
            "Thuốc Tân lương giải biểu",
            "Thuốc khử hàn",
            "Thuốc ôn trung tán hàn"
        ],
        correctAnswer: "Thuốc Tân ôn giải biểu",
        userAnswer: null
    },
    {
        question: "Câu 8: Vị thuốc Bạc hà kiêng kị trong trường hợp sau:",
        options: [
            "Cảm nhiệt",
            "Đau đầu",
            "Đau họng",
            "Cho trẻ em uống hoặc xông"
        ],
        correctAnswer: "Cho trẻ em uống hoặc xông",
        userAnswer: null
    },
    {
        question: "Câu 9: Bộ phận dùng của vị thuốc Tang diệp:",
        options: [
            "Lá",
            "Quả",
            "Hoa",
            "Thân"
        ],
        correctAnswer: "Lá",
        userAnswer: null
    },
    {
        question: "Câu 10: Vị thuốc nào sau đây gọi là Tân lương giải biểu:",
        options: [
            "Cúc hoa",
            "Quế chi",
            "Thông bạch",
            "Sinh khương"
        ],
        correctAnswer: "Cúc hoa",
        userAnswer: null
    },

    {
        question: "Câu 1: Căn cứ tính chất và tác dụng, có thể chia thuốc trừ hàn ra làm 2 loại:",
        options: [
            "Phát tán phong hàn và Tân ôn giải biểu",
            "Phát tán phong nhiệt và Tân lương giải biểu",
            "Phát tán phong hàn và Phát tán phong nhiệt",
            "Ôn trung tán hàn và Hồi dương cứu nghịch"
        ],
        correctAnswer: "Ôn trung tán hàn và Hồi dương cứu nghịch",
        userAnswer: null
    },
    {
        question: "Câu 2: Một số vị thuốc trừ hàn thường dùng:",
        options: [
            "Thiên ma, Câu đằng, Địa long, Mẫu lệ, Thạch quyết minh",
            "Hoàng cầm, Hoàng liên, Kim ngân hoa, Xuyên tâm liên, Mẫu đơn bì",
            "Phụ tử, Can khương, Quế nhục, Đại hồi, Thảo quả",
            "Ma hoàng, Quế chi, Kinh giới, Tía tô, Sinh khương"
        ],
        correctAnswer: "Phụ tử, Can khương, Quế nhục, Đại hồi, Thảo quả",
        userAnswer: null
    },
    {
        question: "Câu 3: Thuốc trừ hàn Phụ tử có tính vị, quy kinh:",
        options: [
            "Tân, cam, đại nhiệt, có độc. Vào các kinh tâm, thận, tỳ",
            "Tân, nhiệt. Vào các kinh tâm, phế, tỳ, vị, thận, đại tràng",
            "Tân, cam, đại nhiệt. Vào các kinh thận, tỳ, tâm, can",
            "Tân, cam, ôn. Vào các kinh can, thận, tỳ, vị"
        ],
        correctAnswer: "Tân, cam, đại nhiệt, có độc. Vào các kinh tâm, thận, tỳ",
        userAnswer: null
    },
    {
        question: "Câu 4: Thuốc trừ hàn Can khương có công năng:",
        options: [
            "Táo thấp, ôn trung, trừ đàm, triệt ngược",
            "Ôn dương, tán hàn, kiện tỳ, tiêu thực, lý khí, chỉ thông",
            "Bổ hoả trợ dương tán hàn, chỉ thống, hoạt huyết thông kinh",
            "Ôn trung tán hàn, hồi dương, thông mạch, táo thấp tiêu đàm"
        ],
        correctAnswer: "Ôn trung tán hàn, hồi dương, thông mạch, táo thấp tiêu đàm",
        userAnswer: null
    },
    {
        question: "Câu 5: Bài thuốc có xuất xứ từ thương hàn luận, gồm 3 vị thuốc có công dụng là Hồi dương cứu nghịch, ôn trung, chỉ tả có liên quan đến tác dụng cường tim, tăng huyết áp, chống sốc, chống thiếu máu cơ tim:",
        options: [
            "Ma hoàng thang",
            "Kiều ngân tán",
            "Tứ nghịch thang",
            "Lý trung hoàn"
        ],
        correctAnswer: "Tứ nghịch thang",
        userAnswer: null
    },
    {
        question: "Câu 6: Thuốc nào không nên phối hợp với Bán hạ:",
        options: [
            "Can khương",
            "Phụ tử",
            "Đại hồi",
            "Thảo quả"
        ],
        correctAnswer: "Phụ tử",
        userAnswer: null
    },
    {
        question: "Câu 7: Thuốc nào có tác dụng Hồi dương cứu nghịch:",
        options: [
            "Quế nhục",
            "Đại hồi",
            "Thảo quả",
            "Kinh giới"
        ],
        correctAnswer: "Quế nhục",
        userAnswer: null
    },
    {
        question: "Câu 8: Bộ phận dùng làm thuốc của cây Đại hồi:",
        options: [
            "Vỏ thân hoặc vỏ cành",
            "Lá",
            "Rễ",
            "Quả chín"
        ],
        correctAnswer: "Quả chín",
        userAnswer: null
    },
    {
        question: "Câu 9: Những cây nào sau đây đều có tính vị đại nhiệt:",
        options: [
            "Phụ tử và Quế nhục",
            "Phụ tử và Can khương",
            "Can khương và Quế nhục",
            "Phụ tử và Thảo quả"
        ],
        correctAnswer: "Phụ tử và Quế nhục",
        userAnswer: null
    },
    {
        question: "Câu 10: Cây thuốc nào sau đây thông hành qua 12 kinh:",
        options: [
            "Phụ tử",
            "Thảo quả",
            "Quế nhục",
            "Đại hồi"
        ],
        correctAnswer: "Phụ tử",
        userAnswer: null
    },
    {
        question: "Câu 1: Thuốc thanh nhiệt là những thuốc có tác dụng thanh giải nhiệt tà ở phía lý. Có thể chia thành:",
        options: [
            "2 loại",
            "3 loại",
            "4 loại",
            "5 loại"
        ],
        correctAnswer: "5 loại",
        userAnswer: null
    },
    {
        question: "Câu 2: Một số vị thuốc thanh nhiệt thường dùng là:",
        options: [
            "Thiên ma, Câu đẳng, Địa long, Mẫu lệ, Thạch quyết minh",
            "Hoàng cầm, Hoàng liên, Kim ngân hoa, Xuyên tâm liên, Mẫu đơn bì",
            "Phụ tử, Can khương, Quế nhục, Đại hồi, Thảo quả",
            "Ma hoàng, Quế chi, Kinh giới, Tía tô, Sinh khương"
        ],
        correctAnswer: "Hoàng cầm, Hoàng liên, Kim ngân hoa, Xuyên tâm liên, Mẫu đơn bì",
        userAnswer: null
    },
    {
        question: "Câu 3: Thuốc thanh nhiệt Hoàng cầm có tính vị, quy kinh:",
        options: [
            "Khổ, hàn. Vào các kinh tâm, phế, can đờm, đại trường, tiểu trường",
            "Vị đắng, tính hàn. Vào kinh tâm, tỳ, vị, can, đờm, đại tràng",
            "Cam, hàn. Vào các kinh phế, vị, tâm",
            "Hơi lạnh, cay; quy kinh phế"
        ],
        correctAnswer: "Khổ, hàn. Vào các kinh tâm, phế, can đờm, đại trường, tiểu trường",
        userAnswer: null
    },
    {
        question: "Câu 4: Vị thuốc Kim ngân hoa có công năng:",
        options: [
            "Thanh nhiệt, tả hỏa, trừ phiền chỉ khái, nhuận táo",
            "Thanh nhiệt lương huyết, hoạt huyết, khử ứ",
            "Thanh nhiệt giải độc, tiêu ung bài nùng, lợi niệu thông lâm",
            "Thanh nhiệt, giải độc, tán phong nhiệt"
        ],
        correctAnswer: "Thanh nhiệt, giải độc, tán phong nhiệt",
        userAnswer: null
    },
    {
        question: "Câu 5: Bài thuốc có xuất xứ từ thương hàn luận, gồm 4 vị thuốc có công dụng là thanh nhiệt tả hoả, sinh tân chỉ khát chủ yếu liên quan đến tác dụng hạ sốt, kháng khuẩn là:",
        options: [
            "Bạch hổ thang",
            "Hoàng liên giải độc thang",
            "Chỉ thấu tán",
            "Nhị trần thang"
        ],
        correctAnswer: "Bạch hổ thang",
        userAnswer: null
    },
    {
        question: "Câu 6: Liều dùng Mẫu Đơn Bì một ngày là bao nhiêu?",
        options: [
            "8 - 16 g",
            "16 - 22 g",
            "4 - 6 g",
            "1 - 3 g"
        ],
        correctAnswer: "8 - 16 g",
        userAnswer: null
    },
    {
        question: "Câu 7: Tri mẫu trong Bạch hổ thang có vai trò là gì?",
        options: [
            "Quân",
            "Thần",
            "Tá",
            "Sứ"
        ],
        correctAnswer: "Thần",
        userAnswer: null
    },
    {
        question: "Câu 8: Vị thuốc nào sau đây có tính hàn?",
        options: [
            "Can Khương",
            "Quế Chi",
            "Đại Hồi",
            "Kim Ngân Hoa"
        ],
        correctAnswer: "Kim Ngân Hoa",
        userAnswer: null
    },
    {
        question: "Câu 9: Các dược liệu thuộc 'thanh nhiệt tả hỏa' là:",
        options: [
            "Kim Ngân Hoa, Xuyên Tâm Liên",
            "Hoàng Cầm, Hoàng Liên",
            "Tri Mẫu, Thiên Hoa Phẩn",
            "Thanh Cao, Địa Cốt Bị"
        ],
        correctAnswer: "Tri Mẫu, Thiên Hoa Phẩn",
        userAnswer: null
    },
    {
        question: "Câu 10: Chọn câu sai: Thuốc thanh nhiệt là thuốc có tác dụng?",
        options: [
            "Thanh giải lý nhiệt",
            "Giáng hóa",
            "Lương Huyết",
            "Tả Hạ"
        ],
        correctAnswer: "Tả Hạ",
        userAnswer: null
    },

    {
        question: "Câu 1: Chọn câu sai khi nói về thuốc chỉ khái, hóa đàm, bình suyễn:",
        options: [
            "Thuốc chỉ khái: Giảm ho.",
            "Thuốc bình suyễn: Làm giãn cơ trơn khí phế quản.",
            "Thuốc hóa đàm: Tiêu đờm.",
            "Thuốc chỉ khái được chia thành: Thanh hóa nhiệt đàm và ôn hóa hàn đàm"
        ],
        correctAnswer: "Thuốc chỉ khái được chia thành: Thanh hóa nhiệt đàm và ôn hóa hàn đàm",
        userAnswer: null
    },
    {
        question: "Câu 2: Một số vị thuốc hóa đàm thường dùng là:",
        options: [
            "Toan táo nhân, Bá tử nhân, Liên tâm, Lạc tiên, Chu sa.",
            "Bán hạ, Xuyên bối mẫu, Qua lâu nhân, Bạch giới tử, Cát cánh.",
            "Xạ hương, Băng phiến, Thạch xương bồ.",
            "Chỉ thực, Trần bì, Hương phụ, Thị đế."
        ],
        correctAnswer:  "Bán hạ, Xuyên bối mẫu, Qua lâu nhân, Bạch giới tử, Cát cánh.",
        userAnswer: null
    },
    {
        question: "Câu 3: Thuốc chỉ khái Bạch quả có tính vị, quy kinh:",
        options: [
            "Vị ngọt, hơi đắng, tính ôn. Vào kinh Tâm, Phế.",
            "Tân, ôn. Vào kinh Phế, tỳ.",
            "Khổ, tân, ôn, ít độc. Qui vào các kinh phế, đại tràng.",
            "Tân, ôn, có độc. Vào hai kinh tỳ, vị."
        ],
        correctAnswer:  "Vị ngọt, hơi đắng, tính ôn. Vào kinh Tâm, Phế.",
        userAnswer: null
    },
    {
        question: "Câu 4: Vị thuốc Hạnh nhân có công năng:",
        options: [
            "Bình suyễn, chỉ khái, giải co cứng, chỉ thống.",
            "Ôn hóa hàn đàm, trừ mủ, lợi hầu họng.",
            "Giáng nghịch cầm nôn, tiêu đờm hóa thấp, tán kết tiêu bĩ.",
            "Chỉ khái bình suyễn, nhuẫn tràng thông tiện."
        ],
        correctAnswer: "Chỉ khái bình suyễn, nhuẫn tràng thông tiện.",
        userAnswer: null
    },
    {
        question: "Câu 5: Bộ phận dùng của vị thuốc cà độc dược là:",
        options: [
            "Hoa đã phơi hay sấy khô.",
            "Hạt đã phơi hay sấy khô.",
            "Rễ đã phơi hay sấy khô.",
            "Lá tươi hoặc phơi âm can."
        ],
        correctAnswer: "Hoa đã phơi hay sấy khô.",
        userAnswer: null
    },
    {
        question: "Câu 6: Tên khoa học của vị thuốc húng chanh là:",
        options: [
            "Semen Ginkgo.",
            "Folium Plectranthi amboinici.",
            "Radix Platycodi grandiflori.",
            "Rhizoma Pinelliae."
        ],
        correctAnswer: "Folium Plectranthi amboinici.",
        userAnswer: null
    },
    {
        question: "Câu 7: Vị thuốc cát cánh có chủ vị:",
        options: [
            "Trị ho, tiêu đàm, chữa khí hư, thận dương hư, đái đục, đái són.",
            "Cảm cúm, ho sốt do phong hàn, ho gà, khàn tiếng.",
            "Suyễn do ngoại tà hoặc đờm ẩm, táo bón do huyết hư và thiếu tân dịch.",
            "Ho đờm nhiều, ngực tức, họng đau, tiếng khàn, áp xe phổi, tiêu mủ, mụn nhọt."
        ],
        correctAnswer:  "Ho đờm nhiều, ngực tức, họng đau, tiếng khàn, áp xe phổi, tiêu mủ, mụn nhọt.",
        userAnswer: null
    },
    {
        question: "Câu 8: Bài thuốc Nhị trần thang có xuất xứ từ:",
        options: [
            "Y học tâm ngộ.",
            "Nhiếp sinh chúng diệu phương.",
            "Thái bình huệ dân hòa tễ cục phương.",
            "Kim quỹ yếu lược."
        ],
        correctAnswer: "Thái bình huệ dân hòa tễ cục phương",
        userAnswer: null
    },
    {
        question: "Câu 9: Bài thuốc có xuất xứ từ Y học tâm ngộ, gồm 7 vị thuốc có công dụng là chỉ khái hóa đàm, sơ phong tuyên phế.",
        options: [
            "Bạch hổ thang.",
            "Hoàng liên giải độc thang.",
            "Chỉ thấu tán.",
            "Nhị trần thang."
        ],
        correctAnswer: "Chỉ thấu tán.",
        userAnswer: null
    },
    {
        question: "Câu 10: Bài thuốc nào sau đây có công dụng Tuyên phế giáng khí, thanh nhiệt hóa đàm?",
        options: [
            "Chỉ thấu tán.",
            "Nhị trần thang.",
            "Định suyễn thang.",
            "Cả A, B, C đều sai."
        ],
        correctAnswer: "Định suyễn thang",
        userAnswer: null
    },

    {
        question: "Câu 1: Một số vị thuốc bình can tức phong thường dùng là:",
        options: [
            "Thiên ma, Câu đằng, Địa long, Mẫu lệ, Thạch quyết minh",
            "Hoàng cầm, Hoàng liên, Kim ngân hoa, Xuyên tâm liên, Mẫu đơn bì",
            "Phụ tử, Can khương, Quế nhục, Đại hồi, Thảo quả",
            "Ma hoàng, Quế chi, Kinh giới, Tía tô, Sinh khương"
        ],
        correctAnswer: "Thiên ma, Câu đằng, Địa long, Mẫu lệ, Thạch quyết minh",
        userAnswer: null
    },
    {
        question: "Câu 2: Thuốc bình can tức phong là thuốc có tác dụng bình can, tiềm dương, tức phong để chữa các chứng bệnh gây ra do can dương thịnh, can phong nội động. Có thể được chia thành:",
        options: [
            "Thuốc bình ức can dương và thuốc tức phong chỉ kinh",
            "Thuốc trọng trấn an thần và thuốc dưỡng tâm an thần",
            "Thuốc hành khí giải uất và thuốc phá khí giáng nghịch",
            "Thuốc ôn trung tán hàn và thuốc hồi dương cứu nghịch"
        ],
        correctAnswer: "Thuốc bình ức can dương và thuốc tức phong chỉ kinh",
        userAnswer: null
    },
    {
        question: "Câu 3: Thuốc bình can tức phong Thiên ma có tính vị, quy kinh:",
        options: [
            "Tân, ôn. Vào kinh can",
            "Cam, lương. Vào hai kinh can, tâm bào",
            "Hàm, hàn. Quy vào các kinh can, tỳ, phế, bàng quang",
            "Hàm, vi hàn. Vào các kinh can, đởm, thận"
        ],
        correctAnswer: "Tân, ôn. Vào kinh can",
        userAnswer: null
    },
    {
        question: "Câu 4: Thuốc bình can tức phong Câu đằng có công năng:",
        options: [
            "Bình can, tiềm dương, thanh nhiệt sáng mắt, ích thận, thông lâm, nhuận tràng, thông tiện",
            "Trọng trấn an thần, tư am tiềm dương, làm mềm chất rắn, tán kết khối, thu liễm cổ sáp",
            "Thanh nhiệt, trấn kinh, thông kinh lạc, bình suyễn, lợi niệu",
            "Bình can, tức phong, trấn kinh"
        ],
        correctAnswer: "Bình can, tức phong, trấn kinh",
        userAnswer: null
    },
    {
        question: "Câu 5: Bài thuốc có xuất xứ từ tạp bệnh chứng trị tân nghĩa, gồm 11 vị thuốc có công dụng là bình can tức phong, thanh nhiệt hoạt huyết chủ yếu là liên quan đến tác dụng hạ huyết áp, an thần, gây ngủ, chống co giật, cải thiện lưu lượng máu não:",
        options: [
            "Thiên ma câu đằng ẩm",
            "Chỉ kinh tán",
            "Toan táo nhân than",
            "Thiên vương bổ tâm đơn"
        ],
        correctAnswer: "Thiên ma câu đằng ẩm",
        userAnswer: null
    },
    {
        question: "Câu 6: Thuốc bình can tức phong Thạch quyết minh có tính vị, quy kinh:",
        options: [
            "Cam, lương. Vào hai kinh can, tâm bào",
            "Hàm, vi hàn. Vào các kinh can, đởm, thận",
            "Mặn, bình. Vào các kinh can, thận",
            "Tân, ôn. Vào kinh can"
        ],
        correctAnswer: "Mặn, bình. Vào các kinh can, thận",
        userAnswer: null
    },
    {
        question: "Câu 7: Vị thuốc bình can tức phong thường dùng là:",
        options: [
            "Kinh giới",
            "Đại hồi",
            "Kim ngân hoa",
            "Mẫu lệ"
        ],
        correctAnswer: "Mẫu lệ",
        userAnswer: null
    },
    {
        question: "Câu 8: Địa long có tác dụng nào sau đây?",
        options: [
            "Bổ can âm",
            "Tức phong",
            "Bình suyễn",
            "Tư âm tiềm dương"
        ],
        correctAnswer:  "Bình suyễn",
        userAnswer: null
    },
    {
        question: "Câu 9: Liều sử dụng của Câu đằng khi dùng trong đơn thuốc sắc thang là:",
        options: [
            "12 - 16g/ngày",
            "3 – 9g/ngày",
            "9 – 30g/ngày",
            "4,5 – 9g/ngày"
        ],
        correctAnswer:  "12 - 16g/ngày",
        userAnswer: null
    },
    {
        question: "Câu 10: Chọn câu sai:",
        options: [
            "Thiên ma không dùng cho người âm hư",
            "Tên khoa học vị thuốc Địa long: Pheretima",
            "Thành phần hóa học của Mẫu lệ chủ yếu calci",
            "Liều dùng của Thạch quyết minh dưới dạng bột từ 5 – 7g/ngày"
        ],
        correctAnswer: "Liều dùng của Thạch quyết minh dưới dạng bột từ 5 – 7g/ngày",
        userAnswer: null
    },
    {
        question: "Dựa vào nguồn gốc của thuốc an thần mà phân thành:",
        options: [
            "Thuốc bình ức can dương và thuốc tức phong chỉ kinh",
            "Thuốc trọng trấn an thần và thuốc dưỡng tâm an thần",
            "Thuốc hành khí giải uất và thuốc phá khí giáng nghịch",
            "Thuốc ôn trung tán hàn và thuốc hồi dương cứu nghịch"
        ],
        correctAnswer: "Thuốc trọng trấn an thần và thuốc dưỡng tâm an thần",
        userAnswer: null
    },
    {
        question: "Một số vị thuốc an thần thường dùng:",
        options: [
            "Toan táo nhân, Bá tử nhân, Liên tâm, Lạc tiên, Chu sa",
            "Bán hạ, Xuyên bối mẫu, Qua lâu nhân, Bạch giới tử, Cát cánh",
            "Xạ hương, Băng phiến, Thạch xương bồ",
            "Chỉ thực, Trần bì, Hương phụ, Thị đế"
        ],
        correctAnswer: "Toan táo nhân, Bá tử nhân, Liên tâm, Lạc tiên, Chu sa",
        userAnswer: null
    },
    {
        question: "Thuốc an thần Toan táo nhân có tính vị, qui kính:",
        options: [
            "Cam, toan, bình. Quy vào các kinh can, đởm, tâm, tỷ",
            "Cam, bình. Vào các kinh tâm, thận, đại trường",
            "Khô, hàn. Quy vào các kinh tâm, thận",
            "Cam, vi khổ, lương. Vào các kinh tâm, can"
        ],
        correctAnswer: "Cam, toan, bình. Quy vào các kinh can, đởm, tâm, tỷ",
        userAnswer: null
    },
    {
        question: "Thuốc an thần Lạc tiên có công năng:",
        options: [
            "Dưỡng can, an thần, liềm hãn, sinh tân",
            "Dưỡng tâm, an thần, chí hãn, nhuận tràng",
            "Thanh tâm, trừ nhiệt, chi huyết, sáp tinh",
            "An thần, giải nhiệt, mát gan"
        ],
        correctAnswer:  "An thần, giải nhiệt, mát gan",
        userAnswer: null
    },
    {
        question: "Bài thuốc có xuất xứ từ kim quỹ yếu lược, gồm 5 vị thuốc có công dụng là Dưỡng huyết an thần, thanh nhiệt trừ phiền có lien quan đến tác dụng an thần gây ngủ, cải thiện trí nhớ, chống lo âu…",
        options: [
            "Thiên ma câu đằng ấm",
            "Chỉ kinh tán",
            "Toan táo nhân than",
            "Thiên vương bổ tâm đơn"
        ],
        correctAnswer: "Toan táo nhân than",
        userAnswer: null
    },
    {
        question: "Chọn 1 câu đúng khi nói về thuốc an thần:",
        options: [
            "Thuốc an thần là những vị thuốc có tác dụng an thần định chí",
            "Dùng để điều trị các chứng tâm thần bất an",
            "Chỉ định chung không điều trị các chứng tinh thần hoảng hốt không yên (tâm thần bất minh), hồi hộp, trống ngực, mất ngủ, hay quên, ngủ mê nhiều, co giật, kích thích, điên cuồng",
            "Câu A và B đúng"
        ],
        correctAnswer: "Câu A và B đúng",
        userAnswer: null
    },
    {
        question: "Chọn 1 câu sai khi nói về chú ý khi sử dụng thuốc an thần:",
        options: [
            "Khi điều trị, người thầy thuốc nên căn cứ vào các chứng biểu hiện trên lâm sàng mà phối hợp thuốc để tăng cường hiệu quả",
            "Thuốc có nguồn gốc khoáng thạch thường có độc nên khi dùng phải thận trọng",
            "Khi làm viên hoàn hoặc tán bột uống thì dễ làm tổn thương tỳ vị cho nên có thể dùng kéo dài",
            "Khi sắc uống thì nên sắc kỹ"
        ],
        correctAnswer: "Khi làm viên hoàn hoặc tán bột uống thì dễ làm tổn thương tỳ vị cho nên có thể dùng kéo dài",
        userAnswer: null
    },
    {
        question: "Thuốc an thần Chu sa có tính vị, quy kinh:",
        options: [
            "Cam, vi khổ, lương. Quy vào các kinh tâm, can",
            "Cam, toan, bình. Quy vào các kinh can, đởm, tâm, tỳ",
            "Cam, bình. Quy vào các kinh tâm, thận, đại trường",
            "Khô, hàn. Quy vào các kinh tâm, thận"
        ],
        correctAnswer: "Cam, vi khổ, lương. Quy vào các kinh tâm, can",
        userAnswer: null
    },
    {
        question: "Chú ý khi dùng Bá tử nhân:",
        options: [
            "Người thực tả uất hỏa không dùng",
            "Tiêu chảy, đàm nhiều cấm dùng",
            "Không nên sử dụng đối với người có huyết áp thấp sẽ dễ gây tình trạng chóng mặt, mệt mỏi",
            "Nên dùng trước khi đi ngủ"
        ],
        correctAnswer: "Tiêu chảy, đàm nhiều cấm dùng",
        userAnswer: null
    },
    {
        question: "Bài thuốc có xuất xứ từ hiệu chú phụ nhân lương phương, có công dụng là Tư âm thanh nhiệt, dưỡng tâm an thần. Trên lâm sàng chủ yếu dùng điều trị chứng âm hư nội nhiệt, tâm thần bất minh, hay quên,.. gồm bao nhiêu vị thuốc:",
        options: [
            "12 vị",
            "13 vị",
            "14 vị",
            "15 vị"
        ],
        correctAnswer: "14 vị",
        userAnswer: null
    },
    {
        question: "Câu 1: Tùy theo cường độ tác dụng, thuốc lý khí có thể phân chia thành các nhóm:",
        options: [
            "Thuốc bình ức can dương và thuốc tức phong chỉ kinh",
            "Thuốc trọng trấn an thần và thuốc dưỡng tâm an thần",
            "Thuốc hành khí giải uất và thuốc phá khí giáng nghịch",
            "Thuốc ôn trung tán hàn và thuốc hồi dương cứu nghịch"
        ],
        correctAnswer: "Thuốc hành khí giải uất và thuốc phá khí giáng nghịch",
        userAnswer: null
    },
    {
        question: "Câu 2: Một số vị thuốc lý khí thường dùng:",
        options: [
            "Toan táo nhân, Bá tử nhân, Liên tâm, Lạc tiên, Chu sa",
            "Bán hạ, Xuyên bối mẫu, Qua lâu nhân, Bạch giới tử, Cát cánh",
            "Xạ hương, Băng phiến, Thạch xương bồ",
            "Chỉ thực, Trần bì, Hương phụ, Thị đế"
        ],
        correctAnswer: "Chỉ thực, Trần bì, Hương phụ, Thị đế",
        userAnswer: null
    },
    {
        question: "Câu 3: Thuốc lý khí Chỉ thực, Chỉ xác có tính vị, quy kinh:",
        options: [
            "Khổ, tân, toan, hàn. Quy vào các kinh tỳ, vị",
            "Kho, tân. Ôn. Vào hai kinh phế, tỳ",
            "Vị hơi cay, hơi đắng, tính bình. Quy kinh can, tỳ, tam tiêu",
            "Khô, sáp, bình. Vào kinh vị"
        ],
        correctAnswer: "Khổ, tân, toan, hàn. Quy vào các kinh tỳ, vị",
        userAnswer: null
    },
    {
        question: "Câu 4: Thuốc lý khí Thị đế có công năng",
        options: [
            "Phá khí tiêu tích, hóa đờm tiêu bĩ",
            "Lý khí kiện tỳ, hóa đờm ráo thấp",
            "Hành khí chỉ thống, giải uất điều kinh, kiện vị tiêu thực",
            "Giáng nghịch, hạ khí"
        ],
        correctAnswer: "Giáng nghịch, hạ khí",
        userAnswer: null
    },
    {
        question: "Câu 5: Bài thuốc có xuất xứ từ nội ngoại thương biện hoặc luận, gồm 2 vị thuốc có công dụng là kiện tỳ tiêu thực, hành khí hóa thấp, chủ trị các chứng tỳ hư khí trệ:",
        options: [
            "An cung ngưu hoàng hoàn",
            "Tô hợp hương hoàn",
            "Chỉ truật hoàn",
            "Việt cúc hoàn"
        ],
        correctAnswer: "Chỉ truật hoàn",
        userAnswer: null
    },
    {
        question: "Câu 6: Chỉ thực, chỉ xác thuộc nhóm nào:",
        options: [
            "Hành khí giải uất",
            "Phá khí giáng nghịch",
            "Hóa trọc chỉ đái",
            "Thông khí khai khiếu"
        ],
        correctAnswer: "Phá khí giáng nghịch",
        userAnswer: null
    },
    {
        question: "Câu 7: Bạch truật có vai trò gì trong phương thuốc chỉ truật hoàn:",
        options: [
            "Quân",
            "Thần, Sứ",
            "Thần, Tá",
            "Tá, Sứ"
        ],
        correctAnswer: "Thần, Tá",
        userAnswer: null
    },
    {
        question: "Câu 8: Khi sử dụng Trần Bì để chữa bệnh thì cần chú ý không được sử dụng cho bệnh nhân?",
        options: [
            "Chướng bụng",
            "Nôn mửa",
            "Ho đờm nhiều",
            "Thổ huyết"
        ],
        correctAnswer: "Thổ huyết",
        userAnswer: null
    },
    {
        question: "Câu 9: Thành phần của vị thuốc Việt Cúc Hoàn có bao nhiêu vị thuốc?",
        options: [
            "3",
            "4",
            "5",
            "6"
        ],
        correctAnswer: "5",
        userAnswer: null
    },
    {
        question: "Câu 10: Tai hồng là bộ phận nào của cây Hồng:",
        options: [
            "Quả Hồng",
            "Vỏ cây Hồng",
            "Lá non của cây Hồng",
            "Đài của quả Hồng"
        ],
        correctAnswer: "Đài của quả Hồng",
        userAnswer: null
    },
    {
        question: "Câu 1: Chọn câu sai khi nói về xạ hương:",
        options: [
            "Bộ phận dùng: chất đặc lổn nhổn ở hạch sát dương vật của con Cầy hương đực",
            "Tính vị, quy kinh: ôn, tân, quy vào kinh tâm, tỳ",
            "Công năng: thông khiếu, trục đờm, tăng trí nhớ",
            "Chú ý: không dùng cho phụ nữ có thai"
        ],
        correctAnswer: "Công năng: thông khiếu, trục đờm, tăng trí nhớ",

        userAnswer: null
    },
    {
        question: "Câu 2: Khi nói về phương thuốc An cung ngưu hoàng hoàn. Chọn câu ĐÚNG:",
        options: [
            "Có 2 vị thuốc giữ vai trò quân là ngưu hoàng và xạ hương",
            "Tránh sử dụng cho các đối tượng: tai biến mạch máu não, người thể hàn, dương hư, phụ nữ có thai, suy giảm chức năng gan, thận",
            "An cung ngưu hoàng hoàn là phương thuốc điều trị đàm mê tâm khiếu",
            "Có xạ hương là vị thuốc giữ vai trò sứ"
        ],
        correctAnswer: "Tránh sử dụng cho các đối tượng: tai biến mạch máu não, người thể hàn, dương hư, phụ nữ có thai, suy giảm chức năng gan, thận",

        userAnswer: null
    },
    {
        question: "Câu 3: Chọn 1 câu SAI khi nói về thuốc khai khiếu:",
        options: [
            "Thuốc khai khiếu là những vị thuốc có tính tân hương tán, có tác dụng khai khiếu tỉnh thần nên dùng để điều trị chứng bệnh bế chứng thần hôn",
            "Chỉ định chung ôn bệnh nhiệt hãm tâm bào, đàm trọc bưng bít thanh khiếu gây ra mê man, nói lảm nhảm, co giật.",
            "Thoát chứng: Không nên dùng thuốc khai khiếu.",
            "Bế chứng: Không nên dùng thuốc khai khiếu."
        ],
        correctAnswer: "Bế chứng: Không nên dùng thuốc khai khiếu.",
        userAnswer: null
    },
    {
        question: "Câu 4: Bộ phận dùng của vị thuốc Băng phiến:",
        options: [
            "Tinh dầu từ gỗ cây long não",
            "Rễ cây long não",
            "Lá phơi khô của cây long não",
            "Tinh dầu từ hoa và quả của cây long não"
        ],
        correctAnswer: "Tinh dầu từ gỗ cây long não",
        userAnswer: null
    },
    {
        question: "Câu 5: Một số vị thuốc khai khiếu thường dùng:",
        options: [
            "Toan táo nhân, Bá tử nhân, Liên tâm, Lạc tiên, Chu sa.",
            "Bán hạ, Xuyên bối mẫu, Qua lâu nhân, Bạch giới tử, Cát cánh.",
            "Xạ hương, Băng phiến, Thạch xương bồ.",
            "Chỉ thực, Trần bì, Hương phụ, Thị đế."
        ],
        correctAnswer: "Xạ hương, Băng phiến, Thạch xương bồ.",
        userAnswer: null
    },
    {
        question: "Câu 6: Thuốc khai khiếu Xạ hương có tính vị, quy kinh:",
        options: [
            "Ấm, cay, Quy vào kinh tâm, tỳ.",
            "Hơi lạnh, cay, đắng. Quy vào các kinh tâm, tỳ, phế.",
            "Tân, ôn. Vào các kinh tâm, can, tỳ.",
            "Cam, bình. Vào các kinh tâm, thận, đại trường."
        ],
        correctAnswer: "Ấm, cay, Quy vào kinh tâm, tỳ.",
        userAnswer: null
    },
    {
        question: "Câu 7: Thuốc khai khiếu Thạch xương bồ có công năng:",
        options: [
            "Khai khiếu tỉnh thần, hoạt huyết thông kinh, chỉ thống.",
            "Khai khiếu tỉnh thần, thanh nhiệt chỉ thống.",
            "Thông khiếu, trục đờm, tăng trí nhớ, tán phong khoan trung khứ thấp, giải độc sát trùng",
            "Âm hư, hoạt tinh, ra nhiều mồ hôi."
        ],
        correctAnswer: "Thông khiếu, trục đờm, tăng trí nhớ, tán phong khoan trung khứ thấp, giải độc sát trùng",
        userAnswer: null
    },
    {
        question: "Câu 8: Bài thuốc có xuất xứ từ ôn bệnh điều biện, gồm 11 vị thuốc có công dụng là Trấn kinh khai khiếu có liên quan đến tác dụng hạ sốt, ảnh hưởng đến hệ thần kinh trung ương...",
        options: [
            "An cung ngưu hoàng hoàn",
            "Tô hợp hương hoàn",
            "Chỉ truật hoàn",
            "Việt cúc hoàn"
        ],
        correctAnswer: "An cung ngưu hoàng hoàn",
        userAnswer: null
    },
    {
        question: "Câu 9: Thị trường Việt Nam đến năm 2014 đã có bao nhiêu sản phẩm “An cung ngưu hoàng hoàn” được BYT cấp số đăng ký:",
        options: [
            "5 sản phẩm",
            "4 sản phẩm",
            "7 sản phẩm",
            "3 sản phẩm"
        ],
        correctAnswer: "4 sản phẩm",
        userAnswer: null
    },
    {
        question: "Câu 10: Chống chỉ định Tô hợp hương hoàn cho các đối tượng:",
        options: [
            "Phụ nữ có thai",
            "Người mắc chứng nhiệt bế",
            "Người mắc chứng thoát",
            "Tất cả các ý trên"
        ],
        correctAnswer: "Tất cả các ý trên",
        userAnswer: null
    },

    {
        question: "Câu 1: Thuốc lý huyết là những thuốc có tác dụng điều hòa hoạt động và sự vận hành của huyết trong cơ thể, dùng để điều trị các bệnh về huyết. Có thể chia thành 3 loại, ngoại trừ:",
        options: [
            "Băng huyết",
            "Hoạt huyết",
            "Phá huyết",
            "Chỉ huyết"
        ],
        correctAnswer: "Băng huyết",
        userAnswer: null
    },
    {
        question: "Câu 2: Một số vị thuốc lý huyết thường dùng:",
        options: [
            "Đan sâm, Ích mẫu, Hồng hoa, Đào nhân, Ngưu tất",
            "Phục linh, Trạch tả, Nhân trần, Ý dĩ, Mã đề",
            "Độc hoạt, Uy linh tiên, Tần giao, Tang ký sinh, Cẩu tích",
            "Nhân sâm, Hoàng Kỳ, Đảng sâm, Bạch truật, Hoài sơn"
        ],
        correctAnswer: "Đan sâm, Ích mẫu, Hồng hoa, Đào nhân, Ngưu tất",
        userAnswer: null
    },
    {
        question: "Câu 3: Thuốc lý huyết Đan sâm có tính vị, quy kinh:",
        options: [
            "Khổ, vi hàn. Vào các kinh tâm, can",
            "Khổ, tân, hơi hàn. Vào các kinh can, tâm bào",
            "Tân, ôn. Vào các kinh tâm, can",
            "Khổ, cam, bình. Vào các kinh tâm, can"
        ],
        correctAnswer: "Khổ, tân, hơi hàn. Vào các kinh can, tâm bào",
        userAnswer: null
    },
    {
        question: "Câu 4: Thuốc lý huyết Khương hoàng có công năng:",
        options: [
            "Lương huyết chỉ huyết, thanh can tá hỏa",
            "Tán ứ chỉ huyết, tiêu sưng giảm đau",
            "Hành huyết khử ứ, tiêu viêm chỉ thống",
            "Hành khí, phá huyết, chỉ thống, sinh cơ"
        ],
        correctAnswer: "Hành khí, phá huyết, chỉ thống, sinh cơ",
        userAnswer: null
    },
    {
        question: "Câu 5: Bài thuốc có xuất xứ từ Y lâm cải thác, gồm 7 vị thuốc có công dụng là bổ khí, hoạt huyết thông lạc:",
        options: [
            "Bổ dương hoàn ngũ thang",
            "Huyết phủ trục ứ thang",
            "Ngũ linh tán",
            "Bình vị tán"
        ],
        correctAnswer: "Bổ dương hoàn ngũ thang",
        userAnswer: null
    },
    {
        question: "Câu 6: Thuốc lý huyết Khương hoàng có tính vị, quy kinh:",
        options: [
            "Khổ, tân, hơi hàn. Vào các kinh can, tâm bào",
            "Tân, ôn. Vào các kinh tâm, can",
            "Khổ, cam, bình. Vào các kinh tâm, can",
            "Tân, khổ, ôn. Vào các kinh can tỳ"
        ],
        correctAnswer: "Tân, khổ, ôn. Vào các kinh can tỳ",
        userAnswer: null
    },
    {
        question: "Câu 7: Bộ phận dùng của Đào nhân là:",
        options: [
            "Hạt lấy ở quả sống của cây đào",
            "Hạt lấy ở quả chín của cây đào",
            "Nguyên quả đào của cây đào",
            "Phần thịt đào của quả đào"
        ],
        correctAnswer: "Hạt lấy ở quả chín của cây đào",
        userAnswer: null
    },
    {
        question: "Câu 8: Thuốc lý huyết Hồng hoa có công năng:",
        options: [
            "Tán ứ chỉ huyết, giảm đau",
            "Hành huyết khử ứ, tiêu viêm chỉ thống",
            "Hành khí, phá huyết, chỉ thống, sinh cơ",
            "Hoạt huyết thông kinh, tán ứ huyết, giảm đau"
        ],
        correctAnswer: "Hoạt huyết thông kinh, tán ứ huyết, giảm đau",
        userAnswer: null
    },
    {
        question: "Câu 9: Thuốc lý huyết Ngưu tất có công năng:",
        options: [
            "Hoạt huyết thông kinh, mạnh gân cốt, bổ can thận",
            "Hoạt huyết thông kinh, mạnh gân cốt, bổ huyết",
            "Hoạt huyết thông kinh, mạnh gân cốt, lợi thủy tiêu phù",
            "Hoạt huyết thông kinh, bổ can thận"
        ],
        correctAnswer: "Hoạt huyết thông kinh, mạnh gân cốt, bổ can thận",
        userAnswer: null
    },
    {
        question: "Câu 10: Thuốc lý huyết nào sau đây thuộc loại hoạt huyết:",
        options: [
            "Đan sâm, Hồng hoa, Hương phụ",
            "Đan sâm, Hồng hoa, Tam thất",
            "Đan sâm, Hồng hoa, Đào nhân",
            "Đan sâm, Hồng hoa, Hoa hòe"
        ],
        correctAnswer: "Đan sâm, Hồng hoa, Đào nhân",
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
