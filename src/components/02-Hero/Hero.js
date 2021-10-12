import { HeroStyled } from "./Hero.style";

const Hero = () => {
  return ( 
    <HeroStyled>
       
        <div class="bubbles">
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
        </div>

        <section className="Hero__Section">
          <article className="Hero__Section__Article">
            <h1 className="Hero__Section__Article--Title">
              BrewBroker
            </h1>

            <h3 className="Hero__Section__Article--subTitle">
              Smart Beer Procurement
            </h3>

            <p className="Hero__Section__Article--paragraph">
              Using data to connect buyers to brands and producers to suppliers from across the UK beer & cider industry.
            </p>
            <button className="Hero__Section__Article--SignBtns">Sign up</button>
          </article>
          
        </section>
        

    </HeroStyled>
   );
}
 
export default Hero;