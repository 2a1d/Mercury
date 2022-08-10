import React from "react";
import './App.css';
import Nav from "./Nav";
import Homepage from "./Pages/Hompage";
import Travels from "./Pages/Travels";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Footer from "./Footer";



import {BrowserRouter as Router, Route} from "react-router-dom"

function App(){
    return <Router>
        <Nav />
        <Route exact path="/">
            <Homepage />
        </Route>
        <Route exact path="/travels">
            <Travels />
        </Route>
        <Route exact path="/signup">
            <Signup />
        </Route>
        <Route exact path="/login">
            <Login />
        </Route>
        <Footer />
    </Router>
}

export default App;