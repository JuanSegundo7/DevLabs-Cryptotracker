import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {colorsStyled} from "../../utils/Colors"

export const ModalBackground = styled(View)`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.5);
`

export const ModalContainerStyle = styled(View)`
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 30px;
    padding-horizontal: 20px;
    background-color: ${colorsStyled.white};
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: auto;
`

export const ModalText = styled(Text)`
    font-size: 20px;
    padding: 5px 10px;
    text-align: center;
`

export const ModalCrossContainer = styled(View)`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
`

export const ModalCross = styled(TouchableOpacity)`
    width: auto
`

// export const ModalCheckCircleIcon = styled(Icon)`
//     margin-bottom: 10px,
//     font-size: 60px
//     color: ${colorsStyled.green}
// `

// export const ModalCrossIcon = styled(Icon)`
//     margin-bottom: 10px,
//     font-size: 60px
//     color: ${colorsStyled.red}
// `