import { useContext } from 'react';
import Button from '../button/Button';
import './product-card-style.scss'
import { DropDownContext } from '../context/DropDown-context';



const ProductCard = ({product})=>{
    const {id,price,imageUrl,name } = product;
    const  {addItemToCart} =  useContext(DropDownContext);

    const additemtocart = ()=>{addItemToCart(product) }
    return (
        <div className='product-card-container' key={product.id}>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick ={additemtocart}>Add to Cart</Button>
    </div>
    )
};

export default ProductCard;