import React from 'react'

function Nav() {
  return (
    <header>
        <div class="logo">
                <img src="/img/Group.svg" alt="" />
        </div>
        <div class="burger">
            <div class="bi"></div>
        </div>
        <nav>
  
            <div class="menu">
                <ul>
                    <li>Home</li>
                    <li>Place to stay</li>
                    <li>NFTs</li>
                    <li>Community</li>
                </ul>
                <button>Connect to wallet</button>
            </div>
            
        </nav>
    </header>
  )
}

export default Nav