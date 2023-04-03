
import {View, Text, TextProps, TextInput, TextInputProps, TouchableOpacity, TouchableOpacityProps, Dimensions } from "react-native";
import styled from 'styled-components';
import {theme} from "../../utils/theme"

const windowHeight = Dimensions.get('window').height;

interface AddCryptoTextInputProps extends TextInputProps {
    isFocused?: boolean;
}

interface AddCryptoButtonProps extends TouchableOpacityProps {
    isDisabled?: boolean;
}

interface AddCryptoTextProps extends TextProps {
    isFocused?: boolean;
}


export const AddCryptoPrincipalContainer = styled(View)`
    background-color: ${theme.colors.white};
    width: 100%;
    height: 100%;
`

export const AddCryptoSubContainer = styled(View)`
    display: flex;
    padding-horizontal: 24px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: ${windowHeight * 0.7}px;
`
export const AddCryptoLink = styled(Text)`
    margin-top: 60px;
    margin-left: 24px;
    font-size: 16px;
    font-weight: 400;
    color: ${theme.colors.blue};
`

export const AddCryptoPrincipalText = styled(Text)`
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: -0.25px;
    text-align: left;
    color: ${theme.colors.blackTitle};
`

export const AddCryptoTextInput = styled(TextInput)<AddCryptoTextInputProps>`
    height: 56px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid ${theme.colors.greyBorder};
    background-color: ${theme.colors.whiteBackground};
    margin-top: 24px;
    margin-bottom: 16px;
    padding-left: 8px;
    padding-top: 16px;
    padding-bottom: 16px;

    ${({ isFocused }) =>
    isFocused &&    
    `
    border: 2px solid ${theme.colors.yellow};

  `}
`

export const AddCryptoButtonContainer = styled(View)`
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
`

export const AddCryptoButton = styled(TouchableOpacity)<AddCryptoButtonProps>`
    height: 48px;
    width: 155px;
    border-radius: 4px;
    background-color: ${theme.colors.buttonYellow};
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${({ isDisabled }) =>
    isDisabled &&
    `
    opacity: 0.5;
  `}
`

export const AddCryptoText = styled(Text)<AddCryptoTextProps>`
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0;
    color: rgba(56, 87, 117, 0.2);
    text-align: center;

    ${({ isFocused }) =>
    isFocused && `
    color: ${theme.colors.blue};

  `}
`