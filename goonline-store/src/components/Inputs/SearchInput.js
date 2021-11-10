import React from 'react'
import { TextField } from '@material-ui/core';
export const SearchInput = (props) => {
    const { name,value, onChange,lable,placeholder } = props;
    return (
        <>
        <TextField
            variant="outlined"
            type="search"
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
