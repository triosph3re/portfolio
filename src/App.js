import { FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="bg-white text-black min-h-screen font-sans">
      {/* Header */}
      <header className="text-center py-10 bg-black text-white">
        <h1 className="text-4xl font-bold tracking-wide">Duong Minh Tri</h1>
        <p className="text-lg text-gray-400">Software Engineering Student</p>
      </header>

      {/* About Me */}
      <motion.section 
        className="max-w-3xl mx-auto p-6" 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-black border-b-4 border-gray-800 inline-block">
          About Me
        </h2>
        <p className="text-gray-700 leading-relaxed">
          I am a 3rd-year Software Engineering student at Saigon University with
          a passion for building efficient software solutions.
        </p>
      </motion.section>

      {/* Skills */}
      <motion.section 
        className="max-w-3xl mx-auto p-6" 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-black border-b-4 border-gray-800 inline-block">
          Skills
        </h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li><strong>Languages:</strong> C/C++, Python, Java, JavaScript, HTML/CSS</li>
          <li><strong>Tools:</strong> Git/GitHub, VS Code, IntelliJ, PyCharm, NetBeans</li>
          <li><strong>Concepts:</strong> OOP, Data Structures & Algorithms</li>
        </ul>
      </motion.section>

      {/* Projects */}
      <motion.section 
        className="max-w-3xl mx-auto p-6" 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-black border-b-4 border-gray-800 inline-block">
          Projects
        </h2>
        <div className="space-y-4">
          <ProjectCard
            title="Fast Food Online Store"
            description="A web-based platform for ordering fast food."
            date="12/2023"
          />
          <ProjectCard
            title="Shoe Store Management"
            description="A desktop app for managing shoe inventory using Java Swing."
            date="05/2024"
          />
          <ProjectCard
            title="Gun&Run Game"
            description="A 2D shooting game built with Pygame."
            date="12/2024"
          />
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section 
        className="max-w-3xl mx-auto p-6 text-center" 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-black border-b-4 border-gray-800 inline-block">
          Contact
        </h2>
        <div className="flex justify-center gap-6 mt-4">
          {/* GitHub */}
          <a
            href="https://github.com/triosph3re"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition transform hover:scale-110"
          >
            <FaGithub size={35} />
          </a>
          
          {/* Gmail */}
          <a
            href="mailto:duongminhtri722004@gmail.com"
            className="text-gray-700 hover:text-red-500 transition transform hover:scale-110"
          >
            <FaEnvelope size={35} />
          </a>
        </div>
      </motion.section>
    </div>
  );
}

function ProjectCard({ title, description, date }) {
  return (
    <motion.div
      className="p-4 border rounded-lg shadow-md bg-gray-100"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <p className="text-gray-500 text-sm mt-1">{date}</p>
    </motion.div>
  );
}
