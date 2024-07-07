'use client'

import { useRouter } from 'next/navigation'
import React, { useCallback } from 'react'
import { useState } from 'react'
import ReactSimplyCarousel from 'react-simply-carousel'

export default function SlideShow() {
	const [activeSlideIndex, setActiveSlideIndex] = useState(0)

	const router = useRouter()

	const handleSearchDirection = (type: string) => {
		router.push(`/search-result?type=${type}`)
	}

	return (
		<div>
			<ReactSimplyCarousel
				activeSlideIndex={activeSlideIndex}
				onRequestChange={setActiveSlideIndex}
				itemsToShow={4}
				itemsToScroll={1}
				speed={400}
				easing='linear'
				responsiveProps={[
					{
						itemsToShow: 1,
						itemsToScroll: 1,
						maxWidth: 768,
					},
					{
						itemsToShow: 2,
						itemsToScroll: 1,
						minWidth: 769,
						maxWidth: 1024,
					},
					{
						itemsToShow: 3,
						itemsToScroll: 1,
						minWidth: 1025,
					},
					{
						itemsToShow: 4,
						itemsToScroll: 1,
						minWidth: 1025,
					},
				]}
				forwardBtnProps={{
					style: {
						alignSelf: 'center',
						background: 'black',
						border: 'none',
						borderRadius: '50%',
						color: 'white',
						cursor: 'pointer',
						fontSize: '25px',
						height: 40,
						lineHeight: 1,
						textAlign: 'center',
						width: 40,
					},
					children: <span>{`>`}</span>,
				}}
				backwardBtnProps={{
					style: {
						alignSelf: 'center',
						background: 'black',
						border: 'none',
						borderRadius: '50%',
						color: 'white',
						cursor: 'pointer',
						fontSize: '25px',
						height: 40,
						lineHeight: 1,
						textAlign: 'center',
						width: 40,
					},
					children: <span>{`<`}</span>,
				}}>
				<div
					onClick={() => {
						handleSearchDirection('hotel')
					}}>
					<div
						style={{
							width: 280,
							height: 280,
							backgroundImage: `url('/image/57584488.jpeg')`,
							backgroundSize: 'cover',
							borderRadius: '20px',
							marginRight: '20px',
						}}
						className='cursor-pointer'></div>
					<h1 className='text-black font-bold text-xl'>Khách sạn</h1>
				</div>

				<div
					onClick={() => {
						handleSearchDirection('apartment')
					}}>
					<div
						style={{
							width: 280,
							height: 280,
							backgroundImage: `url('/image/119467716.jpeg')`,
							backgroundSize: 'cover',
							borderRadius: '20px',
							marginRight: '20px',
						}}
						className='cursor-pointer'>
						{' '}
					</div>
					<h1 className='text-black font-bold text-xl'>Căn hộ</h1>
				</div>

				<div
					onClick={() => {
						handleSearchDirection('resort')
					}}>
					<div
						style={{
							width: 280,
							height: 280,
							backgroundImage: `url('/image/45450084.jpeg')`,
							backgroundSize: 'cover',
							borderRadius: '20px',
							marginRight: '20px',
						}}
						className='cursor-pointer'></div>
					<h1 className='text-black font-bold text-xl'>Các resort</h1>
				</div>

				<div
					onClick={() => {
						handleSearchDirection('villa')
					}}>
					<div
						style={{
							width: 280,
							height: 280,
							backgroundImage: `url('/image/100235855.jpeg')`,
							backgroundSize: 'cover',
							borderRadius: '20px',
							marginRight: '20px',
						}}
						className='cursor-pointer'></div>
					<h1 className='text-black font-bold text-xl'>Các biệt thự</h1>
				</div>

				<div
					onClick={() => {
						handleSearchDirection('hostel')
					}}>
					<div
						style={{
							width: 280,
							height: 280,
							backgroundImage: `url('/image/52979454.jpeg')`,
							backgroundSize: 'cover',
							borderRadius: '20px',
							marginRight: '20px',
						}}
						className='cursor-pointer'></div>
					<h1 className='text-black font-bold text-xl'>Cabin nghỉ dưỡng</h1>
				</div>

				<div>
					<div
						style={{
							width: 280,
							height: 280,
							backgroundImage: `url('/image/Cottage.jpeg')`,
							backgroundSize: 'cover',
							borderRadius: '20px',
							marginRight: '20px',
						}}></div>
					<h1 className='text-black font-bold text-xl'>Cottage</h1>
				</div>

				<div>
					<div
						style={{
							width: 280,
							height: 280,
							backgroundImage: `url('/image/Glamping.jpeg')`,
							backgroundSize: 'cover',
							borderRadius: '20px',
							marginRight: '20px',
						}}></div>
					<h1 className='text-black font-bold text-xl'>Các khu Glamping</h1>
				</div>
				<div>
					<div
						style={{
							width: 280,
							height: 280,
							backgroundImage: `url('/image/building.jpeg')`,
							backgroundSize: 'cover',
							borderRadius: '20px',
							marginRight: '20px',
						}}></div>
					<h1 className='text-black font-bold text-xl'>Căn hộ dịch vụ</h1>
				</div>
				<div>
					<div
						style={{
							width: 280,
							height: 280,
							backgroundImage: `url('/image/resort.jpeg')`,
							backgroundSize: 'cover',
							borderRadius: '20px',
							marginRight: '20px',
						}}></div>
					<h1 className='text-black font-bold text-xl'>Các nhà nghỉ dưỡng</h1>
				</div>
				<div>
					<div
						style={{
							width: 280,
							height: 280,
							backgroundImage: `url('/image/nhakhach.jpeg')`,
							backgroundSize: 'cover',
							borderRadius: '20px',
							marginRight: '20px',
						}}></div>
					<h1 className='text-black font-bold text-xl'>Căn nhà khách</h1>
				</div>
				<div>
					<div
						style={{
							width: 280,
							height: 280,
							backgroundImage: `url('/image/hostel.jpeg')`,
							backgroundSize: 'cover',
							borderRadius: '20px',
							marginRight: '20px',
						}}></div>
					<h1 className='text-black font-bold text-xl'>Các hostel</h1>
				</div>
				<div>
					<div
						style={{
							width: 280,
							height: 280,
							backgroundImage: `url('/image/motel.jpeg')`,
							backgroundSize: 'cover',
							borderRadius: '20px',
							marginRight: '20px',
						}}></div>
					<h1 className='text-black font-bold text-xl'>Các motel</h1>
				</div>
				<div>
					<div
						style={{
							width: 280,
							height: 280,
							backgroundImage: `url('/image/B&B.jpeg')`,
							backgroundSize: 'cover',
							borderRadius: '20px',
							marginRight: '20px',
						}}></div>
					<h1 className='text-black font-bold text-xl'>Nhà nghỉ B&B</h1>
				</div>
				<div>
					<div
						style={{
							width: 280,
							height: 280,
							backgroundImage: `url('/image/Ryok.jpeg')`,
							backgroundSize: 'cover',
							borderRadius: '20px',
							marginRight: '20px',
						}}></div>
					<h1 className='text-black font-bold text-xl'>Các ryokan</h1>
				</div>
				<div>
					<div
						style={{
							width: 280,
							height: 280,
							backgroundImage: `url('/image/Riad.jpeg')`,
							backgroundSize: 'cover',
							borderRadius: '20px',
							marginRight: '20px',
						}}></div>
					<h1 className='text-black font-bold text-xl'>Các riad</h1>
				</div>
				<div>
					<div
						style={{
							width: 280,
							height: 280,
							backgroundImage: `url('/image/Park.jpeg')`,
							backgroundSize: 'cover',
							borderRadius: '20px',
							marginRight: '20px',
						}}></div>
					<h1 className='text-black font-bold text-xl'>Các công viên nghỉ dưỡng</h1>
				</div>
			</ReactSimplyCarousel>
		</div>
	)
}
