import React from 'react'
import logo from "./logo.png"
const About = () => {
  return (
    <section id="about" class="about-section">
    <h2>About Me</h2>
    <div class="content">
        <div class="left-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia maxime ratione dicta rerum nemo architecto quaerat exercitationem fugit! Praesentium molestias magnam at ratione nam nihil explicabo consequuntur harum magni veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste et, nam reiciendis madolor sit amet consectetur adipisicing elit. Iste et, nam reiciendis ma</p>
            <div>
                <br/>
                <p>Here's the list of services eme eme</p>
                <h3>
                    <ul class="flex">
                        <li>
                            <details>
                                <summary><i class="bi bi-code-slash"></i>  Web Development</summary>
                                <p>Something small enough to escape casual notice.</p>
                            </details>
                         </li>
                        <li> 
                            <details>
                                <summary><i class="bi bi-circle-square"></i> UI/UX Design</summary>
                                <p>Something small enough to escape casual notice.</p>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary><i class="bi bi-stack"></i>  Graphics</summary>
                                <p>Something small enough to escape casual notice.</p>
                            </details>
                        </li>
                    </ul>
                </h3>
            </div>
        </div>
        <div class="right-side">
            <img class="img" src={logo}/>
        </div>
        
    </div>
   
</section>
  )
}

export default About
