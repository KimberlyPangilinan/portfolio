import React, { useRef } from 'react'

const Navbar = ({handleClick,iconRef,icon}) => {
    

  return (
    <nav class="nav">
    <div class="nav-main">
        <div class="logo"><img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Baybayin_Ka.svg/1200px-Baybayin_Ka.svg.png" width="40"/> <span></span></div>
        
    </div>
    <ul class="nav-links">
        <li class="nav-link"><a href="#home">Home</a></li>
        <li class="nav-link"><a href="#about">About</a></li>
        <li class="nav-link"><a href="">Services</a></li>
        <li class="nav-link"><a href="">Works</a></li>

    </ul> 
    <div class="cta" >      
            <button class="btn btn-secondary ">Get in Touch</button> 
            <button id="theme"class="btn btn-secondary" ref={iconRef} type  ="button" onClick={handleClick}><i id="icon" class={icon}></i></button>

    </div>
    <div class="menu">
      <button class="btn btn-primary menu"><i class="bi-list"></i></button>
      <ul class="nav-mobile">
        <li class="nav-link"><a href="#home">Home</a></li>
        <li class="nav-link"><a href="#about">About</a></li>
        <li class="nav-link"><a href="">Services</a></li>
        <li class="nav-link"><a href="">Works</a></li>
        <li class="nav-link"><a href="">Get in Touch</a></li>
        
      </ul>
    </div>
</nav>
  )
}

export default Navbar
