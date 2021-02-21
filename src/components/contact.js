import React from "react"
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap"


const ContactComp = () => (

<div className=" p-2" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}} id="contact" className="container-fluid bg-grey">
    
            <Card className="" style={{ width: '20rem' }}>
  <Card.Body>
    <Card.Title>Contact Me!</Card.Title>
    <Card.Text>
      Interested in working together? I'd love to hear from you! 
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>I'm a new Full Stack Web Developer with a marketing and creative content background!</ListGroupItem>
    <ListGroupItem>Curiosity and endless exploration is what drives me in my projects</ListGroupItem>
    <ListGroupItem>Team player ready to get the job done!</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link target="_blank" href="https://www.linkedin.com/in/suzanne-le-bel-b24032125/">
            <i className="navicon navbar-brand fab fa-linkedin" ></i></Card.Link>
    <Card.Link target="_blank" href="https://github.com/suzylebel">
            <i className="navicon navbar-brand fab fa-github-square" ></i></Card.Link>
            <Card.Link> <Button target="_blank" id="yellow" className="" href="Images/suzyresume.pdf">Download Resume</Button> </Card.Link>
  </Card.Body>
</Card>

        
        
            </div>
   

);

export default ContactComp;



