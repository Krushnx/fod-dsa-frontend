import React, { useContext, useEffect, useRef, useState } from 'react';
import contact from './Mail-rafiki.png'
import AuthContext from '../../context/authcontext';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'


const ContactForm = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_7nl9mse', 'template_7l4tuqd', form.current, {
            publicKey: '9-Cp-g7n9wJZAPinR',
          })
          .then(
            () => {
              Swal.fire({
                title: "Send!",
                text: "Your mail send successfully !!!",
                icon: "success"
              });
              form.current.reset();
    
              console.log('SUCCESS!');
              
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    const { loggedIn, user } = useContext(AuthContext);



    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState( '');
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (loggedIn) {
            setFullName(user.name);
            setEmail(user.email);
        }
    }, [user]);
       
      

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Full Name:', fullName);
        console.log('Email:', email);
        console.log('Message:', message);
    };

    return (
        <div className="flex justify-around items-center h-[506px] bg-white">

            <div className="bg-white rounded-lg  w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Send us a message</h2>
                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="user_name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Black focus:border-Black sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="email"  className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input name="user_email"
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Black focus:border-Black sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                        name="message"
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-Black focus:border-Black sm:text-sm"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-black rounded-md shadow-sm hover:bg-black-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Black"
                        >
                            Send Now
                        </button>
                    </div>
                </form>
            </div>

            <img src={contact} className='h-[400px] w-[400px]' alt="" />
        </div>
    );
};

export default ContactForm;
