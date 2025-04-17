import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="bg-light text-dark">
      {/* Header Section */}
      <header className="bg-dark text-white py-4">
        <div className="container d-flex justify-content-between">
          <h1 className="fw-bold"> AT</h1>
          <nav>
            <ul className="list-unstyled d-flex">
              <li className="me-4">
                <a href="#about" className="text-white text-decoration-none">
                  About
                </a>
              </li>
              <li className="me-4">
                <a href="#projects" className="text-white text-decoration-none">
                  Projects
                </a>
              </li>
              <li className="me-4">
                <a href="#skills" className="text-white text-decoration-none">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="d-flex align-items-center justify-content-center vh-100 text-center"
        style={{
          background: "linear-gradient(135deg, #6c5ce7, #00b894)",
          color: "white"
        }}
      >
        <div>
          <h1 className="display-3 fw-bold mb-3"> Hi, I'm Aman Tinmekar 👋</h1>
          <p className="lead mb-4">
            Full Stack Developer | MERN Stack | Frontend | Backend | Web Design
          </p>
          <div className="mt-4">
            <a href="#contact" className="btn btn-light me-3 px-4 py-2 fw-bold">
              Hire Me
            </a>
            <a
              href="#projects"
              className="btn btn-outline-light me-3 px-4 py-2 fw-bold"
            >
              View Projects
            </a>
            <a
              href="/Aman-Tinmekar-Resume.pdf"
              className="btn btn-success px-4 py-2 fw-bold"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-4 text-primary">About Me</h2>
          <p className="w-75 mx-auto fs-5">
            I’m a passionate Full Stack Developer with a focus on modern web
            development. I have experience with the MERN stack and PHP, and I am
            always looking to learn and grow. Currently exploring DevOps and
            cloud deployment. Let's create something amazing together!
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-5 bg-gradient-to-r from-blue-400 via-green-500 to-indigo-600"
      >
        <div className="container">
          <h2 className="text-center fw-bold mb-4 text-primary">Skills</h2>

          <div className="row text-center">
            <div className="col-md-3">
              <h5 className="text-light">Frontend</h5>
              <p>React.js, HTML, CSS, JS, Redux, Tailwind, Bootstrap</p>
            </div>
            <div className="col-md-3">
              <h5 className="text-light">Backend</h5>
              <p>Node.js, Express.js, REST APIs, Laravel (Basics)</p>
            </div>
            <div className="col-md-3">
              <h5 className="text-light">Databases</h5>
              <p>MongoDB, MySQL, SQLite</p>
            </div>
            <div className="col-md-3">
              <h5 className="text-light">Tools</h5>
              <p>Git, GitHub, Docker (Basics), AWS, Netlify, Render</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 text-primary">Projects</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <Card
                className="shadow-lg h-100"
                style={{ borderRadius: "15px" }}
              >
                <Card.Body>
                  <motion.h5
                    className="card-title"
                    initial={{ x: -200 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1 }}
                  >
                    🌍 Wanderlust
                  </motion.h5>
                  <Card.Text>
                    A travel-focused app using MERN & MVC architecture. Users
                    explore & manage travel destinations with image handling via
                    Mongoose.
                  </Card.Text>
                  <a
                    href="https://wanderlust-pl6u.onrender.com/listings"
                    className="btn btn-primary mt-3"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ borderRadius: "10px" }}
                  >
                    Visit Wanderlust Project
                  </a>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-6">
              <Card
                className="shadow-lg h-100"
                style={{ borderRadius: "15px" }}
              >
                <Card.Body>
                  <motion.h5
                    className="card-title"
                    initial={{ x: 200 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1 }}
                  >
                    💼 Connect US
                  </motion.h5>
                  <Card.Text>
                    A client-employee management system built with PHP & MySQL,
                    enhancing communication and transparency with real-time
                    updates.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-5 bg-gradient-to-r from-blue-400 via-green-500 to-indigo-600">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 text-white">Experience</h2>
          <div className="mb-4">
            <h5>💻 Full Stack PHP Developer Intern – Codeworld Pvt Ltd</h5>
            <p>Jan 2024 – Apr 2024</p>
            <p>
              Worked on Laravel, MySQL, and frontend tech to build dynamic apps
              and sharpen backend logic.
            </p>
          </div>
          <div>
            <h5>📚 MERN Stack Certification – Apna College</h5>
            <p>May 2024 – Oct 2024 (Ongoing)</p>
            <p>
              Built several MERN apps with RESTful APIs, modular architecture,
              and real-world deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-4 text-primary">Education</h2>
          <p>🎓 MCA – Suryadatta Group of Institutes, Pune | SGPA: 9.62</p>
          <p>🎓 BCA – Bharati Vidyapeeth, Solapur | SGPA: 8.52</p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-5 text-white"
        style={{
          background: "linear-gradient(135deg, #00b894, #6c5ce7)"
        }}
      >
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Contact Me</h2>
          <p className="fs-5">
            <FaPhoneAlt /> 8180050918
          </p>
          <p className="fs-5">
            <FaEnvelope /> amantinmekar5@gmail.com
          </p>
          <p className="fs-5">
            <FaLinkedin />{" "}
            <a
              href="https://www.linkedin.com/in/aman-tinmekar-908b5622a/"
              className="text-white text-decoration-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
          <p className="fs-5">
            <FaGithub />{" "}
            <a
              href="https://github.com/Aman3071"
              className="text-white text-decoration-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
