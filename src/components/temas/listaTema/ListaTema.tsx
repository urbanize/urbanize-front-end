import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography, Container } from '@material-ui/core';
import Tema from '../../pages/models/Tema';
import './ListaTema.css';
import { useHistory } from 'react-router-dom';
import { busca } from '../../pages/services/Service';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { UserState } from '../../../store/user/userReducer';

function ListaTema() {
    const [temas, setTemas] = useState<Tema[]>([])
    let history = useHistory();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );
    const tipo = useSelector<UserState, UserState["tipos"]>(
        (state) => state.tipos
    );

    useEffect(() => {
        if (token == '') {
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


    async function getTema() {
        await busca("/temas", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }


    useEffect(() => {
        getTema()
    }, [temas.length])

    var botoes: string
    if (tipo != "admin") {
        botoes = "bottom-none"
    }

    return (
        <>
            <Container maxWidth="xs">
                <Box paddingTop={7}>
                    {
                        temas.map(tema => (
                            <Box m={2} >
                                <Card >
                                    <Box display="flex" justifyContent="center">
                                        <CardContent>
                                            <Typography color="textSecondary">
                                                TEMA
                                            </Typography>
                                            <Typography variant="h5" component="h5">
                                                {tema.descricao}
                                            </Typography>
                                            <Typography>
                                                Palavra-Chave:  {tema.palavraChave}
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                    <Box display="flex" justifyContent="center" paddingBottom={1} className={botoes}>
                                        <CardActions>
                                            <Box display='flex'>
                                                <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                                                    <Box mx={1}>
                                                        <Button variant="contained" className="btn-atualizar-tema" size='small'>
                                                            ATUALIZAR
                                                        </Button>
                                                    </Box>
                                                </Link>
                                                <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                                                    <Box mx={1}>
                                                        <Button className='btn-deletar-tema' variant="contained" size='small'>
                                                            DELETAR
                                                        </Button>
                                                    </Box>
                                                </Link>
                                            </Box>
                                        </CardActions>
                                    </Box>
                                </Card>
                            </Box>
                        ))
                    }
                </Box>
            </Container>
        </>
    );
}


export default ListaTema;