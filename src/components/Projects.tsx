
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      githubLink: "#",
      liveLink: "#",
      image: "/placeholder.svg",
    },
    {
      title: "Task Management App",
      description: "A task management application with features like task creation, assignment, progress tracking, and notifications.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
      githubLink: "#",
      liveLink: "#",
      image: "/placeholder.svg",
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current weather conditions and forecasts for multiple locations.",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS Modules"],
      githubLink: "#",
      liveLink: "#",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border border-portfolio-blue/20 hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden bg-gray-100 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-portfolio-navy/70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="flex space-x-4">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white p-2 rounded-full hover:bg-portfolio-blue hover:text-white transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white p-2 rounded-full hover:bg-portfolio-blue hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-portfolio-navy mb-2">{project.title}</h3>
                <p className="text-portfolio-slate mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs font-mono text-portfolio-navy bg-portfolio-blue/10 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
