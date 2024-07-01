"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { SearchCarItem } from "../_components/SearchCarItems";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Change the import to next/navigation
import { Input } from "@nextui-org/react";
import { DateRangePicker } from "@nextui-org/date-picker";
import { Checkbox } from "@nextui-org/react";
import { TimeInput } from "@nextui-org/react";
import { Time } from "@internationalized/date";
import SloganRentCar from "../_components/SloganRentCar";
import ClockCircleLinearIcon from "../_components/ClockCircleLinearIcon";
import QnA from "../_components/QnA";
import Footer from "../_components/Footer";

export default function Page() {
  const pathname = usePathname();

  useEffect(() => {}, []);
  return (
    <div>
      <SloganRentCar />
      <div className="max-w-screen-2xl mx-auto ">
        <div className="grid grid-cols-12 justify-start items-center pt-5 w-full">
          <Input
            type="text"
            placeholder="Chọn địa điểm "
            className="col-span-4"
          />
          <div className="pl-3 pt-7 w-28 h-24">
            <TimeInput
              labelPlacement="outside"
              defaultValue={new Time(11, 45)}
              startContent={
                <ClockCircleLinearIcon className="text-xl text-default-400 pointer-events-none" />
              }
            />
          </div>
          <div className="flex pt-3 flex-2 col-span-4 h-16">
            <DateRangePicker
              label="Ngày đón - ngày trả hàng"
              className="max-w-xs"
            />
          </div>
          <div className="pl-2">
            <Button className=" bg-[#006ce4] text-white font-bold hover:cursor-zoom-out col-span-1">
              {SearchCarItem.map((item) => (
                <Link
                  href={item.path}
                  className={`flex items-center px-3 py-2 rounded-3xl ${
                    pathname == item.path
                  }`}
                  key={item.key}
                >
                  <span className="text-xl me-1">{item.icon}</span>
                  <h3>{item.title}</h3>
                </Link>
              ))}
            </Button>
          </div>
        </div>
        <Checkbox>Trả xe ở địa điểm khác </Checkbox>
        <Checkbox defaultSelected>Tài xế ở độ tuổi 30-65? </Checkbox>
        <QnA />
        <Footer />
      </div>
    </div>
  );
}
