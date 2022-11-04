import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

export default function FormCreateBranchOffice() {
    const navigate = useNavigate();
    const navigateURL = url => () =>{
      navigate(url)
    }
  return (
    <Fragment>
        <Grid container >
            <Grid xs={12} my={5}>
            <TextField id="filled-basic" label="Nombre de la sucursal " variant="filled" fullWidth/>
            </Grid>
            
            <Grid xs={12} mt={5} mb={2}>
            <Button fullWidth variant='contained' onClick={navigateURL('/')}>Crear Sucursal</Button>
            </Grid>
        </Grid>
        
        
    </Fragment>
  )
}
