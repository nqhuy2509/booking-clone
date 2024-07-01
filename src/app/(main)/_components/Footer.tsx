import { Button } from "@nextui-org/react";
import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="bg-[#003b95] text-white">
        <div className="pt-8">
          <h1 className="text-center text-2xl font-semibold">
            Nắm bắt thông tin
          </h1>
          <h3 className="text-center">
            Đăng kí nhận email marketing từ Booking.com, bao gồm khuyến mãi,
            tặng thưởng, trải nghiệm du lịch cũng như thông tin về các sản phẩm
            và dịch vụ của <br /> Booking.com và Booking.com Transport Limited.
          </h3>
        </div>

        <div className="text-center pt-4 ">
          <input
            placeholder="Địa chỉ Email của bạn?"
            type="email"
            className="w-96 h-14"
          ></input>
          <Button className="bg-[#677fa2] text-white text-xl font-medium w-36 h-14 rounded-none ml-3 ">
            Đăng ký
          </Button>
        </div>
        <div>
          <h3 className="text-center pt-4 pb-3">
            Bạn có thể ngừng đăng kí bất kì lúc nào. Xem chính sách bảo mật của
            chúng tôi
          </h3>
        </div>
      </div>
    </div>
  );
}
