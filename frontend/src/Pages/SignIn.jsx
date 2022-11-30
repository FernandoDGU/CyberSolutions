import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CookieManagement from '../Utils/CookieManagement';
import { useEffect } from 'react';
import { LogIn } from '../Services/UserServices';

const cookie = new CookieManagement();

const theme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();

  useEffect(()=>{
    const id = cookie.getCookie("id");
    if(id){
      navigate('/');
    }else{
      
    }
  },[])

    const handleSubmit = url => (event) => {
        event.preventDefault();
        const loginError = document.getElementById("login-error");
        loginError.textContent = "";
        const data = new FormData(event.currentTarget);
        const logInData = {
          email: data.get("email"),
          password: data.get('password'),
        }

        async function LogInFunction(data){
          const res = await LogIn(data);
          if(res.success){
            cookie.setCookie("id", res.data._id);
            cookie.setCookie("sucursal", res.data._sucursal._id);
            navigate('/');
          }else{
            loginError.textContent = res.response.data.message;
          }
        }

        LogInFunction(logInData);
        //navigate(url);
      };

  return (
    <ThemeProvider theme={theme}>
        
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
          <Box component="form" onSubmit={handleSubmit('/')} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Introduce tu correo electrónico"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Introduce tu contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ENTRAR
            </Button>
            <Typography id="login-error" variant="caption" color={"red"}></Typography>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
          </Paper>
        </Box>
               
        
      </Container>
    </ThemeProvider>
  )
}
