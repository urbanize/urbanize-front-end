import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid, Toolbar } from '@material-ui/core';

export default function Footer() {
    return (
        <>
            <Grid container direction="row" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", backgroundColor: "#f99e29" }}>
                <Box paddingTop={1} paddingLeft={7} style={{ backgroundColor: "#f99e29", height: "60px" }}>
                    <Box>
                        <Typography variant="subtitle2" align="left" gutterBottom style={{ color: "white" }} >© 2020 Copyright:</Typography>
                    </Box>
                    <Box>
                        <a target="_blank" className='text-decorator-none2' href="https://brasil.generation.org">
                            <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center" >brasil.generation.org</Typography>
                        </a>
                    </Box>
                </Box>
                <Box paddingRight={8} display="flex" alignItems="center" justifyContent="center">
                    <a href="https://www.facebook.com/generationbrasil" target="_blank">
                        <FacebookIcon style={{ fontSize: 40, color: "white" }} />
                    </a>
                    <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                        <InstagramIcon style={{ fontSize: 40, color: "white" }} />
                    </a>
                    <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                        <LinkedInIcon style={{ fontSize: 40, color: "white" }} />
                    </a>
                </Box>

            </Grid>
        </>
    )
}