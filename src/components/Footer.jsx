import React from "react";

function Footer() {
  const date = new Date();
  const getYear = date.getFullYear();

  return <footer>
    <p>Copyright © Emile Mathieu {getYear}
    </p>
  </footer>
}

export default Footer;