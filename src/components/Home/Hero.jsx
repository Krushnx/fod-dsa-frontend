import React from 'react';
import mainbg from './mainbg.png'
function Hero()
{
    return(
        <div className='h-screen text-white'>
            <div className="hero flex flex-row items-center justify-center">
                <div className='div-1'>
                    <h1 className='text-[60px] leading-[66px] ml-[75px] font-bold font-sans'>Conquer the Coding Challenge</h1>
                    <p className='font-ubuntu w-[550px] ml-[75px] text-[20px] mt-3 text-grayText'>Sharpen your problem-solving skills with our extensive collection of data structures and algorithms challenges.</p>

                    <a href="#challenge" className='ml-[70px] '>
                        <button className='px-5 py-2 bg-white mt-10 text-black font-sans rounded-[10px]'>Explore Challenges</button>
                    </a>
                </div>
                <div className='div-2 mr-20 mt-20'>
                    <img className='w-[500px]' src={mainbg} alt="" />
                </div>
            </div>
        </div>
    );
}
export default Hero;