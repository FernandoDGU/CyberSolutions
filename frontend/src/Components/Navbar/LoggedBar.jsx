import * as React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import CookieManagement from '../../Utils/CookieManagement';
import UserData from '../UserProfile/UserData';

const pages = ['Ver reportes', 'Ver inventario', 'Crear reporte'];
const settings = ['Perfil', 'Crear usuario', 'Salir'];
const settingsAdmin = ['Crear sucursal', 'Crear categoría'];

const cookie = new CookieManagement();

export default function LoggedBar(props) {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  console.log(props.user)

  const handleCloseNavMenu = page => () => {
    
    setAnchorElNav(null);
    switch(page){
      case 'Ver reportes':
        navigate('/ver-tickets');
      break;

      case 'Ver inventario':
        navigate('/ver-inventarios');
      break;

      case 'Crear reporte':
        navigate('/crear-reporte');
      break;

      default:
    }
  };

  const handleCloseUserMenu = setting => () => {
    setAnchorElUser(null);
    switch(setting){
      case 'Perfil':
        navigate('/perfil');
      break;

      case 'Salir':
        cookie.deleteCookie("id");
        cookie.deleteCookie("sucursal");
        navigate('/iniciar-sesion');
      break;

      case 'Crear usuario':
        navigate('/registrar-usuario');
      break;

      case 'Crear sucursal':
        navigate('/crear-sucursal');
      break;

      case 'Crear categoría':
        navigate('/crear-categoria');
      break;

      default:
    }
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CYBERSOLUTIONS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu(page)}>
                  <Typography textAlign="center" >{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CYBERSOLUTIONS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu(page)}
                sx={{ m: 2, color: 'white', display: 'block', fontWeight: 'bold'}}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleIcon sx={{ color: 'white' }}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
               {
                settingsAdmin.map((setting) => {
                  return props.user.userType === 1 ? (
                    <MenuItem key={setting} onClick={handleCloseUserMenu(setting)}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ) : ""
                })
              }
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
