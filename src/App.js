import React from "react";
import NavBar from "./components/Navbar/NavBar";

import Welcome from "./components/JumbotronWelcome/Jumbotron";

import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import ScreenSizeContext from './contexts/screenSizeContext';
import Projects from "./projects"
import Footer from "./components/Footer/Footer";
import ContactComp from "./components/contact";



function App() {
  return (
    
      <Router>
    <>
      <NavBar />
                <Switch>
                  <Route exact path="/" component={Welcome} />
                  <Route exact path="/projects" component={Projects} />
                  <Route exact path="/contact" component={ContactComp} />
                </Switch>
      <br />
      <div>
        <Footer />
   
    </div>
    <br />
  
    
    </>
    </Router> 

  );
}

export default App;
