import styled from "styled-components";

export const NavBarStyled = styled.header`
  
  width: 1200px;
  margin: 0px auto;
  @media only screen and (max-width: 1200px) {
  width: 100%;
  }
  & .subNav{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 30px;
    font-size: 0.6rem;
    background-color: #F9F9FA;
    color:#A7ABAB ;
    &-h3{
      margin-left: 10px;
    }
  }
  
  & .Nav{
    display: flex;
  justify-content: space-between;
  align-items: center;
    width: 100%;
    height: 80px;
  }

  & .Nav-image{
    margin-left: 30px;
  }

  & .Nav__Links{
    & .SignBtns{
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
    & .Nav__Links--Signin{
      background-color: grey;
      margin-left: 10px;
    }
  }
`