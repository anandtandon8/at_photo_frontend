import React from 'react'

export const Navbar:React.FC = () => {
    return <div className="navbar bg-base-100 bg-white flex items-center justify-center">
    <div className="flex justify-center items-center">
      <ul className="menu menu-horizontal px-1 text-base">
        <li><a className="text-black">Link</a></li>
        <li>
          <details>
            <summary className="bg-white text-black">Parent</summary>
            <ul className="bg-white bg-base-100 rounded-t-none p-2">
              <li><a className="text-black">Link 1</a></li>
              <li><a className="text-black">Link 2</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
}

export default Navbar