import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import "./contact.css"; // Ensure you have this CSS file

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me via email, phone, or social media.</p>

      <div className="contact-container">
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <p><a href="mailto:pratyushpoddar152@gmail.com">pratyushpoddar152@gmail.com</a></p>
        </div>

        <div className="contact-card">
          <FaPhone className="contact-icon" />
          <h3>Phone</h3>
          <p><a href="tel:+919301088562">+91 9301088562</a></p>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Location</h3>
          <p>Civil Line, Jabalpur, M.P., India</p>
        </div>

        <div className="contact-card">
          <FaLinkedin className="contact-icon" />
          <h3>LinkedIn</h3>
          <p>
            <a href="https://www.linkedin.com/in/pratyush-poddar-6aa652312" target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn
            </a>
          </p>
        </div>

        <div className="contact-card">
          <FaGithub className="contact-icon" />
          <h3>GitHub</h3>
          <p>
            <a href="https://github.com/pratyush71" target="_blank" rel="noopener noreferrer">
              View My Projects
            </a>
          </p>
        </div>
      </div>

      <form className="contact-form">
        <h3>Send Me a Message</h3>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
