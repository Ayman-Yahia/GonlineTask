import React, { FC,useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Cookies from "js-cookie";
import NavBar from './NavBar';
import Header from './Header';
import Products from './Products';
const Store:FC = () => {
    const [search,setSearch]=useState<string>("")
    const[progress,setProgress]=useState<boolean>(false)
    const navigate = useNavigate();
    const[products,setProducts]=useState([])
    const[categories,setCategories]=useState<string[]>([])
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
            <Header categories={categories} setProducts={setProducts} setSearch={setSearch}/>
            {progress ?(
                <Box sx={{ display: 'flex',justifyContent:"center" }}>
                    <CircularProgress />
                </Box>
                ):<Products products={products} search={search}/>
            }
            
        </>
    )
}

export default Store
