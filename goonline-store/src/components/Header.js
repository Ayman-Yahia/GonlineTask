import React,{useState} from 'react'
import styles from "./styling/header.module.css"
import axios from 'axios'
import Controls from './Inputs/Controls';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
const Header = (props) => {
    const{categories,setProducts,products,search,setSearch}=props
    const[progress1,setProgress1]=useState(false)
    const handleProducts=(e)=>{
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
            axios.get('https://fakestoreapi.com/products/category/'+e.target.name)
            .then((res)=>{
                setProducts(res.data)
                setProgress1(false)
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        
        console.log(products);
    }
    return (
        <div className={styles.content}>
            <div  className={styles.head}>
                <button name="all" className={styles.button1} onClick={handleProducts}>All |</button>
                {
                    categories.map((category,idx)=>{
                        return(
                            <button className={styles.button} key={idx} name={category} onClick={handleProducts}>{category} |</button>
                        )
                    })
                }
            </div>
            <div className={styles.search}>
                <Controls.SearchInput placeholder="search...." value={search} onChange={(e)=>setSearch(e.target.value)}/>
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
