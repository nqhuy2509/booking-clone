import { Button, Image } from "@nextui-org/react";
import React from "react";
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
    <div className="max-w-[1024px] mx-auto mt-4 bg-white rounded-lg overflow-hidden shadow-md">
      <div className="flex">
        <div className="w-1/3 h-80 flex items-center justify-center p-4 bg-gray-100">
          <Image
            src={stay.image || "/placeholder.jpg"}
            alt={stay.name}
            width={240}
            height={320}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-between px-6 py-4 w-2/3">
          <div>
            <h1 className="font-bold text-2xl text-[#006ce4] mb-4">
              {stay.name}
            </h1>
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
            <div className="bg-[#008234] text-white rounded-lg px-2 py-1 mb-4 inline-block">
              Getaway Deal
            </div>
            <div className="font-semibold mb-4">
              <p className="text-[#008234] text-sm">
                Free cancellation • No prepayment needed – pay at the property
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
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
    </div>
  );
};

export default SelectionHotel;
