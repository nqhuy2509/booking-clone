import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import React from "react";

export default function NavSlogan() {
  return (
    <div>
      <Navbar maxWidth="2xl" position="sticky" className="bg-primary py-4">
        <NavbarContent>
          <h1 className="text-4xl text-white font-bold">
            {" "}
            Tìm chỗ nghỉ tiếp theo <br />
            <p className="text-xl font-normal py-2">
              {" "}
              Tìm ưu đãi khách sạn, chỗ nghỉ dạng nhà và nhiều hơn nữa...
            </p>
          </h1>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
