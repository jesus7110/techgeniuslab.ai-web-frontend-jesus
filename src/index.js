import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from './components/Error';
import SchoolRegistration from './components/SchoolRegistration';
import Workshop from './components/Workshop';
import AboutWorkshop from './components/AboutWorkshop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
       <Routes>
        <Route exact path="/" element={<App/>} />
        <Route exact path="/register" element={<SchoolRegistration/>}/>
        <Route path="/workshop" element={<Workshop/>} />
        <Route path="/aboutworkshop" element={<AboutWorkshop/>} />
        <Route path="*" element={<Error/>} />
        
      </Routes>
      </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
