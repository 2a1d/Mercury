import React from "react";
import Header from "./Header";
import Homepage from "./Hompage";
import Travels from "./Travels";
import Signup from "./Signup";
import Login from "./Login";
import Search from "./Search";
import Footer from "./Footer";



import {BrowserRouter as Router, Route} from "react-router-dom"

function App(){
    return <Router>
        <Header/>
        <Route exact path="/">
            <Homepage/>
        </Route>
        <Route exact path="/travels">
            <Travels/>
        </Route>
        <Route exact path="/signup">
            <Signup/>
        </Route>
        <Route exact path="/login">
            <Login/>
        </Route>
        {/* need to add the search button that has a pop out type space */}
    </Router>

}

export default App;