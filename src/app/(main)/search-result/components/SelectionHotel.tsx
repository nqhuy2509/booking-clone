import { Button, Image } from "@nextui-org/react";
import React from "react";
import { AiFillLike } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
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
              <span className="ml-2 text-sm text-gray-600">Excellent</span>
            </div>
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-[#003b95] text-white rounded-md flex items-center justify-center mr-2">
                8.8
              </div>
              <span className="text-sm text-gray-600">Great</span>
            </div>
            <div className="flex items-center mb-2 text-[#006ce4] font-semibold">
              <span className="mr-4">
                {stay.location?.address}, {stay.location?.district},{" "}
                {stay.location?.province}
              </span>
              <Link href="#" passHref>
                <span className="text-[#006ce4] cursor-pointer">
                  Show on map
                </span>
              </Link>
            </div>
            <div className="bg-[#008234] text-white rounded-lg px-2 py-1 mb-2 inline-block">
              Getaway Deal
            </div>
            <div className="font-semibold mb-2">
              <p>Deluxe Double Room</p>
              <p className="text-sm text-gray-600">1 queen bed</p>
              <p className="text-[#008234] text-sm">
                Free cancellation • No prepayment needed – pay at the property
              </p>
              <p className="text-[#d4111e] text-sm">
                Only 3 rooms left at this price on our site
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-black font-bold text-xl">VND 597,087</h1>
            {RoomdetailItem.map((item) => (
              <Button
                className="bg-[#006ce4] text-white font-bold"
                key={item.key}
              >
                <Link href={item.path} passHref>
                  <div
                    className={`flex items-center px-3 py-2 rounded-3xl ${
                      pathname === item.path
                        ? "border-white border-2 bg-white bg-opacity-20"
                        : "hover:bg-white hover:bg-opacity-10 cursor-pointer"
                    }`}
                  >
                    <span className="text-xl me-1">{item.icon}</span>
                    <h3>{item.title}</h3>
                  </div>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionHotel;
