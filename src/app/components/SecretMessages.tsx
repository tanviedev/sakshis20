import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Heart, X } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  from: string;
}

const secretMessages: Message[] = [
  {
    id: 1,
    text: "You've been my person through everything. Thank you for being my constant.",
    from: "Your Best Friend",
  },
  {
    id: 2,
    text: "Watching you grow into the woman you are today has been the greatest privilege.",
    from: "Forever Proud",
  },
  {
    id: 3,
    text: "Here's to 20 more years of adventures, laughter, and unforgettable memories.",
    from: "Your Partner in Crime",
  },
];

const SECRET_CODE = "2005"; // Birth year as default code

export function SecretMessages() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  useEffect(() => {
    // Check if already unlocked in this session
    const unlocked = sessionStorage.getItem('secretMessagesUnlocked');
    if (unlocked === 'true') {
      setIsUnlocked(true);
    }
  }, []);

  const handleUnlock = () => {
    if (code === SECRET_CODE) {
      setIsUnlocked(true);
      sessionStorage.setItem('secretMessagesUnlocked', 'true');
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleUnlock();
    }
  };

  return (
    <section className="py-20 md:py-32 px-6 bg-[#F5F1EA]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
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
            Messages Just for You
          </h2>
          
          <p
            className="text-lg md:text-xl text-[#8B6F6F] italic"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Unlock with your special code
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isUnlocked ? (
            <motion.div
              key="locked"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-xl p-8 md:p-12"
            >
              <div className="text-center max-w-md mx-auto">
                {/* Lock Icon */}
                <motion.div
                  animate={{ 
                    rotate: error ? [0, -10, 10, -10, 10, 0] : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center mb-8"
                >
                  <div className={`
                    w-20 h-20 rounded-full flex items-center justify-center
                    ${error ? 'bg-red-100' : 'bg-[#F4DDD4]'}
                    transition-colors duration-300
                  `}>
                    <Lock className={`w-10 h-10 ${error ? 'text-red-500' : 'text-[#8B6F6F]'}`} />
                  </div>
                </motion.div>

                <h3
                  className="text-2xl md:text-3xl text-[#2C2C2C] mb-4"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Enter Secret Code
                </h3>

                <p
                  className="text-lg text-[#8B6F6F] mb-8"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  Hint: The year a queen was born
                </p>

                {/* Code Input */}
                <div className="space-y-4">
                  <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="• • • •"
                    maxLength={4}
                    className={`
                      w-full px-6 py-4 text-center text-2xl tracking-[0.5em] rounded-lg
                      border-2 focus:outline-none transition-all duration-300
                      ${error 
                        ? 'border-red-400 bg-red-50' 
                        : 'border-[#E8C4C4] focus:border-[#D4A5A5] bg-white'
                      }
                    `}
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  />

                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      Incorrect code. Try again!
                    </motion.p>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleUnlock}
                    className="w-full px-8 py-3 bg-[#D4A5A5] text-white rounded-lg 
                             hover:bg-[#C39494] transition-colors duration-300"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Unlock Messages
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="unlocked"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Success Animation */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', duration: 0.8 }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg">
                  <Heart className="w-5 h-5 text-[#D4A5A5] fill-[#D4A5A5]" />
                  <span
                    className="text-sm tracking-wider text-[#8B6F6F]"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    UNLOCKED
                  </span>
                </div>
              </motion.div>

              {/* Messages */}
              <div className="grid gap-6">
                {secretMessages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedMessage(message)}
                    className="bg-white rounded-lg shadow-lg p-6 md:p-8 cursor-pointer
                             hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#F4DDD4] rounded-full 
                                    flex items-center justify-center">
                        <Heart className="w-6 h-6 text-[#8B6F6F]" />
                      </div>
                      
                      <div className="flex-1">
                        <p
                          className="text-lg md:text-xl text-[#2C2C2C] mb-2 leading-relaxed"
                          style={{ fontFamily: 'Cormorant Garamond, serif' }}
                        >
                          {message.text}
                        </p>
                        <p
                          className="text-sm text-[#C9B7A8] italic"
                          style={{ fontFamily: 'Cormorant Garamond, serif' }}
                        >
                          — {message.from}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Add Your Own Message Prompt */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-center mt-12 p-6 bg-white rounded-lg shadow-lg"
              >
                <p
                  className="text-sm text-[#8B6F6F]"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  💡 Tip: Customize these messages to make them personal!
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Message Detail Modal */}
        <AnimatePresence>
          {selectedMessage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMessage(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 
                       flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-lg bg-gradient-to-br from-[#F4DDD4] to-[#E8C4C4] 
                         rounded-lg shadow-2xl p-8 md:p-12"
              >
                <button
                  onClick={() => setSelectedMessage(null)}
                  className="absolute top-4 right-4 p-2 rounded-full 
                           bg-white/80 hover:bg-white transition-colors"
                >
                  <X className="w-5 h-5 text-[#8B6F6F]" />
                </button>

                <div className="text-center">
                  <Heart className="w-16 h-16 text-[#8B6F6F] fill-[#8B6F6F] mx-auto mb-6" />
                  
                  <p
                    className="text-2xl md:text-3xl text-[#2C2C2C] mb-6 leading-relaxed"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    "{selectedMessage.text}"
                  </p>
                  
                  <p
                    className="text-lg text-[#6B5B5B] italic"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    — {selectedMessage.from}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
