import { createContext, useEffect, useState } from "react";

import {SHOP_DATA} from "../../shope-data.js"
import { addingCollectionAndDocument, getCategoriesAndDocuments } from "../../utils/firebase/fireconfig.js";


// export const ProductContext = createContext({
//     Products: [],
// });


// export const ProductProvider  = ({children})=>{
//     const [products,setproducts] = useState(PRODUCT);
//     const value = {products};
//     return(
//     <ProductContext.Provider value={value}>{children}</ProductContext.Provider>

//     )
// }



export const ProductsContext = createContext({
  products: {},
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState({});
  
  const value = { products };
    useEffect(async   ()=>{
          const getcategoriesMap =  async ()=>{
            const categoriesMap = await getCategoriesAndDocuments('hats') 
            // console.log(categoriesMap)
            return categoriesMap;
          };
          const pro =  await getcategoriesMap();
          console.log(pro)
          setProducts(pro);
          // console.log(products)
      
              },[])

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};