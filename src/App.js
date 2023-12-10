import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Form from './Components/Form'

const App = () => {
    return ( 
        <div>
            <Navbar />
            <Hero />
            <Form />
            
        </div>
     );
}
 
export default App;