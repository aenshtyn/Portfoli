'use client';

import { motion } from 'framer-motion';
import { Download, User } from 'lucide-react';
import { aboutData } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600">
            Passionate developer crafting digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-gray-200 rounded-2xl overflow-hidden h-full flex items-center justify-center">
                <User className="w-32 h-32 text-gray-400" />
                {/* Replace with actual image */}
                {/* <img
                  src="/images/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                /> */}
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                {aboutData.paragraphOne}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {aboutData.paragraphTwo}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {aboutData.paragraphThree}
              </p>
            </div>

            {/* Skills */}
            <div className="pt-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {aboutData.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-purple-100 text-purple-800 font-medium rounded-lg cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Resume Button */}
            {aboutData.resume && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-6"
              >
                <a
                  href={aboutData.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}