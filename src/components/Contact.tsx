
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-portfolio-slate mb-8 text-lg">
              I'm currently looking for new opportunities and my inbox is always open. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-portfolio-blue/10 p-3 rounded-full mr-4">
                  <Mail className="text-portfolio-blue" size={20} />
                </div>
                <div>
                  <h3 className="text-portfolio-navy font-medium">Email</h3>
                  <p className="text-portfolio-slate">hello@example.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-portfolio-blue/10 p-3 rounded-full mr-4">
                  <Phone className="text-portfolio-blue" size={20} />
                </div>
                <div>
                  <h3 className="text-portfolio-navy font-medium">Phone</h3>
                  <p className="text-portfolio-slate">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-portfolio-blue/10 p-3 rounded-full mr-4">
                  <MapPin className="text-portfolio-blue" size={20} />
                </div>
                <div>
                  <h3 className="text-portfolio-navy font-medium">Location</h3>
                  <p className="text-portfolio-slate">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
          <Card className="border border-portfolio-blue/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-portfolio-navy mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-portfolio-navy font-medium">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="border-portfolio-blue/20 focus-visible:ring-portfolio-blue"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-portfolio-navy font-medium">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email" 
                    className="border-portfolio-blue/20 focus-visible:ring-portfolio-blue"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-portfolio-navy font-medium">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message" 
                    className="border-portfolio-blue/20 focus-visible:ring-portfolio-blue min-h-32"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-portfolio-blue hover:bg-portfolio-navy text-white"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
