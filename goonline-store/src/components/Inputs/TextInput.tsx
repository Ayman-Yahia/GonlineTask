import React,{FC} from 'react';
import { TextField } from '@material-ui/core';

interface props{
    onChange:(value: React.FormEvent<HTMLFormElement>)=>void,
    placeholder:string,
    type:string,
    name:string,
    value?:any
}
const TextInput:FC<props> = ({ onChange,placeholder,type,name,value}) => {
    return (
        <TextField
        // variant="outlined"
        value={value}
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
