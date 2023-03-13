import React from 'react';
import './style.css';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import uselocalStorage from 'use-local-storage'

export default function App() {
  //const [darkMode, setDarkMode] = uselocalStorage (darkMode ? true : false);
  const [darkMode, setDarkMode] = useState(false);
  const darkURL = 'url(https://wallpaperaccess.com/full/670449.jpg)';
  const lightURL = 'url(https://upload.wikimedia.org/wikipedia/commons/e/e4/Color-blue.JPG)';
  const changeTheme = () => {setDarkMode((c) => (c ? false : true))};
  console.log(darkMode ? 'Dark' : 'Light');
  console.log(darkMode ? darkURL : lightURL);
  document.body.style.backgroundImage = darkMode ? darkURL : lightURL

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
