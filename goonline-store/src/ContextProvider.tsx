import React,{useState} from "react";
import { CookieContext } from "./AppContext";
import Cookies from 'universal-cookie';
import {CartItemType} from "./App"

type Props = {
    children: React.ReactNode;
};
export const ContextProvider=({ children }: Props)=>{
    const cookies = new Cookies();
    if(cookies.get("Cart")){
        console.log("");
    }else{
        cookies.set("Cart", [], { path: '/', maxAge: 60 * 60 * 24 * 365, });
    }
    const[cart,setCart]=useState<CartItemType[]>()
    return (
        <CookieContext.Provider value={{ cookies,cart,setCart }}>
          {children}
        </CookieContext.Provider>
      );
}
