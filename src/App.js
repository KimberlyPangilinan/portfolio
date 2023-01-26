
import { useEffect, useRef, useState } from 'react';
import './App.css';
import Layout from './components/Layout';

function App() {
  
  const[theme,setTheme]=useState("dark") 
  const mode = localStorage.getItem('mode');
useEffect(() => {
      document.body.className = (mode)?mode:theme;
    });
  const[icon,setIcon]=useState("bi bi-brightness-alt-high-fill") 
  const iconRef = useRef();


  function handleClick(){
    if (theme==="dark") {
      setTheme("light")
      setIcon("bi bi-moon-fill")
      localStorage.setItem('mode','light');
     
    }else{
      setTheme("dark")
      setIcon("bi bi-brightness-alt-high-fill")
      localStorage.setItem('mode','dark');
      
    }
  }
 
  return (
    <div className="App">
     <Layout handleClick={handleClick} icon={icon} iconRef={iconRef} theme={theme}/>
    </div>
  );
}

export default App;
