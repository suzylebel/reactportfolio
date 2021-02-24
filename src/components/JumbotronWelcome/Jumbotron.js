import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron"
import Card from "react-bootstrap/Card"
import "./Jumbotron.css"
import Button from "react-bootstrap/Button"



function Welcome() {
    return (

        <Jumbotron>            
            <div className="container pt-3 jumbotron">

            {/* <Card className="bg-dark text-white">
  <Card.Img src="./Images/suzy.png" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card> */}
            
  <h1><img className="img-fluid" src="/Images/howdy.gif"
                 alt ="logo"
                
                 
                  
        
                /></h1>
                <h3>I'm a Full-Stack Web Developer!</h3>
  <p>
    
Thanks for visiting my page! A little bit about me....I grew up in Dallas, Texas, and moved to the PNW after attending college in the Midwest. With a design and video background I am ready to utilize my skills to learn more about web developing through the UW Coding Bootcamp!

So far I've learned the basics of frontend applications like HTML, CSS, and JavaScript. I have also learned backend applications such as node.js, MYSQL, and many javascript libraries. It's pretty amazing to see how far i've come since the first "Hello world" appeared in my browsers console. Click on my portfolio tab to see what projects I've been working on, and thanks for stopping by!
  </p>
  <Button target="_blank" id="yellow" className="" href="Images/suzyresume.pdf">Download Resume</Button>
  </div>
  
</Jumbotron>


    );
}

export default Welcome;