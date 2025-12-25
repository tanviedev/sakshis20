import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const memories = [
  {
    src: "https://images.unsplash.com/photo-1599215966323-88d801b84771?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwZmxvd2VycyUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NjY1NTEwODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Blooming beautifully",
    rotate: -3,
  },
  {
    src: "https://images.unsplash.com/photo-1638644074459-9067407b72a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwbGF1Z2hpbmclMjB0b2dldGhlcnxlbnwxfHx8fDE3NjY2MzQ3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Forever laughing together",
    rotate: 2,
  },
  {
    src: "https://images.unsplash.com/photo-1661924280523-0ca239290d10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBiZWFjaCUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NjY2NDcxNjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Golden hour magic",
    rotate: -2,
  },
  {
    src: "https://images.unsplash.com/photo-1682298919189-17ae2e2ff73a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBhZXN0aGV0aWMlMjBtb3JuaW5nfGVufDF8fHx8MTc2NjY0NzE2OXww&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Morning conversations",
    rotate: 4,
  },
  {
    src: "https://images.unsplash.com/photo-1548932134-3d7d765bece2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmUlMjBtb3VudGFpbnN8ZW58MXx8fHwxNzY2NjMzMzUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Adventures await",
    rotate: -1,
  },
  {
    src: "https://images.unsplash.com/photo-1688549450664-8189b4ac4751?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbGlnaHRzJTIwbmlnaHR8ZW58MXx8fHwxNzY2NjA3MTk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "City lights, bright nights",
    rotate: 3,
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
        <p
          className="text-sm tracking-[0.2em] text-[#C9B7A8] uppercase"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Replace with your own photos
        </p>
      </motion.div>
    </section>
  );
}
