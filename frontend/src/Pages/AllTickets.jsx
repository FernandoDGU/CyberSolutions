import { Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select } from '@mui/material';
import React, { Fragment } from 'react'
import LoggedBar from '../Components/Navbar/LoggedBar'
import AddIcon from '@mui/icons-material/Add';
import { Container } from '@mui/system';
import AllTicketsTable from '../Components/AllTickets/AllTicketsTable';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { getFromId } from '../Services/UserServices';
import CookieManagement from '../Utils/CookieManagement';
import { getCategorias } from '../Services/CategoriaService';
import { getReporteFromSucursal, getReportesByCategory } from '../Services/ReporteService';

const cookie = new CookieManagement();

export default function AllTickets() {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [category, setCategory] = React.useState('');
    const [categories, setCategories] = useState([]);
    const [reportes, setReportes] = useState([]);
    const { search } = useLocation();
    const searchParams = new URLSearchParams((search));

  const handleCategory = (event) => {
    setCategory(event.target.value);
    navigate('/ver-tickets?categoria=' + event.target.value);
  };

  async function getFromIdFunction(id){
    const res = await getFromId(id);
    setUser(res.data);
  }

  async function getCategoriasFunction(){
    const res = await getCategorias()
    setCategories(res.data)
  }

  async function getReporteFromSucursalFunction(){
    const res = await getReporteFromSucursal(cookie.getCookie("sucursal"))
    setReportes(res.data)
  }

  async function getReportesByCategoryFunction(){
    const res = await getReportesByCategory(searchParams.get("categoria"), cookie.getCookie("sucursal"))
    setReportes(res.data)
  }

  useEffect(()=>{
    
    const id = cookie.getCookie("id");
    if(id){
      getFromIdFunction(id);
      getCategoriasFunction();
    }else{
      navigate('/iniciar-sesion');
    }
  },[])

  useEffect(()=> {
    if(user.sucursal !== ""){
      getReporteFromSucursalFunction()
    }
  }, [user])

  useEffect(()=> {
    if(searchParams.has("categoria")){
      getReportesByCategoryFunction()
    }
    
  }, [searchParams.get("categoria")])

  if (!Object.keys(user).length) return (<h1></h1>)

  return (
    <Fragment>
        <LoggedBar user={user} />
        <Container maxWidth="xl" sx={{mt: 4, mb: 4}}>
        <Grid container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"

        spacing={3}>
            <Grid item xs={3}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Categoría</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={category}
                            label="Categoria"
                            onChange={handleCategory}
                            >
                                {
                                  categories.map((cat, index) => (
                                    <MenuItem key={index} value={cat._id}>{cat.name}</MenuItem>
                                  ))
                                }
                            </Select>
                        </FormControl>
                </Paper>
                
            </Grid>
            <Grid item xs={3}>

            </Grid>
            <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <AllTicketsTable  tableTitle='Todos los tickets' data={reportes} />
                </Paper>
        </Grid>
        </Grid>
        </Container>
        
    </Fragment>
  )
}
