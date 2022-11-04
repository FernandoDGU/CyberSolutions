import { Grid, Paper, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { Fragment } from 'react'
import FormCreateCategory from '../Components/CreateCategory/FormCreateCategory'
import LoggedBar from '../Components/Navbar/LoggedBar'

export default function CreateCategory() {
  return (
    <Fragment>
      <LoggedBar/>
      <Container maxWidth="md" sx={{mt: 4, mb: 4}}>
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
                  <Typography variant='h4' sx={{fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',}}>
                    Crear Categoría
                  </Typography>
                  <FormCreateCategory/>
                </Paper>
        </Grid>

        </Grid>
        </Container>
    </Fragment>
  )
}
