'use client'

import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { RoomModel } from '../../../../../interfaces/room.model'

export interface Props {
	room: RoomModel
}

const RoomComponent = (props: Props) => {
	const router = useRouter()
	const { room } = props

	return (
		<div className='bg-white rounded-lg shadow-md overflow-hidden'>
			<div className='relative'>
				<img
					className='w-full h-64 object-cover object-center'
					src='https://via.placeholder.com/800x400'
					alt='Room'
				/>
				<div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50'></div>
				<div className='absolute inset-0 text-white px-4 py-6'>
					<h1 className='text-4xl font-bold'>{room.name}</h1>
					<p className='text-lg'>{room.beds} bed</p>
				</div>
			</div>

			{/* Body */}
			<div className='px-6 py-4'>
				<div className='flex items-center mb-2'>
					<span className='text-[#ffb700] text-2xl mr-1'>★</span>
					<span className='text-[#ffb700] text-2xl mr-1'>★</span>
					<span className='text-[#ffb700] text-2xl mr-1'>★</span>
					<span className='text-[#ffb700] text-2xl'>★</span>
					<span className='ml-2 text-sm text-gray-600'>Excellent</span>
				</div>
				<div className='flex items-center mb-2'>
					<div className='w-8 h-8 bg-[#003b95] text-white rounded-md flex items-center justify-center mr-2'>
						8.8
					</div>
					<span className='text-sm text-gray-600'>Great</span>
				</div>
				<p className='mb-4 text-gray-700'>{room.description}</p>
				<p className='text-gray-700'>{`Only ${room.available} rooms left at this price on our site`}</p>
			</div>
			<div className='px-6 py-4 bg-gray-100 flex justify-between items-center'>
				<h2 className='text-2xl font-bold text-[#006ce4]'>VND 597,087</h2>
				<Button
					onClick={() => {
						router.push('/booking')
					}}
					className='bg-[#006ce4] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#0050a5]'>
					Reserve now
				</Button>
			</div>
		</div>
	)
}

export default RoomComponent
