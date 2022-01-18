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
                            <Box paddingTop={10}>
                                <img src="https://i.imgur.com/DhKsfz2.png?1" alt="logo urbanize" style={{ width: "100vh", height: "56vh" }} />
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={6}>
                            <Box className='box-texto' paddingRight={7} paddingLeft={7}>
                                <Box >
                                <Typography variant='h3' component='h3' align='center'>
                                    O que é?
                                </Typography>
                                </Box>
                                <Box paddingTop={2}>
                                <Typography className='espaco-letras'>
                                    Baseada na ODS 11 – Cidades e Comunidades Sustentáveis da ONU,
                                    Criamos uma rede social com o objetivo de conectar pessoas através de um objetivo comum: dar vida e ocupar espaços públicos urbanos.
                                </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className='box-texto' paddingLeft={7} paddingRight={7}>
                                <Box >
                                <Typography variant='h3' component='h3' align='center'>
                                    Como?
                                </Typography>
                                </Box>
                                <Box paddingTop={2}>
                                <Typography className='espaco-letras'>
                                    Por meio da divulgação de iniciativas individuais e de coletivos, nossa API irá conectar pessoas e/ou empresas que buscam atuar de forma ativa na promoção de revitalização e ações de resgate da qualidade de vida em parques e praças.
                                </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className='box-texto' paddingRight={7} paddingLeft={7}>
                                <Box >
                                <Typography variant='h3' component='h3' align='center'>
                                    Para quem?
                                </Typography>
                                </Box>
                                <Box paddingBottom={12} paddingTop={2}>
                                <Typography className='espaco-letras'>
                                    A Promoção de espaços públicos seguros e acessíveis é para todes, principalmente para crianças, mulheres, idosos e pessoas com deficiência.
                                </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className='box-texto' paddingLeft={7} paddingRight={7}>
                                <Box >
                                <Typography variant='h3' component='h3' align='center'>
                                    Objetivos
                                </Typography>
                                </Box>
                                <Box paddingTop={2}>
                                <Typography className='espaco-letras'>
                                    Estímulo à participação ativa da sociedade civil em políticas públicas;
                                    Identificação de agentes locais com maior facilidade na identificação de demandas e resolução de conflitos;
                                    Colaboração entre setor privado e sociedade civil;
                                    Controle e fiscalização das ações do poder público;
                                    Descentralização do poder público;
                                    Formalização de parcerias resulta em espaços públicos mais qualificados e melhora imagem do setor privado frente à sociedade.
                                </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center">
                    <Grid item xs={6} >
                        <Box paddingBottom={7} >
                            <Typography variant='h3' component='h3' align='center' className='box-texto'>
                                Quem faz a Urbanize?
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container xs={12} justifyContent='center' alignItems='center' >
                <Box justifyContent="center" alignItems="center">
                    <Box  justifyContent="center" alignItems="center" >
                            <img className='box-fotos' src="https://i.imgur.com/sYaKCkV.png" alt="Dev Andreia" />
                            </Box>
                            <Box >
                                <Typography variant='h5' component='h5' align='center'>
                                    Andreia Menezes
                                </Typography>
                                <Typography align='center'>
                                    Desenvolvedora Full Stack 
                                </Typography>
                                <Typography align='center'>
                                    Estudante de Biomedicina
                                </Typography>
                            </Box>
                        <Box alignItems="center" justifyContent="center"  className='box-icones' >
                            <a href=" https://github.com/AndreiaJM" target="_blank">
                                <GitHubIcon style={{ fontSize: 50, color: "#f99e29" }} />
                            </a>
                            <a href=" https://www.linkedin.com/in/andreiajeniffer/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "#f99e29" }} />
                            </a>
                        </Box>
                    
                    </Box>
                    <Box>
                    <Box justifyContent="center" alignItems="center">
                        <img className='box-fotos' src="https://i.imgur.com/pu8PzOP.png" alt="Dev Carlos" />
                    </Box>

                    <Box >
                                <Typography variant='h5' component='h5' align='center'>
                                    Carlos Botelho
                                </Typography>
                                <Typography align='center'>
                                    Desenvolvedor Full Stack 
                                </Typography>
                                <Typography align='center'>
                                    Arquiteto Urbanista
                                </Typography>
                            </Box>

                        <Box display="flex" alignItems="center" justifyContent="center" className='box-icones' >

                            <a href="https://github.com/botelhocarlos" target="_blank">
                                <GitHubIcon style={{ fontSize: 50, color: "#f99e29" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/carlos-henrique-botelho/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "#f99e29" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box>
                        <Box>
                        <img className='box-fotos' src="https://i.imgur.com/dAOvWUg.png" alt="Dev Renan" />
                        </Box>

                        <Box >
                                <Typography variant='h5' component='h5' align='center'>
                                    Renan Moreira
                                </Typography>
                                <Typography align='center'>
                                    Desenvolvedor Full Stack 
                                </Typography>
                                <Typography align='center'>
                                    Educador Fisico
                                </Typography>
                            </Box>

                        <Box display="flex" alignItems="center" justifyContent="center" className='box-icones'>

                            <a href=" https://github.com/RenanMoreira92" target="_blank">
                                <GitHubIcon style={{ fontSize: 50, color: "#f99e29" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/renan-moreira-518aa6188/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "#f99e29" }} />
                            </a>
                        </Box>
                    </Box>
                    
                    <Box>
                        <Box>
                        <img className='box-fotos' src="https://i.imgur.com/eqEohka.png" alt="Dev Thaís" />
                        </Box>

                        <Box >
                                <Typography variant='h5' component='h5' align='center'>
                                    Thaís Oliveira
                                </Typography>
                                <Typography align='center'>
                                    Desenvolvedora Full Stack 
                                </Typography>
                                <Typography align='center'>
                                    Engenheira de Produção
                                </Typography>
                            </Box>

                        <Box display="flex" alignItems="center" justifyContent="center" className='box-icones'>

                            <a href=" https://github.com/tholivera" target="_blank">
                                <GitHubIcon style={{ fontSize: 50, color: "#f99e29" }} />
                            </a>
                            <a href=" https://www.linkedin.com/in/thais-oliveira-2341a0147/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "#f99e29" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box>
                        <Box>
                        <img className='box-fotos' src="https://i.imgur.com/E6FvVWJ.png" alt="Dev Valter" />
                        </Box>

                        <Box >
                                <Typography variant='h5' component='h5' align='center'>
                                    Valter Silva
                                </Typography>
                                <Typography align='center'>
                                    Desenvolvedor Full Stack 
                                </Typography>
                                <Typography align='center'>
                                Estudante de Análise e Des. de Sist.
                                </Typography>
                            </Box>

                        <Box display="flex" alignItems="center" justifyContent="center" className='box-icones'>

                            <a href="https://github.com/valterchess" target="_blank">
                                <GitHubIcon style={{ fontSize: 50, color: "#f99e29" }} />
                            </a>
                            <a href=" https://www.linkedin.com/in/valter-silva-5a44b1171/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "#f99e29" }} />
                            </a>
                        </Box>
                    </Box>
                


                </Grid>
            </Grid>
        </>
    );
}

export default SobreNos;
