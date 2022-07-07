import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div  className="header">
      <Link to='/'>
       
       <img className='header__logo' src="https://images.getpng.net/uploads/preview/set-collection-real-estate-logo-design-templates-78-1151644105989sjfcy1bttj.webp" alt="" />  
      </Link>
      <ul>
      <li><a href="#home">Real State</a></li>
      <li><a href="#rent">Rent</a></li>
      <li><a href="#buy">Buy</a></li>
      <li><a href="#sell">Sell</a></li>
      <li class="dropdown">
      <a href="javascript:void(0)" class="dropbtn">Manage Property</a>
      <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
      <a href="#">Link 4</a>
      </div>
      </li>
      <li class="dropdown">
      <a href="javascript:void(0)" class="dropbtn">Resources</a>
      <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
      <a href="#">Link 4</a>
      </div>
      </li>
      </ul>
      
      
      <button className="header__login">Login</button>
      
      <button className="header__buttonSignUp">Sign up</button>
      


       

       
    </div>
  )
}

export default Header
