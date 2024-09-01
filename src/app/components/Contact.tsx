import React from 'react'

export const Contact:React.FC = () => {
    return <div className="h-52 pt-8 flex justify-around w-full">
        <div className="float-left w-1/2 px-5 h-full max-w-96">
            <div className="flex flex-col justify-between h-full">
                <label className="input input-bordered flex items-center gap-2 text-base">
                    <input type="text" className="grow" placeholder="Name" />
                </label>
                <label className="input input-bordered flex items-center gap-2 text-base">
                    <input type="text" className="grow" placeholder="Email" />
                </label>
                <label className="input input-bordered flex items-center gap-2 text-base">
                    <input type="text" className="grow" placeholder="Phone" />
                </label>
            </div>
        </div>
        <div className="float-left w-1/2 px-5 h-full">
            <div className="h-full flex flex-col">
                <textarea placeholder="Bio" className="textarea textarea-bordered textarea-md w-full max-w-96 text-base box-border pb-[40%] resize-none"></textarea> 
                {/* fix the width and height */}
            </div>
        </div>
    </div>
}

export default Contact