import { Grid, Paper, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { Fragment } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormEditTicket from '../Components/EditTicket/FormEditTicket'
import LoggedBar from '../Components/Navbar/LoggedBar'
import { getFromId } from '../Services/UserServices'
import CookieManagement from '../Utils/CookieManagement'

const cookie = new CookieManagement();

export default function EditTicket() {

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
    <Fragment>
      <LoggedBar user={user} />
      <Container maxWidth="xl" sx={{mt: 4, mb: 4}}>
        <Grid container spacing={3} justifyContent="center"
  alignItems="center">

        <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography variant='h4' sx={{
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',}}>
                    Editar Reporte
                  </Typography>
                  <FormEditTicket/>
                </Paper>
        </Grid>

        </Grid>
        </Container>
    </Fragment>
  )
}
