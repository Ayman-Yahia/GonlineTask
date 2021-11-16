import React,{FC,useContext} from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import {CookieContext} from '../AppContext'
import { CartItemType } from '../App';

type Props = {
    openPop:boolean;
    deletedProdcut:number;
    handleClose:()=>void
}
const PopUp:FC<Props> = ({openPop,deletedProdcut,handleClose}) => {
    const {cookies,setCart}=useContext(CookieContext)
    const removeItem = (id: number):void => {              
        cookies.set("Cart",(cookies.get("Cart").reduce((ack:CartItemType[], item:CartItemType) => {
          if (item.id === id) {
            if (item.amount) return ack;
          } else {
            return [...ack, item];
          }
        }, [] as CartItemType[])
      )
        )
        setCart(cookies.get("Cart"))
        handleClose()
      }  
    return (
        <div>
        <Dialog
        open={openPop}
        onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Are you sure you want to delete this item from cart?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} style={{backgroundColor: 'red', color: 'white'}}>close</Button>
            <Button onClick={()=>removeItem(deletedProdcut)} autoFocus style={{backgroundColor: 'green', color: 'white'}}>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
}

export default PopUp
