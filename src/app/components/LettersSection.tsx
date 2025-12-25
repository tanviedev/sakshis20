import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface Letter {
  id: number;
  title: string;
  preview: string;
  content: string;
  isSpecial?: boolean;
}

const letters: Letter[] = [
  { id: 1, title: "For Your Laughter", preview: "The way you light up every room...", content: "Your laughter is infectious, your smile is radiant, and your presence makes everything better. Never stop being the sunshine you are." },
  { id: 2, title: "For Your Strength", preview: "You've always been the strongest...", content: "Through every challenge, you've shown grace and resilience. Your strength inspires everyone around you to be better." },
  { id: 3, title: "For Your Dreams", preview: "Keep chasing the impossible...", content: "Your dreams are valid, beautiful, and within reach. Never let anyone dim your light or tell you what you can't achieve." },
  { id: 4, title: "For Your Heart", preview: "Your kindness knows no bounds...", content: "You have the most generous heart I've ever known. Your compassion and empathy make this world a better place." },
  { id: 5, title: "For Your Style", preview: "Effortlessly elegant, always...", content: "Your sense of style isn't just about clothes—it's the way you carry yourself with such grace and confidence." },
  { id: 6, title: "For Your Wisdom", preview: "Beyond your years...", content: "Your wisdom and perspective never cease to amaze me. You see things others miss and understand what really matters." },
  { id: 7, title: "For Your Courage", preview: "Brave in the face of everything...", content: "You've faced fears with such courage. Your bravery in being authentically yourself is inspiring." },
  { id: 8, title: "For Your Creativity", preview: "A mind full of magic...", content: "Your creativity knows no bounds. The way you see beauty and possibility everywhere is a gift to everyone around you." },
  { id: 9, title: "For Your Friendship", preview: "More than a friend...", content: "You're not just my best friend—you're my sister, my confidant, my partner in crime. Thank you for being you." },
  { id: 10, title: "For Your Patience", preview: "Grace under pressure...", content: "Your patience, even when things get tough, shows your maturity and strength of character." },
  { id: 11, title: "For Your Loyalty", preview: "Always by my side...", content: "Your loyalty is unwavering. Through thick and thin, you've been there. That's rare and precious." },
  { id: 12, title: "For Your Joy", preview: "Finding happiness everywhere...", content: "You find joy in the smallest things and share it with everyone. Your optimism is contagious." },
  { id: 13, title: "For Your Intelligence", preview: "Brilliance in everything...", content: "Your intelligence shines through in everything you do. You're not just smart—you're thoughtful and insightful." },
  { id: 14, title: "For Your Growth", preview: "Becoming more beautiful...", content: "Watching you grow and evolve has been a privilege. Each year you become more of who you're meant to be." },
  { id: 15, title: "For Your Authenticity", preview: "Unapologetically yourself...", content: "You never pretend to be someone you're not. Your authenticity is refreshing and beautiful." },
  { id: 16, title: "For Your Future", preview: "Endless possibilities await...", content: "Your future is so bright. I can't wait to see all the amazing things you'll accomplish." },
  { id: 17, title: "For Your Past", preview: "Every moment shaped you...", content: "Every experience has made you who you are today. Your journey is beautiful, and it's only beginning." },
  { id: 18, title: "For Your Present", preview: "This moment, right now...", content: "Be present. Enjoy this moment. You're exactly where you need to be, and you're absolutely perfect." },
  { id: 19, title: "For Your Love", preview: "The love you give...", content: "The way you love—fully, deeply, genuinely—is a gift. Everyone you love is incredibly lucky." },
  { id: 20, title: "For Your Legacy", preview: "A queen turns 20...", content: "Welcome to your 20s, my forever princess. This decade will define your legacy. Make it magical. Make it yours. Make it legendary. I'll be cheering you on every step of the way. Here's to the woman you are and the icon you're becoming. Happy 20th Birthday. 👑💗", isSpecial: true },
];

export function LettersSection() {
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);

  return (
    <section className="py-20 md:py-32 px-6" id="letters">
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
          20 Letters for 20 Years
        </h2>
        
        <p
          className="text-lg md:text-xl text-[#8B6F6F] max-w-2xl mx-auto"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Each letter, a memory. Each word, from the heart.
        </p>
      </motion.div>

      {/* Letters Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {letters.map((letter, index) => (
            <motion.button
              key={letter.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedLetter(letter)}
              className={`
                relative p-6 md:p-8 rounded-lg text-left
                transition-all duration-300 cursor-pointer
                group overflow-hidden
                ${letter.isSpecial 
                  ? 'bg-gradient-to-br from-[#F4DDD4] to-[#E8C4C4] shadow-lg' 
                  : 'bg-white shadow-md hover:shadow-xl'
                }
              `}
            >
              {/* Letter Number */}
              <div className="absolute top-4 right-4">
                <span
                  className={`
                    text-6xl md:text-7xl opacity-10 group-hover:opacity-20 transition-opacity
                    ${letter.isSpecial ? 'text-white' : 'text-[#D4A5A5]'}
                  `}
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {letter.id}
                </span>
              </div>

              {/* Special Badge */}
              {letter.isSpecial && (
                <div className="absolute top-4 left-4">
                  <span className="text-xl">👑</span>
                </div>
              )}

              {/* Content */}
              <div className="relative z-10">
                <h3
                  className={`
                    text-xl md:text-2xl mb-3 group-hover:text-[#8B6F6F] transition-colors
                    ${letter.isSpecial ? 'text-[#6B5B5B]' : 'text-[#2C2C2C]'}
                  `}
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {letter.title}
                </h3>
                
                <p
                  className={`
                    text-sm md:text-base leading-relaxed
                    ${letter.isSpecial ? 'text-[#8B6F6F]' : 'text-[#A99A9A]'}
                  `}
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {letter.preview}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div 
                className={`
                  absolute inset-0 border-2 rounded-lg opacity-0 
                  group-hover:opacity-100 transition-opacity
                  ${letter.isSpecial ? 'border-white/50' : 'border-[#D4A5A5]/50'}
                `}
              />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Letter Modal */}
      <AnimatePresence>
        {selectedLetter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedLetter(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 
                     flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className={`
                relative w-full max-w-2xl max-h-[80vh] overflow-y-auto
                rounded-lg shadow-2xl p-8 md:p-12
                ${selectedLetter.isSpecial
                  ? 'bg-gradient-to-br from-[#F4DDD4] to-[#E8C4C4]'
                  : 'bg-white'
                }
              `}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedLetter(null)}
                className="absolute top-4 right-4 p-2 rounded-full 
                         bg-white/80 hover:bg-white transition-colors"
              >
                <X className="w-5 h-5 text-[#8B6F6F]" />
              </button>

              {/* Modal Content */}
              <div className="text-center space-y-6">
                {/* Letter Number */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                >
                  <span
                    className={`
                      text-8xl md:text-9xl opacity-20
                      ${selectedLetter.isSpecial ? 'text-white' : 'text-[#D4A5A5]'}
                    `}
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {selectedLetter.id}
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className={`
                    text-3xl md:text-5xl mb-8
                    ${selectedLetter.isSpecial ? 'text-[#6B5B5B]' : 'text-[#2C2C2C]'}
                  `}
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {selectedLetter.title}
                </motion.h2>

                {/* Divider */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center justify-center gap-4"
                >
                  <div className={`w-16 h-[1px] ${selectedLetter.isSpecial ? 'bg-white/50' : 'bg-[#D4A5A5]'}`} />
                  <span className={selectedLetter.isSpecial ? 'text-white' : 'text-[#D4A5A5]'}>✦</span>
                  <div className={`w-16 h-[1px] ${selectedLetter.isSpecial ? 'bg-white/50' : 'bg-[#D4A5A5]'}`} />
                </motion.div>

                {/* Content */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className={`
                    text-lg md:text-2xl leading-relaxed max-w-xl mx-auto
                    ${selectedLetter.isSpecial ? 'text-[#6B5B5B]' : 'text-[#8B6F6F]'}
                  `}
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {selectedLetter.content}
                </motion.p>

                {/* Special Badge */}
                {selectedLetter.isSpecial && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.7, type: 'spring' }}
                    className="pt-8"
                  >
                    <div className="inline-block px-6 py-2 bg-white/40 backdrop-blur-sm rounded-full">
                      <span className="text-sm tracking-[0.2em] text-[#8B6F6F]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        HAPPY 20TH BIRTHDAY
                      </span>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
