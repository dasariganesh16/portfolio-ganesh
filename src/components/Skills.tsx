
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS", "SASS/SCSS"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express", "Python", "Django", "RESTful APIs", "GraphQL", "MongoDB", "PostgreSQL", "Firebase"]
    },
    {
      title: "Tools & Methods",
      skills: ["Git", "GitHub", "VS Code", "Webpack", "Docker", "CI/CD", "Agile/Scrum", "Jest", "Figma"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border border-portfolio-blue/20 overflow-hidden">
              <div className="h-2 bg-portfolio-blue"></div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-portfolio-navy mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-portfolio-blue/10 text-portfolio-navy rounded-full text-sm"
                    >
                      {skill}
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

export default Skills;
