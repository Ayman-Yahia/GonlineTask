import React,{useState,FC,ChangeEvent} from 'react'
import styles from "./styling/header.module.css"
import axios from 'axios'
import Controls from './Inputs/Controls';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
interface props{
    categories:string[],
    products:any,
    search:string,
    setSearch:any,
    setProducts:any
}
const Header:FC<props> = ({categories,products,search,setSearch,setProducts}) => {
    const[progress1,setProgress1]=useState<boolean>(false)
    const handleProducts=(e:ChangeEvent<HTMLInputElement>)=>{
        setProgress1(true)
        if (e.target.name=="all"){
            axios.get('https://fakestoreapi.com/products')
            .then((res)=>{
                setProducts(res.data)
                setProgress1(false)
                
            })
            .catch((err)=>{
                console.log(err);
            })
        }else{
            axios.get('https://fakestoreapi.com/products/category/'+e.currentTarget.name)
            .then((res)=>{
                setProducts(res.data)
                setProgress1(false)
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }
    const handleSearch=(e:ChangeEvent<HTMLInputElement>)=>{
        setSearch(e.target.value)
    }
    return (
        <div className={styles.content}>
            <div  className={styles.head}>
                <button name="all" className={styles.button1} onClick={(e)=>handleProducts}>All <span className={styles.line}>|</span></button>
                {
                    categories.map((category,idx)=>{
                        return(
                            <button className={styles.button} key={idx} name={category} onClick={(e)=>handleProducts}>{category} <span className={styles.line}>|</span></button>
                        )
                    })
                }
            </div>
            <div className={styles.search}>
            <Controls.TextInput name="search" onChange={handleSearch} placeholder='Enter username' type="search" />
            </div>
            <br/>
            {progress1 &&(
                <Box sx={{ display: 'flex',justifyContent:"center" }}>
                    <CircularProgress />
                </Box>
                )
            }
            <br/>
        </div>
    )
}

export default Header
