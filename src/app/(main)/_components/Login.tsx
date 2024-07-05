'use client'

import React, { useState } from 'react'
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
	Input,
	Link,
} from '@nextui-org/react'
import MailIcon from './MailIcon'
import LockIcon from './LockIcon'
import { Controller, useForm } from 'react-hook-form'
import authApi from '@/api/authApi'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AxiosError } from 'axios'
import { useDispatch } from 'react-redux'
import { setAuthState } from '@/redux/auth/authSlice'
import { setToken } from '@/utils/storage'

interface ILoginForm {
	email: string
	password: string
}

export default function Login() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')

	const { control, handleSubmit } = useForm<ILoginForm>({
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const dispatch = useDispatch()

	const onSubmit = async (data: ILoginForm) => {
		setIsLoading(true)
		setError('')
		try {
			const response = await authApi.login(data.email, data.password)

			if (response.success) {
				toast.success('Đăng nhập thành công!')
				dispatch(setAuthState(response.data!))
				setToken(response.data?.accessToken)
				onClose()
			} else {
				console.error('Unexpected response status:', response)
				setError('Có lỗi xảy ra. Vui lòng thử lại sau.')
				toast.error('Có lỗi xảy ra. Vui lòng thử lại sau.')
			}
		} catch (error) {
			console.error('Login error:', error)

			if (error instanceof AxiosError) {
				if (error.response?.status === 401) {
					setError('Tên đăng nhập hoặc mật khẩu không đúng!')
					toast.error('Tên đăng nhập hoặc mật khẩu không đúng!')
				} else {
					setError('Có lỗi xảy ra. Vui lòng thử lại sau.')
					toast.error('Có lỗi xảy ra. Vui lòng thử lại sau.')
				}
			} else {
				setError('Có lỗi xảy ra. Vui lòng thử lại sau.')
				toast.error('Có lỗi xảy ra. Vui lòng thử lại sau.')
			}
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div>
			<Button
				onPress={onOpen}
				className='text-text_color font-semibold text-lg p-1 rounded bg-white'>
				Đăng nhập
			</Button>
			<Modal isOpen={isOpen} onClose={onClose} placement='top-center'>
				<ModalContent>
					<ModalHeader className='flex flex-col gap-1'>Đăng nhập</ModalHeader>
					<ModalBody>
						<Controller
							name='email'
							control={control}
							render={({ field }) => (
								<Input
									autoFocus
									value={field.value}
									onChange={field.onChange}
									endContent={
										<MailIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
									}
									label='Email'
									placeholder='Nhập email của bạn'
									variant='bordered'
								/>
							)}
						/>
						<Controller
							name='password'
							control={control}
							render={({ field }) => (
								<Input
									value={field.value}
									onChange={field.onChange}
									endContent={
										<LockIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
									}
									label='Password'
									placeholder='Nhập mật khẩu'
									type='password'
									variant='bordered'
								/>
							)}
						/>
						<div className='flex py-2 px-1 justify-between'>
							<Link color='primary' href='#' size='sm'>
								Quên mật khẩu?
							</Link>
						</div>
						{error && <p className='text-danger'>{error}</p>}
					</ModalBody>
					<ModalFooter>
						<Button color='danger' variant='flat' onClick={onClose}>
							Đóng
						</Button>
						<Button
							color='primary'
							onClick={handleSubmit(onSubmit)}
							disabled={isLoading}>
							{isLoading ? 'Đang đăng nhập...' : 'Đăng nhập'}
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
			<ToastContainer />
		</div>
	)
}
