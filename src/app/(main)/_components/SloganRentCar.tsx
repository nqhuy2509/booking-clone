import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import React from "react";

export default function SloganRentCar() {
  return (
    <div>
      <Navbar maxWidth="2xl" position="sticky" className="bg-primary py-4">
        <NavbarContent>
          <h1 className="text-4xl text-white font-bold">
            {" "}
            Cho thuê xe cho mọi chuyến đi
            <br />
            <p className="text-xl font-normal py-2">
              {" "}
              Ưu đãi lớn với mức giá tuyệt vời, từ các công ty cho thuê xe lớn
              nhất
            </p>
          </h1>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
