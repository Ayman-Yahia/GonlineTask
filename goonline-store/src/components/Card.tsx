import React, { FC } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {useNavigate} from 'react-router-dom';
const useStyles = makeStyles({
    root: {
      minWidth: 200
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)"
    },
    title: {
      fontSize: 14,
      width:"100%",
    },
    pos: {
      marginBottom: 12
    }
  });
  interface props{
      product:any
  }
const ProductCard:FC<props> = ({product}) => {
    const navigate = useNavigate();
    const classes = useStyles();
    return (
        <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
            
          >
          
          <CardMedia component="img" src={product.image} style={{width:"100%",height:"50vh",margin:"0 auto"}}/>
          </Typography>
          <Typography variant="h5" component="h2">
            {product.title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          {product.price}$
          </Typography>
          <Typography variant="body2" component="p">
          {product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={()=>{
              navigate('/store/'+product.id)
          }}>view product</Button>
        </CardActions>
      </Card>
    )
}

export default ProductCard
