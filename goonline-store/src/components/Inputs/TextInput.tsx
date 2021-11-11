import React,{FC} from 'react';
import { TextField } from '@material-ui/core';

interface props{
    onChange:any,
    placeholder:string,
    type:string,
    name:string,
    min?:number,
    onClick?:any
}
const TextInput:FC<props> = ({ onChange,placeholder,type,name,min,onClick}) => {
    return (
        <TextField
        // variant="outlined"
        onClick={onClick}
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
