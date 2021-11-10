import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Cookies from "js-cookie";
import {useNavigate} from 'react-router-dom';
import {useParams} from "react-router-dom";
import NavBar from './NavBar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import CardMedia from '@material-ui/core/CardMedia';
import image from '../imgs/product.jpg'
export const Product = (props) => {
    const [product,setProduct]=useState({})
    const navigate = useNavigate();
    const {id} = useParams()
    const[progres,setProgres]=useState(false)
    useEffect(()=>{
        
        if (!Cookies.get("StoreId")) {
            navigate("/")
        }
        setProgres(true)
        axios.get("https://fakestoreapi.com/products/"+id)
        .then((res)=>{
            setProduct(res.data)
            setProgres(false)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    return (
        <>
        <NavBar/>
        {
          progres ?(
            <>
            <br/>
            <Box sx={{ display: 'flex',justifyContent:"center" }}>
            <CircularProgress />
            </Box>
            </>
          ):
          <div className="product">
          <div className="details" >
            <div className="big-img">
            <KeyboardBackspaceIcon style={{cursor:"pointer"}} onClick={()=>{
              navigate("/store")
              }}/>
              <CardMedia component="img" src={image}/>
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
        }

        </>
    )
}
