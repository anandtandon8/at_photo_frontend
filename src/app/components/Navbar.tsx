import React from 'react'

export const Navbar:React.FC = () => {
    return <div className="navbar bg-base-100 bg-white flex items-center justify-center">
    <div className="flex justify-center items-center">
        <button className="btn btn-ghost text-black text-xl font-medium">David</button>
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn btn-ghost text-black text-xl font-medium m-1">Collection</div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow text-black text-xl bg-white font-medium">
            <li><div className="active:bg-white">hello</div></li>
            <li><div className="">hello</div></li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn btn-ghost text-black text-xl font-medium m-1">Blog</div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow text-black text-xl bg-white font-medium">
            <li><div className="active:bg-white">hello</div></li>
            <li><div className="">hello</div></li>
          </ul>
        </div>
    </div>
  </div>
}

export default Navbar