import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import krushna from './Krushna.jpeg'
import about from './about.png'
function About() {
    return (
        <div>
            <div className="firstdiv  mx-[75px] my-10 flex  ">
                <div className="about-1">
                    <p className='mt-10 ml-10 rounded-[10px] bg-customGray2 p-2 inline-block '  >About Fod-DSA</p>
                    <h1 className='text-[55px] font-bold ml-10 leading-[55px] font-sans w-[500px]'>Conquer Coding and Master DSA</h1>
                    <p className='ml-10 mt-5 text-grayText w-[500px] text-[20px] tracking-[1px]'>Fod-DSA is a platform that offers a wide range of Data Structures and Algorithms (DSA) challenges to help users improve their coding skills and master DSA concepts. Our goal is to provide a comprehensive and engaging learning experience for individuals at all levels, from beginners to advanced coders.</p>

                </div>
                <div className="about-2 w-[500px] ml-[150px]"><img src={about} alt="" className='w-[500px] h-[500px]' /></div>
            </div>
            <div className='mx-[75px]'>

                <h1 className='text-[30px] font-bold ml-10 mt-[130px]'>Welcome to Fod-DSA</h1>
                <p className='ml-10 mt-3 text-grayText tracking-[1px]'>Your one-stop destination for mastering Data Structures and Algorithms (DSA).</p>
                <h1 className='text-[30px] font-bold ml-10 mt-[30px]'>Our Mission</h1>
                <p className='ml-10 mt-3  tracking-[1px]'>At Fod-DSA, we believe that mastering DSA is the key to becoming a successful software engineer. Our mission is to empower you with the knowledge and skills needed to excel in coding interviews and build robust, efficient applications.</p>
            </div>

            <hr class="h-px  bg-gray-200 border-0 mt-20 dark:bg-gray-200"></hr>


                <h1 className='text-[30px] font-bold ml-10 mt-[30px]'>Created By </h1>
            <div className="mx-[75px] my-10 flex justfy-space">
                <p className='ml-10 mt-5 text-grayText w-[500px] text-[20px] tracking-[1px]'>I am a Self-motivated IT engineer from Pune, India, with strong problem-solving skills. A Full-Stack developer and SPPU graduate, I focus on improving my coding abilities and building WebApps and websites using the MERN stack. Passionate about creating Full-Stack projects and dedicated to personal skill growth..</p>
                <div className='flex  items-center ml-40'>
                    <img src={krushna}alt="" className='w-[140px] h-[150px] rounded-[10px]' style={{objectFit:'cover'}}/>
                    <div className='w-[400px] ml-[20px] leading-[29px]'>
                        <p className='font-bold'>Krushna Nagare</p>
                        <p className='text-grayText'>Software Engineer</p>
                        <div className='flex mt-3'>
                            <a href="https://www.linkedin.com/in/krushna-nagare/" target="_blank" rel="noopener noreferrer" className='mr-5'>
                                <FaLinkedin size={25}/>
                            </a>
                            <a href="https://github.com/krushnx" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={25}/>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            <hr class="h-px  bg-gray-200 border-0 mt-20 dark:bg-gray-200"></hr>

           

        </div>
    );
}
export default About;