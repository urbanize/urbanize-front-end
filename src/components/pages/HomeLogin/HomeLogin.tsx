import React, { useEffect } from 'react';
import { Typography, Box, Grid, Button, Card, CardContent } from '@material-ui/core';
import TabPostagem from '../../postagens/tabPostagem/TabPostagem';
import ModalPostagem from '../../postagens/modalPostagem/ModalPostagem';
import './HomeLogin.css';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserState } from '../../../store/user/userReducer';
import ListaPostagem from '../../postagens/listapostagem/ListaPostagem';

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

    const nome = useSelector<UserState, UserState["names"]>(
        (state) => state.names
    );

    const bio = useSelector<UserState, UserState["bios"]>(
        (state) => state.bios
    );

    const endereco = useSelector<UserState, UserState["enderecos"]>(
        (state) => state.enderecos
    );

    var fotoPerfil = foto
    if (foto == '') {
        fotoPerfil = "https://i.imgur.com/CYlpvZh.png"
    }

    var nomeUsuario = nome
    var enderecoUsuario = endereco
    var bioUsuario = bio

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
            <Grid container flex-direction="column" justifyContent="center" alignItems="center" className='page'>
                <Box className='alinharCards' paddingTop={5}>
                    <Grid alignItems="center" item xs={4}>
                        <Box className='box cardEstilo' paddingTop={7} paddingLeft={8} m={2}>
                            <Card >
                                <CardContent className='box' >
                                    <img src={fotoPerfil} className='fotoPerfil' />
                                    <Typography className='textoPerfil' variant="h5" component="h2" align='center' style={{ marginTop: 10 }}>
                                        {nomeUsuario}
                                    </Typography>
                                    <Typography className='textoPerfil' component="h6" align='center'>
                                        {enderecoUsuario}
                                    </Typography>
                                    <Typography className='textoPerfil' component="h6" align='center'>
                                        {bioUsuario}
                                    </Typography>

                                </CardContent>
                            </Card>
                            <Box my={2}>
                                <Box display='flex' justifyContent="center" className='alinharItens'>
                                    <ModalPostagem />
                                    <Link to="/postsuser" className="text-decorator-none">
                                        <Box mx={1}>
                                        <Button type='submit' variant='contained' className='btnPostagens'>
                                            MINHAS POSTAGENS
                                        </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid alignItems="center" item xs={8} >
                        <Box className='box' paddingRight={7}>
                            <ListaPostagem />
                        </Box>
                    </Grid>
                </Box>
            </Grid>

        </>

    );
}

export default HomeLogin;