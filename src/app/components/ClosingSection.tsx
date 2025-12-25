import { motion } from 'motion/react';

export function ClosingSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-6">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2] via-[#F4DDD4] to-[#E8C4C4]" />

      {/* Floating Elements */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [-100, -800],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute text-2xl md:text-3xl"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: 0,
          }}
        >
          {i % 3 === 0 ? '✨' : i % 3 === 1 ? '💗' : '👑'}
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          {/* Crown */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: 'spring', duration: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-7xl md:text-9xl">👑</span>
          </motion.div>

          {/* Main Message */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl text-[#2C2C2C] mb-8 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Welcome to your 20s,
            <br />
            <span className="text-[#8B6F6F] italic">my forever princess</span>
          </motion.h2>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-6 mb-8"
          >
            <div className="w-24 h-[2px] bg-[#D4A5A5]" />
            <span className="text-3xl text-[#D4A5A5]">✦</span>
            <div className="w-24 h-[2px] bg-[#D4A5A5]" />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
            viewport={{ once: true }}
            className="text-xl md:text-3xl text-[#6B5B5B] mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            May this decade bring you endless joy, unforgettable adventures, 
            and all the love your beautiful heart can hold.
          </motion.p>

          {/* Date Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="px-8 py-4 bg-white/60 backdrop-blur-sm rounded-full border-2 border-white/80">
              <p
                className="text-base md:text-lg tracking-[0.3em] text-[#8B6F6F]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                DECEMBER 28, 2025
              </p>
            </div>
          </motion.div>

          {/* Hearts */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <span className="text-4xl">💗 ✨ 👑</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#E8C4C4] to-transparent" />
    </section>
  );
}
