import React from 'react';
import { useSelector } from 'react-redux';

import { Container, LogoContainer, Cart, Logo, Type } from './styles';

import logo from '../../assets/images/logo.svg';
import darkLogo from '../../assets/images/darklogo.svg';
import bagLogo from '../../assets/images/baglogo.svg';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <LogoContainer>
        <Logo to="/">
          <img src={logo} alt="Pokemon" />
        </Logo>

        <Type src={darkLogo} alt="Dark-Type" />
      </LogoContainer>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{`${cartSize} itens`}</span>
        </div>

        <img src={bagLogo} alt="Pokemon" />
      </Cart>
    </Container>
  );
}
