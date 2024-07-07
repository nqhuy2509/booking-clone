import { BookingModel, BookingRequest } from '../interfaces/booking.model'
import { IResponseAPI } from '../interfaces/responseApi'

import apiClient from './apiClient'

const bookingApi = {
	postNewBooking: async (data: BookingRequest): Promise<IResponseAPI<BookingModel>> => {
		return await apiClient.post('api/v1/booking', data)
	},
}

export default bookingApi
