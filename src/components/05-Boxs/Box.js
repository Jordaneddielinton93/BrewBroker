import { BoxStyle } from "./Box.style";

const Boxs = ({direction,images,leftright,fadedirect}) => {
  return ( 
    <BoxStyle data-aos={`fade-${fadedirect}`}
    direction={direction} leftright={leftright}>
      <section className="leftSection" 
      style={{width:"50%",height:"100%"}}>
        <img alt="" srcset={images} className="images"/>
      </section>
      <section style={{width:"50%",height:"100%",background:"#232624"}}>
s
      </section>
    </BoxStyle>
   );
}
 
export default Boxs;