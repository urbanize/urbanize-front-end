import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../services/Service';
import UserLogin from '../models/UserLogin';
import './Login.css';

function Login() {
    let history = useHistory();
    const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
        )

        function updatedModel(e: ChangeEvent<HTMLInputElement>) {

            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        }

            useEffect(()=>{
                if(token != ''){
                    history.push('/home')
                }
            }, [token])

        async function onSubmit(e: ChangeEvent<HTMLFormElement>){
            e.preventDefault();
            try{
                await login(`/usuarios/logar`, userLogin, setToken)

                alert('Usuário logado com sucesso!');
            }catch(error){
                alert('Dados do usuário inconsistentes. Erro ao logar!');
            }
        }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' >
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={18} justify-content='center'>
                    <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Entrar</Typography>
                            <form onSubmit={onSubmit}>
                                <Box marginY={4}>
                                <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                                </Box>

                                <Box marginY={4}>

                                <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password'fullWidth />

                                </Box>
                               <Typography variant="h5" align="center">
                                <Button type='submit' variant="contained" color="secondary" className="botao">
                                    Login
                                </Button> 
                                </Typography>
                                
                            </form>
                </Box>
            </Grid>
            <Grid item xs={6} className='imagem4'></Grid>
        </Grid>
    );
}
export default Login 