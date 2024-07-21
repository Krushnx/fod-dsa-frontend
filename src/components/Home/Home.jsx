import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import Card from '../Card/Card';
import link from '../../backendlink';
import Test from './Test';
import ChallengeCard from './Test';
import Hero from './Hero';
function Home()
{

    const [data , setData] = useState(null);
    const [loading, setLoading] = useState(true);

    // useEffect hook to fetch data when the component mounts
    useEffect(() => {
      // Function to fetch data
      const fetchData = async () => {
        try {
          // Make the API call
          const response = await axios.get(`${link}/challenge`);
          // Store the data in the state
          setData(response.data);
        
        } finally {
          // Set loading to false after the API call is completed
          setLoading(false);
        }
      };
  
      // Call the fetchData function
      fetchData();
    }, []); 


    return(
      <div>
        <div className='bg-black'>

      <Hero />
        </div>
      <div className="carddiv" id='challenge'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          data && data.map(item => (
            // <Card key={item.name} name={item.name} sections={item.sections} questions={item.questionCount} link={item._id} />
            <ChallengeCard title={item.name} sections={item.sections} questions={item.questionCount} link={item._id} imageSrc={item.imageSrc} description={item.desc}/>
            // <p>hiii</p>
          ))
        )}
      </div>
    </div>
    );
}
export default Home;