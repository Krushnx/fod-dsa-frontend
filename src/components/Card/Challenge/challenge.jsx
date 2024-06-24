import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import QuestionCard from './question-card';
import './challenge.css';

function Challenge() {
    const { challengeID } = useParams();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    // useEffect hook to fetch data when the component mounts
    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
            try {
                // Make the API call
                const response = await axios.get(`fod-dsa-backend.vercel.app/challenge/${challengeID}`);
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
                    <h1>{data.name}</h1>
                    {Object.entries(groupQuestionsBySection(data.questions)).map(([section, questions]) => (
                        <div key={section}>
                            <div className="space"></div>
                            <h2 className='Heading'>◉ {section}</h2>
                            {questions.map((items, index) => (
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
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Challenge;
