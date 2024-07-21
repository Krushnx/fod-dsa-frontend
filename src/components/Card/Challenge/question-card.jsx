import React, { useContext, useState, useEffect } from 'react';
import './challenge.css';
import './checkbox.css';
import AuthContext from '../../../context/authcontext';
import Swal from 'sweetalert2';
import axios from 'axios';
import link from '../../../backendlink';
import code from './Coding (AI style).png'
import solution from './Coding.png'
function QuestionCard(props) {

    const classname = 'level ' + 'level-' + props.level;
    const { loggedIn, user } = useContext(AuthContext);
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        if (user && props.statusArray) {
            setIsChecked(props.statusArray.includes(user._id));
        }
    }, [user, props.statusArray]);

    const handleStatusChange = async () => {
        if (!loggedIn) {
            Swal.fire({
                title: 'Please Sign up to continue',
                icon: 'error',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sign up',
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location = '/login';
                }
            });
            setIsChecked(false);
        } else {
            setIsChecked(!isChecked);
            try {
                await axios.put(`${link}/challenge/${props.cID}/questions/${props.qID}/solve`, {
                    userId: user._id
                });

                // Optionally, you can update your UI state or perform additional actions here
            } catch (error) {
                console.error('Error marking question as solved:', error);
                // Handle error state or display error message
            }
        }
    };

    return (
        <div className="question-card bg-customGray">
            <div className="status">
                <div className="checkbox-wrapper-31">
                    <input type="checkbox" checked={isChecked} onClick={handleStatusChange} readOnly />
                    <svg viewBox="0 0 35.6 35.6">
                        <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
                        <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                        <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                    </svg>
                </div>
            </div>
            <h2 className='text-black text-[20px] font-bold'>{props.serialNumber}. &nbsp;{props.name}</h2>
            <div className="question-links">
                <div className={classname}>{props.level}</div>
                {/* <a href={props.gfg} target='_unset'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/GeeksforGeeks.svg/2560px-GeeksforGeeks.svg.png" alt="gfg" /></a> */}
                <a href={props.leetcode} target='_unset'><img src={code} alt="Leetcode" /></a>
                <a href={props.solution} className='solution' target='_unset'><img src={solution} alt="Solution" /></a>
            </div>
            
        </div>
    );
}

export default QuestionCard;
