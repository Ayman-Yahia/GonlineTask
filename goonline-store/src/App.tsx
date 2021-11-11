import React, { FC } from 'react';
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
const App:FC=()=>{
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<LoginPage/>}/>
        <Route path ="/store" element={<Store/>}/>
        <Route path ="/store/:id" element={<Product/>}/>
        <Route path ="/cart" element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
