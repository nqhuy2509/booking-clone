import React from "react";
import Footer from "../_components/Footer";

const BookingHistory = () => {
  const bookings = [
    {
      bookingId: 1,
      hotelName: "Hotel Example 1",
      roomNumber: "101",
      checkInDate: "2023-07-01",
      checkOutDate: "2023-07-05",
      totalPrice: 500000,
    },
    {
      bookingId: 2,
      hotelName: "Hotel Example 2",
      roomNumber: "202",
      checkInDate: "2023-08-10",
      checkOutDate: "2023-08-15",
      totalPrice: 750000,
    },
  ];

  return (
    <div className="max-w-[1024px] mx-auto mt-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-3xl font-bold">Lịch Sử Đặt Phòng</h1>
        </div>

        <div className="px-6 py-4">
          {bookings.length === 0 ? (
            <p>Không có lịch sử đặt phòng.</p>
          ) : (
            <ul>
              {bookings.map((booking) => (
                <li key={booking.bookingId} className="mb-4">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold">
                      {booking.hotelName}
                    </h2>
                    <p>Phòng: {booking.roomNumber}</p>
                    <p>
                      Ngày nhận phòng:{" "}
                      {new Date(booking.checkInDate).toLocaleDateString()}
                    </p>
                    <p>
                      Ngày trả phòng:{" "}
                      {new Date(booking.checkOutDate).toLocaleDateString()}
                    </p>
                    <p>Tổng cộng: VND {booking.totalPrice.toLocaleString()}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookingHistory;
