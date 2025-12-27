import { motion } from "motion/react";

export function MagazineCover() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FAF7F2] flex items-center justify-center">

      {/* 🔹 BACKGROUND MIRRORED FILL */}
      <motion.div
        className="absolute inset-0"
        initial={{ filter: "blur(25px)", scale: 1.1 }}
        animate={{ filter: "blur(10px)", scale: 1 }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
      >
        {/* Tiled mirror */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/final1.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            transform: "scaleX(-1)",
            opacity: 0.35,
          }}
        />

        {/* Soft overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/50 via-transparent to-[#FAF7F2]/90" />
      </motion.div>

      {/* 🔹 CENTER CLEAR IMAGE */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ filter: "blur(20px)", opacity: 0 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        transition={{
          delay: 4.5,
          duration: 1.5,
          ease: "easeOut",
        }}
      >
        <img
          src="/images/final1.png"
          alt="Birthday collage"
          className="max-h-full max-w-full object-contain"
        />
      </motion.div>

      {/* 🔹 TEXT CONTENT */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: [0, 1, 1, 0], y: [40, 0, 0, -20] }}
        transition={{
          duration: 4,
          times: [0, 0.25, 0.75, 1],
          ease: "easeInOut",
        }}
      >
        <div className="mb-8 space-y-2">
          <p className="tracking-[0.3em] uppercase text-[#8B6F6F] text-xs md:text-sm">
            Private Issue • Est. 2005
          </p>
          <div className="w-24 h-[1px] bg-[#D4A5A5] mx-auto" />
        </div>

        <h1 className="mb-6 font-serif">
          <span className="block text-4xl md:text-7xl lg:text-8xl text-[#2C2C2C] tracking-tight mb-4">
            20 Years Down
          </span>
          <span className="block text-3xl md:text-5xl lg:text-6xl text-[#D4A5A5] italic">
            Sab Toh Changi, Forever
          </span>
        </h1>

        <div className="mt-12 inline-block">
          <div className="border-2 border-[#D4A5A5] rounded-full px-8 py-3 backdrop-blur-sm bg-white/40">
            <p className="text-sm md:text-base tracking-[0.2em] text-[#8B6F6F]">
              DECEMBER 28, 2025
            </p>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="w-12 h-[1px] bg-[#D4A5A5]" />
          <span className="text-2xl text-[#D4A5A5]">✦</span>
          <div className="w-12 h-[1px] bg-[#D4A5A5]" />
        </div>
      </motion.div>
    </section>
  );
}
