import React from 'react';
import './style.css';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const darkURL =
    'url(https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg)';
  const lightURL = 'url(./img/background.jpg)';
  const changeTheme = () => {
    setDarkMode((c) => (c ? false : true));

    document.body.style.backgroundImage = darkMode ? darkMode : lightURL;
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
