import { company } from './company'
import { category } from './category'
import { Models } from "@rematch/core"

export const models: RootModel = {
	company,
	category
}
export interface RootModel extends Models<RootModel> {
	company: any,
	category: any
}