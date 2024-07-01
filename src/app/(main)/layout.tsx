import { NextUIProvider } from "@nextui-org/react";
import NavBar from "./_components/NavBar";
import NavBarBehind from "./_components/NavBarBehind";
import NavSlogan from "./_components/NavSlogan";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavBar />
      <NavBarBehind />

      {children}
    </div>
  );
}
