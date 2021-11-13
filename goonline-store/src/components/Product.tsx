import React, { FC ,useState,useEffect,useContext} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {useParams} from "react-router-dom";
import NavBar from './NavBar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import CardMedia from '@material-ui/core/CardMedia';
import {CartItemType} from '../App'
import {CookieContext} from '../AppContext'

interface pro{
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
const Product:FC = () => {
    const {cookies}=useContext(CookieContext)
    const [product,setProduct]=useState<CartItemType>(
      {
        id:0,
        title:"",
        price:0,
        description:"",
        category:"",
        image:"",
        rating:{
            rate:0,
            count:0
        },
        amount:0
    })
    const backStyle={marginBottom:"0.5rem",cursor:"pointer"}
    const navigate = useNavigate();
    const {id} = useParams()
    const[progres,setProgres]=useState<boolean>(false)
    useEffect(()=>{
        if (!cookies.get("StoreId")) {
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
          <KeyboardBackspaceIcon style={backStyle} onClick={()=>{
            navigate("/store")
            }}/>
            <CardMedia component="img" src={product.image} />
          </div>

          <div className="box">
            <div className="row">
              <h2>{product.title}</h2>
            </div>
            <h2>Category: {product.category}</h2>
            <h2>${product.price}</h2>
            <p>{product.description}</p>
          </div>
        </div>
    </div>
      }

      </>
    )
}

export default Product
