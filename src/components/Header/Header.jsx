import { useState } from 'react';
import './Header.css'
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from 'react-outside-click-handler';
const Header = () => {
  const [menuOpen, setMenuOpen]= useState(false)
  const getMenuStyles = (menuOpen)=>{
      if(document.documentElement.clientWidth <= 813){
        return {right:!menuOpen && "-100%"}
      }
  }

 
  return (
   <section className="wrapper">
    <div className="flexCenter paddings innerWidth container">
      <img className="logo" src="./logo.png" alt="logo" />

      <OutsideClickHandler onOutsideClick={()=>{setMenuOpen(false)}}>

    <div className='flexCenter menu'
    style={getMenuStyles(menuOpen)}>
      <a href="#residencies" >Residencies</a>
      <a href="#value">Our Value</a>
      <a href="#contact">Contact Us</a>
      <a href="#getStarted">Get Started</a>
      <button className='button' >
        <a href="">Contact</a>
      </button>
    </div>
      </OutsideClickHandler>
    <div className="menu-icon" onClick={()=>setMenuOpen((prev)=>!prev)}>
      <BiMenuAltRight size={30}/>
    </div>
    </div>
   </section>
  )
}

export default Header