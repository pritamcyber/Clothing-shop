import { useContext } from 'react'
import {ReactComponent as ShoppingIcon} from '../../assest/004 shopping-bag.svg'


import './CartIcon-style.scss'
import { DropDownContext } from '../context/DropDown-context'



const CartIcon = ()=>{
    const {Droped,setDroped,cardCount} = useContext(DropDownContext)
    console.log(cardCount)
    const toggleIsCartOpen = ()=>{
        setDroped(!Droped)
    }
    return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cardCount}</span>
    </div>
  );
}
export default CartIcon;