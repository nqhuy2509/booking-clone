import { Spinner } from '@nextui-org/react'
import React from 'react'

export const LoadingComponent = () => {
	return (
		<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
			<Spinner size='lg' />
		</div>
	)
}
