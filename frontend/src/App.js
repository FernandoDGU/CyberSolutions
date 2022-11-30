import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ShowTicket from './Pages/ShowTicket';
import AllTickets from './Pages/AllTickets';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import CreateTicket from './Pages/CreateTicket';
import EditTicket from './Pages/EditTicket';
import CreateCategory from './Pages/CreateCategory';
import EditCategory from './Pages/EditCategory';
import CreateBranchOffice from './Pages/CreateBranchOffice';
import EditBranchOffice from './Pages/EditBranchOffice';
import UserProfile from './Pages/UserProfile';
import AllInventory from './Pages/AllInventory';
import EditUser from './Pages/EditUser';
import CreateInventory from './Pages/CreateInventory';
import EditInventory from './Pages/EditInventory';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/ver-ticket" element={<ShowTicket/>}/>
        <Route exact path="/ver-tickets" element={<AllTickets/>}/>
        <Route exact path="/ver-inventarios" element={<AllInventory/>}/>
        <Route exact path="/iniciar-sesion" element={<SignIn/>}/>
        <Route exact path="/registrar-usuario" element={<SignUp/>}/>
        <Route exact path="/editar-usuario" element={<EditUser/>}/>
        <Route exact path="/crear-reporte" element={<CreateTicket/>}/>
        <Route exact path="/editar-reporte" element={<EditTicket/>}/>
        <Route exact path="/crear-categoria" element={<CreateCategory/>}/>
        <Route exact path="/editar-categoria" element={<EditCategory/>}/>
        <Route exact path="/crear-sucursal" element={<CreateBranchOffice/>}/>
        <Route exact path="/editar-sucursal" element={<EditBranchOffice/>}/>
        <Route exact path="/crear-inventario" element={<CreateInventory/>}/>
        <Route exact path="/editar-inventario" element={<EditInventory/>}/>
        <Route exact path="/perfil" element={<UserProfile/>}/>
      </Routes>
    </Fragment>
  );
}

export default App;
