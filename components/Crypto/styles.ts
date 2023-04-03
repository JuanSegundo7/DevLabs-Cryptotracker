import {View,ViewProps,Text,Animated,Image,TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {colorsStyled} from "../../utils/Colors"

interface CryptoInsideContainerProps extends ViewProps {
    rightAlign?: boolean;
    leftAlign?: boolean;
}

interface CryptoAnimatedViewProps {
    spin: Animated.AnimatedInterpolation<number>;
}

export const CryptoContainer = styled(View)`
    display: flex;
    width: 100%;
    height: 112px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
`

export const CryptoTouchableContainer = styled(TouchableOpacity)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`

export const CryptoTouchableContainerImg = styled(Image)`
    width: 48px;
    height: 48px;
    margin-right: 8px;
`

export const CryptoFlexLogoContainer = styled(View)`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

`

export const CryptoLoaderContainer = styled(Animated.View)<CryptoAnimatedViewProps>`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    transform: ${({ spin }) => `rotate(${spin}deg)`};
`

export const CryptoInsideContainer = styled(View)<CryptoInsideContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${({ rightAlign }) =>
    rightAlign &&
    `
      align-items: flex-end;
    `}

    ${({ leftAlign }) =>
    leftAlign &&
    `
      align-items: flex-start;
    `}
`

export const CryptoTitle = styled(Text)`
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    color: ${colorsStyled.blackTitle};
`
export const CryptoSubTitle = styled(Text)`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
`

export const CryptoDivider = styled(View)`
    height: 1px;
    background-color: ${colorsStyled.grey};
    width: 85%;
    margin-top: 10px;
    margin-bottom: 10px;
`

export const CryptoIconContainer = styled(View)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
