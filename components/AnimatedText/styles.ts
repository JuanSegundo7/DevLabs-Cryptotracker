import {Animated} from 'react-native';
import styled from 'styled-components';
import {theme} from "../../utils/theme"

interface AnimatedTextPrincipalNumberProps {
    page?: string;
}

interface AnimatedTextPercentageNumberProps {
    type: string;
}

export const AnimatedTextPrincipalNumber = styled(Animated.Text)<AnimatedTextPrincipalNumberProps>`
    font-size: ${({page}) => (page === 'Home' ? '20px' : '30px')};
    font-weight: 600;
    line-height: ${({page}) => (page === 'Home' ? '24px' : '30px')};
    margin-top: ${({page}) => (page === 'Home' ? '0px' : '20px')};
    color: ${theme.colors.blackTitle};
}
`

export const AnimatedTextPercentageNumber = styled(Animated.Text)<AnimatedTextPercentageNumberProps>`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    ${({ type }) =>
    type === 'Positive' &&
    `
        color: ${theme.colors.green}
    `}

    ${({ type }) =>
    type !== 'Positive' &&
    `
        color: ${theme.colors.red}
    `}
}
`
