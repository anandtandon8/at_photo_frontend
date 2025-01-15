import React from 'react'
import MailLogo from "@/app/assets/logos/MailLogo.png"
import InstagramLogo from "@/app/assets/logos/InstagramLogo.png"


export const Footer:React.FC = () => {
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
                    action="https://formspree.io/f/mzzzwdgz"
                    method="POST"
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
                            <button type="submit" className="btn btn-primary join-item bg-neutral-700 hover:bg-neutral-500 btn-ghost text-white">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </nav>
        </footer>
    </div>
}

export default Footer