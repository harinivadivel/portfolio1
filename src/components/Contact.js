import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const form = useRef();
  const [captchaValue, setCaptchaValue] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please verify you are not a robot!");
      return;
    }

    emailjs.sendForm(
      'service_2sf4t2b', 
      'template_f9oyum', 
      form.current, 
      'pVJ8H2MVr6rybKyUWO' 
    )
    .then(response => {
      console.log('Email sent successfully:', response);
      alert('Message sent successfully!');
      form.current.reset(); 
      setCaptchaValue(null); 
    })
    .catch(error => {
      console.error('Error sending email:', error);
      alert('Failed to send message.');
    });
  };

  return (
    <section id="contact" className="container mt-5">
      <h1 className="text-center mb-4">Contact Me</h1>
      <p className="text-center">
        Please fill out the form below to discuss any work opportunities or collaborations.
      </p>

      <div className="row justify-content-center">
        <div className="col-md-3">
          <form ref={form} onSubmit={sendEmail} className="p-4 border rounded bg-light">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" name="name" className="form-control" placeholder="Your Name" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" name="email" className="form-control" placeholder="Your Email" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea name="message" className="form-control" rows="4" placeholder="Your Message" required></textarea>
            </div>

            <div className="mb-3 d-flex justify-content-center">
              <ReCAPTCHA 
                sitekey="6LcVkvkqAAAAAMS78yFkuaHKuaf_-f4lAsZpJ3Zr" 
                onChange={(value) => setCaptchaValue(value)} 
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
        </div>
      </div>

      
    </section>
  );
};

export default Contact;