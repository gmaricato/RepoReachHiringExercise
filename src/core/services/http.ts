import { filterByParam } from '@utils/doctor-data'

export const httpGet = async (query: { filterScheduleAvailability: boolean, search: string }, url: string) => {
	const {
		filterScheduleAvailability,
		search,
  	} = query
	if (url === 'doctors') {
		return filterByParam(filterScheduleAvailability, search);
	}
	return null
}