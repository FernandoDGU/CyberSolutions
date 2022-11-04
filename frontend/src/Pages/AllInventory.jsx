import { Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select } from '@mui/material';
import React, { Fragment } from 'react'
import LoggedBar from '../Components/Navbar/LoggedBar'
import AddIcon from '@mui/icons-material/Add';
import { Container } from '@mui/system';
import AllTicketsTable from '../Components/AllTickets/AllTicketsTable';
import AllInventoryTable from '../Components/AllInventory/AllInventoryTable';
import { useNavigate } from 'react-router-dom';

export default function AllInventory() {
    const navigate = useNavigate();
    const [category, setCategory] = React.useState('');

  const handleCategory = (event) => {
    setCategory(event.target.value);
    navigate('/ver-inventarios?categoria=' + event.target.value);
  };
  return (
    <Fragment>
        <LoggedBar/>
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
                                <MenuItem value={'Soporte Técnico'}>Soporte Técnico</MenuItem>
                                <MenuItem value={'Inventario'}>Inventario</MenuItem>
                                <MenuItem value={'No sé'}>No sé</MenuItem>
                            </Select>
                        </FormControl>
                </Paper>
            </Grid>
            <Grid item xs={3}>

            </Grid>
            <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <AllInventoryTable  tableTitle='Todo el inventario'/>
                </Paper>
        </Grid>
        </Grid>
        </Container>
        
    </Fragment>
  )
}
