import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Select,
	SelectItem,
	Tooltip,
	useDisclosure,
	User,
} from '@nextui-org/react'
import { logout } from '../../../redux/auth/authSlice'
import { clearStorage } from '../../../utils/storage'

const UserProfile = () => {
	const authState = useAppSelector((state) => state.auth)

	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	const dispatch = useAppDispatch()

	const handleLogout = () => {
		dispatch(logout())
		clearStorage()
	}

	return (
		<>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className='flex flex-col gap-1'>Đăng xuất</ModalHeader>
							<ModalBody>Bạn có chắc chắn muốn đăng xuất không?</ModalBody>
							<ModalFooter>
								<Button color='primary' variant='light' onPress={onClose}>
									Huỷ
								</Button>
								<Button
									color='danger'
									onPress={() => {
										onClose()
										handleLogout()
									}}>
									Đăng xuất
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
			<Popover>
				<PopoverTrigger>
					<User name={authState.email} className='text-white' />
				</PopoverTrigger>
				<PopoverContent>
					<ul className='w-full py-1'>
						<Button
							color='primary'
							variant='light'
							className='w-full cursor-pointer hover:bg-primary-300 px-4 py-2 rounded-md text-sm font-semibold my-2'>
							Lịch sử đặt phòng
						</Button>
						<Button
							color='danger'
							variant='light'
							className='w-full cursor-pointer hover:bg-primary-300 px-4 py-2 rounded-md text-sm font-semibold'
							onClick={onOpen}>
							Đăng xuất
						</Button>
					</ul>
				</PopoverContent>
			</Popover>
		</>
	)
}

export default UserProfile
