import React, { useState, useEffect } from 'react'

// Components
import List from '@components/lists/List'

// Styles
import { Screen } from './HomeScreen.styled'

// Utils
import { Doctor } from '@data/doctors'

// Services
import { get } from '@core/services/doctors'

export default () => {
	const [search, setSearch] = useState<string>('')
	const [data, setData] = useState<Array<Doctor>>([])
	const [filterAvailability, setFilterAvailability] = useState<boolean>(false)

	useEffect(() => {
		const getData = async () => {
			const apiData = await get({ search, filterScheduleAvailability: filterAvailability })
			setData(apiData)
		}
		getData()
	}, [search, filterAvailability])

	return (
		<Screen>
			<List
				data={data}
				search={search}
				onChangeText={setSearch}
				filterAvailability={filterAvailability}
				onChangeFilterAvailability={() => setFilterAvailability(!filterAvailability)}
			/>
		</Screen>
	)
}