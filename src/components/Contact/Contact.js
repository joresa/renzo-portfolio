import React, { useState } from 'react'; 
//import './ContactForm.css';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState(''); 
    const [subject, setSubject] = useState(''); 
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => { e.preventDefault();
        console.log(name, email, subject, message); 
        setName(''); 
        setEmail(''); 
        setSubject(''); 
        setMessage(''); 
    };

    return (
        <div className="grid grid-cols-12">
            <div className="col-span-4 bg-red-100 min-h-200 py-5 px-5">
                <h2 className="contact-form-title text-3xl font-bold mb-4">Get in touch</h2>
            </div>
            <div className="contact-form-container col-span-8 bg-gray-100 min-h-200 py-5 px-5">

                <form className="contact-form space-y-4" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name *" value={name} onChange={(e) => setName(e.target.value)} required
                        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                    <input type="email" placeholder="Email *" value={email} onChange={(e) => setEmail(e.target.value)} required
                        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"/>
                    <input type="text" placeholder="Subject *" value={subject} onChange={(e) => setSubject(e.target.value)} required
                        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"/>
                    <textarea placeholder="Your message *" value={message} onChange={(e) => setMessage(e.target.value)} required
                        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" rows="4" ></textarea>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;