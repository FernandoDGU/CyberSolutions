import { Grid, Paper, Typography } from '@mui/material'
import React, { Fragment } from 'react'

export default function InfoTickets() {
  return (
    <Fragment>
        <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="flex-start"
            height={"100%"}
            width={"100%"}
        >
            <Grid item mb={2} width={"90%"}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        width : '100%',
                        backgroundColor: '#FFE1E1'
                        
                    }}
                    >
                    <Typography variant='h5' color={"red"} gutterBottom fontWeight={"bold"}>
                        Tickets Abiertos:
                    </Typography>
                    <Typography variant='h5' gutterBottom fontWeight={"bold"}>
                        12900912
                    </Typography>
                </Paper>
                
            </Grid>
            <Grid item mb={2} width={"80%"}>
            <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        width : '100%',
                        backgroundColor: '#EEF1FF'
                    }}
                    >
                    <Typography color={"blue"} gutterBottom fontWeight={"bold"}>
                    Tickets Cerrados:
                </Typography>

                <Typography gutterBottom fontWeight={"bold"}>
                    345354
                </Typography>
                </Paper>
                
            </Grid>
            <Grid item width={"80%"}>
            <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        width : '100%',
                        backgroundColor: '#CDF0EA'
                    }}
                    >
                    <Typography color={"green"} gutterBottom fontWeight={"bold"}>
                    Tickets Creados:
                </Typography>
                <Typography  gutterBottom fontWeight={"bold"}>
                    45345345
                </Typography>
                </Paper>
                
            </Grid>
        </Grid>
    </Fragment>
  )
}
