import { NextUIProvider } from '@nextui-org/react'
import NavBar from './_components/NavBar'
import NavBarBehind from './_components/NavBarBehind'
import NavSlogan from './_components/NavSlogan'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<ToastContainer />
			<div>
				<NavBar />
				<NavBarBehind />

				{children}
			</div>
		</>
	)
}
