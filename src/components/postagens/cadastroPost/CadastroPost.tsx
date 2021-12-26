import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroPost.css';
import { useHistory, useParams } from 'react-router-dom';
import Tema from '../../pages/models/Tema';
import Postagem from '../../pages/models/Postagem';
import User from '../../../components/pages/models/User';
import { busca, buscaId, post, put } from '../../pages/services/Service';
import { useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import { UserState } from '../../../store/user/userReducer';

function CadastroPost() {
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [temas, setTemas] = useState<Tema[]>([])
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );

    const idUser = useSelector<UserState, UserState["ids"]>((state) => state.ids);

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

    const [user, setUser] = useState<User>(
        {
            id: idUser,
            nomeCompleto: '',
            usuario: '',
            tipo: '',
            foto: '',
            senha: '',
            bio: '',
            endereco: ''
        })

    const [tema, setTema] = useState<Tema>(
        {
            id: 0,
            descricao: '',
            palavraChave: '',
            tema: ''
        })
    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        texto: '',
        contato: '',
        data: '',
        midia: '',
        endereco: '',
        tema: null,
        usuario: user
    })

    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: tema,
            usuario: user
        })
    }, [tema])

    useEffect(() => {
        getTemas()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function getTemas() {
        await busca("/temas", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdPostagem(id: string) {
        await buscaId(`postagens/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema,
            usuario: user
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Postagem atualizada com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {
            post(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Postagem cadastrada com sucesso', {
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
        back()

    }

    function back() {
        history.push('/posts')


    }

    return (
        <Container maxWidth="sm">
            <form onSubmit={onSubmit}>
                <Typography variant="h4" color="textSecondary" component="h4" align="center" >CADASTRAR NOVA POSTAGEM</Typography>
                <TextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="Título" variant="outlined" name="titulo" margin="normal" fullWidth />
                <TextField value={postagem.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="texto" label="Texto" name="texto" variant="outlined" margin="normal" fullWidth />
                <TextField value={postagem.contato} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="contato" label="E-mail (para contato referente ao projeto)" name="contato" variant="outlined" margin="normal" fullWidth />
                <TextField value={postagem.endereco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="endereco" label="Local do Projeto" name="endereco" variant="outlined" margin="normal" fullWidth />
                <TextField value={postagem.midia} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="midia" label="Link da foto (URL)" name="midia" variant="outlined" margin="normal" fullWidth />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/temas/${e.target.value}`, setTema, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            temas.map(tema => (
                                <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                        <Button type="submit" variant="contained" className='btn-cadastrar-post'>
                            Finalizar
                        </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroPost;