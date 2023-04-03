import { ScrollView, View, Text } from "react-native";
import styled from 'styled-components';
import {theme} from "../../utils/theme"


export const ScrollViewContainer = styled(ScrollView)`
    background-color: ${theme.colors.white}
`

export const HomeContainer = styled(View)`
    display: flex;
    background-color: ${theme.colors.white};
    align-items: center;
    justify-content: flex-start;
`

export const HomeText = styled(Text)`
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: ${theme.colors.blue}
    margin: 48px 0;
`
