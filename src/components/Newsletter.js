import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const serviceId = "service_vw5dhaj";
      const templateId = "template_hyhg2tc";
      await emailjs.send(serviceId, templateId, {
        email: email,
      });
      setStatus({ success: true, message: '**Thank you for subscribing to our newsletter!**' });
    } catch (error) {
      console.log(error);
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
    }
  };

  return (
    <section className="newsletter" style={{
      backgroundColor: 'rgba(255, 255, 255, 0.8)', 
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
      marginTop: '20px', // added margin top to separate from top of footer
    }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>
        Subscribe to our Newsletter
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: '10px 15px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '5px',
            width: '100%',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 15px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: '#4CAF50',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          Subscribe
        </button>
        {
          status.message &&
          <p style={{ color: 'green', fontWeight: 'bold', fontSize: '16px', marginTop: '10px' }}>
            {status.message}
          </p>
        }
      </form>
    </section>
  );
};

export default Newsletter;


// import { useState, useEffect } from "react";
// import { Col, Row, Alert } from "react-bootstrap";
// import { subscribeToEmailOctopus } from './emailOctopusService'; // Import the service

// export const Newsletter = () => {
//   const [email, setEmail] = useState('');
//   const [status, setStatus] = useState('');
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     if (status === 'success') clearFields();
//   }, [status]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (email && email.indexOf("@") > -1) {
//       setStatus('sending');
//       try {
//         await subscribeToEmailOctopus(email);
//         setStatus('success');
//         setMessage('Thank you for subscribing!');
//       } catch (error) {
//         setStatus('error');
//         setMessage('Subscription failed. Please try again.');
//       }
//     }
//   };

//   const clearFields = () => {
//     setEmail('');
//   };

//   return (
//     <Col lg={12}>
//       <div className="newsletter-bx wow slideInUp">
//         <Row>
//           <Col lg={12} md={6} xl={5}>
//             <h3>Subscribe to our Newsletter<br /> & Never miss latest updates</h3>
//             {status === 'sending' && <Alert>Sending...</Alert>}
//             {status === 'error' && <Alert variant="danger">{message}</Alert>}
//             {status === 'success' && <Alert variant="success">{message}</Alert>}
//           </Col>
//           <Col md={6} xl={7}>
//             <form onSubmit={handleSubmit}>
//               <div className="new-email-bx">
//                 <input
//                   value={email}
//                   type="email"
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Email Address"
//                 />
//                 <button type="submit">Submit</button>
//               </div>
//             </form>
//           </Col>
//         </Row>
//       </div>
//     </Col>
//   );
// };






// import { useState, useEffect } from "react";
// import { Col, Row, Alert } from "react-bootstrap";

// export const Newsletter = ({ status, message, onValidated }) => {
//   const [email, setEmail] = useState('');

//   useEffect(() => {
//     if (status === 'success') clearFields();
//   }, [status])

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     email &&
//     email.indexOf("@") > -1 &&
//     onValidated({
//       EMAIL: email
//     })
//   }

//   const clearFields = () => {
//     setEmail('');
//   }

//   return (
//       <Col lg={12}>
//         <div className="newsletter-bx wow slideInUp">
//           <Row>
//             <Col lg={12} md={6} xl={5}>
//               <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
//               {status === 'sending' && <Alert>Sending...</Alert>}
//               {status === 'error' && <Alert variant="danger">{message}</Alert>}
//               {status === 'success' && <Alert variant="success">{message}</Alert>}
//             </Col>
//             <Col md={6} xl={7}>
//               <form onSubmit={handleSubmit}>
//                 <div className="new-email-bx">
//                   <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
//                   <button type="submit">Submit</button>
//                 </div>
//               </form>
//             </Col>
//           </Row>
//         </div>
//       </Col>
//   )
// }
