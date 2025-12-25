import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

const quizQuestions: QuizQuestion[] = [
  {
    question: "What's her go-to coffee order?",
    options: ["Iced Latte", "Cappuccino", "Flat White", "Americano"],
    correctAnswer: 0,
  },
  {
    question: "Her favorite time of day?",
    options: ["Early Morning", "Golden Hour", "Midnight", "Afternoon"],
    correctAnswer: 1,
  },
  {
    question: "Dream vacation destination?",
    options: ["Paris", "Bali", "New York", "Santorini"],
    correctAnswer: 3,
  },
  {
    question: "Her signature color?",
    options: ["Black", "Pink", "Blue", "White"],
    correctAnswer: 1,
  },
  {
    question: "Favorite way to spend Sunday?",
    options: ["Shopping", "Brunch with friends", "Cozy at home", "Adventure"],
    correctAnswer: 1,
  },
];

export function BirthdayQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answerIndex);
    setIsAnswered(true);

    if (answerIndex === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const getResultMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage === 100) return { title: "Bestie Status: Royalty 👑", subtitle: "You know her better than anyone!" };
    if (percentage >= 80) return { title: "Bestie Status: Elite 💖", subtitle: "You're definitely in the inner circle!" };
    if (percentage >= 60) return { title: "Bestie Status: Close Friend ✨", subtitle: "You know her pretty well!" };
    return { title: "Bestie Status: Getting There 💕", subtitle: "Time to spend more quality time together!" };
  };

  return (
    <section className="py-20 md:py-32 px-6 bg-[#F5F1EA]" id="quiz">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
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
            How Well Do You Know Her?
          </h2>
          
          <p
            className="text-lg md:text-xl text-[#8B6F6F] italic"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Take the birthday quiz
          </p>
        </motion.div>

        {/* Quiz Content */}
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-xl p-8 md:p-12"
            >
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span
                    className="text-sm tracking-wider text-[#8B6F6F]"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Question {currentQuestion + 1} of {quizQuestions.length}
                  </span>
                  <span
                    className="text-sm tracking-wider text-[#8B6F6F]"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Score: {score}
                  </span>
                </div>
                <div className="h-2 bg-[#F4DDD4] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                    className="h-full bg-[#D4A5A5]"
                  />
                </div>
              </div>

              {/* Question */}
              <h3
                className="text-2xl md:text-3xl text-[#2C2C2C] mb-8"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {quizQuestions[currentQuestion].question}
              </h3>

              {/* Options */}
              <div className="space-y-4">
                {quizQuestions[currentQuestion].options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect = index === quizQuestions[currentQuestion].correctAnswer;
                  const showFeedback = isAnswered && isSelected;

                  return (
                    <motion.button
                      key={index}
                      whileHover={!isAnswered ? { scale: 1.02, x: 10 } : {}}
                      whileTap={!isAnswered ? { scale: 0.98 } : {}}
                      onClick={() => handleAnswer(index)}
                      disabled={isAnswered}
                      className={`
                        w-full p-4 md:p-5 text-left rounded-lg border-2 transition-all duration-300
                        ${!isAnswered && 'hover:border-[#D4A5A5] hover:bg-[#F4DDD4]/20'}
                        ${showFeedback && isCorrect && 'border-green-400 bg-green-50'}
                        ${showFeedback && !isCorrect && 'border-red-400 bg-red-50'}
                        ${!showFeedback && 'border-[#E8C4C4]'}
                        ${isAnswered && !isSelected && 'opacity-50'}
                      `}
                    >
                      <span
                        className="text-lg md:text-xl text-[#2C2C2C]"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                      >
                        {option}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-[#F4DDD4] to-[#E8C4C4] rounded-lg shadow-xl p-8 md:p-12 text-center"
            >
              {/* Sparkle Animation */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', duration: 0.8 }}
                className="flex justify-center mb-8"
              >
                <div className="w-20 h-20 bg-white/40 rounded-full flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-[#8B6F6F]" />
                </div>
              </motion.div>

              {/* Result */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3
                  className="text-3xl md:text-5xl text-[#2C2C2C] mb-4"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {getResultMessage().title}
                </h3>
                
                <p
                  className="text-xl md:text-2xl text-[#6B5B5B] mb-8"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {getResultMessage().subtitle}
                </p>

                <div className="bg-white/40 backdrop-blur-sm rounded-full px-8 py-4 inline-block mb-8">
                  <p
                    className="text-2xl md:text-3xl text-[#8B6F6F]"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {score} / {quizQuestions.length}
                  </p>
                </div>
              </motion.div>

              {/* Retry Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetQuiz}
                className="px-8 py-3 bg-white text-[#8B6F6F] rounded-full 
                         hover:bg-white/90 transition-colors duration-300"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Take Quiz Again
              </motion.button>

              {/* Confetti Effect */}
              {score === quizQuestions.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ y: 0, x: '50%', opacity: 1 }}
                      animate={{
                        y: ['0vh', '100vh'],
                        x: `${Math.random() * 100}%`,
                        opacity: [1, 0],
                        rotate: [0, Math.random() * 360],
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        delay: Math.random() * 0.5,
                        ease: 'linear',
                      }}
                      className="absolute top-0"
                    >
                      <span className="text-2xl">✨</span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
