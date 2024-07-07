'use client'

import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Image } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { RoomModel } from '../../../../../interfaces/room.model'
import { useAppDispatch, useAppSelector } from '../../../../../redux/store'
import { showLoginDialog } from '../../../../../redux/ui/uiSlice'
import { formatCurrency } from '../../../../../utils/utils'

export interface Props {
	room: RoomModel
}

const RoomComponent = (props: Props) => {
	const authState = useAppSelector((state) => state.auth)
	const router = useRouter()
	const { room } = props

	const dispatch = useAppDispatch()

	const handleNavigateToBooking = () => {
		if (!authState.isAuthenticated) {
			dispatch(showLoginDialog())
		} else {
			router.push(`/booking?roomId=${room.id}`)
		}
	}

	return (
		<Card className='my-4 bg-slate-300'>
			<CardHeader>
				<h4 className='font-bold text-large'>{room.name}</h4>
			</CardHeader>
			<Divider />
			<CardBody>
				<div>
					<div
						className='h-64 w-full bg-cover bg-center rounded-lg overflow-hidden'
						style={{ backgroundImage: `url(${room.stay?.image || ''})` }}></div>

					<div className='px-6 py-4'>
						<p className='text-lg'>{room.beds} Giường</p>
						<div className='flex items-center mb-2'>
							<span className='text-[#ffb700] text-2xl mr-1'>★</span>
							<span className='text-[#ffb700] text-2xl mr-1'>★</span>
							<span className='text-[#ffb700] text-2xl mr-1'>★</span>
							<span className='text-[#ffb700] text-2xl'>★</span>
							<span className='ml-2 text-sm text-gray-600'>Excellent</span>
						</div>
						<div className='flex items-center mb-2'>
							<span className='text-sm text-gray-600'>Great</span>
						</div>
						<p className='mb-4 text-gray-700'>{room.description}</p>
						<p className='text-gray-700'>{`Only ${room.available} rooms left at this price on our site`}</p>
					</div>
				</div>
			</CardBody>
			<Divider />
			<CardFooter className='flex justify-between items-center px-6 py-4'>
				<h2 className='text-2xl font-bold text-[#006ce4]'>
					{formatCurrency(room.price || 0)}
				</h2>
				<Button
					onClick={handleNavigateToBooking}
					className='bg-[#006ce4] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#0050a5]'>
					Reserve now
				</Button>
			</CardFooter>
		</Card>
	)
}

export default RoomComponent
