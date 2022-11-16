import React from 'react'
import Footer from '../components/Footer'
import Grid from '../components/Grid'
import Hero from '../components/Hero'
import Wallet from '../components/Wallet'

function Home() {
  return (
    <>
        <main>
            <Hero />
            <div class="sponsors">
                <img src="img/Group 4040.svg" alt="" />
                <img src="img/Group 59537.svg" alt="" />
                <img src="img/Frame 4041.svg" alt="" />
            </div>
            <section>
                <div class="g-txt">
                    <h4>Inspiration for your next adventure</h4>
                </div>
                <Grid id={['Frame_151_vubpca', 'Frame_151A_xvuxri', 'Frame_151B_a6dnqr', 'Frame_151C_dsgmmb', 'Frame_151D_jfvv83', 'Frame_151_13_csx0l6', 'Frame_151A_xvuxri', 'Frame_151G_cwaxo8' ]}/>
            </section>
            <section class="hero a" >
                <div class="txt">
                    <h2>Metabnb NFTs</h2>
                    <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                    <div class="search ">
                        
                        <button class="abtn">submit</button>
                    </div>
                </div>
                <div class="h-img">
                    <img src="/img/footer-image-1.webp" alt="" />
                </div>
            </section> 
            
        </main>
        <Footer />
        
    </>
  )
}

export default Home