import React from 'react'
import Footer from './Footer'
import Main from './Main'
import Navbar from './Navbar'

const Layout = ({handleClick,iconRef,icon,theme}) => {
  return (
    <div>
      <Navbar
        handleClick={handleClick}
        iconRef={iconRef}
        icon={icon}
        theme={theme}
      />
      <Main></Main>
      <Footer/>
    </div>
  )
}

export default Layout
