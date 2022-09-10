import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search }  from '@mui/icons-material';

//  mr: {sm: 5} margin-right only on small devices 5px
const SearchBar = () => {
    return (
        <Paper
            component='form'
            onSubmit={() => {}}
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                mr: {sm: 5}
            }}>
                <input 
                    className='serch-bar'
                    placeholder='Search...'
                    value='' 
                    onChange={() => {}}
                    style={{border: 'none'}}
                />
                <IconButton type='submit' sx={{p: '10px', color: 'red'}}>
                    <Search />
                </IconButton>
            </Paper>
    )
}

export default SearchBar