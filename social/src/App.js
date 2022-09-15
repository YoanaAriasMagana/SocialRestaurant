import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css';
import Restaurants from "./components/Restaurants";
import Friends from "./components/Friends";
import Footer from "./components/Footer";
import Social from "./components/Social";
import Contact from "./components/Contact";
import React from 'react';
// import Map from './components/Map';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        {/* <Social /> */}
        <Routes>
        <Route path="/" element= {<Restaurants />} />
        <Route path="/Friends" element= {<Friends />} />
        <Route path="/Contact" element= {<Contact />} />
        </Routes>
        <Social />
        <Footer />
        
      </div>

   
      

    );
  }
}

export default App;
