import React from "react";
import Footer from "../_components/Footer";
import Link from "next/link";

const BookingPage = () => {
  return (
    <div className="max-w-[1024px] mx-auto mt-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-3xl font-bold">Booking</h1>
        </div>

        <div className="px-6 py-4">
          <form>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Họ và tên
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                placeholder="Nhập họ và tên"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Số điện thoại
              </label>
              <input
                type="tel"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                placeholder="Nhập số điện thoại"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Số người đi
              </label>
              <input
                type="number"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                placeholder="Nhập số người đi"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Check-in Date
              </label>
              <input
                type="date"
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Check-out Date
              </label>
              <input
                type="date"
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>
            <div className="flex justify-between items-center">
              <Link
                href="/room"
                className="bg-[#006ce4] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#0050a5]"
              >
                Trở về trang chi tiết phòng
              </Link>
              <button className="bg-[#006ce4] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#0050a5]">
                Đặt ngay
              </button>
            </div>
          </form>
        </div>
        <div className="px-6 py-4 bg-gray-100 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-[#006ce4]">
            Total: VND 597,087
          </h2>
        </div>
      </div>
      <div className="pt-4">
        <Footer />
      </div>
    </div>
  );
};

export default BookingPage;
