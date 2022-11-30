import { Button, Container, Grid, Paper, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AllTicketsTable from '../Components/AllTickets/AllTicketsTable'
import LoggedBar from '../Components/Navbar/LoggedBar'
import UserData from '../Components/UserProfile/UserData'
import { getFromId } from '../Services/UserServices'
import CookieManagement from '../Utils/CookieManagement'

const cookie = new CookieManagement();

export default function UserProfile() {
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
  const navigateURL = url => () => {
    navigate(url)
  }
  return (
    <Fragment >
        <LoggedBar user={user} />
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
