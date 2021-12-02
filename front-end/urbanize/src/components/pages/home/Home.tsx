import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';

export default function Home() {
	return (
		<>
			<Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#f99e29" }}>
				<Grid  item xs={6}>
					<Box paddingX={20} >
						<Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#424242", fontWeight: "bold" }}>TRANSFORME HOJE A REALIDADE DE UM BAIRRO.</Typography>
						<Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>CONTE SUA HISTÓRIA OU ENCONTRE UMA PARA APOIAR.</Typography>
					</Box>
					<Box display="flex" justifyContent="center">
						<Box>
						<Link to='/cadastrar' className='text-decorator-none'>
							<Button className='bot'>COMECE AQUI</Button>
						</Link>
						</Box>
						<Box>
							<Button className='bot2'>NOS CONHEÇA MELHOR</Button>
						</Box>
					</Box>
				</Grid>
				<Grid item xs={6} >
					<img src="https://i.imgur.com/WewRlkd.png" alt="imagem abstrata de pessoas em público" width="600px" height="600px"/>
				</Grid>
				<Grid xs={12} style={{ backgroundColor: "white" }}>
				</Grid>
			</Grid>
		</>
	);
}