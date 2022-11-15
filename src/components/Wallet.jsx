import React from 'react'

function Wallet(props) {
    
  return (
    <section class="wallet" open={ props.x }>
        
        <div class="sec">
            <div class="top">
                <h3>Connect wallet</h3>
                <p onClick={props.close}>x</p>
            </div>
            <hr />
            <div class="bottom">
                <h5>choose preferred wallet</h5>
                <div class="ws">
                    <img src="img/Frame 195.svg" alt="" />
                    <img src="img/VectorArr.svg" alt="" class="arr" />
                </div>
                <div class="ws c">
                    <img src="img/WC.svg" alt="" />
                    <img src="img/VectorArr.svg" alt="" class="arr" />
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Wallet