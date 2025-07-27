1.Layout

   Container:
   container: Tạo container với chiều rộng cố định, căn giữa, tự động điều chỉnh theo breakpoint.
   mx-auto: Căn giữa container theo trục x.
   max-w-{screen} (max-w-sm, max-w-md, ..., max-w-7xl, max-w-full, max-w-screen-sm, ..., max-w-screen-2xl): Giới hạn chiều rộng tối đa theo kích thước màn hình hoặc giá trị cụ thể.
   Display:
   block: Hiển thị phần tử dưới dạng block, chiếm toàn bộ chiều rộng.
   inline: Hiển thị phần tử inline, chỉ chiếm chiều rộng nội dung.
   inline-block: Hiển thị phần tử inline nhưng hỗ trợ chiều cao/rộng.
   flex: Kích hoạt bố cục Flexbox.
   inline-flex: Flexbox dạng inline.
   grid: Kích hoạt bố cục Grid.
   inline-grid: Grid dạng inline.
   table, inline-table, table-row, table-cell: Hiển thị phần tử theo bố cục bảng.
   contents: Xóa phần tử khỏi flow nhưng giữ nội dung con.
   hidden: Ẩn phần tử hoàn toàn.
   Position:
   static: Định vị mặc định theo flow của trang.
   relative: Định vị tương đối so với vị trí ban đầu.
   absolute: Định vị tuyệt đối so với phần tử cha gần nhất có relative, absolute, hoặc fixed.
   fixed: Định vị cố định so với viewport.
   sticky: Định vị dính, cố định khi cuộn đến vị trí cụ thể.
   top-{size}, right-{size}, bottom-{size}, left-{size} (0, px, 0.5, 1, ..., auto, full, 1/2, ...): Đặt khoảng cách từ các cạnh.
   inset-{size}, inset-x-{size}, inset-y-{size}: Đặt khoảng cách cho tất cả hoặc theo trục x/y.
   Padding:
   p-{size}, px-{size}, py-{size}, pt-{size}, pr-{size}, pb-{size}, pl-{size} (0, px, 0.5, 1, ..., 96): Thêm khoảng cách bên trong phần tử cho mọi hướng hoặc từng hướng cụ thể.
   Margin:
   m-{size}, mx-{size}, my-{size}, mt-{size}, mr-{size}, mb-{size}, ml-{size} (0, px, 0.5, 1, ..., 96, auto): Thêm khoảng cách bên ngoài phần tử cho mọi hướng hoặc từng hướng cụ thể.
   Z-Index:
   z-{value} (z-0, z-10, z-20, ..., z-50, z-auto): Điều chỉnh thứ tự xếp chồng của phần tử.

2.Flexbox và Grid

   Flexbox:
   flex: Kích hoạt bố cục Flexbox.
   inline-flex: Flexbox dạng inline.
   flex-row, flex-row-reverse: Sắp xếp phần tử con theo hàng, theo thứ tự bình thường hoặc đảo ngược.
   flex-col, flex-col-reverse: Sắp xếp phần tử con theo cột, theo thứ tự bình thường hoặc đảo ngược.
   flex-wrap, flex-wrap-reverse, flex-nowrap: Cho phép hoặc ngăn phần tử con xuống dòng.
   flex-1, flex-auto, flex-initial, flex-none: Điều chỉnh cách phần tử con mở rộng hoặc co lại.
   grow, grow-0: Cho phép hoặc ngăn phần tử con mở rộng để lấp đầy không gian.
   shrink, shrink-0: Cho phép hoặc ngăn phần tử con co lại khi thiếu không gian.
   order-{value} (order-1, order-2, ..., order-first, order-last, order-none): Điều chỉnh thứ tự hiển thị của phần tử con.
   justify-{value} (justify-start, justify-end, justify-center, justify-between, justify-around, justify-evenly): Căn chỉnh phần tử con theo trục chính.
   items-{value} (items-start, items-end, items-center, items-baseline, items-stretch): Căn chỉnh phần tử con theo trục phụ.
   content-{value} (content-start, content-center, content-end, content-between, content-around, content-evenly): Phân phối phần tử con theo trục phụ.
   gap-{size} (gap-0, gap-px, gap-1, ..., gap-96): Đặt khoảng cách giữa các phần tử con.
   Grid:
   grid: Kích hoạt bố cục Grid.
   inline-grid: Grid dạng inline.
   grid-cols-{n} (grid-cols-1, grid-cols-2, ..., grid-cols-12, grid-cols-none): Đặt số cột của lưới.
   grid-rows-{n} (grid-rows-1, grid-rows-2, ..., grid-rows-6, grid-rows-none): Đặt số dòng của lưới.
   col-span-{n} (col-span-1, ..., col-span-12, col-span-full): Đặt số cột mà phần tử chiếm.
   row-span-{n} (row-span-1, ..., row-span-6, row-span-full): Đặt số dòng mà phần tử chiếm.
   col-start-{n}, col-end-{n} (col-start-1, ..., col-start-13, col-start-auto): Đặt vị trí bắt đầu/kết thúc của phần tử trên cột.
   row-start-{n}, row-end-{n} (row-start-1, ..., row-start-7, row-start-auto): Đặt vị trí bắt đầu/kết thúc của phần tử trên dòng.
   gap-{size}, row-gap-{size}, column-gap-{size} (gap-0, gap-px, gap-1, ..., gap-96): Đặt khoảng cách giữa các ô lưới.

3. Typography

   Font Size:
   text-{size} (text-xs, text-sm, text-base, text-lg, text-xl, ..., text-9xl): Điều chỉnh kích thước chữ.
   Font Weight:
   font-{weight} (font-thin, font-extralight, font-light, font-normal, font-medium, font-semibold, font-bold, font-extrabold, font-black): Điều chỉnh độ đậm của chữ.
   Text Alignment:
   text-left, text-center, text-right, text-justify: Căn chỉnh văn bản theo hướng.
   Text Color:
   text-{color}-{shade} (text-black, text-white, text-gray-100, ..., text-blue-900, ...): Thay đổi màu chữ.
   Line Height:
   leading-{size} (leading-3, leading-4, ..., leading-10, leading-none, leading-tight, leading-snug, leading-normal, leading-relaxed, leading-loose): Điều chỉnh khoảng cách giữa các dòng văn bản.
   Text Decoration:
   underline: Thêm gạch chân.
   line-through: Thêm gạch ngang.
   no-underline: Bỏ gạch chân.
   Font Family:
   font-sans, font-serif, font-mono: Đặt kiểu font chữ (có thể tùy chỉnh trong tailwind.config.js).
   Letter Spacing:
   tracking-{size} (tracking-tighter, tracking-tight, tracking-normal, tracking-wide, tracking-wider, tracking-widest): Điều chỉnh khoảng cách giữa các ký tự.
   Text Transform:
   uppercase: Chuyển thành chữ hoa.
   lowercase: Chuyển thành chữ thường.
   capitalize: Viết hoa chữ cái đầu mỗi từ.
   normal-case: Giữ nguyên trạng thái chữ.
   Text Overflow:
   truncate: Cắt bớt văn bản dài và thêm dấu ba chấm.
   text-ellipsis: Thêm dấu ba chấm cho văn bản bị cắt.
   text-clip: Cắt văn bản mà không thêm dấu ba chấm.
   Whitespace:
   whitespace-normal, whitespace-nowrap, whitespace-pre, whitespace-pre-line, whitespace-pre-wrap: Kiểm soát cách xử lý khoảng trắng và ngắt dòng.
   Font Style:
   italic: Đặt chữ nghiêng.
   not-italic: Bỏ chữ nghiêng.
   Text Opacity:
   text-opacity-{value} (text-opacity-0, text-opacity-50, ..., text-opacity-100): Điều chỉnh độ mờ của văn bản.

4. Background

   Background Color:
   bg-{color}-{shade} (bg-black, bg-white, bg-gray-100, ..., bg-blue-900, ...): Thay đổi màu nền.
   Background Gradient:
   bg-gradient-to-{direction} (bg-gradient-to-t, bg-gradient-to-tr, bg-gradient-to-r, ..., bg-gradient-to-b): Tạo gradient tuyến tính theo hướng.
   from-{color}-{shade}, to-{color}-{shade}, via-{color}-{shade}: Đặt màu bắt đầu, kết thúc, và giữa cho gradient.
   Background Image:
   bg-[url('path')]: Áp dụng hình ảnh làm nền (yêu cầu cấu hình trong tailwind.config.js).
   bg-none: Bỏ hình nền.
   Background Position:
   bg-{position} (bg-center, bg-top, bg-bottom, bg-left, bg-right, ...): Điều chỉnh vị trí hình nền.
   Background Size:
   bg-auto, bg-cover, bg-contain: Điều chỉnh kích thước hình nền (tự động, phủ kín, hoặc giữ tỷ lệ).
   Background Repeat:
   bg-repeat, bg-no-repeat, bg-repeat-x, bg-repeat-y, bg-repeat-round, bg-repeat-space: Kiểm soát cách lặp lại hình nền.
   Background Attachment:
   bg-fixed, bg-local, bg-scroll: Kiểm soát cách nền di chuyển khi cuộn.

5. Border

   Border Width:
   border, border-0, border-2, border-4, border-8, border-t, border-r, border-b, border-l, border-t-0, border-r-0, ...: Điều chỉnh độ dày viền cho mọi hướng hoặc từng hướng.
   Border Color:
   border-{color}-{shade} (border-black, border-gray-100, ..., border-blue-900, ...): Thay đổi màu viền.
   Border Radius:
   rounded, rounded-sm, rounded-md, rounded-lg, rounded-xl, rounded-2xl, rounded-3xl, rounded-full, rounded-none, rounded-t-{size}, rounded-r-{size}, rounded-b-{size}, rounded-l-{size}: Bo tròn góc phần tử cho mọi góc hoặc từng góc.
   Border Style:
   border-solid, border-dashed, border-dotted, border-double, border-none: Đặt kiểu viền (liền, nét đứt, chấm, ...).

6. Spacing

   Width:
   w-{size} (w-0, w-px, w-0.5, w-1, ..., w-96, w-auto, w-full, w-screen, w-1/2, w-1/3, ..., w-11/12): Đặt chiều rộng cố định hoặc tương đối.
   Height:
   h-{size} (h-0, h-px, h-0.5, h-1, ..., h-96, h-auto, h-full, h-screen, h-1/2, h-1/3, ...): Đặt chiều cao cố định hoặc tương đối.
   Max/Min Width:
   max-w-{size} (max-w-0, max-w-none, max-w-xs, max-w-sm, ..., max-w-7xl, max-w-full, max-w-screen-sm, ..., max-w-screen-2xl): Giới hạn chiều rộng tối đa.
   min-w-{size} (min-w-0, min-w-full, ...): Giới hạn chiều rộng tối thiểu.
   Max/Min Height:
   max-h-{size} (max-h-0, max-h-px, max-h-0.5, ..., max-h-96, max-h-full, max-h-screen): Giới hạn chiều cao tối đa.
   min-h-{size} (min-h-0, min-h-full, min-h-screen): Giới hạn chiều cao tối thiểu.
   Aspect Ratio:
   aspect-auto, aspect-square, aspect-video, aspect-{ratio} (aspect-1/1, aspect-16/9, ...): Đặt tỷ lệ khung hình cho phần tử.

7. Responsive Design

   Tiền tố responsive:
   sm:, md:, lg:, xl:, 2xl:: Áp dụng kiểu theo kích thước màn hình (breakpoints: 640px, 768px, 1024px, 1280px, 1536px).

8. Interactivity

   Hover:
   hover:{property} (hover:bg-blue-700, hover:scale-105, hover:text-red-500, ...): Áp dụng kiểu khi di chuột qua phần tử.
   Focus:
   focus:{property} (focus:ring-2, focus:border-blue-500, focus:bg-gray-100, ...): Áp dụng kiểu khi phần tử được focus.
   Active:
   active:{property} (active:bg-blue-800, active:scale-95, ...): Áp dụng kiểu khi phần tử được nhấn.
   Transition:
   transition: Kích hoạt chuyển đổi mượt mà cho tất cả thuộc tính.
   transition-{property} (transition-colors, transition-transform, transition-opacity, ...): Chỉ định thuộc tính áp dụng chuyển đổi.
   duration-{ms} (duration-75, duration-100, ..., duration-1000): Đặt thời gian chuyển đổi.
   ease-{type} (ease-linear, ease-in, ease-out, ease-in-out): Đặt kiểu chuyển đổi (tuyến tính, nhanh dần, chậm dần).
   delay-{ms} (delay-75, delay-100, ..., delay-1000): Trì hoãn thời gian bắt đầu chuyển đổi.
   Transform:
   scale-{value} (scale-0, scale-50, scale-100, ..., scale-150): Phóng to/thu nhỏ phần tử.
   scale-x-{value}, scale-y-{value}: Phóng to/thu nhỏ theo trục x/y.
   rotate-{value} (rotate-0, rotate-45, rotate-90, ..., rotate-180): Xoay phần tử theo góc.
   translate-x-{size}, translate-y-{size} (translate-x-0, translate-x-px, ..., translate-x-full): Dịch chuyển phần tử theo trục x/y.
   skew-x-{value}, skew-y-{value} (skew-x-0, skew-x-3, ..., skew-x-12): Nghiêng phần tử theo trục x/y.
   Cursor:
   cursor-{type} (cursor-auto, cursor-default, cursor-pointer, cursor-wait, cursor-text, cursor-move, cursor-not-allowed, ...): Đặt kiểu con trỏ chuột.
   Pointer Events:
   pointer-events-none, pointer-events-auto: Kiểm soát khả năng nhận sự kiện chuột.
   User Select:
   select-none, select-text, select-all, select-auto: Kiểm soát khả năng chọn văn bản.
   Appearance:
   appearance-none: Loại bỏ kiểu mặc định của trình duyệt (như checkbox, select).
   Outline:
   outline-none, outline-{color}, outline-{size}: Điều chỉnh viền outline cho focus.
   Ring:
   ring, ring-{size} (ring-1, ring-2, ..., ring-8): Thêm viền bóng (ring) cho focus hoặc trang trí.
   ring-{color}-{shade}: Đặt màu cho viền bóng.
   ring-offset-{size}, ring-offset-{color}: Tạo khoảng cách hoặc màu nền cho viền bóng.

9. Pseudo-elements và Pseudo-classes

   Before/After:
   before:{property}, after:{property}: Thêm kiểu cho pseudo-elements ::before và ::after.
   content-['value'], content-none: Đặt nội dung cho pseudo-elements.
   Pseudo-classes:
   first:{property}, last:{property}: Áp dụng kiểu cho phần tử đầu/cuối trong danh sách.
   odd:{property}, even:{property}: Áp dụng kiểu cho phần tử chẵn/lẻ.
   disabled:{property}: Áp dụng kiểu khi phần tử bị vô hiệu hóa.
   visited:{property}: Áp dụng kiểu cho liên kết đã truy cập.
   checked:{property}: Áp dụng kiểu khi input được chọn (checkbox, radio).
   focus-within:{property}: Áp dụng kiểu khi phần tử hoặc con của nó được focus.
   hover:{property}, focus:{property}, active:{property}: Áp dụng kiểu cho các trạng thái tương tác.

10. Effects

    Box Shadow:
    shadow, shadow-sm, shadow-md, shadow-lg, shadow-xl, shadow-2xl, shadow-inner, shadow-none: Thêm bóng ngoài hoặc trong cho phần tử.
    Opacity:
    opacity-{value} (opacity-0, opacity-5, opacity-10, ..., opacity-100): Điều chỉnh độ mờ của phần tử.
    Mix Blend Mode:
    mix-blend-{mode} (mix-blend-normal, mix-blend-multiply, mix-blend-screen, mix-blend-overlay, ...): Đặt chế độ hòa trộn màu cho phần tử.
    Background Blend Mode:
    bg-blend-{mode} (bg-blend-normal, bg-blend-multiply, bg-blend-screen, ...): Đặt chế độ hòa trộn cho nền.

11. Tables

    Table Layout:
    table-auto, table-fixed: Điều chỉnh cách bố trí bảng (tự động hoặc cố định cột).
    Border Collapse:
    border-collapse, border-separate: Kiểm soát cách viền của các ô bảng hợp nhất hoặc tách rời.
    Table Caption:
    caption-top, caption-bottom: Đặt vị trí của chú thích bảng.

12. Forms

    Form Elements:
    border, rounded-{size}: Định dạng viền và góc bo tròn cho input, select, textarea, button.
    focus:ring-{size} (focus:ring-1, focus:ring-2, ...): Thêm viền bóng khi focus.
    focus:border-{color}-{shade}: Đặt màu viền khi focus.
    placeholder-{color}-{shade} (placeholder-gray-500, ...): Đặt màu cho placeholder.
    placeholder-opacity-{value}: Điều chỉnh độ mờ của placeholder.

13. Animation

    Animation:
    animate-{name} (animate-none, animate-spin, animate-ping, animate-pulse, animate-bounce): Áp dụng hiệu ứng động (xoay, nhấp nháy, nhịp đập).
    animation-{custom}: Áp dụng animation tùy chỉnh trong tailwind.config.js.
    Delay:
    delay-{ms} (delay-75, delay-100, ..., delay-1000): Trì hoãn thời gian bắt đầu animation.
    Duration:
    duration-{ms} (duration-75, duration-100, ..., duration-1000): Đặt thời gian chạy animation.
    Animation Timing Function:
    ease-{type} (ease-linear, ease-in, ease-out, ease-in-out): Điều chỉnh tốc độ thay đổi của animation.

14. Accessibility

    Screen Reader:
    sr-only: Ẩn nội dung trên giao diện nhưng giữ cho screen reader.
    not-sr-only: Hiển thị nội dung cho cả giao diện và screen reader.
    Focus Visible:
    focus-visible:{property} (focus-visible:ring-2, ...): Áp dụng kiểu khi focus bằng bàn phím.
    Aria Attributes:
    aria-hidden: Ẩn phần tử khỏi công cụ hỗ trợ tiếp cận.
    aria-current-{value} (aria-current-page, aria-current-step, ...): Đánh dấu trạng thái hiện tại cho ARIA.

15. Filters

    Blur:
    blur, blur-sm, blur-md, blur-lg, blur-xl, blur-2xl, blur-3xl, blur-none: Áp dụng hiệu ứng làm mờ.
    Brightness:
    brightness-{value} (brightness-0, brightness-50, ..., brightness-200): Điều chỉnh độ sáng.
    Contrast:
    contrast-{value} (contrast-0, contrast-50, ..., contrast-200): Điều chỉnh độ tương phản.
    Grayscale:
    grayscale, grayscale-0: Chuyển đổi thành ảnh xám hoặc khôi phục màu.
    Hue Rotate:
    hue-rotate-{value} (hue-rotate-0, hue-rotate-15, hue-rotate-30, ..., hue-rotate-180): Xoay màu sắc trên vòng màu.
    Invert:
    invert, invert-0: Đảo ngược màu sắc hoặc khôi phục.
    Saturate:
    saturate-{value} (saturate-0, saturate-50, ..., saturate-200): Điều chỉnh độ bão hòa màu.
    Sepia:
    sepia, sepia-0: Áp dụng hoặc bỏ hiệu ứng màu nâu đỏ (sepia).

16. Overflow

    Overflow:
    overflow-auto, overflow-hidden, overflow-visible, overflow-scroll: Kiểm soát cách nội dung vượt quá kích thước phần tử được xử lý.
    overflow-x-{type}, overflow-y-{type} (overflow-x-auto, overflow-y-hidden, ...): Kiểm soát overflow theo trục x/y.
    Scroll Behavior:
    scroll-auto, scroll-smooth: Điều chỉnh hành vi cuộn (mượt mà hoặc mặc định).
    Scroll Snap:
    snap-{type} (snap-none, snap-x, snap-y, snap-both): Kích hoạt cuộn snap theo trục.
    snap-{align} (snap-start, snap-end, snap-center): Đặt điểm dừng của cuộn snap.
    snap-{strictness} (snap-mandatory, snap-proximity): Kiểm soát độ bắt buộc của cuộn snap.
