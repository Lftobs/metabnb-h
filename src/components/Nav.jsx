import React from 'react'
import { Outlet, Link } from 'react-router-dom'


function Nav() {
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
  
            <div class="menu">
                <ul>
                    <Link to="/" ><li>Home</li></Link>
                    <Link to="/places" ><li>Place to stay</li></Link>
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