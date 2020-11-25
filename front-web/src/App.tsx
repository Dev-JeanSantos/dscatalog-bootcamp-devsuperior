import React from 'react';
import { ToastContainer } from 'react-toastify';
import './core/assets/styles/custom.scss';
import './app.scss';
import Routes from './Routes';


const App =() =>{
    return (
      <>
        <Routes/>
        <ToastContainer/>
      </>
      
    )
}

export default App;