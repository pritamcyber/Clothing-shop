import { useContext } from 'react'
import { DropDownContext } from '../../components/context/DropDown-context'
import './checkout-style.scss'
import { CheckoutItem } from '../../components/checkoutitem/CheckoutItem-component'


export const Checkout = ()=>{

   const {cartItem,cardTotal} =useContext(DropDownContext)
   return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItem.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>TOTAL: ${cardTotal}</div>
    </div>
   )

}