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
          
          <Grid id={['Frame_151D_jfvv83', 'Frame_151_13_csx0l6', 'Frame_151A_xvuxri', 'Frame_151G_cwaxo8', 'Frame_151_vubpca', 'Frame_151A_xvuxri', 'Frame_151B_a6dnqr', 'Frame_151C_dsgmmb']}/>
          <Grid id={['Frame_151_8_so6cbq', 'Frame_151_9_hg9vk2', 'Frame_151_10_dxhrg2', 'Frame_151_11_ibbfnh', 'Frame_151_12_lhibex', 'Frame_151_13_csx0l6', 'Frame_151_14_ockpy1', 'Frame_151E_s0it0w']}/>
        </section>
        <Footer />
    </>

  )
}

export default Place