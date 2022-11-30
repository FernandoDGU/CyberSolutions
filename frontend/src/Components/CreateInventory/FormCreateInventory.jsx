import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { Fragment } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FormCreateInventory() {
  const navigate = useNavigate();
  const [category, setCategory] = useState('');
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };
  const navigateURL = url => () =>{
    navigate(url)
  }
  return (
    <Fragment>
        <Grid container >
            <Grid xs={12} my={5}>
            <TextField id="filled-basic" label="Nombre del inventario" variant="filled" fullWidth/>
            </Grid>

            <FormControl sx={{ m: 1, width: '40%' }}>
                <InputLabel id="demo-simple-select-autowidth-label">Selecciona categoría:</InputLabel>
                <Select
                labelId="demo-simple-select-autowidth-label"
                required
                id="demo-simple-select-autowidth"
                value={category}
                name="_category"
                onChange={handleCategory}
                autoWidth
                label="Selecciona categoría:"
                >
                    <MenuItem  value={0}>INVENTARIO</MenuItem>
                    <MenuItem  value={1}>HARDWARE</MenuItem>
                    <MenuItem  value={2}>COMIDA</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ m: 1, width: '40%' }}>
                <InputLabel id="demo-simple-select-autowidth-label">Selecciona sucursal:</InputLabel>
                <Select
                labelId="demo-simple-select-autowidth-label"
                required
                id="demo-simple-select-autowidth"
                value={category}
                name="_category"
                onChange={handleCategory}
                autoWidth
                label="Selecciona categoría:"
                >
                    <MenuItem  value={0}>San Pedro</MenuItem>
                    <MenuItem  value={1}>San Nicolás</MenuItem>
                    <MenuItem  value={2}>Monterrey</MenuItem>
                </Select>
            </FormControl>

            <Grid xs={12} my={5}>
            <TextField id="filled-basic" type={"number"} label="Porcentaje: " variant="filled" defaultValue={100}/>
            </Grid>
            
            <Grid xs={12} mt={5} mb={2}>
            <Button fullWidth variant='contained' onClick={navigateURL('/')}>Crear Inventario</Button>
            </Grid>
        </Grid>
        
        
    </Fragment>
  )
}
