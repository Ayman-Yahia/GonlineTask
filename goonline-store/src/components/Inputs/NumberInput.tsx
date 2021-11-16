import React,{FC} from 'react';
import { TextField } from '@material-ui/core';

interface props{
    onChange:any,
    placeholder?:string,
    name:string,
    value?:any,
    min?:number
}
const NumberInput:FC<props> = ({ onChange,name,value,placeholder,min}) => {
    return (
        <TextField
        // variant="outlined"
        // min={1}
        value={value}
        name={name}
        type="number"
        placeholder={placeholder}
        fullWidth 
        required
        onChange={onChange}
    />
    )
}

export default NumberInput;
