import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { AppBar, Box, Button, Toolbar } from '@material-ui/core';

export default function NavBar() {
    return (
            <AppBar position="static" variant="elevation" style={{ backgroundColor: "#f99e29" }} >
                <Toolbar style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                <Link to='/home' className='text-decorator-none'>
                    <img src="https://i.imgur.com/mqC0VS2.png" alt="logo urbanize" style={{width: "25vh", height: "5vh" }} />  
                </Link>
                <Box paddingLeft={25}>
                    <Link to='/login' className='text-decorator-none'>
                        <Button color="inherit" style={{fontWeight: "bold"}}>Entrar</Button>
                    </Link>                        
                    <Link to='/cadastrar' className='text-decorator-none2'>
                        <Button color="inherit" style={{ fontWeight: "bold" }} className='bot4'>Cadastre-se</Button>
                    </Link>
               </Box>
                </Toolbar>
            </AppBar>
    );
}