"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const projects = [

     {
      title: "Ecommerce Website",
      description: "A revolutionary web application built with Next.js and TypeScript",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2370&auto=format&fit=crop",
      link: "https://ecommerce-furniture-project.vercel.app/"
    }
    ,
    {
      title: "Data Sweeper & Integrator",
      description: "Data Sweeper & Integrator Excel & Csv File analyzer remove duplicate Entries & Make Chart Build With Python & Streamlit",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2370&auto=format&fit=crop",
      link: "https://growthmindsetchallenge45.streamlit.app/"
    },
    {
      title: "Secure Data Encryption",
      description: "Secure Data Encryption Build with Python & Streamlit",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      link: "https://securedataencrypt45.streamlit.app/"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold">Portfolio</span>
            </div>
            <div className="flex items-center space-x-8">
              {["home", "about", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    setActiveSection(section);
                    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 px-4 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                ABDUL AHAD
              </h1>
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-blue">
                Creative Developer & Designer
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Crafting beautiful digital experiences through code and design.
              </p>
              <Button
                size="lg"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full bg-gradient-to-tr from-primary/20 to-blue-500/20 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                I'm a passionate developer with expertise in modern web technologies. My journey in tech
                has led me to work on diverse projects, from enterprise applications to creative
                experiments.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Frontend</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>HTML/ CSS/ JS</li>
                    <li>React / Next.js</li>
                    <li>TypeScript</li>
                    <li>Shad cn / Tailwind CSS</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/10 to-blue-500/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <Button variant="outline" asChild>
                    <a href={project.link}>View Project</a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <Input placeholder="Your Name" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" className="min-h-[150px]" />
                </div>
                <Button type="submit" size="lg">
                  Send Message
                </Button>
              </form>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Let's collaborate on your next project or just have a friendly chat about technology
                and design.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
