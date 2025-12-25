import { Crown, Heart, Calendar, Gift } from 'lucide-react';
import { motion } from 'motion/react';

interface BottomNavProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function BottomNav({ activeSection, onNavigate }: BottomNavProps) {
  const navItems = [
    { id: 'home', icon: Crown, label: 'Home' },
    { id: 'letters', icon: Heart, label: 'Letters' },
    { id: 'memories', icon: Calendar, label: 'Memories' },
    { id: 'quiz', icon: Gift, label: 'Quiz' },
  ];

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md 
                 border-t border-[#E8C4C4]/30 md:hidden"
    >
      <div className="flex items-center justify-around px-4 py-3 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="flex flex-col items-center gap-1 relative group"
            >
              <div className={`
                p-2 rounded-full transition-all duration-300
                ${isActive 
                  ? 'bg-[#F4DDD4]' 
                  : 'bg-transparent group-hover:bg-[#F4DDD4]/30'
                }
              `}>
                <Icon 
                  className={`w-5 h-5 transition-colors duration-300 ${
                    isActive ? 'text-[#8B6F6F]' : 'text-[#C9B7A8] group-hover:text-[#8B6F6F]'
                  }`}
                />
              </div>
              <span 
                className={`text-[10px] tracking-wide transition-colors duration-300 ${
                  isActive ? 'text-[#8B6F6F]' : 'text-[#C9B7A8]'
                }`}
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {item.label}
              </span>
              
              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -top-[2px] left-1/2 -translate-x-1/2 w-1 h-1 
                           rounded-full bg-[#D4A5A5]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
}
