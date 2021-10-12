import { NavBarStyled } from "./NavBar.style";
import bbLogo from "../Images/brewBrokerlogo.svg"
const NavBar = () => {
  return ( 
    <NavBarStyled>
      <nav className="subNav">
        <h3 className="subNav-h3">Buyer support</h3>
        <h3 className="subNav-h3">Producer support</h3>
        <h3 className="subNav-h3">BrewHub support</h3>
        <h3 className="subNav-h3">BrewFunder support</h3>
      </nav>
      <nav className="Nav">
        <img srcSet={bbLogo} alt="" className="Nav-image" />


        <div className="Nav__Links">
          <button className="Nav__Links--Signup SignBtns">Sign up</button>
          <button className="Nav__Links--Signin SignBtns">Sign In</button>
        </div>

      </nav>
      
    </NavBarStyled>

    
   );
}
 
export default NavBar;