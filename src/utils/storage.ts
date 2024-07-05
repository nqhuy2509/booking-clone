const accessToken = 'accessToken'

export const getToken = () => {
	return localStorage.getItem(accessToken)
}

export const setToken = (token?: string) => {
	localStorage.setItem(accessToken, token || '')
}

export const clearStorage = () => {
	localStorage.clear()
}
