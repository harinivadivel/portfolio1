import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const [captchaValue, setCaptchaValue] = useState(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please verify you are not a robot!");
      return;
    }
    alert("Form submitted successfully")

    emailjs.sendForm(
      'service_2sft42b', 
      'template_f9oyumm', 
      form.current, 
      'lNaP8P8VnuWeBCYlV' 
    )
    .then(response => {
      console.log('Email sent successfully:', response);
      alert('Message sent successfully!');
    })
    .catch(error => {
      console.error('Error sending email:', error);
      alert('Failed to send message.');
    });

    e.target.reset();
  };

  return (
    <section id="contact" className="container mt-5">
      <h1 className="text-center text-success mb-4 fw-bolder">Contact Me</h1>
      <p className="text-center">
        Please fill out the form below to discuss any work opportunities or collaborations.
      </p>

      <div className="row justify-content-center">
        <div className="col-md">
          <form ref={form} onSubmit={sendEmail} className="p-4 border rounded w-100 h-100">
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

            <button type="submit" className="btn btn-success w-100">Submit</button>
          </form>
        </div>
      </div>

      
    </section>
  );
};

export default Contact;