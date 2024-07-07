"use client";

import React, { use, useCallback, useEffect, useState } from "react";
import Footer from "../_components/Footer";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { showLoginDialog } from "../../../redux/ui/uiSlice";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Button,
  Calendar,
  CalendarDate,
  DateInput,
  DatePicker,
} from "@nextui-org/react";
import { parseDate, today, getLocalTimeZone } from "@internationalized/date";
import bookingApi from "../../../api/bookingApi";
import { toast } from "react-toastify";
import { formatCurrency } from "../../../utils/utils";
import { RoomModel } from "../../../interfaces/room.model";
import roomApi from "../../../api/roomApi";
import { LoadingComponent } from "../../../components/LoadingComponent";

const BookingPage = () => {
  const authState = useAppSelector((state) => state.auth);
  const searchParams = useSearchParams();
  const [roomInfo, setRoomInfo] = useState<RoomModel>();

  const roomId = searchParams.get("roomId");

  const [checkInDate, setCheckInDate] = useState(today(getLocalTimeZone()));
  const [checkOutDate, setCheckOutDate] = useState(
    today(getLocalTimeZone()).add({ days: 1 })
  );

  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();

  const fetchRoomInfo = useCallback(async () => {
    if (!roomId) return;

    const response = await roomApi.getRoomById(roomId);
    if (response.success) {
      setRoomInfo(response.data);
    }
  }, [roomId]);

  useEffect(() => {
    fetchRoomInfo();
  }, [fetchRoomInfo]);

  useEffect(() => {
    if (!authState.isAuthenticated) {
      dispatch(showLoginDialog());
    }
  }, [authState.isAuthenticated, dispatch]);

  const router = useRouter();

  const handleBookingRoom = async () => {
    if (!roomId) {
      toast.error("Room ID is required");
      return;
    }
    const data = {
      roomId: roomId!,
      startDate: checkInDate.toDate(getLocalTimeZone()),
      endDate: checkOutDate.toDate(getLocalTimeZone()),
    };

    try {
      setLoading(true);
      const response = await bookingApi.postNewBooking(data);
      if (response.success) {
        toast.success("Bạn đã đặt phòng thành công");
        router.push("/history_booking");
      } else {
        toast.error("Đặt phòng thất bại");
      }
    } catch (error) {
      console.log(error);
      toast.error("Đặt phòng thất bại");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="max-w-[1024px] mx-auto mt-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-3xl font-bold">Tiến hành đặt phòng</h1>
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
                <DatePicker
                  label="Ngày nhận phòng"
                  labelPlacement="outside"
                  value={checkInDate}
                  onChange={(date) => {
                    setCheckInDate(date);
                  }}
                  minValue={today(getLocalTimeZone())}
                />
              </div>
              <div className="mb-4">
                <DatePicker
                  label="Ngày trả phòng"
                  labelPlacement="outside"
                  value={checkOutDate}
                  onChange={(date) => {
                    setCheckOutDate(date);
                  }}
                  minValue={today(getLocalTimeZone()).add({ days: 1 })}
                />
              </div>
              <div className="flex justify-between items-center">
                <Link
                  href="/room"
                  className="bg-[#006ce4] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#0050a5]"
                >
                  Trở về trang chi tiết phòng
                </Link>
                <Button
                  className="bg-[#006ce4] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#0050a5]"
                  onClick={handleBookingRoom}
                >
                  Đặt ngay
                </Button>
              </div>
            </form>
          </div>
          <div className="px-6 py-4 bg-gray-100 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-[#006ce4]">
              {`Total: ${formatCurrency(roomInfo?.price || 0)}`}
            </h2>
          </div>
        </div>
        <div className="pt-4">
          <Footer />
        </div>
      </div>
      {loading && <LoadingComponent />}
    </>
  );
};

export default BookingPage;
