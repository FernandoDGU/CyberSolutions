import { Grid, Paper, Typography } from '@mui/material'
import React, { Fragment, useEffect } from 'react'
import { useState } from 'react'
import { getInfoReportes } from '../../Services/ReporteService';

export default function InfoTickets(props) {
    const [infoTickets, setInfoTickets] = useState({});

    async function getInfoReportesFunction(){
        const res = await getInfoReportes(props.sucursal);
        setInfoTickets(res.data);
    }

    useEffect(()=>{
        getInfoReportesFunction()
    },[])


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
                        {infoTickets.abiertos}
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
                {infoTickets.cerrados}
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
                {infoTickets.totales}
                </Typography>
                </Paper>
                
            </Grid>
        </Grid>
    </Fragment>
  )
}
