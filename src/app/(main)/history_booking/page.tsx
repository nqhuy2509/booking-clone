'use client'

import React, { useCallback, useEffect, useState } from 'react'
import Footer from '../_components/Footer'
import { BookingModel } from '../../../interfaces/booking.model'
import bookingApi from '../../../api/bookingApi'
import { formatCurrency } from '../../../utils/utils'

const BookingHistory = () => {
	const [bookings, setBookings] = useState<BookingModel[]>()

	const fetchBookingHistories = useCallback(async () => {
		try {
			const response = await bookingApi.getBookingHistory()

			if (response.success) {
				setBookings(response.data)
			}
		} catch (error) {}
	}, [])

	useEffect(() => {
		fetchBookingHistories()
	}, [fetchBookingHistories])

	return (
		<div className='max-w-[1024px] mx-auto mt-4'>
			<div className='bg-white rounded-lg shadow-md overflow-hidden'>
				<div className='px-6 py-4 border-b border-gray-200'>
					<h1 className='text-3xl font-bold'>Lịch Sử Đặt Phòng</h1>
				</div>

				<div className='px-6 py-4'>
					{bookings != null && bookings.length === 0 ? (
						<p>Không có lịch sử đặt phòng.</p>
					) : (
						<ul>
							{bookings != null &&
								bookings.map((booking) => (
									<li key={booking.id} className='mb-4'>
										<div className='bg-gray-100 p-4 rounded-lg'>
											<h2 className='text-xl font-semibold'>
												{booking.room?.name}
											</h2>
											<p>Phòng: {booking.room?.beds} giường</p>
											<p>
												Ngày nhận phòng:{' '}
												{new Date(booking.startDate).toLocaleDateString()}
											</p>
											<p>
												Ngày trả phòng:{' '}
												{new Date(booking.endDate).toLocaleDateString()}
											</p>
											<p>
												Tổng cộng:{' '}
												{formatCurrency(booking.room?.price || 0)}
											</p>
										</div>
									</li>
								))}
						</ul>
					)}
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default BookingHistory
