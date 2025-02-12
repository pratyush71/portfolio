import React from "react";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <a href="#hero" style={styles.link}>Home</a>
      <a href="#about" style={styles.link}>About</a>
      <a href="#projects" style={styles.link}>Projects</a>
      <a href="#contact" style={styles.link}>Contact</a>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "10px",
    backgroundColor: "#333",
    position: "sticky",
    top: "0",
    zIndex: "1000",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  },
};

export default Navbar;
