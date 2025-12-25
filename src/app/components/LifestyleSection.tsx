import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const lifestyleItems = [
  {
    number: "01",
    title: "Morning Coffee",
    description: "Can't start the day without it",
    image: "https://images.unsplash.com/photo-1682298919189-17ae2e2ff73a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBhZXN0aGV0aWMlMjBtb3JuaW5nfGVufDF8fHx8MTc2NjY0NzE2OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    number: "02",
    title: "Pink Everything",
    description: "Her signature color",
    image: "https://images.unsplash.com/photo-1599215966323-88d801b84771?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwZmxvd2VycyUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NjY1NTEwODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    number: "03",
    title: "Golden Hour Walks",
    description: "The best time of day",
    image: "https://images.unsplash.com/photo-1661924280523-0ca239290d10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBiZWFjaCUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NjY2NDcxNjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    number: "04",
    title: "Deep Conversations",
    description: "Late night heart-to-hearts",
    image: "https://images.unsplash.com/photo-1638644074459-9067407b72a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwbGF1Z2hpbmclMjB0b2dldGhlcnxlbnwxfHx8fDE3NjY2MzQ3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    number: "05",
    title: "Adventure Spirit",
    description: "Always ready to explore",
    image: "https://images.unsplash.com/photo-1548932134-3d7d765bece2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmUlMjBtb3VudGFpbnN8ZW58MXx8fHwxNzY2NjMzMzUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    number: "06",
    title: "Fashion Forward",
    description: "Always ahead of the trends",
    image: "https://images.unsplash.com/photo-1639244151653-7807947de5a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbWFnYXppbmUlMjBlZGl0b3JpYWx8ZW58MXx8fHwxNzY2NjQ3MTcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function LifestyleSection() {
  return (
    <section className="py-20 md:py-32 px-6">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16 md:mb-24"
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
          She Can't Live Without...
        </h2>
        
        <p
          className="text-lg md:text-xl text-[#8B6F6F] italic"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          The essentials that make her, her
        </p>
      </motion.div>

      {/* Lifestyle Grid */}
      <div className="max-w-5xl mx-auto">
        <div className="space-y-12 md:space-y-20">
          {lifestyleItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`
                flex flex-col gap-8 items-center
                ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
              `}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="aspect-square overflow-hidden rounded-lg shadow-lg"
                >
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <div className="max-w-md mx-auto md:mx-0">
                  {/* Number */}
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring' }}
                    viewport={{ once: true }}
                    className="inline-block text-6xl md:text-8xl text-[#F4DDD4] mb-4"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {item.number}
                  </motion.span>

                  {/* Title */}
                  <h3
                    className="text-3xl md:text-4xl text-[#2C2C2C] mb-4"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-lg md:text-xl text-[#8B6F6F]"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {item.description}
                  </p>

                  {/* Decorative Line */}
                  <div className="mt-6 flex items-center gap-3">
                    <div className="w-12 h-[1px] bg-[#D4A5A5]" />
                    <span className="text-[#D4A5A5]">✦</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
