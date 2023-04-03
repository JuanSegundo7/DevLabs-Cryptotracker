import { View, Text, Image } from "react-native";
import styled from 'styled-components';
import {theme} from "../../utils/theme"

export const HeaderContainer = styled(View)`
    width: 100%;
    height: 138px;
    background-color: ${theme.colors.blue};
    color: ${theme.colors.white};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-horizontal: 24px;
`
export const HeaderFont = styled(Text)`
    color: ${theme.colors.white};
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
`
export const HeaderImage = styled(Image)`
    width: 58px;
    height: 58px;
`