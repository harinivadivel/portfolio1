import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-scroll';
import Resume from '../assets/resume.jpg';

const ResumeComponent = () => {
  const onButtonClick = () => {
    const pdfURL = "https://lavender-hettie-34.tiiny.site"; // Update with correct resume link
    const link = document.createElement("a");
    link.href = pdfURL;
    link.download = "resume.pdf"; // Specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="container text-center mt-5">
      <h1 className="mb-3 text-primary">My Resume</h1>
      <p className="text-light">Click the button below to download the PDF file.</p>
      
      <div className="mb-4">
        <img src={Resume} alt="Resume" className="img-fluid rounded shadow" style={{ maxWidth: "70%" }} />
      </div>

      <Link to="resume" smooth={true} duration={500}>
        <button onClick={onButtonClick} className="btn btn-primary">
          Download PDF
        </button>
      </Link>
    </section>
  );
};

export default ResumeComponent;