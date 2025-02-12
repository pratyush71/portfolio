import React from "react";

const projects = [
  {
    title: "📌 Voting App",
    description: [
      "🔹 User Authentication: Sign up and log in using Aadhaar Card Number.",
      "🔹 Voting System: Users vote for a candidate of their choice (one vote per user).",
      "🔹 Admin Management: Admins manage candidates (add, update, delete), ensuring neutrality.",
      "🔹 Tech-Stack: Node.js, MongoDB, Express.js.",
    ],
    link: "https://github.com/pratyush71/Voting-App",
  },
  {
    title: "📌 Book Store App",
    description: [
      "🔹 User Authentication: Sign up and log in using Email ID.",
      "🔹 Customer Features: View, choose, and buy books.",
      "🔹 Admin Management: Manage customers and books (add, update, delete) without making purchases.",
      "🔹 Tech-Stack: Node.js, MongoDB, Express.js, React.js.",
    ],
    link: "https://github.com/pratyush71/bookstore21",
  },
  {
    title: "📌 Fitness Tracker Website",
    description: [
      "🔹 User Authentication: Monitor workouts, log exercises, and set goals.",
      "🔹 Progress Tracking: Provides insights with graphs and statistics.",
      "🔹 Admin Management: Manage user accounts and workout categories.",
      "🔹 Tech-Stack: MERN Stack (MongoDB, Express.js, React.js, Node.js).",
    ],
    link: "hhttps://github.com/pratyush71/FItness-Tracker11",
  },
  {
    title: "📌 Event Management Project",
    description: [
      "🔹 User Authentication: Secure authentication using JWT.",
      "🔹 Event Management: Users can create, edit, and delete events.",
      "🔹 Real-Time Updates: Implemented using WebSockets for live event status.",
      "🔹 Database: Efficient storage for event and user data.",
      "🔹 Tech-Stack: Node.js, Express.js, MongoDB, WebSockets.",
    ],
    link: "https://github.com/pratyush71/Eventmanager121",
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h2>{project.title}</h2>
          <ul>
            {project.description.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            🔗 View on GitHub
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
