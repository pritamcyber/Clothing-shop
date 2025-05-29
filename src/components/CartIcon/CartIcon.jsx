import { useContext } from 'react'
// import {ReactComponent as ShoppingIcon} from '../../assest/004 shopping-bag.svg'


import{ItemCount,CartIconContainer,ShoppingIcon} from './CartIcon-style.jsx'
import { DropDownContext } from '../context/DropDown-context'



const CartIcon = ()=>{
    const {Droped,setDroped,cardCount} = useContext(DropDownContext)
    console.log(cardCount)
    const toggleIsCartOpen = ()=>{
        setDroped(!Droped)
    }
    return (
   <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cardCount}</ItemCount>
    </CartIconContainer>
  );
}
export default CartIcon;