import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const editorialPhotos = [
  {
    src: "https://images.unsplash.com/photo-1763828028975-afa6ae9d04de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNlbGVicmF0aW9uJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjY2NDcxMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Celebration",
    size: "large",
  },
  {
    src: "https://images.unsplash.com/photo-1742137745499-34954ce3f1bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBqb3VybmFsJTIwbm90ZWJvb2t8ZW58MXx8fHwxNzY2NjQ3MzY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Stories",
    size: "small",
  },
  {
    src: "https://images.unsplash.com/photo-1757313190877-78626f3f22b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYWVzdGhldGljfGVufDF8fHx8MTc2NjY0NzM2OHww&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Elegance",
    size: "small",
  },
  {
    src: "https://images.unsplash.com/photo-1739591414031-edd27896c8bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwamV3ZWxyeSUyMG1pbmltYWx8ZW58MXx8fHwxNzY2NjQ3MzY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Grace",
    size: "medium",
  },
  {
    src: "https://images.unsplash.com/photo-1598452963314-b09f397a5c48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaWZlc3R5bGUlMjBmbGF0bGF5fGVufDF8fHx8MTc2NjY0NzExMnww&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Luxe Life",
    size: "medium",
  },
];

export function EditorialSpread() {
  return (
    <section className="py-20 md:py-32 px-6 bg-white">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16 md:mb-24"
      >
        <p
          className="text-sm tracking-[0.4em] uppercase text-[#C9B7A8] mb-8"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Editorial Spread
        </p>
        
        <h2
          className="text-4xl md:text-6xl lg:text-7xl text-[#2C2C2C] mb-4"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          A Life in Frames
        </h2>
        
        <div className="w-32 h-[1px] bg-[#D4A5A5] mx-auto" />
      </motion.div>

      {/* Editorial Grid - Magazine Style */}
      <div className="max-w-7xl mx-auto">
        {/* Row 1: Large + 2 Small */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2"
          >
            <div className="relative aspect-[4/3] overflow-hidden group">
              <ImageWithFallback
                src={editorialPhotos[0].src}
                alt={editorialPhotos[0].caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 
                            group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 
                            transition-opacity duration-500">
                <p
                  className="text-white text-2xl md:text-4xl"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {editorialPhotos[0].caption}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="relative aspect-square overflow-hidden group">
              <ImageWithFallback
                src={editorialPhotos[1].src}
                alt={editorialPhotos[1].caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p
                  className="text-white text-lg md:text-xl"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {editorialPhotos[1].caption}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="relative aspect-square overflow-hidden group">
              <ImageWithFallback
                src={editorialPhotos[2].src}
                alt={editorialPhotos[2].caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p
                  className="text-white text-lg md:text-xl"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {editorialPhotos[2].caption}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Row 2: 2 Medium */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-[3/4] overflow-hidden group">
              <ImageWithFallback
                src={editorialPhotos[3].src}
                alt={editorialPhotos[3].caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p
                  className="text-white text-2xl md:text-3xl"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {editorialPhotos[3].caption}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-[3/4] overflow-hidden group">
              <ImageWithFallback
                src={editorialPhotos[4].src}
                alt={editorialPhotos[4].caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p
                  className="text-white text-2xl md:text-3xl"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {editorialPhotos[4].caption}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pull Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20 max-w-3xl mx-auto"
        >
          <div className="border-t border-b border-[#D4A5A5] py-8">
            <p
              className="text-2xl md:text-4xl text-[#2C2C2C] italic leading-relaxed"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              "She grew up wealthy in taste, not noise"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
