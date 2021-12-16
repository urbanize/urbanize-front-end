import React, { } from 'react'
import { Typography, Box, Grid, } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './SobreNos.css';


function SobreNos() {
    return (
        <>
            <Grid>
                <Grid xs={12}  >
                    <Grid container justifyContent="center">
                        <Grid item xs={6}>
                            <Box paddingTop={10} >
                                <img src="https://i.imgur.com/mqC0VS2.png" alt="logo urbanize" style={{ width: "100vh", height: "20vh" }} />
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={6}>
                            <Box className='box-texto'>
                                <Typography variant='h3' component='h3' align='center'>
                                    O que é?
                                </Typography>
                                <Typography>
                                    Baseada na ODS 11 – Cidades e Comunidades Sustentáveis da ONU,
                                    Criamos uma rede social com o objetivo de conectar pessoas através de um objetivo comum: dar vida e ocupar espaços públicos urbanos.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className='box-texto'>
                                <Typography variant='h3' component='h3' align='center'>
                                    Como?
                                </Typography>
                                <Typography>
                                    Por meio da divulgação de iniciativas individuais e de coletivos, nossa API irá conectar pessoas e/ou empresas que buscam atuar de forma ativa na promoção de revitalização e ações de resgate da qualidade de vida em parques e praças.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className='box-texto'>
                                <Typography variant='h3' component='h3' align='center'>
                                    Para Quem?
                                </Typography>
                                <Typography>
                                    A Promoção de espaços públicos seguros e acessíveis é para todes, principalmente para crianças, mulheres, idosos e pessoas com deficiência.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className='box-texto'>
                                <Typography variant='h3' component='h3' align='center'>
                                    Missões e Valores:
                                </Typography>
                                <Typography>
                                    Estímulo à participação ativa da sociedade civil em políticas públicas;
                                    Identificação de agentes locais com maior facilidade na identificação de demandas e resolução de conflitos;
                                    Colaboração entre setor privado e sociedade civil;
                                    Controle e fiscalização das ações do poder público;
                                    Descentralização do poder público;
                                    Formalização de parcerias resulta em espaços públicos mais qualificados e melhora imagem do setor privado frente à sociedade.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid xs={12}>

                    <Box className='box-fotos'>

                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default SobreNos;
