import React from 'react';
const Avatar = require('../assets/avatar.png');
import {HeaderContainer, HeaderFont, HeaderImage} from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderFont>CryptoTracker Pro</HeaderFont>
      <HeaderImage source={Avatar} alt="avatar" />
    </HeaderContainer>
  );
};

export default Header;
