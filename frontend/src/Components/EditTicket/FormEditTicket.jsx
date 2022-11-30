import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom';

export default function FormEditTicket() {
  const navigate = useNavigate();
  const navigateURL = url => () =>{
    navigate(url)
  }
    const [category, setCategory] = React.useState('');

    const handleCategory = (event) => {
      setCategory(event.target.value);
    };
  return (
    <Fragment>
        <Grid container >
            <Grid xs={12} my={5}>
            <TextField id="filled-basic" label="Título del reporte " variant="filled" fullWidth/>
            </Grid>
            <Grid xs={12} my={5}>
            <TextField
          id="filled-multiline-static"
          label="Descripción del reporte"
          multiline
          rows={4}
          variant="filled"
          fullWidth
        />
            </Grid>
            <Grid xs={12} my={5}>
            <FormControl sx={{ m: 1, width: '40%' }}>
                <InputLabel id="demo-simple-select-autowidth-label">Selecciona categoría:</InputLabel>
                <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={category}
                onChange={handleCategory}
                autoWidth
                label="Selecciona categoría:"
                >
                <MenuItem value={'Soporte Técnico'}>Soporte Técnico</MenuItem>
                  <MenuItem value={'Inventario'}>Inventario</MenuItem>
                  <MenuItem value={'No sé'}>No sé</MenuItem>
                
                </Select>
            </FormControl>
            <Grid xs={12} mt={5} mb={2}>
            <Button fullWidth variant='contained' color='warning' onClick={navigateURL('/ver-ticket?id=123')}>Editar reporte</Button>
            </Grid>

            <Grid xs={12} mt={5} mb={2}>
            <Button fullWidth variant='contained' onClick={navigateURL('/')} color={"error"}>Eliminar Inventario</Button>
            </Grid>
            </Grid>
        </Grid>
        
        
    </Fragment>
  )
}
