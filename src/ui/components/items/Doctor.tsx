import React from 'react'
import styled, { css } from 'styled-components/native'
import { StyleSheet } from 'react-native'

const Wrapper = styled.TouchableOpacity`
	border-top-width: ${StyleSheet.hairlineWidth}px;
	border-top-color: grey;

	padding-vertical: 10px;
	${({ isLastItem }) => isLastItem && css`
		margin-bottom: 20px;
		border-bottom-width: ${StyleSheet.hairlineWidth}px;
		border-bottom-color: grey;
	`}
`

const Item = styled.View`
	margin-horizontal: 10px;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	flex-direction: row;
`

const IconWrapper = styled.View`
	margin-right: 15px;
`

const Icon = styled.Image`
	height: 60px;
	width: 60px;
	border-radius: 30px;
`

const InfoWrapper = styled.View`
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
`

const Title = styled.Text`
	font-size: 18px;
	line-height: 22px;
	color: black;a
`

const SubTitle = styled.Text`
	font-size: 15px;
	line-height: 17px;
	color: grey;
`

interface DoctorItemProps {
	isLastItem: boolean;
	uri: string;
	title: string;
	subtitle: string;
}

export default (props: DoctorItemProps) => (
	<Wrapper {...props}>
		<Item>
			<IconWrapper>
				<Icon source={{ uri: props.uri }} />
			</IconWrapper>
			<InfoWrapper>
				<Title>{props.title}</Title>
				<SubTitle>{props.subtitle}</SubTitle>
			</InfoWrapper>
		</Item>
	</Wrapper>
)

