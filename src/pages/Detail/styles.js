import styled from 'styled-components';
import { darken } from 'polished';

import pokeballBackground from '../../assets/images/pokeball-logo.svg';

export const Container = styled.section`
  padding: 10px 10px;
  border-radius: 8px;
  background: #f0fbf5;

  header {
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 30px;
      color: #3a3a3a;
    }

    span {
      margin-left: 15px;
      font-size: 27px;
      font-weight: bold;
      color: #7c7a7a;
    }
  }

  section {
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    background: url(${pokeballBackground}) no-repeat 0% top;
    max-width: 900px;

    img {
      width: 400px;
      height: 400px;
    }

    div {
      justify-content: flex-end;
      margin-top: 35px;
      margin-left: 20px;

      strong {
        margin-top: 30px;
        font-size: 16px;
        max-width: 740px;
      }

      ul {
        display: flex;
        list-style: none;
        margin-top: 60px;
        justify-content: center;

        li {
          & + li {
            margin-left: 30px;
          }
          strong {
            display: block;
            font-size: 19px;
            color: #3d3d4d;
          }
          span {
            display: block;
            font-size: 17px;
            margin-top: 4px;
            color: #6c6c80;
          }
        }
      }

      button {
        display: flex;
        align-items: center;

        width: 420px;
        height: 60px;
        overflow: hidden;
        margin-top: 110px;
        margin-left: 20px;
        margin-right: 20px;
        border: 0;
        border-radius: 4px;
        color: #fff;
        background: #7159c1;
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.03, '#7159c1')};
        }

        span {
          flex: 1;
          font-weight: bold;
          text-align: center;
        }
      }
    }
  }

  @media (max-width: 1000px) {
    display: block;
    margin: auto;
    align-self: center;
    max-width: 700px;
    padding: 15 20px;
    margin-bottom: 20px;

    header {
      padding: 32px 20px;
      display: flex;
      align-items: center;
    }

    section {
      margin: 0 auto;
      padding: 10px;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      position: relative;
      background: url(${pokeballBackground}) no-repeat 50% top;
      max-width: 500px;

      img {
        align-self: center;
      }

      div {
        max-width: 460px;
        margin-top: 150px;
        display: block;

        strong {
          max-width: 200px;
        }

        button {
          margin-top: 70px;
        }
      }
    }
  }
`;
