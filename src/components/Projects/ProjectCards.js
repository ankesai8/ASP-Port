import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

<div class="btn-group">
    
       <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal />Live 
        </Button>

        <Button variant="primary" href={props.link1} target="_blank">
          <BiLinkExternal /> FrontEnd
        </Button>
     
        <Button variant="primary" href={props.link2} target="_blank">
          <BiLinkExternal /> BackEnd
        </Button>
</div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
