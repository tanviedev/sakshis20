import { useState, useEffect } from 'react';
import { MagazineCover } from './components/MagazineCover';
import { LettersSection } from './components/LettersSection';
import { PhotoGalleryPolaroid } from './components/PhotoGalleryPolaroid';
import { EditorialSpread } from './components/EditorialSpread';
import { LifestyleSection } from './components/LifestyleSection';
import { BirthdayQuiz } from './components/BirthdayQuiz';
import { TimelineSection } from './components/TimelineSection';
import { SecretMessages } from './components/SecretMessages';
import { GiftBox } from './components/GiftBox';
import { ClosingSection } from './components/ClosingSection';
import { MusicPlayer } from './components/MusicPlayer';
import { BottomNav } from './components/BottomNav';
import { FilmGrain } from './components/FilmGrain';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    
    // Scroll to section
    const sectionMap: { [key: string]: string } = {
      home: 'top',
      letters: 'letters',
      memories: 'memories',
      quiz: 'quiz',
    };
    
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionMap[section]);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['letters', 'memories', 'quiz'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      if (window.scrollY < 300) {
        setActiveSection('home');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Film Grain Overlay */}
      <FilmGrain />

      {/* Main Content */}
      <main className="relative">
        {/* Hero / Magazine Cover */}
        <MagazineCover />

        {/* 20 Letters Section */}
        <LettersSection />

        {/* Photo Galleries */}
        <PhotoGalleryPolaroid />

        {/* Editorial Spread */}
        <EditorialSpread />

        {/* Lifestyle Section */}
        <LifestyleSection />

        {/* Timeline */}
        <TimelineSection />

        {/* Birthday Quiz */}
        <BirthdayQuiz />

        {/* Gift Box */}
        <GiftBox />

        {/* Secret Messages */}
        <SecretMessages />

        {/* Closing Editorial */}
        <ClosingSection />
      </main>

      {/* Music Player */}
      <MusicPlayer />

      {/* Mobile Bottom Navigation */}
      <BottomNav activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Subtle Cursor Trail (Desktop Only) */}
      <style>{`
        @media (min-width: 768px) {
          body {
            cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="2" fill="%23D4A5A5" opacity="0.6"/></svg>') 8 8, auto;
          }
          
          button, a {
            cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="3" fill="%23D4A5A5" opacity="0.8"/></svg>') 10 10, pointer;
          }
        }

        /* Smooth scroll */
        html {
          scroll-behavior: smooth;
        }

        /* Hide scrollbar but keep functionality */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #FAF7F2;
        }

        ::-webkit-scrollbar-thumb {
          background: #D4A5A5;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #C39494;
        }

        /* Selection color */
        ::selection {
          background: #F4DDD4;
          color: #2C2C2C;
        }
      `}</style>
    </div>
  );
}