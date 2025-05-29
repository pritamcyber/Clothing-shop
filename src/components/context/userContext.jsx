import { createContext, useState,useEffect } from "react";
import { onAuthStateChangedListener } from "../../utils/firebase/fireconfig";
import {createUseDocumentFromAuth } from "../../utils/firebase/fireconfig";

export const user_info_context = createContext({
    currentUser :null,
    setcurrentUser : ()=> null
})


export const UserProvider=({children})=>{
    const [currentUser,setcurrentUser] = useState(null)
    const value =  {currentUser,setcurrentUser}

    useEffect(()=>{
        const unsubscribe  = onAuthStateChangedListener((user)=>{
           if(user){
            createUseDocumentFromAuth(user);
           }
            setcurrentUser(user)
        })
        return unsubscribe;

    },[])
   return <user_info_context.Provider value={value} > {children} </user_info_context.Provider>
}