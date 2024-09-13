import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });



    //event handlers
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch('/api/SMS', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (result.success) {
            alert('Message sent successfully!');
            setFormData({ fullName: '', email: '', message: '' });
        } else {
            alert('Message failed to send.');
        }
    };

    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="md:w-1/3 mb-4 md:mb-0 pl-4 md:pl-0">
                    <h3 className="text-xl font-bold">Contact Me</h3>
                    <p className="mt-2">
                        <FontAwesomeIcon style={{ fontSize: "25px" }} icon={faEnvelope} /> 
                        <a href="mailto:your-email@example.com" className="text-blue-400 ml-2">your-email@example.com</a>
                    </p>
                    <p className="mt-2">
                        <FontAwesomeIcon style={{ fontSize: "25px" }} icon={faPhone} />  
                        <a href="tel:+1234567890" className="text-blue-400 ml-2">+1234567890</a>
                    </p>
                    <div className="mt-2 flex space-x-4">
                        <a href="https://www.linkedin.com/in/amunozar/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                            <FontAwesomeIcon style={{ fontSize: "25px" }} icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/munozAndrew" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                            <FontAwesomeIcon style={{ fontSize: "25px" }} icon={faGithub} />
                        </a>
                    </div>
                </div>
                <div className="md:w-2/3 md:ml-4">
                    <section className="flex justify-center items-center">
                        <form className="w-full bg-white pt-6 px-6 pb-6 rounded-lg shadow-lg text-[#333]" onSubmit={handleSubmit}>
                            <h2 className="text-3xl text-center">Contact Form</h2>
                            <div className="mt-5">
                                <label>Full Name</label>
                                <input type="text" name="fullName" placeholder="Enter your name" required value={formData.fullName} onChange={handleChange} className="w-full h-12 bg-transparent  border-2 border-gray-300 outline-none rounded-md p-4 text-base text-[#333] mt-2"/>
                            </div>
                            <div className="mt-5">
                                <label>Email Address</label>
                                <input type="email" name="email" placeholder="Enter your Email" required value={formData.email} onChange={handleChange} className="w-full h-12 bg-transparent  border-2 border-gray-300 outline-none rounded-md p-4 text-base text-[#333] mt-2"/>
                            </div>
                            <div className="mt-5">
                                <label>Message</label>
                                <textarea name="message" placeholder="Enter your message" required value={formData.message} onChange={handleChange} className="resize-none w-full h-48 bg-transparent border-2 border-gray-300 outline-none rounded-md p-4 text-base text-[#333] mt-2"/>
                            </div>
                            <button type="submit" className="w-full h-14 bg-purple-500 border-0 rounded-md shadow-lg font-medium mt-5">Send Message</button>
                        </form>
                    </section>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
