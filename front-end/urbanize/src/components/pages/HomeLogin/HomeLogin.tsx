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
    // const tipo 
    const tipo = useSelector<UserState, UserState["tipos"]>(
        (state) => state.tipos
    );

    // adicione a var novaPostagem e coloque o if de validação de tipo para verificar se o usuário é admin
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
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        {novaPostagem}
                        {/* // coloque a novaPostagem */}
                        <Link to="/posts" className="text-decorator-none">
                            <Button variant="outlined" className='botao'>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default HomeLogin;