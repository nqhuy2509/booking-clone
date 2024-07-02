import persistStore from 'redux-persist/es/persistStore'
import { persistor, store } from '../redux/store'
import { NextUIProvider } from '@nextui-org/react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

persistStore(store)

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<NextUIProvider>
			<Provider store={store}>
				<PersistGate persistor={persistor} loading={null}>
					{children}
				</PersistGate>
			</Provider>
		</NextUIProvider>
	)
}
