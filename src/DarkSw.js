import React from 'react';
import './style.css';
import { useState } from 'react';

function DarkSw() {
  const savedMode = localStorage.getItem('darkModeLocal');
  const [darkMode, setDarkMode] = useState(savedMode === 'true' ? true : false);
  document.body.style.background = darkMode ? '#000C66' : '#2E8BC0';
  const changeTheme = () => {
    setDarkMode((c) => (c ? false : true));
    document.body.style.background = darkMode ? '#2E8BC0' : '#000C66';
    localStorage.setItem('darkModeLocal', !darkMode);
  };

  return (
    <div>
      <label className="switch">
        <input checked={darkMode} type="checkbox" onChange={changeTheme} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
export default DarkSw;
