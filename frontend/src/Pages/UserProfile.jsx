import { Button, Container, Grid, Paper, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import AllTicketsTable from '../Components/AllTickets/AllTicketsTable'
import LoggedBar from '../Components/Navbar/LoggedBar'
import UserData from '../Components/UserProfile/UserData'

export default function UserProfile() {
  const navigate = useNavigate();
  const navigateURL = url => () => {
    navigate(url)
  }
  return (
    <Fragment >
        <LoggedBar/>
        <Container maxWidth="xl" sx={{mt: 4, mb: 4}}>
        <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                 <UserData></UserData>
                </Paper>
                <Button fullWidth color='warning' variant='contained' onClick={navigateURL('/editar-usuario')}>Editar datos</Button>
            </Grid>
        <Grid item xs={12} md={6} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    
                  }}
                >
                  <AllTicketsTable  tableTitle='Reportes creados'/>

                </Paper>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    mt:5
                  }}
                >
                  <AllTicketsTable  tableTitle='Reportes comentados'/>
                </Paper>
            </Grid>

        </Grid>
        </Container>
    </Fragment>
  )
}
