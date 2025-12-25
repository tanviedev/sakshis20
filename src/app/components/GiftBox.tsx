import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gift, X } from 'lucide-react';

export function GiftBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  const handleOpen = () => {
    if (hasOpened) return;
    setIsOpen(true);
    setHasOpened(true);
  };

  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-[#D4A5A5]" />
            <span className="text-2xl text-[#D4A5A5]">✦</span>
            <div className="w-12 h-[1px] bg-[#D4A5A5]" />
          </div>
          
          <h2
            className="text-4xl md:text-6xl text-[#2C2C2C] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            A Special Gift
          </h2>
          
          <p
            className="text-lg md:text-xl text-[#8B6F6F] italic"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Open me to reveal your surprise
          </p>
        </motion.div>

        {/* Gift Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative inline-block"
        >
          {!isOpen ? (
            <motion.button
              whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpen}
              disabled={hasOpened}
              className="relative group"
            >
              {/* Gift Box */}
              <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-[#F4DDD4] to-[#E8C4C4] 
                            rounded-lg shadow-2xl flex items-center justify-center
                            group-hover:shadow-3xl transition-shadow duration-300">
                <Gift className="w-24 h-24 md:w-32 md:h-32 text-white" />
              </div>

              {/* Ribbon */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-full bg-white/30" />
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-8 bg-white/30" />

              {/* Bow */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="w-16 h-16 bg-white/40 rounded-full" />
              </div>

              {/* Sparkles */}
              {!hasOpened && (
                <>
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.3,
                        repeat: Infinity,
                      }}
                      className="absolute text-2xl"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                    >
                      ✨
                    </motion.div>
                  ))}
                </>
              )}
            </motion.button>
          ) : (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', duration: 0.8 }}
            >
              {/* Sparkle Burst */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, x: 0, y: 0 }}
                  animate={{
                    scale: [0, 1, 0],
                    x: Math.cos((i / 12) * Math.PI * 2) * 200,
                    y: Math.sin((i / 12) * Math.PI * 2) * 200,
                    opacity: [1, 1, 0],
                  }}
                  transition={{ duration: 1.5 }}
                  className="absolute top-1/2 left-1/2 text-3xl"
                >
                  ✨
                </motion.div>
              ))}
            </motion.div>
          )}

          {hasOpened && !isOpen && (
            <p
              className="mt-4 text-sm text-[#C9B7A8]"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Already opened
            </p>
          )}
        </motion.div>

        {/* Gift Reveal Modal */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 
                       flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.5, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0.5, rotate: 10 }}
                transition={{ type: 'spring', duration: 0.8 }}
                className="relative w-full max-w-2xl bg-gradient-to-br from-[#F4DDD4] via-[#E8C4C4] to-[#D4A5A5] 
                         rounded-lg shadow-2xl p-8 md:p-12"
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-full 
                           bg-white/80 hover:bg-white transition-colors"
                >
                  <X className="w-5 h-5 text-[#8B6F6F]" />
                </button>

                {/* Gift Content */}
                <div className="text-center">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, type: 'spring' }}
                    className="mb-8"
                  >
                    <div className="inline-block p-6 bg-white/40 rounded-full">
                      <span className="text-6xl">🎁</span>
                    </div>
                  </motion.div>

                  {/* Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h3
                      className="text-3xl md:text-5xl text-white mb-6"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      Happy 20th Birthday!
                    </h3>
                    
                    <p
                      className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-lg mx-auto"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      May your 20s be filled with love, laughter, adventure, 
                      and all the magic you deserve. Here's to the most beautiful 
                      journey ahead.
                    </p>

                    <div className="inline-block px-8 py-3 bg-white/30 backdrop-blur-sm rounded-full">
                      <p
                        className="text-sm tracking-[0.3em] text-white"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        WITH ALL MY LOVE 💗
                      </p>
                    </div>
                  </motion.div>

                  {/* Floating Hearts */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ y: 0, opacity: 0 }}
                      animate={{
                        y: [-20, -200],
                        opacity: [0, 1, 0],
                        x: Math.sin(i) * 50,
                      }}
                      transition={{
                        duration: 3,
                        delay: 0.8 + i * 0.2,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                      className="absolute bottom-0 text-2xl"
                      style={{ left: `${10 + i * 10}%` }}
                    >
                      💗
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
