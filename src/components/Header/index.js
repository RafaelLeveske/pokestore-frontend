import React from 'react';
import { useSelector } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart, Logo } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <Logo to="/">
        <img src={logo} alt="Pokemon" />
      </Logo>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{`${cartSize} itens`}</span>
        </div>

        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}
