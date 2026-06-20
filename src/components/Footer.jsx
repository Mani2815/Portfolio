import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">

      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          <p>Data Engineering · AI/ML Research</p>
          <p>LLM Pipelines · Streaming Systems</p>
          <p>Real-time Analytics</p>
        </div>

        <div className="flex flex-col gap-1 md:items-center">
          <p>MCA @ Christ University, Bengaluru</p>
          <a href="https://www.linkedin.com/in/maniarasan-j-175780248/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1">
            View LinkedIn
          </a>
        </div>

        <div className="flex flex-col gap-1 md:items-end">
          <p>Bengaluru, India</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2 className="text-[14vw] md:text-[12vw] leading-none font-sans font-bold tracking-tighter lowercase select-none text-[#f4f4f4] w-full text-center">
          maniarasan
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <a href="#contact" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">Contact</a>
            <a href="https://github.com/Mani2815" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">GitHub</a>
            <a href="https://hackerrank.com/maniarasan2815" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">HackerRank</a>
            <a href="https://leetcode.com/u/mani2815/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">LeetCode</a>
          </div>
          <p className="text-white/60 font-mono text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} Maniarasan J.
          </p>
        </div>

        <div className="flex flex-col gap-1 md:items-center">
          <a href="mailto:maniarasan2815@gmail.com" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase">
            maniarasan2815@gmail.com
          </a>
        </div>

        <div className="flex flex-col gap-1 md:items-end">
          <a href="https://maniarasan.vercel.app/Resume.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">
            Download Resume
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
