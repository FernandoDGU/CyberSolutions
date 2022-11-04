import React, { Fragment } from 'react'
import { Container, Grid, Paper, ThemeProvider, Typography } from '@mui/material'
import LoggedBar from '../Components/Navbar/LoggedBar'
import Chart from '../Components/Home/Chart'
import TicketTable from '../Components/Home/TicketTable'
import InfoTickets from '../Components/Home/InfoTickets'
import ChartBar from '../Components/Home/ChartBar'

export default function Home() {
  return (
    
    <Fragment >
        <LoggedBar/>
        <Container maxWidth="xl" sx={{mt: 4, mb: 4}}>
        <Grid container spacing={3}>

        <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 280,
                  }}
                >
                  <Typography variant='h5'>Inventario</Typography>
                  <ChartBar/>
                </Paper>
        </Grid>
       
        <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                 <InfoTickets/>
                </Paper>
        </Grid>

        <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <TicketTable/>
                </Paper>
        </Grid>

        </Grid>
        </Container>
    </Fragment>
  )
}
