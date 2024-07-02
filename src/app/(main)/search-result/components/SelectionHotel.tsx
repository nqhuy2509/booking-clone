import { Button, Image } from '@nextui-org/react'
import React from 'react'
import { AiFillLike } from 'react-icons/ai'
import { FaStar } from 'react-icons/fa'
import { StayModel } from '../../../../interfaces/stay.model'

interface Props {
	key: string
	stay: StayModel
}

export default function SelectionHotel(props: Props) {
	const { key, stay } = props

	return (
		<div>
			<div className='flex w-[1024px] h-[350px] bg-gray-200 rounded-lg	mt-4 '>
				<div className='w-60 h-80 pt-7 ml-5'>
					<Image src={stay.image || ''} alt={stay.name} />
				</div>
				<div className='mt-8'>
					<div className='ml-4 flex'>
						<h1 className='font-bold text-2xl text-[#006ce4]'>{stay.name}</h1>
						<div className='pl-3 flex'>
							<FaStar className='text-[#ffb700] text-xl justify-center ' />
							<FaStar className='text-[#ffb700]  text-xl justify-center ' />
							<AiFillLike className='text-[#ffb700]  text-xl justify-center ' />
						</div>
						<span className='pl-56 font-semibold text-xl'> Excellent</span>
						<div className='font-semibold text-xl w-8 h-8 bg-[#003b95] ml-4 text-white rounded-md text-center '>
							{' '}
							8.8
						</div>
					</div>
					<div className='flex pl-4 text-[#006ce4] font-semibold pt-4'>
						<a href=''>
							{`${stay.location?.address} ${stay.location?.district} ${stay.location?.province}`}
						</a>
						<a href='' className='pl-5 '>
							{' '}
							Show on map
						</a>
					</div>
					<div>
						<div>
							<div className='bg-[#008234] text-white w-28 pl-2 ml-4 rounded-lg mt-4'>
								{' '}
								Getaway Deal
							</div>
							<div className='pl-5 font-semibold'>
								Deluxe Double Room <br />
								<span className='font-thin'>1 queen bed</span> <br />{' '}
								<span className='text-[#008234]'>
									Free cancellation <br /> No prepayment needed – pay at the
									property <br />
								</span>
								<span className='text-[#d4111e]'>
									Only 3 rooms left at this price on our site
								</span>
							</div>
						</div>
						<div className='car pl-[500px] mt-0'>
							<h1 className='text-black font-bold pl-8 text-xl pb-3'>VND 597,087</h1>
							<Button className='text-white bg-[#006ce4] font-bold text-xl'>
								See Availability
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
