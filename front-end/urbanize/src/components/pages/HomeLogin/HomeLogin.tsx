import React, { useEffect } from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import TabPostagem from '../../postagens/tabPostagem/TabPostagem';
import ModalPostagem from '../../postagens/modalPostagem/ModalPostagem';
import './HomeLogin.css';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserState } from '../../../store/user/userReducer';

function HomeLogin() {

    let history = useHistory();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );

    const tipo = useSelector<UserState, UserState["tipos"]>(
        (state) => state.tipos
    );

    const foto = useSelector<UserState, UserState["fotos"]>(
        (state) => state.fotos
    );

    var fotoPerfil = foto 
        if (foto=='') {
            fotoPerfil = "https://i.imgur.com/CYlpvZh.png"
        }

    var novaPostagem
    if (tipo == "admin") {
        novaPostagem = <Box marginRight={1}>
            <ModalPostagem />
        </Box>
    }

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            history.push("/login")

        }
    }, [token])
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>

                <Grid alignItems="center" item xs={4}>
                    <img src={fotoPerfil} />
                </Grid>


                <Grid item xs={8} >

                </Grid>
            </Grid>

        </>

    );
}

export default HomeLogin;