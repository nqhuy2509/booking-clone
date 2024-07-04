import { StayModel } from './stay.model'

export interface RoomModel {
	id?: string
	name?: string
	beds?: number
	available?: number
	price?: number
	description?: string
	stay?: StayModel
}
