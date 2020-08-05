import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  @media (max-width: 800px) {
    align-items: center;
  }
`;

export const Logo = styled(Link)`
  width: 250px;
  height: 250px;

  @media (max-width: 800px) {
    img {
      max-width: 80%;
      margin-top: 25px;
    }
  }
`;

export const Type = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 25px;

  @media (max-width: 800px) {
    margin-right: 30px;
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  img {
    width: 40px;
    height: 40px;
  }

  div {
    margin-right: 10px;
    text-align: right;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
