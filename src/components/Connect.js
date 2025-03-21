import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Connect = () => {
  useEffect(() => {
    document.getElementById("connect").scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section id="connect" className="container mt-5">
      <div className="text-center">
        <h1 className="mb-3 text-success fw-bolder">Connect with Me</h1>
        <p className="text-light">
          Get in touch with me through any of the following websites:
        </p>

        <div className="d-flex justify-content-center gap-3 mt-3">
          <a href="https://www.linkedin.com/in/harini-vadivel-35811424a/" className="text-primary fs-3">
            <LinkedInIcon fontSize="large" color="light" />
          </a>
          <a href="https://github.com/harinivadivel" className="text-dark fs-3">
            <GitHubIcon fontSize="large" color="light"/>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100094474587066" className="text-primary fs-3">
            <FacebookIcon fontSize="large" color="light"/>
          </a>
          <a href="https://www.instagram.com/harinivadivel1492/" className="text-danger fs-3">
            <InstagramIcon fontSize="large" color="light"/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Connect;