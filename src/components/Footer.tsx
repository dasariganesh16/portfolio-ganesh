
import React from 'react';
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-portfolio-navy text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-8">
            <a 
              href="#" 
              className="hover:text-portfolio-blue transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="#" 
              className="hover:text-portfolio-blue transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="#" 
              className="hover:text-portfolio-blue transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="mailto:hello@example.com" 
              className="hover:text-portfolio-blue transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
          <p className="text-portfolio-lightSlate text-sm">
            Designed & Built by Your Name
          </p>
          <p className="text-portfolio-lightSlate text-sm mt-2">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
