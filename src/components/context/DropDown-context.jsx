import { createContext, useEffect, useState } from "react";

// product{
//     id,name,price,url,quentity
// }

const removeCartItem = (cartItems,productToremove)=>{
const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToremove.id
  );

  if (existingCartItem.quantity===1 ) {
    return cartItems.filter((cartItem) => cartItem.id !== productToremove.id);
  }
return cartItems.map((cartItem) =>
    cartItem.id === productToremove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
 
    
}

const addCartItem = (cartItems,productToAdd)=>{
const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
    
}

export const DropDownContext = createContext({
    Droped : null,
    setDroped: null,
    cartItem: [],
    adItemToCart: ()=>{},
    cardCount :0,
    cardTotal:0
    
   
})


export const DropDownProvider = ({children})=>{
    const [Droped,setDroped] = useState(false)
    const [cartItem,setCartItem] = useState([])
    const [cardCount,setcardCount] = useState(0)
    const [cardTotal,setcardTotal] = useState(0)

    useEffect(()=>{
        const newCardCount = cartItem.reduce((total,cartItem)=> total+cartItem.quantity, 0 )
        setcardCount(newCardCount) 
    },[cartItem])
    useEffect(()=>{
        const newCardCount = cartItem.reduce((total,cartItem)=> total+cartItem.quantity * cartItem.price, 0 )
        setcardTotal(newCardCount) 
    },[cartItem])
    


    const removeItemToCart = (productToremove)=>{
        setCartItem(removeCartItem (cartItem,productToremove));
    }


    const clearItemFromCart = (prodecttoclear)=>{
        const newcartItem = cartItem.filter((element)=>element.id != prodecttoclear.id)
        setCartItem(newcartItem)
    }


    const addItemToCart = (producttoAdd) =>{
        setCartItem(addCartItem(cartItem,producttoAdd)); 
    }


    const value  = {Droped,setDroped,cartItem,addItemToCart,cardCount,removeItemToCart,cardTotal,clearItemFromCart}
    return <DropDownContext.Provider value={value}>{children}</DropDownContext.Provider>
}
