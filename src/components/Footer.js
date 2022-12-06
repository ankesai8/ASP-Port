import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {AiFillGithub,AiOutlineTwitter,AiFillLinkedin} from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Anke SaiPrasad</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SM</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
           
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
      
    </Container>
  );
}

export default Footer;
