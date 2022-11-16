import React from 'react'
import '../assets/Place.css'
import Grid from '../components/Grid'
import Footer from '../components/Footer'

function Place() {
  return (
    <>
        <section class="p">
            <nav>
              <ul>
                <li>Resturant</li>
                <li>Cottage</li>
                <li>Castle</li>
                <li>fantast city</li>
                <li>beach</li>
                <li>Carbins</li>
                <li>Off-grid</li>
                <li>Farm</li>
                <li class="lil">Location <img src="/img/setting-5.svg" alt='' /></li>
              </ul>
              
            </nav>
        </section>
        <section class="pg">
          
          <Grid id={['/img/Frame 151 (1).svg', '/img/Frame 151 (2).svg', '/img/Frame 151 (3).svg', '/img/Frame 151.svg', '/img/Frame 151 (4).svg', '/img/Frame 151 (5).svg', '/img/Frame 151 (6).svg', '/img/Frame 151 (7).svg']}/>
          <Grid id={['/img/Frame 151 (8).svg', '/img/Frame 151 (10).svg', '/img/Frame 151 (11).svg', '/img/Frame 151 (12).svg', '/img/Frame 151 (13).svg', '/img/Frame 151 (14).svg', '/img/Frame 151A.svg', '/img/Frame 151 (7).svg']}/>
        </section>
        <Footer />
    </>

  )
}

export default Place