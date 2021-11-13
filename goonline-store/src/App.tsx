import React, {  FC } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoginPage from './components/LoginPage';
import Store from './components/Store';
import Product from './components/Product';
import Cart from './components/Cart';
export type CartItemType = {
  id:number,
  title:string,
  price:number,
  description:string,
  category:string,
  image:string,
  rating:{
      rate:number,
      count:number
  },
  amount:number
};
export type pro={
  id:number,
  title:string,
  price:number,
  description:string,
  category:string,
  image:string,
  rating:{
      rate:number,
      count:number
  }
}
const App:FC=()=>{

  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<LoginPage />}/>
        <Route path ="/store" element={<Store/>}/>
        <Route path ="/store/:id" element={<Product/>}/>
        <Route path ="/cart" element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
