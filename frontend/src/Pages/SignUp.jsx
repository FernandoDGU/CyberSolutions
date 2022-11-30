import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, InputLabel, MenuItem, Paper, Select } from '@mui/material';
import LoggedBar from '../Components/Navbar/LoggedBar';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { createUser, getFromId } from '../Services/UserServices';
import { getSucursales } from '../Services/SucursalServices';
import Footer from '../Components/Footer';
import CookieManagement from '../Utils/CookieManagement';

const cookie = new CookieManagement();

const theme = createTheme();

export default function SignUp() {
    const [user, setUser] = useState({
      name: "",
      email: "",
      password: "",
      phoneNumber: "",
      phone: "",
      userType: "",
      _sucursal: "",
    })

    const [userDB, setUserDB] = useState({})

    const [sucursales, setSucursales] = useState([]);
    const [sucursal, setSucursal] = React.useState('');
    const navigate = useNavigate();

  const handleSucursal = (event) => {
    setSucursal(event.target.value);
  };
    const handleSubmit = url => (event) => {
        event.preventDefault();
        document.getElementById("email-error").textContent = "";
        const data = new FormData(event.currentTarget);
        setUser({
          name: data.get('name'),
          email: data.get('email'),
          password: data.get('password'),
          phoneNumber: data.get('phone'),
          phone: data.get('phone'),
          userType: "0",
          _sucursal: data.get('sucursal'),
        })
        
        //navigate(url);
      };

      async function createUserFunction(){
        const res = await createUser(user);
        if(res.success){
          navigate('/perfil?id=' + res.data._id)
        }else{
          document.getElementById("email-error").textContent = res.response.data.message;
        }
      }

      async function getSucursalesFunction(){
        const res = await getSucursales();
        if(res.success){
          setSucursales(res.data);
        }
      }

      async function getFromIdFunction(id){
        const res = await getFromId(id);
        setUserDB(res.data);
      }

      useEffect(() => {
        const id = cookie.getCookie("id");
        if(id){
          getFromIdFunction(id)
          getSucursalesFunction();
        }else{
          navigate('/iniciar-sesion');
        }

        
        
      }, [])

      useEffect(() => {
        if(user.email !== ""){
          createUserFunction();
        }
          
        
      }, [user])
      if (!Object.keys(userDB).length) return (<h1></h1>)
  return (
    <ThemeProvider theme={theme}>
      <LoggedBar user={userDB} />
        
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
          <Box component="form" method='POST' onSubmit={handleSubmit('/perfil?id=12')} sx={{ mt: 1 }}>
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
              type="email"
              fullWidth
              id="email"
              label="Introduce el correo electrónico"
              name="email"
              autoComplete="email"
            />
             <Typography id="email-error" variant="caption" color={"red"}></Typography>
            <TextField
              margin="normal"
              inputProps={{ maxLength: 10, minLength:10 }}
              type="text"
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
              inputProps={{ minLength: 8 }}
              fullWidth
              name="password"
              label="Introduce la contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Typography variant='caption'>Mínimo 8 caracteres</Typography>
            <br />
            <FormControl sx={{ m: 1, width: '60%' }}>
                <InputLabel id="demo-simple-select-autowidth-label">Selecciona sucursal:</InputLabel>
                <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={sucursal}
                onChange={handleSucursal}
                name="sucursal"
                autoWidth
                required
                label="Selecciona sucursal:"
                >

                {
                  sucursales.map((suc, index) => (
                    <MenuItem key={index} value={suc._id}>{suc.name}</MenuItem>
                ))
                }
                </Select>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              CREAR USUARIO
            </Button>

          </Box>
          </Paper>
        </Box>
               
        <Footer sucursal={userDB._sucursal.name} sx={{pt:4}} />
      </Container>
    </ThemeProvider>
  )
}
