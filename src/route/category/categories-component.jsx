import React, {useEffect, Fragment, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import './categories-style.scss'
import { ProductsContext } from '../../components/context/product-context';
import ProductCard from '../../components/product-card/product-card';

const Category = () => {
  const { category } = useParams(); // e.g., 'hats', 'jackets', etc.

  const { products } = useContext(ProductsContext);
  const [selfproducts, setselfProducts] = useState(products[category]);

  useEffect(() => {
    setselfProducts(products[category]);
  }, [category, products]);

  return (
    <Fragment>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-container'>
        {selfproducts &&
          selfproducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;