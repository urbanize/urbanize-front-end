import React, { useState, useEffect, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import User from '../models/User';
import { cadastroUsuario } from '../services/Service';
import { Grid, Box, Typography, Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './CadastroUsuario.css';

function CadastroUsuario() {

    let history = useHistory();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nomeCompleto: '',
            usuario: '',
            foto: '',
            tipo: '',
            senha: '',
            bio: '',
            endereco: ''
        }
    )

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nomeCompleto: '',
            usuario: '',
            foto: '',
            tipo: '',
            senha: '',
            bio: '',
            endereco: ''
        }
    )

    useEffect(() => {
        if (userResult.id != 0) {
            history.push("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == user.senha) {
            try {
                await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
                toast.success('Usuário cadastrado com sucesso!', {
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
                toast.error('Dados inconsistentes. Favor verificar as informações de cadastro.', {
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

        } else {
            alert('Senhas incompatíveis!')
        }
    }
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6}>
                <Box paddingLeft={8} paddingTop={8}>
                    <img src="https://i.imgur.com/RT1rD7P.png" alt="" width='650px' height='650px' />
                </Box>
            </Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={18} alignItems='center'>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h2' gutterBottom color='textPrimary' component='h2' align='center' className='textos2'>Cadastrar</Typography>
                        <TextField value={user.nomeCompleto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nomeCompleto' label='nome' variant='outlined' name='nomeCompleto' margin='normal' fullWidth />
                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={user.bio} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='bio' label='um pouco sobre você' variant='outlined' name='bio' margin='normal' fullWidth />
                        <TextField value={user.endereco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='endereco' label='bairro' variant='outlined' name='endereco' margin='normal' fullWidth />
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmar senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button variant='contained' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' className='botao2'>
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid >
        </Grid >
    );
}

export default CadastroUsuario;
