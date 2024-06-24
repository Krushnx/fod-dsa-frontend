import React, { useContext } from 'react';
import logo1 from './logo1.png'
import './home.css'
import AuthContext from '../../context/authcontext';
function Navbar()
{

    const {loggedIn,user} = useContext(AuthContext);

    return(
        <div>
            <div className="navbar">
               <a href="/">
                 <div className="logo">{'{...} Fod-DSA'}</div>
                </a>
                {!loggedIn && <a href="/login">
                    <button className='button-5'>Sign up</button>
                </a> 
                }
                {loggedIn && <button className='button-5'>{user.name}</button>}
                
            </div>
        </div>
    );
}
export default Navbar;