import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from './components/Error';
import SchoolRegistration from './components/SchoolRegistration';
import RequestWorkshop from './components/RequestWorkshop'
import Workshop from './pages/workshop';
import SignUp from './components/SignUp';
import Contact from './pages/contact';
import TestOverview from './components/TestOverview';
import AboutUs from './pages/Aboutus';
import Stemlab from './pages/lab'
import ServiceM from './pages/service'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
       <Routes>
        <Route exact path="/" element={<App/>} />
        {/*<Route exact path="/register" element={<SchoolRegistration/>}/>*/}
        {/* <Route path="/exploreworkshop" element={<ExploreWorkshop/>} /> */}
        <Route path="/requestworkshop" element={<RequestWorkshop/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/labsetup" element={<Stemlab/>}/>
        <Route path="/service" element={<ServiceM/>}/>
        <Route path="/workshop" element={<Workshop/>}/>
        <Route path="/testoverview" element={<TestOverview/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="*" element={<Error/>} />
        
      </Routes>
      </BrowserRouter>
);

reportWebVitals();
