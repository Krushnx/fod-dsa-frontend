import React, { useContext } from 'react';
import logo1 from './logo1.png'
import './home.css'
import mainbg from './mainbg.png'
import AuthContext from '../../context/authcontext';
import Hero from './Hero';
function Navbar() {

    const { loggedIn, user } = useContext(AuthContext);

    return (
        <div className='bg-black'>
            <div className="navbar text-white">
                <a href="/">
                    <div className="logo">{'</> Fod-DSA'}</div>
                </a>

                <div>
                    <a href="/#challenge" className='mx-6 navlink'>Challenges</a>
                    <a href="/leaderboard" className='mx-6 navlink'>Leaderboard</a>
                    <a href="/about" className='mx-6 navlink'>About Us</a>
                    <a href="/contact" className='mx-6 navlink'>Contact Us</a>
                    {!loggedIn && <a href="/login"><button className='button-5'>Sign up</button></a>}
                    {loggedIn && <button className='button-5'>{user.name}</button>}
                </div>

            </div>
               
            
        </div>
    );
}
export default Navbar;