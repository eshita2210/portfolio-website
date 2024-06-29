import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header_women.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "software developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Eshita a`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I am a dedicated and ambitious web developer and student currently studying at IIIT Sonepat. My portfolio showcases a range of projects demonstrating my skills in responsive web design, UI/UX design, and performance optimization. Proficient in front-end technologies (HTML, CSS, JavaScript) and back-end technologies (Node.js, Express), I am committed to delivering high-quality, scalable web applications. Check out my work to see my dedication to quality and innovation.</p>
                  <div onClick={(e) => console.log('connect')}>
                    <button>Let’s Connect <ArrowRightCircle size={25} /></button>
                  </div>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}



// import { useState, useEffect } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/header_women.png";
// import { ArrowRightCircle } from 'react-bootstrap-icons';
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

// export const Banner = () => {
//   const [loopNum, setLoopNum] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [text, setText] = useState('');
//   const [delta, setDelta] = useState(300 - Math.random() * 100);
//   const [index, setIndex] = useState(1);
//   const toRotate = [ "Web Developer", "Web Designer", "software developer" ];
//   const period = 2000;

//   useEffect(() => {
//     let ticker = setInterval(() => {
//       tick();
//     }, delta);

//     return () => { clearInterval(ticker) };
//   }, [text])

//   const tick = () => {
//     let i = loopNum % toRotate.length;
//     let fullText = toRotate[i];
//     let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

//     setText(updatedText);

//     if (isDeleting) {
//       setDelta(prevDelta => prevDelta / 2);
//     }

//     if (!isDeleting && updatedText === fullText) {
//       setIsDeleting(true);
//       setIndex(prevIndex => prevIndex - 1);
//       setDelta(period);
//     } else if (isDeleting && updatedText === '') {
//       setIsDeleting(false);
//       setLoopNum(loopNum + 1);
//       setIndex(1);
//       setDelta(500);
//     } else {
//       setIndex(prevIndex => prevIndex + 1);
//     }
//   }

//   return (
//     <section className="banner" id="home">
//       <Container>
//         <Row className="aligh-items-center">
//           <Col xs={12} md={6} xl={7}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//               <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//                 <span className="tagline">Welcome to my Portfolio</span>
//                 <h1>{`Hi! I'm Eshita a`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
//                   <p>I am a dedicated and ambitious web developer and student currently studying at IIIT Sonepat . My portfolio showcases a range of projects demonstrating my skills in responsive web design, UI/UX design, and performance optimization. Proficient in front-end technologies (HTML, CSS, JavaScript) and back-end technologies (Node.js, Express), I am committed to delivering high-quality, scalable web applications. Check out my work to see my dedication to quality and innovation.</p>
//                   <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
//               </div>}
//             </TrackVisibility>
//           </Col>
//           <Col xs={12} md={6} xl={5}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
//                   <img src={headerImg} alt="Header Img"/>
//                 </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   )
// }
