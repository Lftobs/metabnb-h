import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react'

function Nav() {
    const [isOpen, setCount] = useState(false)
  return (
    <>
    <header>
        <div class="logo">
                <Link to="/" ><img src="/img/Group.svg" alt="" /></Link>
        </div>
        <div class="burger">
            <div class="bi"></div>
        </div>
        <nav>
  
            <div class="menu" >
                <ul>
                    <Link to="/" ><li>Home</li></Link>
                    <li><Link to="/places" >Place to stay</Link></li>
                    <Link to="/" ><li>NFTs</li></Link>
                    <Link to="/" ><li>Community</li></Link>
                </ul>
                <button>Connect to wallet</button>
            </div>
            
        </nav>
         
    </header>
    <Outlet />
    </>
  )
}

export default Nav
