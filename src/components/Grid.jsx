import React from 'react'
import { CloudinaryContext, Transformation, Image} from 'cloudinary-react'

function Grid(props) {
  return (
    <>
        <CloudinaryContext cloudName="dh9zsffcy">
        <div class="imgs">
                <div class="cards">
                    <Image publicId={props.id[0]} class="img" />
                    <div class="c-txt">
                        <h6>Desert king</h6>
                        <h6 class="l">1MBT per night</h6>
                        <h6>2345km away</h6>
                        <h6 class="l">available for 2weeks stay</h6>
                        <img src="img/Frame 59528Star.svg" alt="" />
                    </div>
                </div>
                
                <div class="cards">
                    <Image publicId={props.id[1]} class="img" />
                    <div class="c-txt">
                        <h6>Desert king</h6>
                        <h6 class="l">1MBT per night</h6>
                        <h6>2345km away</h6>
                        <h6 class="l">available for 2weeks stay</h6>
                        <img src="img/Frame 59528Star.svg" alt=""/>
                    </div>
                </div>
                
                <div class="cards">
                    <Image publicId={props.id[2]} class="img" />
                    <div class="c-txt">
                        <h6>Desert king</h6>
                        <h6 class="l">1MBT per night</h6>
                        <h6>2345km away</h6>
                        <h6 class="l">available for 2weeks stay</h6>
                        <img src="img/Frame 59528Star.svg" alt="" />
                    </div>
                </div>
                
                <div class="cards">
                    <Image publicId={props.id[3]} class="img" />
                    <div class="c-txt">
                        <h6>Desert king</h6>
                        <h6 class="l">1MBT per night</h6>
                        <h6>2345km away</h6>
                        <h6 class="l">available for 2weeks stay</h6>
                        <img src="img/Frame 59528Star.svg" alt="" />
                    </div>
                </div>




                
               
            </div>
            
            <div class="imgs">
                <div class="cards">
                    <Image publicId={props.id[4]} class="img" />
                    <div class="c-txt">
                        <h6>Desert king</h6>
                        <h6 class="l">1MBT per night</h6>
                        <h6>2345km away</h6>
                        <h6 class="l">available for 2weeks stay</h6>
                        <img src="img/Frame 59528Star.svg" alt="" />
                    </div>
                </div>
                
                <div class="cards">
                    <Image publicId={props.id[5]} class="img" />
                    <div class="c-txt">
                        <h6>Desert king</h6>
                        <h6 class="l">1MBT per night</h6>
                        <h6>2345km away</h6>
                        <h6 class="l">available for 2weeks stay</h6>
                        <img src="img/Frame 59528Star.svg" alt="" />
                    </div>
                </div>
                
                <div class="cards">
                    <Image publicId={props.id[6]} class="img" />
                    <div class="c-txt">
                        <h6>Desert king</h6>
                        <h6 class="l">1MBT per night</h6>
                        <h6>2345km away</h6>
                        <h6 class="l">available for 2weeks stay</h6>
                        <img src="img/Frame 59528Star.svg" alt="" />
                    </div>
                </div>
                
                <div class="cards">
                    <Image publicId={props.id[7]} class="img" />
                    <div class="c-txt">
                        <h6>Desert king</h6>
                        <h6 class="l">1MBT per night</h6>
                        <h6>2345km away</h6>
                        <h6 class="l">available for 2weeks stay</h6>
                        <img src="img/Frame 59528Star.svg" alt="" />
                    </div>
                </div>




                
               
            </div>
            </CloudinaryContext>
    </>
  )
}

export default Grid