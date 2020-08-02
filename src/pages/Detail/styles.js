import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.section`
  padding: 30px;
  border-radius: 8px;
  background: #fff;

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
    justify-content: space-between;
    max-width: 600px;

    img {
      width: 400px;
      height: 400px;
    }

    div {
      margin-top: 35px;

      strong {
        margin-top: 30px;
        font-size: 16px;
      }

      ul {
        display: flex;
        list-style: none;
        margin-top: 60px;

        li {
          & + li {
            margin-left: 70px;
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

        width: 500px;
        height: 60px;
        overflow: hidden;
        margin-top: 110px;
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
`;
