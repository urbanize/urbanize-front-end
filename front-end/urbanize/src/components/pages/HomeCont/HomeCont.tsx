import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './HomeCont.css';

export default function HomeCont() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={8}>
                <Box paddingLeft={7} >
					<img src="https://i.imgur.com/5iqyeXy.png" alt="" width='900px' height='600px'/>
					</Box>
                </Grid>
                <Grid item xs={4}>
                    <Box paddingRight={8}>
                        <Typography className='font2' variant="h3" gutterBottom color="textPrimary" component="h3" align="right" style={{ color: "#424242", fontWeight: "bold" }}>NÓS ACREDITAMOS QUE INICIATIVAS PRIVADAS PODEM REVITALIZAR ESPAÇOS PÚBLICOS.</Typography>
                        <Typography className='font2' variant="h6" gutterBottom color="textPrimary" component="h6" align="right" style={{ color: "#424242", fontWeight: "bold" }}>SAIBA MAIS</Typography>
                    </Box>
                </Grid>
               
            </Grid>
        </>
    );
}