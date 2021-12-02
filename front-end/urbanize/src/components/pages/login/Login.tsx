import { Box } from '@mui/system'
import React from 'react'
import Typography from '@mui/material/Typography'
import { Grid, Button } from '@mui/material'
import "./Login.css";
import { formatDiagnostic } from 'typescript';

function Login() {

    return (
        <Grid container className="background">
            <Grid item xs={12}>

                <Box display="flex" justifyContent="center" alignItems="center" height="80vh" >
                    <Box className="card" width={270} height="50vh" borderRadius={2} marginTop={12} display="flex" justifyContent="center" alignItems="center">
                        <Box >
                            <Typography variant="h5" color="#424242" align="center">
                                Entrar
                            </Typography>
                            <form>
                                <Box marginY={4}>
                                    <input type="text" className="color-input"
                                        placeholder="Email" />
                                </Box>

                                <Box marginY={4}>

                                    <input type="password" className="color-input"
                                        placeholder="Senha" />
                                </Box>
                            </form>
                            <Button variant="contained" color="secondary" className="botao">
                                    Login
                            </Button>  
                        </Box>
                    </Box>
                </Box>
            </Grid>

        </Grid>
    )
}

export default Login 