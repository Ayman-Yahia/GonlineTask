import React, { FC } from 'react'
import ProductCard from './Card'
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {CartItemType} from '../App'

const useStyles = makeStyles({
    gridContainer: {
      paddingLeft: "40px",
      paddingRight: "40px"
    }
  });
  interface props{
    products:(CartItemType[]),
    search:string
}
const Products:FC<props> = ({products,search}) => {
    const classes = useStyles();
    return (
        <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justifyContent="center"
        >
            { products.filter((pro)=>{
              if(search==""){
                return pro
              }
              else if (pro.title.toLowerCase().includes(search.toLowerCase())){
                return pro
              }
            }).map((product:any,index:number)=>{
                return(
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <ProductCard  product={product}/>
                    </Grid>
                )
              })
            }
        </Grid>
    )
}

export default Products
