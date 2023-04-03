import { ScrollView, View, Text } from "react-native";
import styled from 'styled-components';
import {colorsStyled} from "../../utils/Colors"


export const ScrollViewContainer = styled(ScrollView)`
    background-color: ${colorsStyled.white}
`

export const HomeContainer = styled(View)`
    display: flex;
    background-color: ${colorsStyled.white};
    align-items: center;
    justify-content: flex-start;
`

export const HomeText = styled(Text)`
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: ${colorsStyled.blue}
    margin: 48px 0;
`
