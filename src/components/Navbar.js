import React from 'react'
import Menu from './Menu'

const Navbar = ({handleClick,theme,mode}) => {
    

  return (
    <nav className="nav" style={{backgroundColor: (mode==="light")|| (theme==="light") ? "white":"rgb(26, 25, 25)"}}>
    <div className="nav-main">
        <div className="logo"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Baybayin_Ka.svg/1200px-Baybayin_Ka.svg.png" width="40"/> <span></span></div>
        
    </div>
    <ul className="nav-links">
        <Menu/>
    </ul> 
    <div className="cta" >      
            <button className="btn btn-secondary " style={{color:(mode==="light")|| (theme==="light")?'rgba(80, 80, 80, 0.744)':'rgba(189, 189, 189, 0.966)'}}>Get in Touch</button> 
            <button id="theme" className="btn btn-secondary" style={{color:(mode==="light")|| (theme==="light")?'rgba(80, 80, 80, 0.744)':'rgba(189, 189, 189, 0.966)'}} onClick={handleClick}><i id="icon" className={ (mode==="dark")? "bi bi-brightness-alt-high-fill":"bi bi-moon-fill"}></i></button>

    </div>
    <div className="menu">
      <button className="btn  menu"><i className="bi-list"></i></button>
      <ul className="nav-mobile" style={{backgroundColor: (mode==="light")|| (theme==="light") ?"white":"rgba(80, 80, 80, 0.744)"}}>
       <Menu/>
      </ul>
    </div>
</nav>
  )
}

export default Navbar
