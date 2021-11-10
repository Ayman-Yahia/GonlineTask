import React,{FC} from 'react';
import { TextField } from '@material-ui/core';

interface props{
    onChange:any,
    placeholder:string,
    type:string,
    name:string
}
const TextInput:FC<props> = ({ onChange,placeholder,type,name}) => {
    return (
        <TextField
        // variant="outlined"
        name={name}
        type={type}
        fullWidth 
        required
        placeholder={placeholder}
        onChange={onChange}
    />
    )
}

export default TextInput;
