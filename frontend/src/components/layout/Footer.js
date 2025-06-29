import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-light py-3 mt-auto z-3 position-relative w-100">
      <div>Created by Harshvardhan Khare </div>
      <div>
        <a href="https://github.com/Harshvk24" className="text-info mx-2" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/harshvardhankhare/" className="text-info mx-2" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
