import React from "react";
import "./style.css";
import { useState, useEffect } from 'react';

export default function App() {

  const [data,setData]=useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => setData(data));
  },[]);  

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {data &&
      data.map((item) =>{
        return <p key={item.id}>{item.title}</p>
      })}
    </div>
  );
}
