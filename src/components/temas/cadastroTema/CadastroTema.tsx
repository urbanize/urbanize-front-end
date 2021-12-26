import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button, Box, Grid } from "@material-ui/core"
import { useHistory, useParams } from 'react-router-dom'
import './CadastroTema.css';
import Tema from '../../pages/models/Tema';
import { buscaId, post, put } from '../../pages/services/Service';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { UserState } from '../../../store/user/userReducer';


function CadastroTema() {
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );
    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: '',
        palavraChave: '',
        tema: ''
    })

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

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/temas/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedTema(e: ChangeEvent<HTMLInputElement>) {

        setTema({
            ...tema,
            [e.target.name]: e.target.value,
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("tema " + JSON.stringify(tema))

        if (id !== undefined) {
            console.log(tema)
            put(`/temas`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Tema atualizado com sucesso', {
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
            post(`/temas`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Tema cadastrado com sucesso', {
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
        history.push('/temas')
    }

    return (
        <>
            <Grid className='bg-tema-cadastro'>
                <Box paddingTop={7}>
                    <Container maxWidth="xs">
                        <form onSubmit={onSubmit}>
                            <Typography variant="h5" color="textSecondary" component="h5" align="center" >CADASTRAR NOVO TEMA</Typography>
                            <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="Descrição" variant="outlined" name="descricao" margin="normal" fullWidth />
                            <TextField value={tema.palavraChave} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="palavraChave" label="Palavra-Chave" variant="outlined" name="palavraChave" margin="normal" fullWidth />
                            <TextField value={tema.tema} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="tema" label="Tema" variant="outlined" name="tema" margin="normal" fullWidth />
                            <Box display='flex' justifyContent='center'>
                                <Button type="submit" variant="contained" className='btn-finalizar'>
                                    Finalizar
                                </Button>
                            </Box>
                        </form>
                    </Container>
                </Box>
            </Grid>
        </>
    )
}

export default CadastroTema;