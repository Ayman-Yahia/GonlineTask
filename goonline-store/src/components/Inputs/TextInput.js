import React from 'react'
import { TextField } from '@material-ui/core';
export const TextInput = (props) => {
    const { name,value, onChange,lable,placeholder } = props;
    return (
        <>
        <TextField
            // variant="outlined"
            fullWidth 
            required
            placeholder={placeholder}
            lable={lable}
            name={name}
            value={value}
            onChange={onChange}
        />
        </>

    )
}
