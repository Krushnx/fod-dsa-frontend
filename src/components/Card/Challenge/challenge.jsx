import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import QuestionCard from './question-card';
import './challenge.css';
import link from '../../../backendlink';
import AuthContext, { AuthContextProvider } from '../../../context/authcontext';

function Challenge() {
    const { challengeID } = useParams();
    const { loggedIn ,user} = useContext(AuthContext);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    // useEffect hook to fetch data when the component mounts
    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
            try {
                // Make the API call
                const response = await axios.get(`${link}/challenge/${challengeID}`);
                // Store the data in the state
                setData(response.data);
                console.log("Main data --> " , data);
            } finally {
                // Set loading to false after the API call is completed
                setLoading(false);
            }
        };

        // Call the fetchData function
        fetchData();
    }, [challengeID]);

    const groupQuestionsBySection = (questions) => {
        return questions.reduce((acc, question) => {
            if (!acc[question.questionSection]) {
                acc[question.questionSection] = [];
            }
            acc[question.questionSection].push(question);
            return acc;
        }, {});
    };

    return (
        <div>
            {!loading && data && (
                <div className='list-question-card'>
                    <h1 className='text-[35px] mt-10 font-bold font-raleway'>{data.name}</h1>
                    
                    {Object.entries(groupQuestionsBySection(data.questions)).map(([section, questions]) => (
                        <div key={section}>
                            <div className="space"></div>
                            <h2 className='Heading'>{section}</h2>
                            {questions.map((items, index) => (
                                <div className='mt-2'>

                                <QuestionCard
                                    key={items._id}
                                    serialNumber={index + 1}
                                    name={items.questionName}
                                    gfg={items.gfg}
                                    leetcode={items.leetcode}
                                    solution={items.solution}
                                    level={items.difficulty}
                                    qID = {items._id}
                                    cID = {challengeID}
                                    statusArray = {items.solvedBy}
                                    />
                                    {/* <hr class="h-px  bg-gray-200 border-0 dark:bg-gray-700"></hr> */}
   
                                    </div>

                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Challenge;
