import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ Emile Mathieu {year}</p>
    </footer>
  );
}

export default Footer;
