import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function MagazineCover() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1760551937537-a29dbbfab30b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjY2MjI2OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Birthday Girl"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/40 via-transparent to-[#FAF7F2]/90" />
      </div>

      {/* Magazine Cover Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        {/* Small Header Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-8 space-y-2"
        >
          <p 
            className="tracking-[0.3em] uppercase text-[#8B6F6F] text-xs md:text-sm"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Private Issue • Est. 2005
          </p>
          <div className="w-24 h-[1px] bg-[#D4A5A5] mx-auto" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mb-6"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          <span className="block text-4xl md:text-7xl lg:text-8xl text-[#2C2C2C] tracking-tight mb-4">
            20 Years
          </span>
          <span className="block text-3xl md:text-5xl lg:text-6xl text-[#D4A5A5] italic">
            of Grace
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="space-y-4"
        >
          <div className="w-32 h-[1px] bg-[#D4A5A5] mx-auto" />
          <p
            className="text-lg md:text-2xl text-[#6B5B5B] tracking-wide"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            The Birthday Girl
          </p>
        </motion.div>

        {/* Date Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-12 inline-block"
        >
          <div className="border-2 border-[#D4A5A5] rounded-full px-8 py-3 backdrop-blur-sm bg-white/40">
            <p
              className="text-sm md:text-base tracking-[0.2em] text-[#8B6F6F]"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              DECEMBER 28, 2025
            </p>
          </div>
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-16"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-[1px] bg-[#D4A5A5]" />
            <span className="text-2xl text-[#D4A5A5]">✦</span>
            <div className="w-12 h-[1px] bg-[#D4A5A5]" />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-[#D4A5A5] rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-[#D4A5A5] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
