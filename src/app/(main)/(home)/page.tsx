'use client'
import { DateRangePicker } from '@nextui-org/date-picker'
import { Checkbox, Input } from '@nextui-org/react'
import Link from 'next/link'
import { useState } from 'react'

import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import Carousel from '../_components/Carousel'
import Footer from '../_components/Footer'
import NavSlogan from '../_components/NavSlogan'
import { searchItems } from '../_components/SearchHotelItem'
import SlideShow from '../_components/SlideShow'
export default function Page() {
	const [adults, setAdults] = useState(0)
	const [childs, setChilds] = useState(0)
	const [rooms, setRooms] = useState(0)
	const pathname = usePathname()

	useEffect(() => {}, [])
	return (
		<div>
			<NavSlogan />
			<div className='max-w-screen-2xl mx-auto px-2'>
				<div className='grid grid-cols-12 justify-start items-center pt-5 w-full'>
					<Input type='text' placeholder='Bạn muốn đến đâu? ' className='col-span-4' />
					<div className='flex p-1 flex-2 col-span-4'>
						<DateRangePicker label='Ngày nhận - trả phòng' className='max-w-xs' />
					</div>
					<Dropdown>
						<DropdownTrigger>
							<Button variant='bordered' className='col-span-2'>
								{' '}
								{adults} Người lớn {childs} Trẻ em {rooms} Phòng
							</Button>
						</DropdownTrigger>
						<DropdownMenu aria-label='Static Actions' selectionMode='multiple'>
							<DropdownItem>
								Người lớn
								<Button
									isIconOnly
									className='w-8 h-8 p-3 '
									onClick={() => {
										adults > 0 && setAdults(adults - 1)
									}}>
									{' '}
									-{' '}
								</Button>
								<span> 0 </span>
								<Button
									isIconOnly
									className='w-8 h-8 p-3 '
									onClick={() => {
										setAdults(adults + 1)
									}}>
									{' '}
									+{' '}
								</Button>
							</DropdownItem>
							<DropdownItem>
								Trẻ em
								<Button
									isIconOnly
									className='w-8 h-8 p-3 '
									onClick={() => {
										childs > 0 && setChilds(childs - 1)
									}}>
									{' '}
									-{' '}
								</Button>
								<span> 0 </span>
								<Button
									isIconOnly
									className='w-8 h-8 p-3 '
									onClick={() => {
										setChilds(childs + 1)
									}}>
									{' '}
									+{' '}
								</Button>
							</DropdownItem>
							<DropdownItem>
								Phòng
								<Button
									isIconOnly
									className='w-8 h-8 p-3 '
									onClick={() => {
										rooms > 0 && setRooms(rooms - 1)
									}}>
									{' '}
									-{' '}
								</Button>
								<span> 0 </span>
								<Button
									isIconOnly
									className='w-8 h-8 p-3 '
									onClick={() => {
										setRooms(rooms + 1)
									}}>
									{' '}
									+{' '}
								</Button>
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
					<div className='pl-2'>
						<Button className=' bg-[#006ce4] text-white font-bold hover:cursor-zoom-out col-span-1'>
							{searchItems.map((item) => (
								<Link
									href={item.path}
									className={`flex items-center px-3 py-2 rounded-3xl ${
										pathname == item.path
											? 'border-white border-2 bg-white bg-opacity-20'
											: 'hover:bg-white hover:bg-opacity-10 cursor-pointer'
									}`}
									key={item.key}>
									<span className='text-xl me-1'>{item.icon}</span>
									<h3>{item.title}</h3>
								</Link>
							))}
						</Button>
					</div>
				</div>
				<Checkbox defaultSelected>Tôi đang tìm nhà hoặc căn hộ nguyên căn</Checkbox>
				<div>
					<h1 className='text-3xl font-bold pt-8'> Ưu đãi</h1>
					<h3 className='text-xl pb-5'>
						{' '}
						Khuyến mãi, giảm giá và ưu đãi đặc biệt dành riêng cho bạn
					</h3>
					<div className="bg-[url('/image/316455553.jpeg')] h-48 bg-no-repeat bg-cover bg-center rounded-xl	">
						<h1 className='text-white font-semibold text-2xl p-4'>
							Đặt liền tay, bắt ngay ưu đãi <br />
						</h1>
						<h3 className='text-white font-normal text-xl pl-4'>
							{' '}
							Tiết kiệm từ 15% trở lên khi đặt và lưu trú trước 1/10/2024
						</h3>
						<div className='p-4'>
							<Button className='bg-[#006ce4] text-white font-semibold text-xl'>
								{' '}
								Tìm Ưu Đãi Mùa Du Lịch
							</Button>
						</div>
					</div>
				</div>
				<div>
					<div>
						<h1 className='text-3xl font-bold pt-24'> Tìm theo loại chỗ nghỉ</h1>
						<div className='pt-4'>
							<SlideShow />
						</div>
					</div>
				</div>
				<div>
					<div>
						<h1 className='text-3xl font-bold pt-11 pb-3'> Khám phá Việt Nam</h1>
						<h3 className='pb-3'>
							{' '}
							Các điểm đến phổ biến này có nhiều điều chờ đón bạn
						</h3>
						<div>
							<Carousel />
						</div>
					</div>
				</div>
				<div className='pt-7'>
					<Footer />
				</div>
			</div>
		</div>
	)
}
