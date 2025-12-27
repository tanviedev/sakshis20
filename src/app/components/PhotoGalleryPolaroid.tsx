import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const memories = [
  {
    src: "/images/memory1.jpg",
    caption: "You & me, always",
    rotate: -4,
  },
  {
    src: "/images/memory2.jpg",
    caption: "Forever laughing",
    rotate: 3,
  },
  {
    src: "/images/memory3.jpg",
    caption: "Golden moments",
    rotate: -2,
  },
  {
    src: "/images/memory4.jpg",
    caption: "Late night talks",
    rotate: 4,
  },
  {
    src: "/images/memory5.jpg",
    caption: "Soft chaos",
    rotate: -3,
  },
  {
    src: "/images/memory6.jpg",
    caption: "My comfort human",
    rotate: 2,
  },
];

export function PhotoGalleryPolaroid() {
  return (
    <section className="py-20 md:py-32 px-6 bg-[#F5F1EA]" id="memories">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16 md:mb-24"
      >
        <h2
          className="text-4xl md:text-6xl text-[#2C2C2C] mb-4"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Captured Moments
        </h2>
        <p
          className="text-lg md:text-xl text-[#8B6F6F]"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          A collection of memories we've made together
        </p>
      </motion.div>

      {/* Polaroid Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: memory.rotate }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
              className="relative group cursor-pointer"
            >
              {/* Polaroid Frame */}
              <div className="bg-white p-4 pb-16 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                {/* Image */}
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={memory.src}
                    alt={memory.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p
                    className="text-[#6B5B5B] text-sm md:text-base"
                    style={{ fontFamily: 'Dancing Script, cursive' }}
                  >
                    {memory.caption}
                  </p>
                </div>
              </div>

              {/* Tape Effect */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 
                            bg-white/40 backdrop-blur-sm rotate-0 shadow-sm" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Add More Photos Placeholder */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
      </motion.div>
    </section>
  );
}
