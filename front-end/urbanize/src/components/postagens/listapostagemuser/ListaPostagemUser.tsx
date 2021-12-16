import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../pages/models/Postagem';
import { busca } from '../../pages/services/Service';
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom'
import './ListaPostagemUser.css';
import PostEmpty from './PostEmpty';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { UserState } from '../../../store/user/userReducer';

function ListaPostagemUser() {
    const [posts, setPosts] = useState<Postagem[]>([])
    let history = useHistory();

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );
    const tipo = useSelector<UserState, UserState["tipos"]>(
        (state) => state.tipos
    );
    const id = useSelector<UserState, UserState["ids"]>(
        (state) => state.ids
    );

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

    async function getPost() {
        await busca("/postagens", setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getPost()

    }, [posts.length])

    var botoes: string
    if (tipo != "admin") {
        botoes = "bottom-none"
    }

    return (
        <>
            {
                posts.forEach(post => {
                    if (post.usuario?.id === id){
                        <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Postagens
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {post.titulo}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {post.texto}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {post.tema?.descricao}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" className={botoes} mb={1.5}>
                                    <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' color="secondary">
                                                deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                    } else {
                        <PostEmpty/>
                    }
                })
            }
        </>
    );
}

export default ListaPostagemUser;