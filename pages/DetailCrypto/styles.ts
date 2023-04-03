import {Text,TouchableOpacity,View,Image,Dimensions} from 'react-native';
import styled from 'styled-components';
import {colorsStyled} from "../../utils/Colors"

const windowHeight = Dimensions.get('window').height;

export const DetailCryptoPrincipalContainer = styled(View)`
    background-color: ${colorsStyled.white};
    height: 100%;
`

export const DetailCryptoLink = styled(Text)`
    margin-top: 40px;
    margin-left: 24px;
    font-size: 16px;
    font-weight: 400;
    color: ${colorsStyled.blue};
    background-color: ${colorsStyled.white};
`

export const DetailCryptoSubContainer = styled(View)`
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
    justify-content: center;
    height: ${windowHeight * 0.55}px
`

export const DetailCryptoImage = styled(Image)`
    width: 150px;
    height: 150px;
    margin-top: 20px;
`
export const DetailCryptoTitle = styled(Text)`
    font-size: 24px;
    line-height: 24px;
    font-weight: bold;
    margin-top: 16px;
`
export const DetailCryptoButton = styled(TouchableOpacity)`
    display: flex;
    height: 48px;
    width: 155px;
    border-radius: 4px;
    margin-top: 15px;
    background-color: ${colorsStyled.buttonYellow};
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const DetailCryptoButtonText = styled(Text)`
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0px;
    color: #385775;
    text-align: center;
`

export const DetailCryptoSubTitle = styled(Text)`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
`

export const DetailCryptoInsideContainer = styled(View)`
    flex-direction: column;
    align-items: flex-end;
`

export const DetailCryptoIconContainer = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
    