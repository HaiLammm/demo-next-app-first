Làm việc với file

    :w – Lưu file.
    :q – Thoát (yêu cầu lưu nếu có thay đổi).
    :q! – Thoát mà không lưu.
    :wq – Lưu và thoát.
    :wqa – Lưu tất cả và thoát.
    g + status – Kiểm tra trạng thái file (có thể là lệnh ngoài Vim).

Di chuyển con trỏ

    ^ – Đầu dòng (không tính khoảng trắng).
    $ – Cuối dòng.
    0 – Đầu dòng (bao gồm khoảng trắng).
    w – Chuyển đến từ tiếp theo (tính cả ký tự liền nhau).
    W – Chuyển đến từ tiếp theo (chỉ tính khoảng trắng làm ranh giới).
    b – Quay lại từ trước.
    B – Quay lại từ trước (chỉ tính khoảng trắng).
    e – Cuối từ (tính cả ký tự liền nhau).
    E – Cuối từ (chỉ tính khoảng trắng).
    f<ký tự> – Chuyển đến ký tự tiếp theo.
    F<ký tự> – Chuyển đến ký tự trước.
    ; – Lặp lại f hoặc F.
    { – Chuyển đến đoạn trước.
    } – Chuyển đến đoạn sau.
    % – Chuyển đến cặp ngoặc tương ứng.
    gg – Đầu file.
    G – Cuối file.
    H – Đầu màn hình.
    M – Giữa màn hình.
    L – Cuối màn hình.
    j, k, h, l – Di chuyển xuống, lên, trái, phải.
    <số>k – Lên số dòng (ví dụ: 18k).
    <số>j – Xuống số dòng (ví dụ: 27j).
    <số>gg – Đến dòng số (ví dụ: 50gg).

Các mode

    v – Chế độ Visual (chọn ký tự).
    V – Chế độ Visual Line (chọn dòng).
    i – Chế độ Insert (chèn trước con trỏ).
    a – Chế độ Insert (chèn sau con trỏ).
    o – Chèn dòng dưới và vào Insert.
    O – Chèn dòng trên và vào Insert.
    Esc – Thoát Insert/Visual về Normal.

Di chuyển để edit

    I – Chèn từ đầu dòng.
    A – Chèn từ cuối dòng.
    ciw – Xóa từ và vào Insert.
    ci{ – Xóa trong cặp ngoặc và vào Insert.

Select

    v – Bắt đầu chọn ký tự.
    V – Bắt đầu chọn dòng.
    vi{ – Chọn nội dung trong cặp ngoặc.
    va{ – Chọn cả cặp ngoặc.
    % – Chọn đến cặp ngoặc tương ứng.

Delete hoặc Cut

    dw – Xóa đến cuối từ.
    dd – Xóa dòng.
    d2d – Xóa 2 dòng.
    d3d – Xóa 3 dòng.
    diw – Xóa từ.
    cc – Xóa dòng và vào Insert.
    C – Xóa từ con trỏ đến cuối dòng và vào Insert.
    dt<ký tự> – Xóa đến trước ký tự.

Copy

    yw – Sao chép từ.
    yiw – Sao chép từ (nội dung trong từ).
    y2y – Sao chép 2 dòng.
    y4y – Sao chép 4 dòng.
    ya{ – Sao chép cặp ngoặc.
    p – Paste sau con trỏ.
    P – Paste trước con trỏ.

Find and Replace

    /từ – Tìm từ phía trước.
    ?từ – Tìm từ phía sau.
    n – Chuyển đến kết quả tiếp theo.
    N – Chuyển đến kết quả trước.
    :set ic – Không phân biệt hoa/thường khi tìm.
    :s/từ1/từ2 – Thay thế lần đầu tiên.
    :s/từ1/từ2/g – Thay thế tất cả trong dòng.
    :s/từ1/từ2/gc – Thay thế với xác nhận.
    :%s/từ1/từ2/g – Thay thế tất cả trong file.
    :%s/từ1/từ2/gc – Thay thế tất cả với xác nhận.

Macro

    qa – Bắt đầu ghi macro vào phím a.
    q – Kết thúc ghi macro.
    @a – Thực thi macro từ phím a.
    <số>@a – Thực thi macro nhiều lần (ví dụ: 5@a).

Multicursor (thêm vào cuối)

    Ctrl+v – Bắt đầu chế độ Visual Block.
    gj/gk – Di chuyển xuống/lên trong block.
    c – Thay đổi nội dung block.

4. Suy luận và áp dụng

    Liên quan đến "copy 3 dòng ở dưới" (yêu cầu trước): Từ video, bạn có thể dùng y3y (sao chép 3 dòng) hoặc V2j:y (chọn 3 dòng bằng Visual Line rồi yank). Điều này khớp với gợi ý mình đã đưa trước đó.
    Quản lý task: Video không đề cập trực tiếp đến to-do list, nhưng bạn có thể dùng các lệnh copy (y), delete (d), và macro để quản lý task thủ công trong file Markdown (như tasks.md).
    Khám phá thêm: Kunkka khuyến khích dùng cheat sheet để tìm các lệnh như mark (ma), upper/lower case (gu, gU), hoặc replace ký tự (r). Bạn có thể thử nghiệm các lệnh này.
