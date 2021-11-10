import React from 'react'
import Card from './Card'
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
    gridContainer: {
      paddingLeft: "40px",
      paddingRight: "40px"
    }
  });
const Products = (props) => {
    const classes = useStyles();
    const{products,search}=props
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
        }).map((product,index)=>{
            return(
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card  product={product}/>
                </Grid>
            )
          })
        }
    </Grid>
    );
}

export default Products
