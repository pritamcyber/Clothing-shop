import { Fragment, useContext, useState } from "react"
import { ProductsContext } from "../../components/context/product-context"
import ProductCard from "../../components/product-card/product-card"

import CategoriesPreviews from "../../components/categories-preview-component/categories-preview-component"

// import SHOPE_DATA from '../../shope-data.json';


export const CategoriesPreviewsRoute = () => {
    
    const {products} =  useContext(ProductsContext)
  

   return (
     <div className='shop-container'>
      {Object.keys(products).map((key) => {
        const product = products[key];
        return (<CategoriesPreviews key={key} title={key} productType={product} />);
      })}
    </div>
    
  );
}

export default CategoriesPreviewsRoute