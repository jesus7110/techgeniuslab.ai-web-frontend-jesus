
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
// import Banner from './components/Banner';
import Cta from './components/Cta';
// import Error from './components/Error';
// import Grid from './components/Grid';
// import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

// import SchoolRegistration from './components/SchoolRegistration';
import ScrollCard from './components/ScrollCard';
import LogoCloud from './components/LogoCloud';
import AboutWorkshop from './components/AboutWorkshop';
import Provide from'./components/provide'


function App() {

  return (
    <>
    
    <Navbar/>
    <Hero/>

    <LogoCloud/>
    <ScrollCard/>

    <Stats/>
    <AboutWorkshop/>
    <Cta/>
    <Footer/>
    
    </>
  );
}

export default App;
