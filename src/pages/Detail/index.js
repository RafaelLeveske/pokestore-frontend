import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addToCartRequest } from '../../store/modules/cart/actions';

import api from '../../services/api';

import { Container } from './styles';

export default function Detail() {
  const [product, setProduct] = useState(null);

  const { params } = useRouteMatch();

  const dispatch = useDispatch();

  useEffect(() => {
    api.get(`dark_type/${params.id}`).then(response => {
      setProduct(response.data);
    });
  }, [params.id]);

  function handleAddProduct(id) {
    dispatch(addToCartRequest(id));
  }

  return (
    <>
      {product && (
        <Container>
          <img src="" alt="" />
          <header>
            <h1>{product.title}</h1>
            <span>Nº {product.id}</span>
          </header>
          <section>
            <img src={product.image} alt={product.title} />
            <div>
              <strong>{product.description}</strong>

              <ul>
                <li>
                  <span>Altura</span>
                  <strong>{product.height} m</strong>
                </li>
                <li>
                  <span>Peso</span>
                  <strong>{product.weight} Kg</strong>
                </li>
                <li>
                  <span>Categoria</span>
                  <strong>{product.category}</strong>
                </li>
                <li>
                  <span>Abilidades</span>
                  <strong>{product.abilities}</strong>
                </li>
              </ul>

              <button
                type="button"
                onClick={() => handleAddProduct(product.id)}
              >
                <span>Adicionar ao carrinho</span>
              </button>
            </div>
          </section>
        </Container>
      )}
    </>
  );
}
