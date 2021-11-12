import React,{FC} from 'react';
import { TextField } from '@material-ui/core';

interface props{
    onChange:any,
    placeholder:string,
    type:string,
    name:string,
    min?:number,
    value?:any
}
const TextInput:FC<props> = ({ onChange,placeholder,type,name,min,value}) => {
    return (
        <TextField
        // variant="outlined"
        value={value}
        name={name}
        type={type}
        // min={min}
        fullWidth 
        required
        placeholder={placeholder}
        onChange={onChange}
    />
    )
}

export default TextInput;
