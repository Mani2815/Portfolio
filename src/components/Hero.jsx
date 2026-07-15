import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PHRASES = ["MCA Student", "Ex AI/ML Engineer Intern", "B.Sc. Graduate"];

const Typewriter = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  const [text, setText] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return PHRASES[0];
    }
    return "";
  });

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const listener = (e) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches) {
        setText(PHRASES[0]);
      }
    };
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const currentPhrase = PHRASES[phraseIndex];
    let timer;

    if (isDeleting) {
      if (text === "") {
        const stateTimer = setTimeout(() => {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
        }, 0);
        return () => clearTimeout(stateTimer);
      } else {
        timer = setTimeout(() => {
          setText(currentPhrase.substring(0, text.length - 1));
        }, 35);
      }
    } else {
      if (text === currentPhrase) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      } else {
        timer = setTimeout(() => {
          setText(currentPhrase.substring(0, text.length + 1));
        }, 70);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, prefersReducedMotion]);

  return (
    <div className="h-16 flex items-center justify-center mb-6 select-none" aria-live="polite">
      <span className="text-zinc-400 text-2xl md:text-4xl font-semibold tracking-wide">
        {text}
      </span>
      {!prefersReducedMotion && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            duration: 1.2, // 1.2s total (600ms visible, 600ms invisible)
            repeat: Infinity,
            ease: "steps(2, start)",
          }}
          className="ml-2 w-[4px] h-[1.1em] bg-zinc-400 inline-block"
          style={{ verticalAlign: 'middle' }}
        />
      )}
    </div>
  );
};

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Apple/Vercel-inspired ease-out-expo
      },
    },
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-[#030014] flex items-center">
      {/* Background grids and subtle gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Soft radial glow centered behind the text content area */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.04)_0%,transparent_60%)]"></div>
        {/* Refined, low-opacity background grid mesh */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Main Content Area */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[800px] w-full text-center flex flex-col items-center"
        >
          {/* Heading with Hi + Name */}
          <motion.h1 variants={itemVariants} className="text-white font-bold tracking-tight mb-4">
            <span className="block text-white/40 text-xl md:text-2xl font-normal mb-3">
              Hi, I'm
            </span>
            <span className="block text-white text-[clamp(3.5rem,10vw,6.5rem)] leading-[1.1] font-bold tracking-tighter select-none">
              Maniarasan J
            </span>
          </motion.h1>

          {/* Typewriter Animation */}
          <motion.div variants={itemVariants} className="w-full">
            <Typewriter />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-white/60 text-xl md:text-2xl font-normal leading-relaxed mb-12 max-w-[700px]"
          >
            Building AI-powered software that automates
            workflows and solves real-world problems.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto mb-12"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 rounded-full bg-white text-black font-semibold text-sm md:text-base hover:bg-neutral-200 transition-colors duration-300 text-center shadow-[0_4px_12px_rgba(255,255,255,0.1)]"
            >
              View Projects
            </motion.a>
            <motion.a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:border-white/20 text-white font-semibold text-sm md:text-base hover:bg-white/10 transition-all duration-300 text-center backdrop-blur-md"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="flex flex-col items-center gap-1.5 text-white/40 font-mono text-[9px] tracking-[0.2em] uppercase select-none"
        >
          <span className="text-sm font-light leading-none">↓</span>
          <span>Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
