
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-portfolio-slate text-lg">
              Hello! I'm John, a passionate web developer with a love for creating beautiful, 
              functional, and user-centered digital experiences. I started my journey in web 
              development in 2018, and since then, I've been continuously learning and improving 
              my skills.
            </p>
            <p className="text-portfolio-slate text-lg">
              My focus is on building accessible, inclusive products and digital experiences 
              for a variety of clients. I have experience working with both frontend and backend 
              technologies, allowing me to create full-stack applications.
            </p>
            <p className="text-portfolio-slate text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or enjoying outdoor activities like hiking and photography.
            </p>
            <div>
              <h3 className="text-portfolio-navy font-medium mb-2">
                Here are a few technologies I've been working with recently:
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center">
                  <div className="h-1 w-1 rounded-full bg-portfolio-blue mr-2"></div>
                  <span className="text-portfolio-slate font-mono text-sm">JavaScript (ES6+)</span>
                </div>
                <div className="flex items-center">
                  <div className="h-1 w-1 rounded-full bg-portfolio-blue mr-2"></div>
                  <span className="text-portfolio-slate font-mono text-sm">React</span>
                </div>
                <div className="flex items-center">
                  <div className="h-1 w-1 rounded-full bg-portfolio-blue mr-2"></div>
                  <span className="text-portfolio-slate font-mono text-sm">TypeScript</span>
                </div>
                <div className="flex items-center">
                  <div className="h-1 w-1 rounded-full bg-portfolio-blue mr-2"></div>
                  <span className="text-portfolio-slate font-mono text-sm">Node.js</span>
                </div>
                <div className="flex items-center">
                  <div className="h-1 w-1 rounded-full bg-portfolio-blue mr-2"></div>
                  <span className="text-portfolio-slate font-mono text-sm">Tailwind CSS</span>
                </div>
                <div className="flex items-center">
                  <div className="h-1 w-1 rounded-full bg-portfolio-blue mr-2"></div>
                  <span className="text-portfolio-slate font-mono text-sm">Next.js</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded bg-portfolio-blue/10 overflow-hidden">
              <div className="absolute inset-0 bg-portfolio-blue/10"></div>
              <div className="w-full h-full relative z-10 p-2">
                <div className="w-full h-full border-2 border-portfolio-blue rounded"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-portfolio-blue font-mono">Your Image Here</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded border-2 border-portfolio-blue z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
