import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react'

function Nav() {
    const [open, setopen] = useState(false)
    const navOpen = () => {
        setopen(!open)
    }
  return (
    <>
    <header>
        <div class="logo">
                <Link to="/" ><img src="/img/Group.svg" alt="" /></Link>
        </div>
        <div class="burger">
            <div class="bi" onClick={navOpen}></div>
        </div>
        <nav>
  
            <div class="menu" opened={open ? "true":"false"}>
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/places" >Place to stay</Link></li>
                    <li><Link to="/" >NFTs</Link></li>
                    <li><Link to="/" >Community</Link></li>
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
