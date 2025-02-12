import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2025 Pratyush Poddar | All Rights Reserved</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "white",
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    width: "100%",
    bottom: "0",
  },
};

export default Footer;
