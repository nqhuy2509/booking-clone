"use client";

import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { navbarItems } from "./NavBarItem";
import Link from "next/link";

export default function NavBarBehind() {
  const pathname = usePathname();

  useEffect(() => {}, []);

  return (
    <div>
      <Navbar maxWidth="2xl" position="sticky" className="bg-primary py-4">
        <NavbarContent justify="start" className="text-white font-semibold">
          {navbarItems.map((item) => (
            <Link
              href={item.path}
              className={`flex items-center px-3 py-2 rounded-3xl ${
                pathname == item.path
                  ? "border-white border-2 bg-white bg-opacity-20"
                  : "hover:bg-white hover:bg-opacity-10 cursor-pointer"
              }`}
              key={item.key}
            >
              <span className="text-xl me-1">{item.icon}</span>
              <h3>{item.title}</h3>
            </Link>
          ))}
        </NavbarContent>
      </Navbar>
    </div>
  );
}
