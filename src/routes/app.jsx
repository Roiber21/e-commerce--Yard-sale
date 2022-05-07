import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import { RecoveryPassword } from '../containers/RecoveryPassword';
import Checkout from '../pages/Checkout';
import CreateAccount from '../pages/CreateAccount';
import Home from '../pages/home';
import { Login } from '../pages/Login';
import MyAccount from '../pages/MyAccount';
import { NewPassword } from '../pages/NewPassword';
import NotFound from '../pages/NotFound';
import { Orders } from '../pages/Orders';
import { SendEmail } from '../pages/SendEmail';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState.js';

import '../styles/global.css'

const app = () => {
    
    const initialState = useInitialState();
    
    return (
      
      <AppContext.Provider value = {initialState}> 
        <HashRouter>
            <Layout>
                <Routes> 
                <Route  path='/' element={<Home/>}    />
                <Route  path='recovery-password' element={<RecoveryPassword/>}    />
                <Route  path='/CreateAccount' element={<CreateAccount/>} />
                <Route  path='//MyAccount' element={<MyAccount/>} />
                <Route  path='/Checkout' element={<Checkout/>} />
                <Route  path='/NewPassword' element={<NewPassword/>} />
                <Route  path='/Orders' element={<Orders/>} />
                <Route  path='/SendEmail' element={<SendEmail/>} />
                <Route  path='#/Login' element={<Login/>} />
                
                <Route  path='*' element={<NotFound/>} />
                </Routes>
            </Layout>
        </HashRouter>
       </AppContext.Provider>
    );
}

export default app;