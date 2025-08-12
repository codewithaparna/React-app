import { NavLink } from "react-router-dom";

function Nav() {
  return (     
  <div className="nav">
        <ul type="none">
            <li><NavLink to ="/"> Home </NavLink></li>
            <li><NavLink to ="/PageOne"> Exercises </NavLink></li>
            <li><NavLink to ="/PageTwo"> Smoothies </NavLink></li>
            <li><NavLink to ="/PageThree"> Meals </NavLink></li>
            <li><NavLink to ="/PageFour"> Diet Tips </NavLink></li> 
        </ul>
    </div>  
   
  )
}

export default Nav;