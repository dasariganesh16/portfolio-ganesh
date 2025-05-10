
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-start space-y-4 animate-fade-in-up">
          <p className="text-portfolio-blue font-mono">Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-portfolio-navy">
            Dasari Ganesh.
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-slate">
            I build things for the web.
          </h2>
          <p className="text-portfolio-slate max-w-xl mt-5 text-lg">
            I'm a B.Tech final year student passionate about building exceptional digital experiences. 
            Currently, I'm focused on expanding my skills in full-stack development.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button 
              className="bg-portfolio-blue hover:bg-portfolio-navy text-white px-6 py-2"
              size="lg"
              asChild
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button 
              variant="outline" 
              className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue/10"
              size="lg"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
            <Button
              variant="secondary"
              className="text-portfolio-navy"
              size="lg"
              asChild
            >
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
