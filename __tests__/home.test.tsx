import { render, waitFor, cleanup, fireEvent, act } from '@testing-library/react-native'
import 'jest-styled-components'

import Home from '@features/dashboard/screens/home/HomeScreen'

import doctorsData from '@data/doctors'

import { filterByParam } from '@utils/doctor-data'

describe("../src/features/dashboard/screens/home/HomeScreen", () => {
    let search: string = ''
    let filterAvailability: boolean = false
    const props = {
        data: doctorsData,
        search,
        onChangeText: jest.fn(value => {
            search = value
        }),
        filterAvailability,
        onChangeFilterAvailability: jest.fn(() => {
            filterAvailability = !filterAvailability
        })
    };
    test("test user interaction cases", async () => {
        let searchString: string = ''
        const screen = await waitFor(() => render(<Home />))
        const doctorsList = await screen.findByTestId('doctors-list')

        // check if initial state matches
        expect(doctorsList.props.data.length).toBe(filterByParam(false, '').length)

        // check the option to filter only doctors with schedule availability
        const checkBox = await screen.findByTestId('check-box')
        await act(async () => fireEvent.press(checkBox))
        expect(doctorsList.props.data.length).toBe(filterByParam(true, '').length)

        // uncheck the option to filter only doctors with schedule availability and search for a valid doctor name
        await act(async () => fireEvent.press(checkBox))
        const searchInput = await screen.findByTestId('search-input')
        searchString = `${doctorsData[0].first_name} ${doctorsData[0].last_name}`
        await act(async () => fireEvent.changeText(searchInput, searchString))
        expect(doctorsList.props.data.length).toBe(filterByParam(false, searchString).length)

        // search by procedure
        searchString = `${doctorsData[0].procedures[0].procedure}`
        await act(async () => fireEvent.changeText(searchInput, searchString))
        expect(doctorsList.props.data.length).toBe(filterByParam(false, searchString).length)
    })

})