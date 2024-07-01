import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Button,
  Image,
} from "@nextui-org/react";
import Language from "./Language";
import Login from "./Login";
import Register from "./Register";

export default function NavBar() {
  return (
    <div>
      <Navbar maxWidth="2xl" position="sticky" className="bg-primary">
        <NavbarContent justify="start">
          <NavbarBrand>
            <Image src="/svg/bookingcom-1.svg" width={50} />
            <div className="text-white font-bold p-1 text-2xl">
              {" "}
              Booking.com
            </div>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent justify="end" className="flex">
          <div className="text-white font-bold">VND</div>
          <Language></Language>
          <Button className="p-0 bg-transparent " isIconOnly>
            <Image
              src="/svg/question-mark-1750942_640.webp"
              width={30}
              height={30}
              className=""
            />
          </Button>
          <Button className="text-white font-semibold p-1 text-xl bg-transparent">
            {" "}
            Đăng chổ nghỉ của Quý vị{" "}
          </Button>
          <Register></Register>
          <Login></Login>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
