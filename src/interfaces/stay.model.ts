export interface StayModel {
	id?: string
	name?: string
	description?: string
	type?: string
	locationId?: string
	image?: null | string
	status?: string
	createdAt?: Date
	updatedAt?: Date
	location?: Location
}

export interface Location {
	id?: string
	lat?: null
	lng?: null
	address?: string
	district?: string
	province?: string
}
