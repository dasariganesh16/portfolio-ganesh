
import React from 'react';
import { Github, Linkedin, Twitter, Mail, Download } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-portfolio-navy text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-center space-x-6 mb-8">
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
              href="mailto:ganeshdasari166@gmail.com" 
              className="hover:text-portfolio-blue transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a 
              href="/resume.pdf" 
              download
              className="hover:text-portfolio-blue transition-colors"
              aria-label="Download Resume"
            >
              <Download size={24} />
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href="#about" className="text-portfolio-lightSlate hover:text-portfolio-blue transition-colors">About</a>
            <a href="#skills" className="text-portfolio-lightSlate hover:text-portfolio-blue transition-colors">Skills</a>
            <a href="#projects" className="text-portfolio-lightSlate hover:text-portfolio-blue transition-colors">Projects</a>
            <a href="#contact" className="text-portfolio-lightSlate hover:text-portfolio-blue transition-colors">Contact</a>
            <a href="/resume.pdf" download className="text-portfolio-lightSlate hover:text-portfolio-blue transition-colors">Resume</a>
          </div>
          <p className="text-portfolio-lightSlate text-sm">
            Designed & Built by Dasari Ganesh
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
