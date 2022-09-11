import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search }  from '@mui/icons-material';

//  mr: {sm: 5} margin-right only on small devices 5px
const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(searchTerm) {
            navigate(`/search/${searchTerm}`);

            setSearchTerm(''); //Clear Search placeholder
        }
    }

    return (
        <Paper
            component='form'
            onSubmit={handleSubmit}
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
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{border: 'none', outline: 'none'}}
                />
                <IconButton type='submit' sx={{p: '10px', color: 'red'}}>
                    <Search />
                </IconButton>
            </Paper>
    )
}

export default SearchBar