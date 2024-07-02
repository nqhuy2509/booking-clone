export interface IResponseAPI<T> {
	success?: boolean
	message?: string
	meta?: Meta
	data?: T
}

export interface Meta {
	next?: null
	prev?: null
	page?: number
	itemCount?: number
}
