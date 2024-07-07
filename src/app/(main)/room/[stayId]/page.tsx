'use client'

import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'
import Footer from '../../_components/Footer'
import { RoomModel } from '../../../../interfaces/room.model'
import roomApi from '../../../../api/roomApi'
import { toast } from 'react-toastify'
import { LoadingComponent } from '../../../../components/LoadingComponent'
import RoomComponent from './_components/RoomComponent'

const RoomPage = ({ params }: { params: { stayId: string } }) => {
	const [rooms, setRooms] = useState<[RoomModel]>()
	const [loading, setLoading] = useState(false)

	const fetchRoom = useCallback(async () => {
		try {
			setLoading(true)
			const staysResponse = await roomApi.getAllRoomByStay(params.stayId)

			setRooms(staysResponse.data)
		} catch {
			toast.error('Có lỗi xảy ra')
		} finally {
			setLoading(false)
		}
	}, [params.stayId])

	useEffect(() => {
		fetchRoom()
	}, [fetchRoom])

	return (
		<div className='max-w-[1024px] mx-auto mt-4'>
			{loading && <LoadingComponent />}
			<div className='pt-4'>
				{rooms &&
					rooms?.length > 0 &&
					rooms.map((item) => <RoomComponent key={item.id} room={item} />)}
				<Footer />
			</div>
		</div>
	)
}

export default RoomPage
