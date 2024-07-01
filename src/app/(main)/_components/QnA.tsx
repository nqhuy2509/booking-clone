import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function QnA() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion>
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        title="Tại sao tôi nên đặt thuê xe ở Việt Nam với Booking.com?"
        className="font-bold"
      >
        {
          <h1 className="font-normal">
            Chúng tôi giúp bạn dễ dàng tìm được nơi thuê phù hợp với nhu cầu của
            mình. Đây là những gì chúng tôi cung cấp: <br />{" "}
            <li>Nhiều lựa chọn xe ô tô - từ xe nhỏ gọn đến xe SUV </li>{" "}
            <li>Hỗ trợ bằng hơn 30 ngôn ngữ </li>{" "}
            <li>
              Hủy miễn phí tối đa 48 giờ trước thời gian đón đối với hầu hết các
              đặt phòng.
            </li>
          </h1>
        }
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        title="Tôi cần những gì để thuê một chiếc xe hơi?"
        className="font-bold"
      >
        {
          <h1 className="font-normal">
            {" "}
            Khi bạn đặt xe, tất cả những gì bạn cần là thẻ ghi nợ hoặc thẻ tín
            dụng. <br /> Tại quầy cho thuê, bạn sẽ cần: <br />{" "}
            <li>Hộ chiếu của bạn</li>
            <li> Chứng từ của bạn</li>{" "}
            <li>Giấy phép lái xe cho mỗi người lái xe </li>{" "}
            <li>
              {" "}
              Thẻ tín dụng của tài xế chính (một số công ty chấp nhận thẻ ghi
              nợ, nhưng hầu hết thì không).{" "}
            </li>{" "}
            Quan trọng: Hãy kiểm tra cả điều khoản thuê xe vì mỗi công ty đều có
            quy định riêng. Ví dụ: họ có thể cần xem thêm giấy tờ tùy thân, có
            thể không chấp nhận một số loại thẻ tín dụng nhất định hoặc có thể
            không cho thuê bất kỳ ai chưa có bằng lái xe trong 36 tháng, v.v.
          </h1>
        }
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Accordion 3"
        title="Tôi có đủ tuổi để thuê một chiếc xe hơi không?"
        className="font-bold"
      >
        {
          <h1 className="font-normal">
            Hầu hết các công ty sẽ cho phép bạn thuê ô tô nếu bạn ít nhất 21
            tuổi và một số thậm chí còn cho những tài xế trẻ tuổi thuê. Tuy
            nhiên, nếu bạn dưới 25 tuổi, bạn có thể phải trả phí lái xe trẻ.
          </h1>
        }
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Accordion 4"
        title="Tôi có thể đặt thuê xe cho người khác được không?"
        className="font-bold"
      >
        {
          <h1 className="font-normal">
            Tất nhiên rồi. Chỉ cần điền thông tin của họ vào biểu mẫu Chi tiết
            tài xế khi đặt xe.
          </h1>
        }
      </AccordionItem>
      <AccordionItem
        key="5"
        aria-label="Accordion 3"
        title="Lời khuyên nào để chọn được chiếc xe phù hợp hay không?"
        className="font-bold"
      >
        {
          <h1 className="font-normal">
            <li>
              {" "}
              Hãy suy nghĩ về nơi bạn đang đi. Một chiếc SUV có thể là lựa chọn
              tuyệt vời để di chuyển trên xa lộ Texas, nhưng một chiếc ô tô nhỏ
              hơn sẽ dễ dàng đi vòng quanh Rome hơn rất nhiều.
            </li>{" "}
            <li>
              Xem những gì người khác nghĩ. Bạn sẽ tìm thấy rất nhiều đánh giá
              và xếp hạng trên trang web của chúng tôi, vì vậy hãy xem những gì
              khách hàng khác thích (và không thích) về mỗi công ty.
            </li>{" "}
            <li>
              Đừng quên đường truyền. Ở một số quốc gia, hầu hết mọi người đều
              lái xe số tay, trong khi số tự động là tiêu chuẩn ở những nước
              khác. Hãy chắc chắn rằng bạn thuê một chiếc xe bạn có thể lái xe!
            </li>
          </h1>
        }
      </AccordionItem>
      <AccordionItem
        key="6"
        aria-label="Accordion 6"
        title="Tất cả các khoản phí đã được bao gồm trong giá thuê chưa?"
        className="font-bold"
      >
        {
          <h1 className="font-normal">
            Giá bạn thấy bao gồm ô tô, bảo hiểm bắt buộc (ví dụ: Bảo vệ chống
            trộm, Miễn trừ thiệt hại do va chạm) và các khoản phí, nếu áp dụng,
            thường phải thanh toán khi nhận hàng (ví dụ: mọi khoản phí một
            chiều, phụ phí sân bay hoặc thuế địa phương) . <br /> Nó cũng bao
            gồm bất kỳ tính năng bổ sung nào bạn đã thêm vào (ví dụ: GPS, ghế
            trẻ em).
            <br />
            Nó không bao gồm bất kỳ bảo hiểm bổ sung nào bạn mua khi đến quầy
            cho thuê. <br /> Mẹo: Có bảng phân tích giá đầy đủ trên trang Thanh
            toán.
          </h1>
        }
      </AccordionItem>
    </Accordion>
  );
}
