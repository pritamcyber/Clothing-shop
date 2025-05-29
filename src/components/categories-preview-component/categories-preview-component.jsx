
import './categories-preview-style.scss'
import ProductCard from '../product-card/product-card'
import { Link } from 'react-router-dom'




const CategoriesPreviews = ({title,productType})=>{

      


        return(
             <div className='category-preview-container'>
    <h2>
      <Link className='title' to={title}>{title.toUpperCase()}</Link>
    </h2>
    <div className='preview'>
            {
                productType.filter((_, idx) => idx < 4).map((product)=>(<ProductCard key={product.id}  product = {product} />))
            }
            </div>
  </div>
        )

}
export default CategoriesPreviews; 