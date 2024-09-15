import React from 'react'

export const Contact:React.FC = () => {
    return <div className="h-[314px] pt-6 w-full text-center">
        <h1 className="text-black pb-0.5 text-[22px] text-xl leading-8 font-semibold">Contact Me</h1>
        <h2 className="text-black pb-3 text-[15px]">I'll get back to you as soon as I can. You can also reach me directly at <a href="mailto:anandtandon8@gmail.com" className="text-blue-500 hover:underline hover:text-blue-300 focus:underline focus:text-blue-300">anandtandon8@gmail.com</a>.</h2>
        <form
        action="https://formspree.io/f/mldrvrol"
        method="POST"
        className="flex flex-col justify-center items-center h-full w-full"
        >
            <div className="flex h-full w-full justify-center pb-5">
                <div className="float-left w-[40%] pr-5 h-full max-w-lg">
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
                <div className="float-left w-[40%] pl-5 h-full max-w-lg">
                    <div className="h-full flex flex-col">
                        <textarea required name="message" placeholder="Message*" className="textarea textarea-bordered textarea-md w-full text-base flex-1 resize-none text-black"></textarea> 
                        {/* fix the width and height */}
                    </div>
                </div>
            </div>
            <div className="text-center w-[18%] max-w-56 pb-[52px]">
                <button type="submit" className="btn btn-md w-full bg-neutral-700 hover:bg-neutral-500 btn-ghost text-white">Submit</button>
            </div>
        </form>
    </div>
}

export default Contact