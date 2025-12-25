import { motion } from 'motion/react';

const timeline = [
  {
    year: "2005",
    title: "Born a Queen",
    description: "December 28th - A princess entered the world",
    side: "left",
  },
  {
    year: "2010",
    title: "Childhood Magic",
    description: "Making memories that would last forever",
    side: "right",
  },
  {
    year: "2015",
    title: "When We Met",
    description: "The beginning of an unbreakable bond",
    side: "left",
  },
  {
    year: "2018",
    title: "Coming of Age",
    description: "Becoming the woman she was meant to be",
    side: "right",
  },
  {
    year: "2020",
    title: "Finding Her Voice",
    description: "Standing tall and speaking her truth",
    side: "left",
  },
  {
    year: "2023",
    title: "Blossoming",
    description: "Grace, strength, and endless potential",
    side: "right",
  },
  {
    year: "2025",
    title: "Turning 20",
    description: "Welcome to your 20s, my forever princess 👑",
    side: "left",
    isSpecial: true,
  },
];

export function TimelineSection() {
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
          A Timeline of a Princess
        </h2>
        
        <p
          className="text-lg md:text-xl text-[#8B6F6F] italic"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          20 years of grace, growth, and magic
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto relative">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b 
                       from-[#F4DDD4] via-[#D4A5A5] to-[#F4DDD4] hidden md:block" />

        {/* Timeline Items */}
        <div className="space-y-16 md:space-y-24">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className={`
                flex flex-col md:flex-row items-center gap-8
                ${item.side === 'right' ? 'md:flex-row-reverse' : ''}
              `}>
                {/* Content */}
                <div className={`
                  w-full md:w-[calc(50%-2rem)] 
                  ${item.side === 'left' ? 'md:text-right' : 'md:text-left'}
                  text-center
                `}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className={`
                      p-6 md:p-8 rounded-lg
                      ${item.isSpecial 
                        ? 'bg-gradient-to-br from-[#F4DDD4] to-[#E8C4C4] shadow-xl' 
                        : 'bg-white shadow-lg'
                      }
                    `}
                  >
                    {/* Year Badge */}
                    <div className={`
                      inline-block px-6 py-2 rounded-full mb-4
                      ${item.isSpecial 
                        ? 'bg-white/40 backdrop-blur-sm' 
                        : 'bg-[#F4DDD4]'
                      }
                    `}>
                      <span
                        className="text-sm tracking-[0.2em] text-[#8B6F6F]"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        {item.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className={`
                        text-2xl md:text-3xl mb-3
                        ${item.isSpecial ? 'text-[#6B5B5B]' : 'text-[#2C2C2C]'}
                      `}
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`
                        text-lg md:text-xl
                        ${item.isSpecial ? 'text-[#8B6F6F]' : 'text-[#A99A9A]'}
                      `}
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      {item.description}
                    </p>

                    {/* Special Crown */}
                    {item.isSpecial && (
                      <div className="mt-4">
                        <span className="text-3xl">👑</span>
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring' }}
                    viewport={{ once: true }}
                    className={`
                      w-6 h-6 rounded-full border-4 border-[#FAF7F2]
                      ${item.isSpecial 
                        ? 'bg-[#D4AF37] shadow-lg' 
                        : 'bg-[#D4A5A5]'
                      }
                    `}
                  >
                    {item.isSpecial && (
                      <motion.div
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full bg-[#D4AF37] opacity-40"
                      />
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
