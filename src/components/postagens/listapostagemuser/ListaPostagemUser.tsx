import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../pages/models/Postagem';
import { busca } from '../../pages/services/Service';
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom'
import './ListaPostagemUser.css';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { UserState } from '../../../store/user/userReducer';

function ListaPostagemUser() {
    let history = useHistory();

    const [posts, setPosts] = useState<Postagem[]>([])

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
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
        await busca(`/postagens`, setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getPost()

    }, [posts.length])

    var botoes: string
    const arrPost = posts.filter(function (ele, pos) {
        if (ele.usuario?.id === id) {
            return posts.indexOf(ele) === pos;
        }
    })

    arrPost.reverse();

    return (
        <>
            {
                arrPost.map(post => (
                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h5" component="h5" gutterBottom className='fonte-titulos'>
                                    Título: {post.titulo}
                                </Typography>
                                <Typography variant="h6" component="h6" gutterBottom className='fonte-titulos'>
                                    Responsável: {post.usuario?.nomeCompleto}
                                </Typography>
                                <Typography className='fonte-texto' variant="body2" component="p">
                                    Descrição do Projeto: {post.texto}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Local do Projeto: {post.endereco}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Tema: {post.tema?.descricao}
                                </Typography>
                                <img src={post.midia} className='foto-post' />
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" className={botoes} mb={1.5}>
                                    <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                                        <Box mx={1}>
                                            <Button variant='contained' className='botao2' >
                                                ATUALIZAR
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button type='submit' variant='outlined' className='btnCancelar'>
                                                DELETAR
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </>
    );
}

export default ListaPostagemUser;