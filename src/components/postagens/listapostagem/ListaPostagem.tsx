import React, { useState, useEffect } from 'react'
import { Link,  useHistory } from 'react-router-dom'
import Postagem from '../../pages/models/Postagem';
import { busca } from '../../pages/services/Service';
import { Box, Card, CardActions, CardContent, Button, Typography, withMobileDialog } from '@material-ui/core';
import './ListaPostagem.css';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { UserState } from '../../../store/user/userReducer';

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])
  let history = useHistory();

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );
  const tipo = useSelector<UserState, UserState["tipos"]>(
    (state) => state.tipos
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



  const arrPost = posts.filter(function (ele, pos) {
    return posts.indexOf(ele) === pos;
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
                  {post.titulo}
                </Typography>
                <Typography className="espaco-letras fonte-tema" variant="h6" component="p">
                  Tema: {post.tema?.tema}
                </Typography>
                <Box paddingTop={1}>
                  <Typography className='fonte-texto espaco-letras' component="p">
                    {post.texto}
                  </Typography>
                </Box>
                
                <Box paddingTop={1}>
                  <Typography className='espaco-letras fonte-endereco'>
                    {post.endereco}
                  </Typography>
                </Box>
                <Box paddingTop={1}>
                <img src={post.midia} className='foto-post' />
                </Box>
                
                <Box paddingTop={1}>
                  <Typography className='espaco-letras fonte-contato'>
                   Para ajudar, entre em contato comigo: {post.contato}
                  </Typography>
                </Box>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" className={botoes} mb={1.5}>
                  <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant='contained' className='botao2' >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button type='submit' variant='outlined' className='btnCancelar'>
                        deletar
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
  )
}

export default ListaPostagem;