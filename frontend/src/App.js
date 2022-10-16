import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </Fragment>
  );
}

export default App;
