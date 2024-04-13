import React, { useState } from "react";
import { useSpring, animated } from 'react-spring';
import InputField from "./InputField";
import TextareaField from "./TextAreaField";
import { ChevronRightIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import { SlArrowLeft } from "react-icons/sl";
import emailjs from 'emailjs-com';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import './Contact.css'

const ContactForm = () => {
    const [values, setValues] = useState({
        fullName: '',
        email: '',
        role: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [fullNameError, setFullNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const fadeIn = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(-50px)' },
        config: { tension: 580, friction: 250 },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            if (values.message.trim() === '') {
                setMessageError('Please enter a message');
                return;
            }
            emailjs.send('service_k4ccu27', 'template_h90zhhd', {
                from_name: values.fullName,
                reply_to: values.email,
                message: values.message
            }, 'FbfPUtQOIU8n5RvqR')
                .then(response => {
                    console.log('SUCCESS!', response);
                    setValues({
                        fullName: '',
                        email: '',
                        role: '',
                        message: ''
                    });
                    setStatus('SUCCESS');
                })
                .catch(error => {
                    console.log('FAILED...', error);
                });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));

        switch (name) {
            case 'fullName':
                setFullNameError(value.length > 50 ? 'Full name should be less than 40 characters' : '');
                break;
            case 'email':
                setEmailError(value.length > 50 ? 'Email should be less than 40 characters' : '');
                break;
            case 'message':
                setMessageError(value.length > 500 ? 'Message should be less than 200 characters' : value.trim() === '' ? 'Please enter a message' : '');
                break;
            default:
                break;
        }
    };

    const validateForm = () => {
        return fullNameError === '' && emailError === '' && messageError === '';
    };

    const renderAlert = () => (
        <div data-aos="fade-down" className="transition-opacity font-semibold duration-500 opacity-100 px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
            <p>We received your message. We will get back to you soon.</p>
        </div>
    );

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (

        <div className="contact-container">
            <div className="mobile-header">
                <div className="flex flex-col justify-center text-center lg:p-40 md:text-left">
                    <p data-aos="fade-down" className="uppercase font-medium opacity-40 text-white">Contact Us</p>
                    <h1 data-aos="fade-up" className="lg:text-6xl md:text-5xl text-white text-4xl">We want to hear from you</h1>
                </div>
            </div>
            <Link
                to="/menus"
                className="back-button hover:bg-gray-300 hover:text-gray-800 rounded-md p-2"
                style={{ transition: 'all 0.6s ease' }}>
                <SlArrowLeft />
            </Link>
            <animated.div style={fadeIn} className="contact-form">
                {status && renderAlert()}
                <form onSubmit={handleSubmit}>
                    <h3 className="text-gray-700 mb-7 text-xl font-semibold">Send me a message</h3>
                    <InputField
                        value={values.fullName}
                        handleChange={handleChange}
                        label="Full Name"
                        name="fullName"
                        type="text"
                        placeholder="John Doe"
                    />
                    {fullNameError && <span className="text-red-500">{fullNameError}</span>}
                    <InputField
                        value={values.email}
                        handleChange={handleChange}
                        label="E-Mail"
                        name="email"
                        type="email"
                        placeholder="valod@example.com"
                    />
                    {emailError && <span className="text-red-500">{emailError}</span>}
                    <TextareaField
                        value={values.message}
                        handleChange={handleChange}
                        label="Your message here"
                        name="message"
                    />
                    {messageError && (
                        <span className="text-red-500" style={{ marginRight: '10px' }}>{messageError}</span>
                    )}
                    <button
                        type="submit"
                        className="mt-  4 bg-gray-900 text-gray-200 rounded hover:bg-gray-700 active:bg-gray-800 px-4 py-2 focus:outline-none transition duration-300 ease-in-out"
                        disabled={status === 'SUCCESS'}
                    >
                        Send <ChevronRightIcon className="w-6 ml-2 float-right" />
                    </button>
                </form>
            </animated.div>
        </div>
    );
}

export default ContactForm;
