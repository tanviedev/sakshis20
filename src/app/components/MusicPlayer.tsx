import { useState, useRef, useEffect } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Background music would be loaded here
    // For now, we'll just manage the state
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          // Handle autoplay restrictions
        });
      }
      setIsPlaying(!isPlaying);
    }
    setIsMuted(!isMuted);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2 }}
      className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-40"
    >
      <button
        onClick={togglePlay}
        className="group relative w-14 h-14 rounded-full bg-[#F4DDD4] hover:bg-[#E8C4C4] 
                   shadow-lg hover:shadow-xl transition-all duration-300 
                   flex items-center justify-center"
        aria-label={isMuted ? "Play music" : "Mute music"}
      >
        <AnimatePresence mode="wait">
          {isMuted ? (
            <motion.div
              key="muted"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <VolumeX className="w-5 h-5 text-[#8B6F6F]" />
            </motion.div>
          ) : (
            <motion.div
              key="playing"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <Volume2 className="w-5 h-5 text-[#8B6F6F]" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Pulse animation when playing */}
        {!isMuted && (
          <span className="absolute inset-0 rounded-full bg-[#F4DDD4] animate-ping opacity-20" />
        )}
      </button>
      
      {/* Hidden audio element - would contain actual audio file */}
      <audio ref={audioRef} loop>
        {/* <source src="/path-to-audio.mp3" type="audio/mpeg" /> */}
      </audio>
    </motion.div>
  );
}
