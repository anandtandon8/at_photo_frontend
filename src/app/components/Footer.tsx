'use client'

import React, { useState } from 'react'
import MailLogo from "@/app/assets/logos/MailLogo.png"
import InstagramLogo from "@/app/assets/logos/InstagramLogo.png"
import { FaCheck } from 'react-icons/fa';

interface NewsletterResponse {
    message: string;
    ok: boolean;
}

const API_URL = 'https://api.atphoto.net/api/newsletter';

export const Footer:React.FC = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const email = formData.get('email');

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email}),
            });

            const data: NewsletterResponse = await response.json();

            if (data.message === 'Email already in newsletter') {
                alert('Email already signed up for newsletter');
            } else if (data.message === 'Missing required field(s)') {
                alert('Missing required field(s)');
            } else if (data.message === 'Invalid email address') {
                alert('Invalid email address');
            } else if (response.ok) {
                setIsSubmitted(true);
                form.reset();
                setTimeout(() => {
                    setIsSubmitted(false);
                }, 3000);
            } else {
                alert('Failed to subscribe. Please try again.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert('An error occurred. Please try again.');
        }
    }

    return <div className="">
        <footer className="footer bg-white text-base-content p-10 mt-10 justify-around md:justify-center md:gap-20 lg:gap-36 xl:gap-52">
            {/*<nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Cookie Policy</a>
                <a className="link link-hover">Privacy Policy</a>
                <a className="link link-hover">Terms of Use</a>
            </nav> */}
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4 !pt-0.5">
                    <a href="https://www.instagram.com/anand_t_photography/" target="_blank">
                        <img className="object-contain" src={InstagramLogo.src}/>
                    </a>
                    <a href="mailto:anandtandon8@gmail.com" target="_blank">
                        <img className="object-contain" src={MailLogo.src}/>
                    </a>
                </div>
                <aside className="pt-2.5">
                    <p>© {new Date().getFullYear()} Anand Tandon. All Rights Reserved.</p>
                </aside>
            </nav>
            <nav>
                <form
                    onSubmit={handleSubmit}
                >
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset>
                        <label className="label pt-0 pl-0">
                                <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input
                                required
                                type="text"
                                name="email"
                                placeholder="Email*"
                                className="input input-bordered join-item text-base bg-white" />
                            <button
                                type="submit"
                                className={`btn join-item w-[92px] bg-neutral-700 hover:bg-neutral-500 btn-ghost text-white ${isSubmitted ? 'btn-success' : 'btn-primary'} disabled:opacity-80 transition-opacity duration-300`}
                                disabled={isSubmitted}
                            >        
                                {isSubmitted ? (
                                        <FaCheck className="text-white" />
                                    ) : (
                                        'Subscribe'
                                    )}
                                </button>
                        </div>
                    </fieldset>
                </form>
            </nav>
        </footer>
    </div>
}

export default Footer