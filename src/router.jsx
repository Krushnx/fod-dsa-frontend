import React, { useContext } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import AuthContext from './context/authcontext';
import Home from './components/Home/Home';
import Register from './components/auth/register';
import Login from './components/auth/login';
import Challenge from './components/Card/Challenge/challenge';
import Navbar from './components/Home/Navbar';




function MyRouter() {

  const {loggedIn} = useContext(AuthContext);
  
    return (


        <Router>
            <Navbar />
            <Routes>

            <Route exact path='/' element={<Home />} />
         
            { loggedIn === false && <>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />     
            </>}
          { loggedIn === true && <>

          
            </>}
            <Route path="/challenge/:challengeID" element={<Challenge />} /> 
           

            
        </Routes></Router>
           
          );
}

export default MyRouter;
