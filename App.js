import ReactDOM from 'react-dom';
import React from 'react'
const root = ReactDOM.createRoot(document.getElementById("root"));

// const temp =  React.createElement("h1",{id:"heading"},"hello bro");
const temp =  React.createElement("div",{id:"parent"},React.createElement("div",{id:"headings"},[React.createElement("h1",{},"hello bro"),React.createElement("h1",{},"bye bro")]));

console.log(temp)
root.render(temp)