import axios from 'axios';
import React, { useState } from 'react';

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  // send data to emailjs 
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      service_id: 'service_mgoegnk',
      template_id: 'template_msv6wxp',
      user_id: 'j5Z0VWUW0vaLAb2Q1',
      template_params: {
        name: name,
        email: email,
        message: message
      }
    };
    axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
      .then((res) => {
        console.log(res);
        alert('Message sent successfully');
      })
      .catch((err) => {
        console.log(err);
        alert('Message failed to send');
      });
  }


  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h1>Contact Us</h1>
          <p>Feel free to contact us for any queries or feedback.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control bg-dark text-light" id="name" aria-describedby="nameHelp" value={name} onChange={(e) => setName(e.target.value)} />
              <div id="nameHelp" className="form-text">We'll never share your name with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control bg-dark text-light" id="email" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control bg-dark text-light" id="message" rows="3" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
