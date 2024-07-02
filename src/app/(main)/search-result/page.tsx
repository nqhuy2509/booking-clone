'use client'
import { Image, Input, Popover } from '@nextui-org/react'
import React, { useState } from 'react'
import { DateRangePicker } from '@nextui-org/date-picker'
import { CheckboxGroup, Checkbox } from '@nextui-org/react'
import Link from 'next/link'
import { CiFilter } from 'react-icons/ci'

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@nextui-org/react'

import NavSlogan from '../_components/NavSlogan'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { searchItems } from '../_components/SearchHotelItem'
import SelectionHotel from './components/SelectionHotel'
import { StayModel } from '../../../interfaces/stay.model'
import stayApi from '../../../api/stayApi'
import { LoadingComponent } from '../../../components/LoadingComponent'
import { toast } from 'react-toastify'
export default function Page() {
	const [adults, setAdults] = useState(0)
	const [childs, setChilds] = useState(0)
	const [rooms, setRooms] = useState(0)
	const pathname = usePathname()
	const [stays, setStays] = useState<[StayModel]>()
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		fetchStays()
	}, [])

	const fetchStays = async () => {
		try {
			setLoading(true)
			const staysResponse = await stayApi.getAllStay()

			setStays(staysResponse.data)
		} catch {
			toast.error('Có lỗi xảy ra')
		} finally {
			setLoading(false)
		}
	}

	return (
		<div>
			{loading && <LoadingComponent />}
			<NavSlogan />
			<div className='max-w-screen-2xl mx-auto '>
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
									}`}
									key={item.key}>
									<span className='text-xl me-1'>{item.icon}</span>
									<h3>{item.title}</h3>
								</Link>
							))}
						</Button>
					</div>
				</div>
			</div>
			<div className='pl-8 flex'>
				<div>
					<Image src='./image/map.jpg' className='w-80'></Image>
					<div className=''>
						<h1 className='font-bold text-xl  pt-5'>Lọc bởi:</h1>
						<div className='pl-8 pt-5 w-64 h-80 mt-5 outline '>
							<CheckboxGroup label='Bộ lọc phổ biến' className='font-bold'>
								<Checkbox className='font-normal' value=''>
									Căn hộ{' '}
								</Checkbox>
								<Checkbox className='font-normal' value=''>
									5 sao
								</Checkbox>
								<Checkbox className='font-normal' value=''>
									Biệt thự{' '}
								</Checkbox>
								<Checkbox className='font-normal' value=''>
									Hồ bơi
								</Checkbox>
								<Checkbox className='font-normal' value=''>
									Nhiều khách sạn{' '}
								</Checkbox>
								<Checkbox className='font-normal' value=''>
									Điều hòa không khí
								</Checkbox>
								<Checkbox className='font-normal' value=''>
									Ban công
								</Checkbox>
								<Checkbox className='font-normal' value=''>
									Nhà nghỉ dưỡng
								</Checkbox>
							</CheckboxGroup>
						</div>
						<div className='pl-8 pt-5 outline	w-64 h-60  	'>
							<CheckboxGroup label='Đánh giá tài sản' className='font-bold'>
								<Checkbox className='font-normal' value=''>
									1 sao{' '}
								</Checkbox>
								<Checkbox className='font-normal' value=''>
									2 sao
								</Checkbox>
								<Checkbox className='font-normal' value=''>
									3 sao{' '}
								</Checkbox>
								<Checkbox className='font-normal' value=''>
									4 sao
								</Checkbox>
								<Checkbox className='font-normal' value=''>
									5 sao{' '}
								</Checkbox>
								<Checkbox className='font-normal' value=''>
									Chưa được xếp hạng
								</Checkbox>
							</CheckboxGroup>
						</div>
						<div className='pl-8 pt-5 outline	w-64 h-20 	'>
							<CheckboxGroup label='Đánh giá tài sản' className='font-bold'>
								<Checkbox className='font-normal' value=''>
									Toàn bộ nhà và địa điểm
								</Checkbox>
							</CheckboxGroup>
						</div>
						<div className='pl-8 pt-5 outline	w-64 h-44 	'>
							<CheckboxGroup label='Điểm đánh giá' className='font-bold'>
								<Checkbox className='font-normal' value=''>
									Tuyệt vời: 9+
								</Checkbox>
								<Checkbox className='font-normal' value=''>
									Rất tốt: 8+
								</Checkbox>
								<Checkbox className='font-normal' value=''>
									Tốt: 7+
								</Checkbox>
								<Checkbox className='font-normal' value=''>
									Dễ chịu: 6+
								</Checkbox>
							</CheckboxGroup>
						</div>
					</div>
				</div>

				<div className='pl-7'>
					<h1 className=' text-3xl font-bold'>Da Lat: 1,368 properties found</h1>
					<div className='pt-5 '>
						<Button className='  font-semibold'>
							{' '}
							<CiFilter className='text-xl' />
							Sắp xếp theo: Lựa chọn hàng đầu của chúng tôi
						</Button>
					</div>
					{stays &&
						stays?.length > 0 &&
						stays.map((stay) => (
							<SelectionHotel key={stay.id!.toString()} stay={stay} />
						))}
				</div>
			</div>
		</div>
	)
}
