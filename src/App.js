import React from 'react';
import './style.css';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

export default function App() {
  console.log(localStorage.getItem('darkModeLocal'));
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkModeLocal')||false);
  const changeTheme = () => {setDarkMode((c) => (c ? false : true));
    document.body.style.background = darkMode ? "#2E8BC0":"#000C66";
    localStorage.setItem('darkModeLocal', darkMode?true:false)
  };  

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <label className="switch">
        <input checked={darkMode} type="checkbox" onChange={changeTheme} />
        <span className="slider round"></span>
      </label>
      
    </div>
  );
}
