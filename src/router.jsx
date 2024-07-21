import React, { useContext } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import AuthContext from './context/authcontext';
import Home from './components/Home/Home';
import Register from './components/auth/register';
import Login from './components/auth/login';
import Challenge from './components/Card/Challenge/challenge';
import Navbar from './components/Home/Navbar';
import Payment from './components/Payment/Payment';
import Test from './components/Home/Test';
import About from './components/AboutUs/About';
import Footer from './components/Footer/Footer';
import ContactForm from './components/Contact/Contact';




function MyRouter() {

  const {loggedIn} = useContext(AuthContext);
  
    return (


        <Router>
            <Navbar />
            <Routes>

            <Route exact path='/' element={<Home />} />
            <Route exact path='/payment' element={<Payment />} />
            <Route exact path='/test' element={<Test />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<ContactForm />} />
         
            { loggedIn === false && <>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />     
            </>}
          { loggedIn === true && <>

          
            </>}
            <Route path="/challenge/:challengeID" element={<Challenge />} /> 

            
        </Routes>
            <Footer />
        </Router>
           
          );
}

export default MyRouter;
