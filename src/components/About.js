import React from 'react'
import logo from "./logo.png"
const About = () => {
  return (
    <section id="about" className="about-section">
    <h2>About Me</h2>
    <div className="content">
        <div className="left-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia maxime ratione dicta rerum nemo architecto quaerat exercitationem fugit! Praesentium molestias magnam at ratione nam nihil explicabo consequuntur harum magni veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste et, nam reiciendis madolor sit amet consectetur adipisicing elit. Iste et, nam reiciendis ma</p>
            <div>
                
                <h3>
                    <ul className="flex">
                        <li>
                            <details>
                                <summary><i className="bi bi-code-slash"></i>  Web Development</summary>
                                <p>Creating websites and web applications both front-end and back-end</p>
                            </details>
                         </li>
                        <li> 
                            <details>
                                <summary><i className="bi bi-circle-square"></i> UI/UX Design</summary>
                                <p>Designing and planning user interface and user experience</p>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary><i className="bi bi-stack"></i>  Graphics</summary>
                                <p>Editing and enhancing of images</p>
                            </details>
                        </li>
                    </ul>
                </h3>
            </div>
        </div>
        <div className="right-side">
            <img alt="kimberly pangilinan" className="img" src={logo}/>
        </div>
        
    </div>
   
</section>
  )
}

export default About
