'use client'

import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa';

interface ContactResponse {
    message: string;
    ok: boolean;
}

const API_URL = 'https://api.atphoto.net/api/contact-form';

export const Contact:React.FC = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const responseData : ContactResponse = await response.json();

            if (responseData.message !== 'Contact added successfully') {
                alert(responseData.message);
            } else if (response.ok) {
                setIsSubmitted(true);
                form.reset();
                setTimeout(() => {
                    setIsSubmitted(false);
                }, 3000);
            } else {
                alert('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return <div className="h-[324px] px-2 sm:px-8 pt-8 w-full text-center max-w-xl md:max-w-2xl xl:max-w-[800px] mx-auto">
        <h1 className="text-black pb-0.5 text-[22px] text-xl leading-8 font-semibold">Contact Me</h1>
        <h2 className="text-black pb-4 text-[15px]">I&apos;ll get back to you as soon as I can. You can also reach me directly at <a href="mailto:anandtandon8@gmail.com" target="_blank" className="text-blue-500 hover:underline hover:text-blue-300 focus:underline focus:text-blue-300">anandtandon8@gmail.com</a>.</h2>
        <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center px-4 h-full w-full"
        >
            <div className="flex flex-row h-full w-full justify-center pb-6 ">
                <div className="w-1/2 pr-4 sm:pr-5 md:pr-7 max-w-lg">
                    <div className="flex flex-col justify-between h-full text-black">
                        <label className="input input-bordered flex items-center gap-2 text-base">
                            <input required name="name" type="text" className="grow" placeholder="Name*" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 text-base">
                            <input required name="email" type="text" className="grow" placeholder="Email*" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 text-base">
                            <input name="phone" type="text" className="grow" placeholder="Phone" />
                        </label>
                    </div>
                </div>
                <div className="w-1/2 max-w-lg">
                    <div className="h-full flex flex-col">
                        <textarea required name="message" placeholder="Message*" className="textarea textarea-bordered textarea-md w-full text-base flex-1 resize-none text-black"></textarea> 
                        {/* fix the width and height */}
                    </div>
                </div>
            </div>
            <div className="text-center w-32 md:w-40 pb-[56px]">
                <button 
                    type="submit" 
                    className={`btn btn-md w-full bg-neutral-700 hover:bg-neutral-500 btn-ghost text-white ${isSubmitted ? 'btn-success' : 'btn-primary'} disabled:opacity-80 transition-opacity duration-300`}
                    disabled={isSubmitted}
                >
                    {isSubmitted ? (
                        <FaCheck className="text-white" />
                    ) : (
                        'Submit'
                    )}
                </button>
            </div>
        </form>
    </div>
}

export default Contact