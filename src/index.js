// const path=require('path');
// const express = require('express');
// const cors = require('cors');

// const PORT = process.env.port || 3002;

// const app = express();

// app.get("/api",(req,res)=>{
//   res.json({message:"Hello from server!"})
// });

// app.listen(PORT,()=>{

// })




import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
