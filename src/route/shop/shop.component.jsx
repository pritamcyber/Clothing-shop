
import { Route, Router, Routes, useParams } from 'react-router-dom';
// import {product_div} from './shope-style.jsx's
import CategoriesPreviewsRoute from '../categories-preview-route/categories-preview-route';
import Category from '../category/categories-component';

// import SHOPE_DATA from '../../shope-data.json';


export const Shop = () => {
    
   const { id } = useParams();
  

   return (
    <Routes> 
      <Route index element={<CategoriesPreviewsRoute/>}/>
       <Route path=':category' element={<Category />} />
    </Routes>
    
  );
}

export default Shop