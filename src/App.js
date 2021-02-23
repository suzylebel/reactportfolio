import React from "react";
import NavBar from "./components/Navbar/NavBar";

import Welcome from "./components/JumbotronWelcome/Jumbotron";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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
                  <Route href="https://suzylebel.github.io/reactportfolio/" component={Welcome} />
                  <Route href="https://suzylebel.github.io/reactportfolio/projects/" component={Projects} />
                  <Route href="https://suzylebel.github.io/reactportfolio/contact/" component={ContactComp} />

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
