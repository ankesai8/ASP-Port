import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import unichat from "../../Assets/Projects/unichat.png";
import bookxchanger from "../../Assets/Projects/bookxchanger.png";
import igt from "../../Assets/Projects/igt.jpg";
import mysuru from "../../Assets/Projects/mysuru.png";
import pollution from "../../Assets/Projects/mobile.jpg"; 

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <p style={{ color: "white" }}>
          <strong className="purple">Demo credentials</strong> for Projects:
        </p>
        <p style={{ color: "white" }}>
        Email : <strong className="purple">demo9989test@gmail.com</strong>
        </p>
        <p style={{ color: "white" }}>
     Password : <strong className="purple">demo9989@test</strong>
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
        

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mysuru}
              title="Recipe mealDb"
              description="A Web Application which provide recipes to cook various dishes built using Node.js where a user can add, remove, update, and veiw recepies on youtube.."
              link="https://mealdb-99.netlify.app/"
              link1="https://github.com/ankesai8/theMealDB-Recipe-Front-End"
              link2="https://github.com/ankesai8/theMealDB-Recipe-Back-End"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={igt}
              title="Online Music Player"
              description="Online Music Player is a real-time Web application  built with javascript , node.js and Bootstrap. A website where you can listen and enjoy songs, go through lyrics and create your own playlists and add your songs."
                  link="https://music-player-008.netlify.app/login"
                  link1="https://github.com/ankesai8/Music-Player-FrontEnd"
                  link2="https://github.com/ankesai8/Music-Player-BackEnd"
           />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={unichat}
              title="Car Care"
              description="Car Care is a website developed with all neccessary features, as well as with authorization and authentication user can book an appointment for different types of car wash , as well as he can cancel his appointment if needed."
              link="https://carcare-90.netlify.app/"
              link1="https://github.com/ankesai8/Car-Care-FrontEnd"
              link2="https://github.com/ankesai8/Car-Care-BackEnd"
            />
          </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pollution}
              title="shopCity"
              description="shopCity is a Online shopping website for mobiles where user can buy mobile Phones based on brands developed with all neccessary features, as well as with authorization and authentication"
              link1="https://github.com/ankesai8/ShopCart-FrontEnd"
              link="https://shop-cart-8.netlify.app/"
              link2="https://github.com/ankesai8/ShopCart-BackEnd"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookxchanger}
              title="Simple Blogger App"
              description="Simple Blogger App is app  where you can write and publish  your favorites as blogs and photos It is built using MERN stack and js . It has all the major features like userDashboard,"
              link="https://blog-app-088.netlify.app/"
              link1="https://github.com/ankesai8/Blog-App-FrontEnd"
              link2="https://github.com/ankesai8/Blog-App-BackEnd"
             />
          </Col>

            

        

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
