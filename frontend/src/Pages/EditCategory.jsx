import { Grid, Paper, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { Fragment } from 'react'
import FormEditCategory from '../Components/EditCategory/FormEditCategory'
import LoggedBar from '../Components/Navbar/LoggedBar'

export default function EditCategory() {
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
                    Editar Categoría
                  </Typography>
                  <FormEditCategory/>
                </Paper>
        </Grid>

        </Grid>
        </Container>
    </Fragment>
  )
}
