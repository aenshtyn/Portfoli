'use client';

import { motion } from 'framer-motion';
import { projectsData } from '@/lib/data';
import MobileAppPreview from './MobileAppPreview';

export default function MobileApps() {
  const mobileApps = projectsData.filter(project => project.category === 'mobile-app');

  if (mobileApps.length === 0) {
    return null;
  }

  return (
    <section id="mobile-apps" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mobile Applications
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Native and cross-platform mobile apps built for iOS and Android, available on app stores
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {mobileApps.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <MobileAppPreview project={app} />
            </motion.div>
          ))}
        </div>

        {/* App Store Badges Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Download my apps on your favorite platform</p>
          <div className="flex justify-center gap-4">
            <img
              src="/google-play-badge.png"
              alt="Get it on Google Play"
              className="h-16 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
            />
            <img
              src="/app-store-badge.png"
              alt="Download on the App Store"
              className="h-16 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}