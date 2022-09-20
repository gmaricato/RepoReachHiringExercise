import React from 'react'
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native'

const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const CheckBox = styled.TouchableOpacity`
    padding: 10px;
    background-color: ${props => props.isActive ? '#542bd9' : 'transparent'}
    border-radius: 5px;
    border-width: 1px;
    border-color: #542bd9;
    margin-right: 5px;
`

const Title = styled.Text`
    font-size: 12px
`

interface CheckBoxProps {
    isActive: boolean;
    title: string;
    onChange: any;
}

export default (props: CheckBoxProps) => (
    <Container>
        <CheckBox {...props} onPress={props.onChange} testID='check-box' />
        <Title>{props.title}</Title>
    </Container>
)