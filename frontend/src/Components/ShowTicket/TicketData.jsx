import { Grid, Paper, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

export default function TicketData() {
    const navigate = useNavigate();
    const navigateURL = url => () => {
        navigate(url)
    }
  return (
    <Fragment>
        <Typography variant="subtitle2" gutterBottom>
            2022/10/23
        </Typography>
        <Grid container
        direction="column"
        justifyContent="center"
        alignItems="center"
        my={4}
        >
            <Grid item width={"100%"}>
            <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor:'#F9F9F9'
                  }}
                >
                 <a onClick={navigateURL('/perfil?id=' + '12')} href='javascript:void(0)'>
                    <Typography variant='h5' textAlign={"center"}>
                        Darien Sánchez
                    </Typography>
                </a>

                <Typography variant='subtitle1' textAlign={"center"} mt={1}>
                        sadarien@gmail.com
                </Typography>

                <Typography variant='subtitle2' textAlign={"center"} mt={1}>
                        81-17-94-92-20
                </Typography>
                </Paper>
                

                
                
            </Grid>
        </Grid>
        <Typography variant="subtitle1" gutterBottom mb={2}>
            Estado del ticket: <Typography color={"red"}>Abierto</Typography>
        </Typography>

        <Typography variant="subtitle1" gutterBottom mb={2}>
            Número de comentarios: <Typography>52</Typography>
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
            Último comentario de: <a onClick={navigateURL('/perfil?id=' + '12')} href='javascript:void(0)'><Typography>Darien Sánchez</Typography></a>
        </Typography>
    </Fragment>
  )
}
