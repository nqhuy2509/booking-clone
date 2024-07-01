import { FaSearch } from "react-icons/fa";
import { FaCableCar, FaPlane } from "react-icons/fa6";
import { RiHotelLine } from "react-icons/ri";

export const navbarItems = [
  {
    key: 0,
    title: "Lưu trú",
    icon: <RiHotelLine />,
    path: "/",
  },
  {
    key: 1,
    title: "Chuyến bay",
    icon: <FaPlane />,
    path: "https://www.agoda.com/?cid=1844104&ds=Ux4d8ZTx36tefpHb",
  },
  {
    key: 2,
    title: "Thuê xe",
    icon: <FaCableCar />,
    path: "/rent-car",
  },
];
