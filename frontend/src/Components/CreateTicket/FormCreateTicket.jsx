import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { Fragment } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCategorias } from '../../Services/CategoriaService';
import { createReporte } from '../../Services/ReporteService';

export default function FormCreateTicket(props) {
  const navigate = useNavigate();
  const navigateURL = url => () =>{
    navigate(url)
  }
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  const [ticket, setTicket] = useState({
      name: "",
      description: "",
      _user: "",
      state: "",
      _sucursal: "",
      _category: ""
  });



  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setTicket({
      ...ticket,
      name: data.get('name'),
      description: data.get('description'),
      _user: props.user._id,
      state: 'abierto',
      _sucursal: props.user._sucursal._id,
      _category: data.get('_category'),
    })
  };

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  async function getCategoriasFunction(){
    const res = await getCategorias();
    setCategories(res.data)
  }

  async function createReporteFunction(){
    const res = await createReporte(ticket);
    if(res.success){
      navigate('/ver-ticket?id=' + res.data._id)
    }
  }

  useEffect(() => {
    getCategoriasFunction();
      
    
  }, [])

  useEffect(() => {
    if(ticket.name != ""){
      createReporteFunction()
    }
      
    
  }, [ticket])

  return (
    <Fragment>
      <Box component={"form"} method={"POST"} onSubmit={handleSubmit}>
        <Grid container >
          
          <Grid xs={12} my={5}>
            <TextField id="filled-basic" label="Título del reporte " variant="filled" required name="name" fullWidth/>
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
                  {
                  categories.map((cat, index) => (
                    <MenuItem key={index} value={cat._id}>{cat.name}</MenuItem>
                  ))
                  }
                </Select>
            </FormControl>
            <Grid xs={12} my={5}>
            <TextField
          id="filled-multiline-static"
          label="Descripción del reporte"
          required
          multiline
          name="description"
          rows={4}
          variant="filled"
          fullWidth
        />
            </Grid>
            <Grid xs={12} my={0}>
            
            <Grid xs={12} mt={3} mb={2}>
            <Button type='submit' fullWidth variant='contained' /* onClick={navigateURL('/ver-ticket?id=123')} */>Crear reporte</Button>
            </Grid>
            </Grid>
          
        </Grid>
        </Box>
        
        
    </Fragment>
  )
}
