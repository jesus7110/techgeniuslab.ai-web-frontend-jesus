import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from './components/Error';
import SchoolRegistration from './components/SchoolRegistration';
import RequestWorkshop from './components/RequestWorkshop'
import ExploreWorkshop from './components/ExploreWorkshop';
import SignUp from './components/SignUp';
import Contact from './components/Contact';
import TestOverview from './components/TestOverview';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
       <Routes>
        <Route exact path="/" element={<App/>} />
        {/*<Route exact path="/register" element={<SchoolRegistration/>}/>*/}
        <Route path="/exploreworkshop" element={<ExploreWorkshop/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/testoverview" element={<TestOverview/>} />
        <Route path="*" element={<Error/>} />
        
      </Routes>
      </BrowserRouter>
);

reportWebVitals();
