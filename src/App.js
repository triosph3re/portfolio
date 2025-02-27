import { useState } from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="bg-white text-black min-h-screen font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-center space-x-6 z-50">
        <a href="#about" className="hover:text-gray-500">About</a>
        <a href="#skills" className="hover:text-gray-500">Skills</a>
        <a href="#projects" className="hover:text-gray-500">Projects</a>
        <a href="#contact" className="hover:text-gray-500">Contact</a>
      </nav>

      {/* Header */}
      <header className="text-center py-20">
        <motion.h1 className="text-5xl font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>Duong Minh Tri</motion.h1>
        <p className="text-lg text-gray-600 mt-2">Software Engineering Student</p>
      </header>

      {/* About Me */}
      <section id="about" className="max-w-3xl mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700">
          I am a 3rd-year Software Engineering student at Saigon University with
          a passion for building efficient software solutions.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-3xl mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Languages: C/C++, Python, Java, JavaScript, HTML/CSS</li>
          <li>Tools: Git/GitHub, VS Code, IntelliJ, PyCharm, NetBeans</li>
          <li>Concepts: OOP, Data Structures & Algorithms</li>
        </ul>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-3xl mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard title="Fast Food Online Store" description="A web-based platform for ordering fast food." date="12/2023" />
          <ProjectCard title="Shoe Store Management" description="A desktop app for managing shoe inventory using Java Swing." date="05/2024" />
          <ProjectCard title="Gun&Run Game" description="A 2D shooting game built with Pygame." date="12/2024" />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-3xl mx-auto p-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-700">Email: duongminhtri722004@gmail.com</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/triosph3re" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition">
            <FaGithub size={40} />
          </a>
          <a href="mailto:duongminhtri722004@gmail.com" className="text-gray-700 hover:text-black transition">
            <FaEnvelope size={40} />
          </a>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ title, description, date }) {
  return (
    <motion.div className="p-6 border rounded-lg shadow-lg bg-gray-100" whileHover={{ scale: 1.05 }}>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <p className="text-gray-500 text-sm mt-1">{date}</p>
    </motion.div>
  );
}
