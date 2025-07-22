1. "Variant" là gì?

Variant (biến thể) trong lập trình giao diện thường đề cập đến một kiểu hoặc trạng thái khác nhau của một thành phần giao diện (UI component), chẳng hạn như nút (button), thẻ, hoặc bất kỳ phần tử nào trên giao diện. Các variant được sử dụng để định nghĩa các phong cách khác nhau cho cùng một thành phần, tùy thuộc vào mục đích sử dụng hoặc trạng thái (ví dụ: primary, secondary, disabled, ghost, v.v.).

1. "Variant" là gì?

Variant (biến thể) trong lập trình giao diện thường đề cập đến một kiểu hoặc trạng thái khác nhau của một thành phần giao diện (UI component), chẳng hạn như nút (button), thẻ, hoặc bất kỳ phần tử nào trên giao diện. Các variant được sử dụng để định nghĩa các phong cách khác nhau cho cùng một thành phần, tùy thuộc vào mục đích sử dụng hoặc trạng thái (ví dụ: primary, secondary, disabled, ghost, v.v.).

    Ngữ cảnh sử dụng:
        Trong các thư viện UI (như Material-UI, Chakra UI) hoặc khi bạn tự xây dựng component trong Next.js, variant thường là một prop (thuộc tính) được truyền vào component để thay đổi kiểu dáng (style) của nó.
        Với Tailwind CSS, khái niệm variant có thể liên quan đến các lớp (class) hoặc trạng thái khác nhau (như hover:, focus:, hoặc các lớp tùy chỉnh) để tạo ra các phong cách khác nhau cho cùng một phần tử.
    Ví dụ chung:
        Một nút (button) có thể có các variant như:
            primary: Nút chính với nền màu nổi bật (ví dụ: xanh dương).
            secondary: Nút phụ với nền nhạt hơn hoặc chỉ viền.
            ghost: Nút "ma quái" (thường không có nền, chỉ có viền hoặc văn bản trong suốt).
    Câu hỏi để suy luận:
        Bạn đang dùng variant = "ghost" trong ngữ cảnh nào? Là prop của một component trong Next.js hay một lớp Tailwind CSS? Điều này sẽ giúp mình giải thích chính xác hơn.
2. Các kiểu variant phổ biến

a. Primary Variant

    Mô tả: Đây là kiểu chính, thường được dùng cho các hành động quan trọng nhất (như "Submit", "Save"). Primary variant thường có màu nền nổi bật và màu chữ tương phản.
    Đặc điểm:
        Màu nền đậm (ví dụ: xanh dương, cam).
        Màu chữ sáng (trắng hoặc nhạt) để dễ đọc.
        Thường có hiệu ứng hover (nhạt hơn hoặc đậm hơn).
b. Secondary Variant

    Mô tả: Kiểu phụ, dùng cho các hành động ít quan trọng hơn (như "Cancel", "Back"). Thường nhẹ nhàng hơn primary.
    Đặc điểm:
        Màu nền nhạt hơn hoặc không có nền.
        Có thể có viền để phân biệt.
        Hiệu ứng hover nhẹ nhàng.
c. Ghost Variant

    Mô tả: Kiểu "ma quái", trong suốt, không có nền hoặc nền mờ. Thường dùng để tạo cảm giác nhẹ nhàng, không làm giao diện rối.
    Đặc điểm:
        Nền trong suốt (transparent).
        Có thể có viền hoặc chỉ có văn bản.
        Hiệu ứng hover để tăng tương tác (thêm nền nhạt hoặc đổi màu chữ).
d. Outline Variant

    Mô tả: Tương tự ghost, nhưng tập trung vào viền mà không có nền. Thường dùng để tạo sự phân biệt rõ ràng.
    Đặc điểm:
        Không có nền (transparent).
        Viền rõ ràng, màu chữ thường khớp với viền.
        Hiệu ứng hover có thể thêm nền hoặc đổi màu viền.
e. Danger Variant

    Mô tả: Dùng cho các hành động nguy hiểm (như "Delete", "Remove"). Thường có màu đỏ để cảnh báo.
    Đặc điểm:
        Màu nền đỏ hoặc viền đỏ.
        Màu chữ tương phản (trắng hoặc đỏ đậm).
        Hiệu ứng hover để nhấn mạnh.

f. Disabled Variant

    Mô tả: Dùng để biểu thị trạng thái không hoạt động của một phần tử (ví dụ: nút bị vô hiệu hóa).
    Đặc điểm:
        Màu xám, mờ (opacity thấp).
        Không có hiệu ứng hover (vì không tương tác được).
g. Success/Warning Variants

    Mô tả: Dùng để biểu thị trạng thái thành công (xanh lá) hoặc cảnh báo (vàng).
Ứng dụng: Dùng để truyền tải trạng thái tích cực hoặc cảnh báo.
