import React from 'react'

const Navbar = ({handleClick,icon,theme}) => {
    

  return (
    <nav className="nav" style={{backgroundColor:(theme==="dark")?'rgb(26, 25, 25)':'white'}}>
    <div className="nav-main">
        <div className="logo"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Baybayin_Ka.svg/1200px-Baybayin_Ka.svg.png" width="40"/> <span></span></div>
        
    </div>
    <ul className="nav-links">
        <li className="nav-link"><a href="#home">Home</a></li>
        <li className="nav-link"><a href="#about">About</a></li>
        <li className="nav-link"><a href="">Services</a></li>
        <li className="nav-link"><a href="">Works</a></li>

    </ul> 
    <div className="cta" >      
            <button className="btn btn-secondary " style={{color:(theme==="dark")?'rgba(189, 189, 189, 0.966)':'rgb(26, 25, 25)'}}>Get in Touch</button> 
            <button id="theme"className="btn btn-secondary" style={{color:(theme==="dark")?'rgba(189, 189, 189, 0.966)':'rgb(26, 25, 25)'}} onClick={handleClick}><i id="icon" className={icon}></i></button>

    </div>
    <div className="menu">
      <button className="btn btn-primary menu"><i className="bi-list"></i></button>
      <ul className="nav-mobile" style={{backgroundColor:(theme==="dark")?'rgb(26, 25, 25)':'white'}}>
        <li className="nav-link"><a href="#home">Home</a></li>
        <li className="nav-link"><a href="#about">About</a></li>
        <li className="nav-link"><a href="">Services</a></li>
        <li className="nav-link"><a href="">Works</a></li>
        <li className="nav-link"><a href="">Get in Touch</a></li>
        
      </ul>
    </div>
</nav>
  )
}

export default Navbar
