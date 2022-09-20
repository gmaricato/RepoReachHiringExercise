import React from 'react'
import styled from 'styled-components/native';

const InputWrapper = styled.View`
	width: 100%;
	border-radius: 15px;
	background-color: #ededed;
`

const Input = styled.TextInput`
  	font-size: 16px;
	padding-left: 10px;
	padding-right: 30px;
	padding-vertical: 7px;
`;

export interface SearchInputProps {
	search: string;
	onChangeText: any;
}

export default (props: SearchInputProps) => (
	<InputWrapper>
		<Input
			testID='search-input'
			placeholder={`Search by name or procedure`}
			numberOfLines={1}
			autoFocus={true}
			value={props.search}
			onChangeText={props.onChangeText}
			textAlign='left'
		/>
	</InputWrapper>
)