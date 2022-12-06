import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {AiFillGithub,AiOutlineTwitter,AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "../Particle";
import Button from "react-bootstrap/Button";


function Home2() {
  return (
    <Container fluid className="contact-section" id="home">
    
      <Particle />
    
      <Container>
     <Row>
          <Col md={12} className="home-about-social">
            <h1 style={{paddingBottom:"15px",paddingTop:"55px"}}>Contact</h1>
            <p>
              Feel free to <span className="purple"> Connect </span>with me
            </p>
            <ul className="home-about-social-links">
              
              <li className="social-icons">
                <a
                  href="https://github.com/ankesai8"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
           <li className="social-icons">
                <a
                  href="mailto:ankesai8@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            
              <li className="social-icons">
                <a
                  href="https://twitter.com/saiprasad_264"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>

             <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/anke-saiprasad-b5594a22a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillLinkedin />
                </a>
              </li>


            </ul>
          </Col>
        </Row>
         <Row style={{ justifyContent: "center", position: "relative"}}>
          <Button variant="primary" a href="https://drive.google.com/file/d/1mE_Gb4110lRG9HfQlBPQqND2h7y-hAWf/view?usp=sharing" target="_blank" ><AiOutlineDownload />
            &nbsp;Resume
          </Button>
        </Row>
       
        
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"></span> 
            </h1>
            <p className="home-about-body">
              I'm <i> <b className="purple">
                  {" "}
                 Programmer{" "}
                </b> </i>
                who turns
                 <i><b className="purple">{" "}cofee{" "}</b></i>
                 into code.😉
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple">
                  {" "}
                  Javascript and MERN stack.{" "}
                </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b>
               
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with
              <i>
                <b className="purple"> Modern Javascript Frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Node.js and React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
       
      </Container>
    </Container>
  );
}
export default Home2;
       
     
