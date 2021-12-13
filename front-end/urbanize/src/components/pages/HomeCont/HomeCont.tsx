import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './HomeCont.css';

export default function HomeCont() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={9} className='imagem5'></Grid>
                <Grid item xs={3}>
                    <Box paddingX={2} >
                        <Typography className='font2' variant="h3" gutterBottom color="textPrimary" component="h3" align="right" style={{ color: "#424242", fontWeight: "bold" }}>NÓS ACREDITAMOS QUE INICIATIVAS PRIVADAS PODEM REVITALIZAR ESPAÇOS PÚBLICOS.</Typography>
                        <Typography className='font2' variant="h6" gutterBottom color="textPrimary" component="h6" align="right" style={{ color: "#424242", fontWeight: "bold" }}>SAIBA MAIS</Typography>
                    </Box>
                </Grid>
               
            </Grid>
        </>
    );
}