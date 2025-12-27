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
  { id: 1, title: "For Your Laughter", preview: "The way you light up every room...", content: "INFECTIOUS laughter, like OMG!! never stop being the Sunshine you are<3" },
  { id: 2, title: "For Your Strength", preview: "You've always been the strongest...", content: "You've always been relentlessly resilient, especially the past few years have made you none less than a superwoman, stay strong kiddo, there for you alwaysss<3" },
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
  { id: 20, title: "For Your Legacy", preview: "A queen turns 20...", content: "Welcome to your 20s, my forever princess. This decade will define your legacy. Make it magical. Make it yours. Make it legendary. I'll be cheering you on every step of the way. Happy 20th Birthday. 👑💗", isSpecial: true },
];

export function LettersSection() {
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);

  return (
    <section
      id="letters"
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('images/bg1.jpg')" }}
    >
      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-[#FFF6F4]/80 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 py-20 md:py-32 px-6">
        {/* Header */}
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
            No number of letters could ever capture my endless yap sessions — but here are 20, just for now.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {letters.map((letter, index) => (
            <motion.button
              key={letter.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedLetter(letter)}
              className={`relative p-6 md:p-8 rounded-xl text-left group transition-all
                ${letter.isSpecial
                  ? 'bg-gradient-to-br from-[#F4DDD4] to-[#E8C4C4] shadow-xl'
                  : 'bg-white/90 backdrop-blur shadow-md hover:shadow-xl'}
              `}
            >
              <span
                className="absolute top-4 right-4 text-6xl opacity-10"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {letter.id}
              </span>

              {letter.isSpecial && (
                <span className="absolute top-4 left-4 text-xl">👑</span>
              )}

              <h3
                className="text-xl md:text-2xl mb-3 text-[#2C2C2C]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {letter.title}
              </h3>

              <p
                className="text-sm md:text-base text-[#8B6F6F]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {letter.preview}
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal (unchanged logic, already aesthetic-perfect) */}
      <AnimatePresence>
        {selectedLetter && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedLetter(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl max-w-2xl p-8 relative"
            >
              <button
                onClick={() => setSelectedLetter(null)}
                className="absolute top-4 right-4"
              >
                <X />
              </button>

              <h2 className="text-3xl mb-4">{selectedLetter.title}</h2>
              <p>{selectedLetter.content}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
