
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-portfolio-slate text-lg">
              Hello! I'm Dasari Ganesh, a B.Tech final year student with a passion for creating 
              functional and user-centered digital experiences. I started my journey in web 
              development with a curiosity to build solutions that make a difference.
            </p>
            <p className="text-portfolio-slate text-lg">
              My focus is on building accessible, inclusive applications using both frontend and
              backend technologies. I enjoy the process of transforming ideas into functional
              websites and applications.
            </p>
            <p className="text-portfolio-slate text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              projects, and continuously enhancing my skills to stay current with industry trends.
            </p>
            <div>
              <h3 className="text-portfolio-navy font-medium mb-2">
                Here are a few technologies I've been working with recently:
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center">
                  <div className="h-1 w-1 rounded-full bg-portfolio-blue mr-2"></div>
                  <span className="text-portfolio-slate font-mono text-sm">HTML/CSS</span>
                </div>
                <div className="flex items-center">
                  <div className="h-1 w-1 rounded-full bg-portfolio-blue mr-2"></div>
                  <span className="text-portfolio-slate font-mono text-sm">React</span>
                </div>
                <div className="flex items-center">
                  <div className="h-1 w-1 rounded-full bg-portfolio-blue mr-2"></div>
                  <span className="text-portfolio-slate font-mono text-sm">Node.js</span>
                </div>
                <div className="flex items-center">
                  <div className="h-1 w-1 rounded-full bg-portfolio-blue mr-2"></div>
                  <span className="text-portfolio-slate font-mono text-sm">Express.js</span>
                </div>
                <div className="flex items-center">
                  <div className="h-1 w-1 rounded-full bg-portfolio-blue mr-2"></div>
                  <span className="text-portfolio-slate font-mono text-sm">MongoDB</span>
                </div>
                <div className="flex items-center">
                  <div className="h-1 w-1 rounded-full bg-portfolio-blue mr-2"></div>
                  <span className="text-portfolio-slate font-mono text-sm">PostgreSQL</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded overflow-hidden">
              <div className="absolute inset-0 bg-portfolio-blue/10"></div>
              <div className="w-full h-full relative z-10 p-2">
                <div className="w-full h-full border-2 border-portfolio-blue rounded overflow-hidden">
                  <Avatar className="w-full h-full rounded">
                    <AvatarImage src="/profile-picture.jpg" alt="Dasari Ganesh" className="object-cover" />
                    <AvatarFallback className="text-portfolio-blue text-xl font-medium">DG</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded border-2 border-portfolio-blue z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
