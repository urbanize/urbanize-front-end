import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addName, addTipo, addToken, addFoto, addId, addEndereco, addBio } from '../../../store/user/actions';
import { login } from '../services/Service';
import UserLogin from '../models/UserLogin';
import './Login.css';
import { toast } from 'react-toastify';

function Login() {
    let history = useHistory();
    const dispatch = useDispatch();
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nomeCompleto: '',
            usuario: '',
            tipo: '',
            foto: '',
            senha: '',
            token: '',
            bio: '',
            endereco: ''
        }
    )

    const [respUserLogin, setRespUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nomeCompleto: '',
            usuario: '',
            tipo: '',
            foto: '',
            senha: '',
            token: '',
            bio: '',
            endereco: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }



    useEffect(() => {

        if (respUserLogin.token != '') {
            dispatch(addToken(respUserLogin.token));
            dispatch(addName(respUserLogin.nomeCompleto));
            dispatch(addFoto(respUserLogin.foto));
            dispatch(addTipo(respUserLogin.tipo));
            dispatch(addId(respUserLogin.id));
            dispatch(addBio(respUserLogin.bio));
            dispatch(addEndereco(respUserLogin.endereco));
            history.push('/homelogin')
        }
    }, [respUserLogin.token])


    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setRespUserLogin)
            toast.success('Usuário logado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } catch (error) {
            toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h2' component='h2' align='center' className='textoEntrar'>Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' className='btnLogin'>
                                Logar
                            </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' className="textoLogin" gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrar' className='text-decorator-none'>
                            <Typography variant='subtitle1' gutterBottom align='center'>Cadastre-se</Typography>
                        </Link>

                    </Box>
                </Box>
            </Grid>
            <Grid xs={6}>
                <Box paddingTop={8}>
                    <img src="https://i.imgur.com/3VV5Oih.png" alt='Imagem da página "login"' width='650px' height='650px' />
                </Box>
            </Grid>
        </Grid>
    );
}

export default Login;