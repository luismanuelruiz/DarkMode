import React from 'react';
import './style.css';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const changeTheme = () => {
    setDarkMode((c) => (c ? false : true));
    document.body.style.backgroundImage = 'url(./img/background_2.jpg)';
  };
  console.log(darkMode ? 'Dark' : 'Light');

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
