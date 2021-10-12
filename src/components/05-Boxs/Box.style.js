import styled from "styled-components";

export const BoxStyle = styled.div`
  display:flex;
  flex-direction: ${(props=>props.direction)};
  min-height: 400px;
  height: 400px;
  max-width: 100%;

  & .leftSection{
    overflow: hidden;
    position: relative;
  }

  & .images{
    position: absolute;
    height: 120%;
    
    top: 0;
    right: 0;
  }
 
`