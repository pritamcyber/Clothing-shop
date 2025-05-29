import { useContext } from 'react';
import Button from '../button/Button';
import CartItems from '../cartItem/CartItem-component';
import { DropDownContext } from '../context/DropDown-context';
import './CartDropdown-style.scss'
import { useNavigate } from 'react-router-dom';






const CardDropDown = ()=>{

    const {cartItem} = useContext(DropDownContext);
    const navigate = useNavigate();
    console.log(cartItem.length)

    const handleClick = ()=>{
        navigate('/checkout')
        console.log('this is nvaigation click')
    }
    return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItem.length ? (
          cartItem.map((cartItem) => (
            <CartItems key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <Button onClick={handleClick} >GO TO CHECKOUT</Button>
    </div>
    )
};
export default CardDropDown;