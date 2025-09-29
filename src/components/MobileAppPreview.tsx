'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Star, Download, ExternalLink, Github } from 'lucide-react';
import { ProjectData } from '@/lib/data';

interface MobileAppPreviewProps {
  project: ProjectData;
}

export default function MobileAppPreview({ project }: MobileAppPreviewProps) {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const screenshots = project.screenshots || [];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl"
    >
      <div className="p-8">
        {/* App Header */}
        <div className="flex items-center gap-4 mb-6">
          {project.appIcon ? (
            <img
              src={`/${project.appIcon}`}
              alt={`${project.title} icon`}
              className="w-16 h-16 rounded-2xl shadow-lg"
            />
          ) : (
            <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
          )}

          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
            <div className="flex items-center gap-3 text-gray-300">
              {project.platform && (
                <span className="px-3 py-1 bg-gray-700 rounded-full text-xs font-medium capitalize">
                  {project.platform}
                </span>
              )}
              {project.rating && (
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">{project.rating}</span>
                </div>
              )}
              {project.downloadCount && (
                <div className="flex items-center gap-1">
                  <Download className="w-4 h-4" />
                  <span className="text-sm">{project.downloadCount}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-purple-900/50 text-purple-200 text-sm font-medium rounded-md border border-purple-700/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Phone Mockup with Screenshots */}
        {screenshots.length > 0 && (
          <div className="mb-8">
            <div className="relative mx-auto w-64 h-[540px]">
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>

                  {/* Screenshot */}
                  <img
                    src={`/${screenshots[currentScreenshot]}`}
                    alt={`${project.title} screenshot ${currentScreenshot + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Screenshot Navigation */}
            {screenshots.length > 1 && (
              <div className="flex justify-center gap-2 mt-4">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentScreenshot(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentScreenshot ? 'bg-purple-500' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          {project.playStoreUrl && (
            <motion.a
              href={project.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
              Google Play
            </motion.a>
          )}

          {project.appStoreUrl && (
            <motion.a
              href={project.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
              App Store
            </motion.a>
          )}

          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4" />
              View Details
            </motion.a>
          )}

          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border-2 border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              Source Code
            </motion.a>
          )}
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
            project.status === 'completed'
              ? 'bg-green-100 text-green-800'
              : project.status === 'ongoing'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-blue-100 text-blue-800'
          }`}>
            {project.status}
          </span>
        </div>
      </div>
    </motion.div>
  );
}