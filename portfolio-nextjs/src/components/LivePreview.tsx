'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Loader2 } from 'lucide-react';

interface LivePreviewProps {
  url: string;
  title: string;
  githubUrl?: string;
}

export default function LivePreview({ url, title, githubUrl }: LivePreviewProps) {
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Using Thum.io for live website previews
    const generatePreviewUrl = () => {
      try {
        // High quality preview with proper dimensions
        const screenshotUrl = `https://api.thum.io/get/width/800/crop/600/noanimate/${encodeURIComponent(url)}`;
        setPreviewUrl(screenshotUrl);
      } catch (err) {
        setError(true);
        setIsLoading(false);
      }
    };

    generatePreviewUrl();
  }, [url]);

  const handleImageLoad = () => {
    setIsLoading(false);
    setError(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setError(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-xl bg-gray-900 shadow-2xl"
    >
      {/* Preview Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
            <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
          </div>
        )}

        {error ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-gray-400">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-700 rounded-lg flex items-center justify-center">
                <ExternalLink className="w-8 h-8" />
              </div>
              <p className="text-sm">Preview unavailable</p>
            </div>
          </div>
        ) : (
          <img
            src={previewUrl}
            alt={`Live preview of ${title}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex gap-4">
              <motion.a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
                View Live
              </motion.a>

              {githubUrl && (
                <motion.a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-4 h-4" />
                  Code
                </motion.a>
              )}
            </div>
          </div>
        </div>

        {/* Live indicator */}
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            Live
          </span>
        </div>
      </div>
    </motion.div>
  );
}