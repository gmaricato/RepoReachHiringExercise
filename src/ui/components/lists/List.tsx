import React from 'react'
import styled from 'styled-components/native'

// Utils
import { getManualHandlingProp } from '@utils/keyboard'
import { getFullName } from '@utils/doctor-data'

// Components
import Item from '@components/items/Doctor'
import SeachInput, { SearchInputProps } from '@components/inputs/Search'
import CheckBox from '@components/check-box/CheckBox'

// Data
import { Doctor } from '@data/doctors'

const Container = styled.FlatList`
	flex: 1;
`

const View = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`

const Text = styled.Text`
	font-size: 30px;
`

const Header = styled.View`
	margin-bottom: 30px;
	justify-content: space-between;
`

const SearchInputContainer = styled.View`
	width: 100%;
	flex: 1;
	margin-vertical: 10px;
`

const FiltersContainer = styled.View`
	flex-direction: row;
	flex: 1;
    align-items: center;
    justify-content: space-between;
	width: 100%;
`

interface DoctorListProp extends SearchInputProps {
	data: Array<Doctor>;
	filterAvailability: boolean;
	onChangeFilterAvailability: any
}

export default (props: DoctorListProp) => {

	const renderItem = ({ item, index }) => (
		<Item
			title={getFullName(item)}
			subtitle={item.primary_specialty.specialty}
			uri={item.image_url}
			isLastItem={index === props.data.length - 1}
		/>
	);

	const renderNoContent = () => (
		<View>
			<Text>
				No results found. Try again!
			</Text>
		</View>
	)

	return (
		<Container
			testID='doctors-list'
			showsVerticalScrollIndicator={false}
			overScrollMode="never"
			initialNumToRender={props.data?.length}
			updateCellsBatchingPeriod={15}
			windowSize={30}
			maxToRenderPerBatch={30}
			onEndReachedThreshold={0.01}
			ListHeaderComponent={
				<Header>
					<SearchInputContainer>
						<SeachInput {...props} />
					</SearchInputContainer>
					<FiltersContainer>
						<CheckBox isActive={props.filterAvailability} title='Schedule availability' onChange={props.onChangeFilterAvailability} />
					</FiltersContainer>
				</Header>
			}
			contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
			keyExtractor={(item, index) => `item-${index}`}
			data={props.data}
			renderItem={renderItem}
			renderSectionFooter={renderNoContent}
			{...getManualHandlingProp()}
		/>
	)
}