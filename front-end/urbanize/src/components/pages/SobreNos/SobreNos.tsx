import React, { } from 'react'
import { Typography, Box, Grid, } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './SobreNos.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function SobreNos() {
    return (
        <>
            <Grid>
                <Grid xs={12}  >
                    <Grid container justifyContent="center">
                        <Grid item xs={6}>
                            <Box >
                                <img src="https://i.imgur.com/iBcWVny.png" alt="logo urbanize" style={{ width: "100vh", height: "100vh" }} />
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
                <Grid container justifyContent="center">
                    <Grid item xs={6} >
                        <Box >
                            <Typography variant='h3' component='h3' align='center' className='box-texto'>
                                Quem faz a Urbanize?
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container xs={12} justifyContent='center' alignItems='center' >


                    <Grid item xs={4}>
                        <Box justifyContent="center" alignItems="center" >
                            <img className='box-fotos center' src="https://i.imgur.com/sYaKCkV.png" alt="Dev Andreia" />

                        </Box>
                        <Box paddingRight={8} display="flex" alignItems="center" justifyContent="center">
                        
                            <a href=" https://github.com/AndreiaJM" target="_blank">
                                <GitHubIcon style={{ fontSize: 50, color: "#f99e29" }} />
                            </a>
                            <a href=" https://www.linkedin.com/in/andreiajeniffer/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "#f99e29" }} />
                            </a>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <img className='box-fotos' src="https://i.imgur.com/pu8PzOP.png" alt="Dev Carlos" />
                        <Box paddingRight={8} display="flex" alignItems="center" justifyContent="center">

                            <a href="https://github.com/botelhocarlos" target="_blank">
                                <GitHubIcon style={{ fontSize: 50, color: "#f99e29" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/carlos-henrique-botelho/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "#f99e29" }} />
                            </a>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <img className='box-fotos' src="https://i.imgur.com/dAOvWUg.png" alt="Dev Renan" />
                        <Box paddingRight={8} display="flex" alignItems="center" justifyContent="center">

                            <a href=" https://github.com/RenanMoreira92" target="_blank">
                                <GitHubIcon style={{ fontSize: 50, color: "#f99e29" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/renan-moreira-518aa6188/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "#f99e29" }} />
                            </a>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <img className='box-fotos' src="https://i.imgur.com/eqEohka.png" alt="Dev Thaís" />
                        <Box paddingRight={8} display="flex" alignItems="center" justifyContent="center">

                            <a href=" https://github.com/tholivera" target="_blank">
                                <GitHubIcon style={{ fontSize: 50, color: "#f99e29" }} />
                            </a>
                            <a href=" https://www.linkedin.com/in/thais-oliveira-2341a0147/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "#f99e29" }} />
                            </a>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <img className='box-fotos' src="https://i.imgur.com/E6FvVWJ.png" alt="Dev Valter" />
                        <Box paddingRight={8} display="flex" alignItems="center" justifyContent="center">

                            <a href="https://github.com/valterchess" target="_blank">
                                <GitHubIcon style={{ fontSize: 50, color: "#f99e29" }} />
                            </a>
                            <a href=" https://www.linkedin.com/in/valter-silva-5a44b1171/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "#f99e29" }} />
                            </a>
                        </Box>
                    </Grid>


                </Grid>
            </Grid>
        </>
    );
}

export default SobreNos;
