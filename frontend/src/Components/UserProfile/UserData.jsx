import { Divider, Grid, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

export default function UserData() {
  
  return (
    <Fragment>
        <Grid container alignItems={"center"} alignContent={"center"} >
            <Grid item sx={{width:"100%", height:"40px", backgroundColor:"#B9E0FF", borderRadius:"5px"}} mb={5} xs={12}>
            <Typography textAlign={"center"} variant="h5" mt={1}>Darien Sánchez</Typography>
            </Grid>
            <Grid item mb={3} xs={12}>
            <Typography>Correo electrónico: sadarien@gmail.com</Typography>
            </Grid>
            <Grid item mb={3} xs={12}>
            <Typography>Teléfono: 8117949220</Typography>
            </Grid>
            <Grid item mb={3} xs={12}>
            <Typography>Sucursal: Buenas tardes</Typography>
            </Grid>

            <Grid item xs={12} my={3}>
            <Divider variant="middle"/>
            </Grid>

            <Grid item my={3} xs={12}>
            <Typography>Reportes creados: 13</Typography>
            </Grid>
            <Grid item mb={3} xs={12}>
            <Typography>Reportes cerrados: 6</Typography>
            </Grid>
        </Grid>
        
        
    </Fragment>
  )
}
