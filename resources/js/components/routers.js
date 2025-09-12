import React from "react";
import {link} from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Example from "./Example";
import Home from "./Home";
import About from "./about";

export default function Routers(){
    return (
        <Router>
            <nav style={{ margin: '10px'}}>
                <Link to = "/home" style={{marginRight: '10px'}}>Home</Link>
                <Link to = "/example" style={{marginRight: '10px'}}>Example</Link>
                <Link to = "/about" >Home</Link>
            </nav>
            <Routes>
                <Route path = "example" element = {<Example/>}/>
                <Route path = "home" element = {<Home/>}/>
                <Route path = "about" element = {<About/>}/>
            </Routes>
        </Router>
        
    )
}

if(document.getElementById("root")){
    Reaction.render(<Router/>, document.getElementById("root"));
}