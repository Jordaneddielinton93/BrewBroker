import styled from "styled-components";

export const HeroStyled = styled.main`

position: relative;
  height: 600px;
  width: 100%;
  margin: 0px auto;

  background: linear-gradient(5deg, #DD5B00, #DD5B00, white, white);
  background-size: 200% 200%;
  animation: gradient 15s ease infinite;


  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .bubbles{
  position:absolute;
  width:100%;
  height: 100%;
  z-index:0;
  overflow:hidden;
  top:0;
  left:0;
}
.bubble{
  position: absolute;
  bottom:-100px;
  width: 180px;
  height: 180px;
  background:white;
  border-radius:50%;
  opacity:0.5;
  animation: rise 10s infinite ease-in;
  -webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	border-radius: 50%;
	
    -webkit-box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
	-moz-box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
	box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
}

.bubble:after {
    background: -moz-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 70%); /* FF3.6+ */
    background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,rgba(255,255,255,0.5)), color-stop(70%,rgba(255,255,255,0))); /* Chrome,Safari4+ */
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%); /* Chrome10+,Safari5.1+ */
    background: -o-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%); /* Opera 12+ */
    background: -ms-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%); /* IE10+ */
    background: radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%); /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	border-radius: 50%;
	
    -webkit-box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);
	-moz-box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);
	box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);
	
	content: "";
    height: 180px;
	left: 10px;
	position: absolute;
	width: 180px;
}






.bubble:nth-child(1){
  width:40px;
  height:40px;
  left:10%;
  animation-duration:8s;
}
.bubble:nth-child(2){
  width:20px;
  height:20px;
  left:20%;
  animation-duration:5s;
  animation-delay:1s;
}
.bubble:nth-child(3){
  width:50px;
  height:50px;
  left:35%;
  animation-duration:7s;
  animation-delay:2s;
}
.bubble:nth-child(4){
  width:80px;
  height:80px;
  left:50%;
  animation-duration:11s;
  animation-delay:0s;
}
.bubble:nth-child(5){
  width:35px;
  height:35px;
  left:55%;
  animation-duration:6s;
  animation-delay:1s;
}
.bubble:nth-child(6){
  width:45px;
  height:45px;
  left:65%;
  animation-duration:8s;
  animation-delay:3s;
}
.bubble:nth-child(7){
  width:90px;
  height:90px;
  left:70%;
  animation-duration:12s;
  animation-delay:2s;
}
.bubble:nth-child(8){
  width:25px;
  height:25px;
  left:80%;
  animation-duration:6s;
  animation-delay:2s;
}
.bubble:nth-child(9){
  width:15px;
  height:15px;
  left:70%;
  animation-duration:5s;
  animation-delay:1s;
}
.bubble:nth-child(10){
  width:90px;
  height:90px;
  left:25%;
  animation-duration:10s;
  animation-delay:4s;
}
@keyframes rise{
  0%{
    bottom:-100px;
    transform:translateX(0);
  }
  50%{
    transform:translate(100px);
  }
  100%{
    bottom:1080px;
    transform:translateX(-200px);
  }
}



  .Hero__SignBtns{
    font-family: neuzeit-grotesk, sans-serif;
    display: inline-block;
    position: relative;
    text-align: center;
    transition: 0.3s;
    cursor: pointer;
    border: none;
    border-radius: 20px;
    min-width: 110px;
    color: white;
    font-size: 15px;
    padding: 0 30px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: -0.3px;
    background-color: #60CD8E;
  }

  & .Hero__Section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width:1200px;
    margin: 0 auto;
    height: 100%;
    text-align: left;
    @media only screen and (max-width: 1200px) {
    width: 100%;
    }
    &__Article{
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      width: 600px;
      height: 60%;
      margin-left: 30px;
      &--Title{
      font-size: 5rem;
      color: black;
        text-shadow: 1px 1px 2px #60CD8E;
      border-bottom: solid thick #60CD8E ;
      }
      &--subTitle{
        font-size: 3rem;
        color: black;
        text-shadow: 1px 1px 2px #60CD8E;
      }
      &--paragraph{
        font-size: 1.5rem;
        font-weight: 600;
      }
      &--SignBtns{
        font-family: neuzeit-grotesk, sans-serif;
    display: inline-block;
    position: relative;
    text-align: center;
    transition: 0.3s;
    cursor: pointer;
    border: none;
    border-radius: 20px;
   width: 100px;
    color: white;
    font-size: 15px;
    padding: 0 20px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: -0.3px;
    background-color: #60CD8E;
      }

    }
    
  }
`