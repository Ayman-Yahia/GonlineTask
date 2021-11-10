import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Cookies from "js-cookie";
import {useNavigate} from 'react-router-dom';
import {useParams} from "react-router-dom";
import NavBar from './NavBar';

export const Product = (props) => {
    const [product,setProduct]=useState({})
    const navigate = useNavigate();
    const {id} = useParams()
    useEffect(()=>{
        
        if (!Cookies.get("StoreId")) {
            navigate("/")
        }
        axios.get("https://fakestoreapi.com/products/"+id)
        .then((res)=>{
            setProduct(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    return (
        <>
        <NavBar/>
        <div className="product">
            <div className="details" >
              <div className="big-img">
                <img src={'../../public/imgs/product.jpg'} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{product.title}</h2>
                </div>
                <h2>Category: {product.category}</h2>
                <h2>${product.price}</h2>
                <p>{product.description}</p>
                {/* <button className="cart">Add to cart</button> */}
              </div>
            </div>
      </div>
        </>
    )
}
