import React, { FC ,useState,useEffect} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {useParams} from "react-router-dom";
import NavBar from './NavBar';
import Cookies from "js-cookie";
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import CardMedia from '@material-ui/core/CardMedia';
import Controls from './Inputs/Controls';
const Product:FC = () => {
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
    const [product,setProduct]=useState<pro>({
        id:0,
        title:"",
        price:0,
        description:"",
        category:"",
        image:"",
        rating:{
            rate:0,
            count:0
        }
    })
    const backStyle={marginBottom:"0.5rem",cursor:"pointer"}
    const navigate = useNavigate();
    const {id} = useParams()
    const[progres,setProgres]=useState<boolean>(false)
    const [quantity,setQuantity]=useState<number>(0)
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
    const handleQuantity=(e: React.FormEvent<HTMLFormElement>):void=>{
      setQuantity(e.currentTarget.value)
    }
    const addToCart=():void=>{
      setQuantity(0)
    }
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
            <Controls.TextInput name="quantity" onChange={handleQuantity}  placeholder='Enter Quantity' type="number" min={0} />
            <button className="cart" onClick={addToCart}>Add to cart</button>
          </div>
        </div>
    </div>
      }

      </>
    )
}

export default Product
