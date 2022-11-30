import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, InputLabel, MenuItem, Paper, Select } from '@mui/material';
import LoggedBar from '../Components/Navbar/LoggedBar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFromId } from '../Services/UserServices';
import { useEffect } from 'react';
import CookieManagement from '../Utils/CookieManagement';

const cookie = new CookieManagement();

const theme = createTheme();

export default function EditUser() {
  const [sucursal, setSucursal] = React.useState('');
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

  const handleSucursal = (event) => {
    setSucursal(event.target.value);
  };
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };
  return (
    <ThemeProvider theme={theme}>
      <LoggedBar user={user} />
        
      <Container component="main" maxWidth="xs">
      
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <Paper
                  sx={{
                    p: 2,
                    mt: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems:'center'
                    
                  }}
                >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            C
          </Avatar>
          <Typography
            variant="h6"
            noWrap
            sx={{
             
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CYBERSOLUTIONS
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Introduce el nombre"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Introduce el correo electrónico"
              name="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Introduce el celular"
              name="phone"
              autoComplete="phone"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Introduce la contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControl sx={{ m: 1, width: '60%' }}>
                <InputLabel id="demo-simple-select-autowidth-label">Selecciona sucursal:</InputLabel>
                <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={sucursal}
                onChange={handleSucursal}
                autoWidth
                label="Selecciona sucursal:"
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Twenty</MenuItem>
                <MenuItem value={21}>Twenty one</MenuItem>
                <MenuItem value={22}>Twenty one and a half</MenuItem>
                </Select>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color={"warning"}
            >
              EDITAR USUARIO
            </Button>

          </Box>
          </Paper>
        </Box>
               
        
      </Container>
    </ThemeProvider>
  )
}
