import React from "react";
import './App.css';
import Nav from "./Nav";
import Homepage from "./Pages/Hompage";
import Signup from "./Pages/Signup";
import Search from "./Pages/Search";
import Footer from "./Footer";
import {BrowserRouter as Router, Route} from "react-router-dom"

function App(){
    return <Router>
        <Nav />
        <Route exact path="/">
            <Homepage />
        </Route>
        <Route exact path="/signup">
            <Signup />
        </Route>
        <Route exact path="/search">
            <Search />
        </Route>
        <Footer />
    </Router>
}

export default App;