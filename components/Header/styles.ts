import { View, Text, Image } from "react-native";
import styled from 'styled-components';
import {colorsStyled} from "../../utils/Colors"

export const HeaderContainer = styled(View)`
    width: 100%;
    height: 138px;
    background-color: ${colorsStyled.blue};
    color: ${colorsStyled.white};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-horizontal: 24px;
`
export const HeaderFont = styled(Text)`
    color: ${colorsStyled.white};
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
`
export const HeaderImage = styled(Image)`
    width: 58px;
    height: 58px;
`