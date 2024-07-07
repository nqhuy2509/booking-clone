'use client'
import { DateRangePicker } from '@nextui-org/date-picker'
import { Image, Input } from '@nextui-org/react'
import { useState } from 'react'
import { CiFilter } from 'react-icons/ci'

import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import { toast } from 'react-toastify'
import stayApi from '../../../api/stayApi'
import { LoadingComponent } from '../../../components/LoadingComponent'
import { StayModel } from '../../../interfaces/stay.model'
import Footer from '../_components/Footer'
import NavSlogan from '../_components/NavSlogan'
import SelectionHotel from './components/SelectionHotel'

export default function Page() {
	const [adults, setAdults] = useState(0)
	const [childs, setChilds] = useState(0)
	const [rooms, setRooms] = useState(0)
	const pathname = usePathname()
	const [stays, setStays] = useState<[StayModel]>()
	const [loading, setLoading] = useState(false)
	const router = useRouter()
	const [keyword, setKeyword] = useState('')

	const searchParams = useSearchParams()

	const type = searchParams.get('type') || ''
	const searchKeyword = searchParams.get('keyword') || ''

	useEffect(() => {
		fetchStays()
	}, [searchParams])

	const fetchStays = async () => {
		try {
			setLoading(true)
			const staysResponse = await stayApi.getAllStay(type || '', searchKeyword || '')

			setStays(staysResponse.data)
		} catch {
			toast.error('Có lỗi xảy ra')
		} finally {
			setLoading(false)
		}
	}

	const handleSearch = () => {
		router.replace(`/search-result?type=${type}&keyword=${keyword}`)
	}

	return (
		<div>
			{loading && <LoadingComponent />}
			<NavSlogan />
			<div className='max-w-screen-2xl mx-auto '>
				<div className='grid grid-cols-12 justify-start items-center pt-5 w-full'>
					<Input
						type='text'
						placeholder='Bạn muốn đến đâu? '
						className='col-span-4'
						onChange={(e) => setKeyword(e.target.value)}
					/>
					<div className='flex p-1 flex-2 col-span-4'>
						<DateRangePicker label='Ngày nhận - trả phòng' className='max-w-xs' />
					</div>
					<Dropdown>
						<DropdownTrigger>
							<Button variant='bordered' className='col-span-2'>
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
						<Button
							className=' bg-[#006ce4] text-white font-bold hover:cursor-zoom-out col-span-1'
							startContent={<FaSearch />}
							onClick={handleSearch}>
							Tìm
						</Button>
					</div>
				</div>
			</div>
			<div className='pl-8 flex mb-4'>
				<div>
					<Image src='./image/map.jpg' className='w-80'></Image>
				</div>

				<div className='pl-7'>
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
			<Footer />
		</div>
	)
}
