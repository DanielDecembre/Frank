import React from 'react'
import Image from 'next/image';
import './nav.css'

function nav() {
  return (
    <div className="nav-container">
        <div className="navbar">
            <ul className="list">
                <li><a href='films'>films</a></li>
                <li><a href='objects'>objects</a></li>
                <li><a href='jictwe'>just in case the world ends</a></li>
            </ul>
            <div className="logo">
           <Image
           alt="Logo for Frank"
           src= '/Frankblanc.png'
           height={95}
           width={95}
           />
            </div>
        </div>
    </div>
  )
}

export default nav