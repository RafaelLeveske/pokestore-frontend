import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { MdAddShoppingCart } from 'react-icons/md';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

import { addToCartRequest } from '../../store/modules/cart/actions';

import { ProductList } from './styles';

export default function Home() {
  const [products, setProducts] = useState(() => {
    const storageProducts = localStorage.getItem('@Pokestore:products');
    if (storageProducts) {
      return JSON.parse(storageProducts);
    }
    return [];
  });
  const amount = useSelector(state =>
    state.cart.reduce(
      (sumAmount, product) => ({ ...sumAmount, [product.id]: product.amount }),
      {}
    )
  );

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('@Pokestore:products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('dark_type');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(addToCartRequest(id));
  }

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <Link to={`/pokemon/${product.id}`}>
            <img src={product.image} alt={product.title} />
          </Link>
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color="#fff" />
              {amount[product.id] || 0}
            </div>

            <span>Adicionar ao carrinho</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
