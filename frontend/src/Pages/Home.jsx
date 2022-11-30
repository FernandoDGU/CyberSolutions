import React, { Fragment } from 'react'
import { Container, Grid, Paper, ThemeProvider, Typography } from '@mui/material'
import LoggedBar from '../Components/Navbar/LoggedBar'
import Chart from '../Components/Home/Chart'
import TicketTable from '../Components/Home/TicketTable'
import InfoTickets from '../Components/Home/InfoTickets'
import ChartBar from '../Components/Home/ChartBar'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CookieManagement from '../Utils/CookieManagement'
import { getFromId } from '../Services/UserServices'
import Footer from '../Components/Footer'

const cookie = new CookieManagement();

export default function Home() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  async function getFromIdFunction(id){
    const res = await getFromId(id);
    setUser(res.data);
  }

  useEffect(()=>{
    const id = cookie.getCookie("id");
    if(id){
      getFromIdFunction(id);
    }else{
      navigate('/iniciar-sesion');
    }
  },[])

  if (!Object.keys(user).length) return (<h1></h1>)
  
  return (
    
    <Fragment >
        <LoggedBar user={user} />
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
                 <InfoTickets sucursal={user._sucursal._id} />
                </Paper>
        </Grid>

        <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <TicketTable sucursal={user._sucursal._id} />
                </Paper>
        </Grid>

        </Grid>
        <Footer sucursal={user._sucursal.name} sx={{ pt: 4 }}/>
        </Container>
    </Fragment>
  )
}
