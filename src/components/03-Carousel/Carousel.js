import { useEffect, useState } from "react";
import { CarouselStyle } from "./Carousel.style";
import ICON from "../Images/Icon.png"
import ICON1 from "../Images/Icon1.png"
import ICON2 from "../Images/Icon3.png"
const Carousel = () => {

  let [posCounter,setPosCounter] = useState(-1200)

  useEffect(()=>{

    setTimeout(()=>{

      posCounter<-1200?setPosCounter(0):setPosCounter(posCounter-300)
    },3000)


  },[posCounter])



  let textArr=[
  <img srcset={ICON} alt="" height="40%"/>,
  <img srcset={ICON1} alt="" height="40%"/>,
  <img srcset={ICON2} alt="" height="40%"/>,
  <img srcset={ICON} alt="" height="40%"/>,
  <img srcset={ICON} alt="" height="40%"/>,
  <img srcset={ICON1} alt="" height="40%"/>,
  <img srcset={ICON2} alt="" height="40%"/>,
  <img srcset={ICON} alt="" height="40%"/>,
  <img srcset={ICON} alt="" height="40%"/>,
  <img srcset={ICON1} alt="" height="40%"/>,
  <img srcset={ICON2} alt="" height="40%"/>,
  <img srcset={ICON} alt="" height="40%"/>,
]


  return ( 
    <CarouselStyle>
        
      <div className="CarouselConatiner">
        <h1 style={{textAlign:'left',marginTop:"10px"}}>1,907 producers & counting</h1>
        <main className="CarouselConatiner__Slider" style={{left:posCounter}}>
          {textArr.map((item)=>{
            return <p className="CarouselConatiner__Slider--Quotes">
            {item}
        </p>
          })}
        </main>

      </div>
    </CarouselStyle>
   );
}
 
export default Carousel;