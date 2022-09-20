import doctorsData, { Doctor } from '@data/doctors'

export const searchProcedure = (item: Doctor, search: string) =>
	!!item.procedures.filter(data => data.procedure.toLowerCase().includes(search.toLowerCase())).length

export const getFullName = (item: Doctor) => `${item.first_name} ${item.last_name}`

export const searchFullName = (item: Doctor, search: string) =>
	getFullName(item).toLowerCase().includes(search.toLowerCase())

export const filterByParam = (filterScheduleAvailability: boolean, search: string) =>
	doctorsData
		.filter(item => {
			if (!!search) {
				return searchProcedure(item, search) || searchFullName(item, search)
			}
			return item
		})
		.filter(item => !!filterScheduleAvailability && item.scheduling_enabled || !filterScheduleAvailability)
