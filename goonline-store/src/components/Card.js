import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
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
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const{product}=props
  const navigate = useNavigate();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
          
        >
        <img src='../../public/imgs/product.jpg' alt="product" style={{width:"3rem"}}/>
        </Typography>
        <Typography variant="h5" component="h2">
          {product.title}
        </Typography>
        <Typography variant="body2" component="p">
        {product.description}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {product.price}$
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>{
            navigate('/store/'+product.id)
        }}>view product</Button>
      </CardActions>
    </Card>
  );
}
