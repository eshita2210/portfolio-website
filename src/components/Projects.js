import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';

import notesImg from '../assets/img/notes.png';
import TinDogImg from '../assets/img/TinDog.png';
import DicEchallengeImg from '../assets/img/thisdice.png';
import shopperImg from '../assets/img/shopper.png';
import weatherImg from '../assets/img/weather.png';

import DrumkitImg from '../assets/img/drumkit 2.png';
import colorSharp2 from '../assets/img/color-sharp2.png';

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: 'Weather Predictor',
      description: 'Design & Development',
      imgUrl: weatherImg,
      link: 'https://eshita2210.github.io/weather-app/'
    },

    {
      title: 'Dice challenge',
      description: 'Design & Development',
      imgUrl: DicEchallengeImg,
      link: 'https://eshita2210.github.io/dice-challenge/'
    },
    {
      title: 'Notes - Maker',
      description: 'Design & Development',
      imgUrl: notesImg,
      link: 'https://eshita2210.github.io/notes-maker/'
    },

    {
      title: 'SHOPPER-online shopping website',
      description: 'Design & Development',
      imgUrl: shopperImg,
      link: 'https://eshita2210.github.io/shopper-website/'
    },
   
   
    {
      title: 'Drum Kit',
      description: 'Design & Development',
      imgUrl: DrumkitImg,
      link: 'https://eshita2210.github.io/Drum-kit/'
    },
    {
      title: 'TinDog',
      description: 'Design & Development',
      imgUrl: TinDogImg,
      link: 'https://eshita2210.github.io/TinDog/'
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate_animated animate_fadeIn' : ''}>
                  <h2>Projects</h2>
                  <p>Here are the various projects I have been developing using various tools and technologies.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? 'animate_animated animate_slideInUp' : ''}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Waiting for more projects!</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Always ready to collaborate.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
