// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
// import colorSharp from "../assets/img/color-sharp.png"

// export const Skills = () => {
//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1
//     }
//   };

//   return (
//     <section className="skill" id="skills">
//         <div className="container">
//             <div className="row">
//                 <div className="col-12">
//                     <div className="skill-bx wow zoomIn">
//                         <h2>Skills</h2>
//                         <p>I have developed a robust skill set that includes proficiency in languages such as Python,SQL and C++. My expertise extends to web development with HTML, CSS, and JavaScript, as well as hands-on experience with frameworks like React,Bootstrap and node.js alongwith mongoDB.<br></br> My skills in problem-solving, critical thinking, and project management have been honed through various academic and personal projects, preparing me to tackle real-world challenges and drive technological innovation.<br></br></p>
//                         <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
//                             <div className="item">
//                                 <img src={meter1} alt="Image" />
//                                 <h5>Web Development</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={meter2} alt="Image" />
//                                 <h5>Programming languages(C++)</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={meter3} alt="Image" />
//                                 <h5>Problem solving</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={meter1} alt="Image" />
//                                 <h5>critical thinking</h5>
//                             </div>
//                         </Carousel>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <img className="background-image-left" src={colorSharp} alt="Image" />
//     </section>
//   )
// }






// import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
// import { SiPython, SiCplusplus, SiMongodb } from 'react-icons/si';
// import { FaBootstrap, FaJquery } from 'react-icons/fa';
// import { SiGit, SiGithub, SiAws } from 'react-icons/si';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import colorSharp from "../assets/img/color-sharp.png"

// export const Skills = () => {
//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1
//     }
//   };

//   return (
//     <section className="skill" id="skills">
//         <div className="container">
//             <div className="row">
//                 <div className="col-12">
//                     <div className="skill-bx wow zoomIn">
//                         <h2>Skills</h2>
//                         <p>I have developed a robust skill set that includes proficiency in languages such as Python,SQL and C++. My expertise extends to web development with HTML, CSS, and JavaScript, as well as hands-on experience with frameworks like React,Bootstrap and node.js alongwith mongoDB.<br></br> My skills in problem-solving, critical thinking, and project management have been honed through various academic and personal projects, preparing me to tackle real-world challenges and drive technological innovation.<br></br></p>
//                         <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
//                             <div className="item">
//                                 <FaHtml5 size={40} color="#ff69b4" />
//                                 <h5>HTML</h5>
//                             </div>
//                             <div className="item">
//                                 <FaCss3 size={40} color="#ff69b4" />
//                                 <h5>CSS</h5>
//                             </div>
//                             <div className="item">
//                                 <FaReact size={40} color="#ff69b4" />
//                                 <h5>React</h5>
//                             </div>
//                             <div className="item">
//                                 <FaBootstrap size={40} color="#ff69b4" />
//                                 <h5>Bootstrap</h5>
//                             </div>
//                             <div className="item">
//                             <h5>jQuery</h5>
//                             </div>
//                             {/* <div className="item">
//                                 <FaJquery size={40} color="#ff69b4" />
//                                 <h5>jQuery</h5>
//                             </div> */}
//                             <div className="item">
//                                 <FaNodeJs size={40} color="#ff69b4" />
//                                 <h5>Node.js</h5>
//                             </div>
//                             <div className="item">
//                                 <FaDatabase size={40} color="#ff69b4" />
//                                 <h5>Database Management</h5>
//                             </div>
//                             <div className="item">
//                                 <SiMongodb size={40} color="#ff69b4" />
//                                 <h5>MongoDB</h5>
//                             </div>
//                             <div className="item">
//                                 <SiPython size={40} color="#ff69b4" />
//                                 <h5>Python</h5>
//                             </div>
//                             <div className="item">
//                                 <SiCplusplus size={40} color="#ff69b4" />
//                                 <h5>C++</h5>
//                             </div>
//                             <div className="item">
//                             <h5>C</h5>
//                              </div>
//                             {/* <div className="item">
//                                 <Fa size={40} color="#ff69b4" />
//                                 <h5>C</h5>
//                             </div> */}
//                             <div className="item">
//                                 <SiGit size={40} color="#ff69b4" />
//                                 <h5>Git</h5>
//                             </div>
//                             <div className="item">
//                                 <SiGithub size={40} color="#ff69b4" />
//                                 <h5>GitHub</h5>
//                             </div>
//                             <div className="item">
//                                 <SiAws size={40} color="#ff69b4" />
//                                 <h5>AWS</h5>
//                             </div>
//                             <div className="item">
//                                 <h5>Dbms</h5>
//                             </div>
//                             <div className="item">
//                                 <h5>Critical thinking</h5>
//                             </div>
//                             <div className="item">
//                                 <h5>Problem solving</h5>
//                             </div>
//                         </Carousel>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <img className="background-image-left" src={colorSharp} alt="Image" />
//     </section>
//   )
// }

import { FaHtml5, FaCss3, FaReact, FaNodeJs,FaBootstrap, FaDatabase, FaJs, FaGit } from 'react-icons/fa';
import { SiPython, SiCplusplus, SiMongodb } from 'react-icons/si';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { FaAws } from 'react-icons/fa';
import { DiDatabase } from 'react-icons/di';

// ...

<div className="item">
  <FaAws />
  <h5>AWS</h5>
</div>

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I have developed a robust skill set that includes proficiency in languages such as Python,SQL and C++. My expertise extends to web development with HTML, CSS, and JavaScript, as well as hands-on experience with frameworks like React,Bootstrap and node.js alongwith mongoDB.<br></br> My skills in problem-solving, critical thinking, and project management have been honed through various academic and personal projects, preparing me to tackle real-world challenges and drive technological innovation.<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                                <FaHtml5 size={40} color="#ff69b4" />
                                <h5>HTML</h5>
                               </div>
                               <div className="item">
                                <FaCss3 size={40} color="#ff69b4" />
                                <h5>CSS</h5>
                               </div>
                            {/* <div className="item">
                                <FaHtml5 size={40} color="#ff69b4" />
                                <h5>Web Development</h5>
                            </div> */}
                            <div className="item">
                                <SiCplusplus size={40} color="#ff69b4" />
                                <h5>Programming languages (C++)</h5>
                            </div>
                            <div className="item">
                             <DiDatabase size={40} color="#ff69b4" />
                               <h5>SQL</h5>
                               </div>
                            <div className="item">
                                <FaReact size={40} color="#ff69b4" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <FaNodeJs size={40} color="#ff69b4" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <SiPython size={40} color="#ff69b4" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <SiMongodb size={40} color="#ff69b4" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <FaBootstrap size={40} color="#ff69b4" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <FaDatabase size={40} color="#ff69b4" />
                                <h5>Database Management</h5>
                            </div>
                            <div className="item">
                                <FaAws size={40} color="#ff69b4" />
                                <h5>AWS</h5>
                            </div>
                            <div className="item">
                                <FaJs size={40} color="#ff69b4" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <FaGit size={40} color="#ff69b4" />
                                <h5>Git</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}