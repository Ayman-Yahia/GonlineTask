import React,{useState,useEffect} from 'react'
import NavBar from './NavBar'
import Header from './Header';
import Cookies from "js-cookie";
import {useNavigate} from 'react-router-dom';
import axios from 'axios'
import Products from './Products';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

export const Store = () => {
    const [search,setSearch]=useState("")
    const[progress,setProgress]=useState(false)
    const navigate = useNavigate();
    const[products,setProducts]=useState([])
    const[categories,setCategories]=useState([])
    useEffect(()=>{
        if (!Cookies.get("StoreId")) {
            navigate("/")
        }
        setProgress(true)
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            setProducts(res.data)
            setProgress(false)
        })
        .catch((err)=>{
            console.log(err);
        })
        axios.get('https://fakestoreapi.com/products/categories')
        .then((res)=>{
            setCategories(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
        
    },[])
    return (
        <>
            <NavBar/>
            <Header categories={categories} setProducts={setProducts} products={products} search={search} setSearch={setSearch}/>
            {progress ?(
                <Box sx={{ display: 'flex',justifyContent:"center" }}>
                    <CircularProgress />
                </Box>
                ):<Products products={products} search={search}/>
            }
            
        </>
    )
}
