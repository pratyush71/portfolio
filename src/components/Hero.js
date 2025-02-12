import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      {/* Hero Section */}
      <h1>Welcome to My Portfolio</h1>
      <p>I'm Pratyush Poddar, a Web Developer.</p>

      {/* Education Section */}
      <div className="education">
        <h2>Education</h2>
        <div className="edu-item">
          <h3>Gyan Ganga Institute of Technology and Sciences</h3>
          <p>Bachelor of Technology in AI & ML</p>
          <p><strong>CGPA:</strong> 7.0</p>
        </div>
        <div className="edu-item">
          <h3>Nachiketa Higher Secondary School, Jabalpur, M.P.</h3>
          <p>12th - <strong>93%</strong></p>
        </div>
        <div className="edu-item">
          <h3>Nachiketa Higher Secondary School, Jabalpur, M.P.</h3>
          <p>10th - <strong>91%</strong></p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills">
        <h2>Skills</h2>
        <div className="skill-category">
          <h3>Technical Skills</h3>
          <p>C++, Python, SQL</p>
        </div>
        <div className="skill-category">
          <h3>Industry Knowledge</h3>
          <p>Data Structures and Algorithms, OOPs, DBMS, Networking</p>
        </div>
        <div className="skill-category">
          <h3>Development</h3>
          <p>React.js, HTML, CSS, JavaScript, Node.js, Express.js</p>
        </div>
        <div className="skill-category">
          <h3>Tools</h3>
          <p>MS Word, MS Excel, Git, GitHub, VS Code, Google Colab</p>
        </div>
        <div className="skill-category">
          <h3>Soft Skills</h3>
          <p>Problem Solving, Communication, Leadership, Collaboration</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
