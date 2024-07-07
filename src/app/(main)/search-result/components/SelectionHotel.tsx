import { Button, Image } from "@nextui-org/react";
import React from "react";
import { AiFillLike } from "react-icons/ai";
import { FaSearch, FaStar } from "react-icons/fa";
import { StayModel } from "../../../../interfaces/stay.model";
import { RoomdetailItem } from "../../_components/RoomDetailItem";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  stay: StayModel;
}

const SelectionHotel: React.FC<Props> = ({ stay }) => {
  const pathname = usePathname();

  return (
    <div className="max-w-[1024px] mx-auto mt-4 bg-gray-200 rounded-lg overflow-hidden shadow-md">
      <div className="flex">
        <div className="w-60 h-80 pt-7 ml-5">
          <Image
            src={stay.image || "/placeholder.jpg"}
            alt={stay.name}
            width={240}
            height={320}
          />
        </div>
        <div className="flex flex-col justify-between px-4 py-6 w-full">
          <div>
            <h1 className="font-bold text-2xl text-[#006ce4] mb-2">
              {stay.name}
            </h1>
            <div className="flex items-center mb-2">
              <FaStar className="text-[#ffb700] text-xl mr-1" />
              <FaStar className="text-[#ffb700] text-xl mr-1" />
              <AiFillLike className="text-[#ffb700] text-xl" />
              <span className="ml-2 text-sm text-gray-600">Tuyệt vời</span>
            </div>

            <div className="flex items-center mb-2 text-[#006ce4] font-semibold">
              <span className="mr-4">
                {stay.location?.address}, {stay.location?.district},{" "}
                {stay.location?.province}
              </span>
              <Link href="#" passHref>
                <span className="text-[#006ce4] cursor-pointer">Bản đồ</span>
              </Link>
            </div>
            <div className="bg-[#008234] text-white rounded-lg px-2 py-1 mb-2 inline-block">
              Giá tốt
            </div>
            <div className="font-semibold mb-2">
              <p className="text-[#008234] text-sm">
                Miễn phí hủy phòng • Không cần thanh toán trước – Thanh toán tại
                chổ nghỉ
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Button className="bg-[#006ce4] text-white font-bold">
              <Link href={`room/${stay.id}`} passHref>
                <div
                  className={`flex items-center px-3 py-2 rounded-3xl 
                        hover:bg-white hover:bg-opacity-10 cursor-pointer
                    }`}
                >
                  <span className="text-xl me-1">{<FaSearch />}</span>
                  <h3>Xem chi tiết</h3>
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionHotel;
