import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import certDataModeling from '../assets/cert/28.pdf';
import certBigData from '../assets/cert/28 (1) (1).pdf';
import certDataMining from '../assets/cert/28 (1).pdf';
import certConference from '../assets/cert/BCA - Conference -E Certificate (2)-56.pdf';
import certDataAnalytics from '../assets/cert/_Certificate completion .pdf';
import certNqt from '../assets/cert/mani_portfolio.pdf';

const certificates = [
  {
    id: "01",
    category: "BIG DATA",
    title: "Big Data Analytics - Advanced",
    authority: "TCS iON (Tata Consultancy Services)",
    nodeId: "#01",
    pdfUrl: certBigData
  },
  {
    id: "02",
    category: "DATA ANALYTICS",
    title: "Data Analytics and Reporting",
    authority: "TCS iON (Tata Consultancy Services)",
    nodeId: "#02",
    pdfUrl: certDataAnalytics
  },
  {
    id: "03",
    category: "DATA VISUALIZATION",
    title: "Data Modeling and Visualization",
    authority: "TCS iON (Tata Consultancy Services)",
    nodeId: "#03",
    pdfUrl: certDataModeling
  },
  {
    id: "04",
    category: "DATA MINING",
    title: "Data Mining and Warehousing",
    authority: "TCS iON (Tata Consultancy Services)",
    nodeId: "#04",
    pdfUrl: certDataMining
  },
  {
    id: "05",
    category: "CONFERENCE PRESENTATION",
    title: "Crime Data Analysis and Prediction of Perpetrator Identity",
    authority: "Sri Ramakrishna College of Arts and Science",
    nodeId: "#05",
    pdfUrl: certConference
  },
  {
    id: "06",
    category: "COGNITIVE ASSESSMENT",
    title: "TCS iON NQT - Cognitive Score Card",
    authority: "TCS iON (Tata Consultancy Services)",
    nodeId: "#06",
    pdfUrl: certNqt
  }
];

const CertificateCard = ({ cert, isFlipped, onFlip }) => {
  const handleButtonClick = (e) => {
    e.stopPropagation();
    window.open(cert.pdfUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      onClick={onFlip}
      className="w-[310px] h-[210px] relative cursor-pointer perspective-1000 select-none shrink-0 mx-4"
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full h-full transform-style-3d relative"
      >
        {/* Front of Card */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-[#121212] border border-white/10 rounded-[1.25rem] p-5 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:border-[#ff2a2a]/30 transition-colors">
          {/* Node pin decorative element */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-7 h-7 bg-[#1a1a1a] rounded-full border border-white/10 flex items-center justify-center shadow-sm z-20">
            <div className="w-3 h-3 bg-black rounded-full border border-white/20 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-[#ff2a2a] rounded-full"></div>
            </div>
          </div>

          <div className="flex items-start justify-between mt-1">
            <span className="text-[#ff2a2a] font-extrabold text-[10px] uppercase tracking-wider font-mono">
              {cert.category}
            </span>
            <span className="text-white/30 font-serif italic text-sm font-bold">
              {cert.id}
            </span>
          </div>

          <div className="my-auto">
            <h3 className="text-white font-extrabold text-sm md:text-base leading-snug line-clamp-2">
              {cert.title}
            </h3>
          </div>

          <div className="border-t border-white/5 pt-2.5">
            <p className="text-white/30 text-[8px] uppercase font-bold tracking-widest font-mono mb-0.5">
              ISSUED AUTHORITY NODE
            </p>
            <p className="text-white/70 font-extrabold text-xs truncate">
              {cert.authority}
            </p>
          </div>
        </div>

        {/* Back of Card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-black border border-white/10 rounded-[1.25rem] p-5 flex flex-col justify-between shadow-xl text-white hover:border-[#ff2a2a]/30 transition-colors">
          <div className="flex items-center justify-between">
            <div className="w-7 h-7 rounded-lg bg-[#ff2a2a]/10 border border-[#ff2a2a]/30 flex items-center justify-center text-[#ff2a2a]">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <span className="text-white/40 text-[9px] font-mono tracking-widest uppercase">
              SECURED NODE
            </span>
          </div>

          <div className="text-center my-auto px-1">
            <p className="text-[#ff2a2a]/70 text-[8px] font-bold tracking-widest uppercase mb-1.5 font-mono">
              VERIFICATION OBJECT
            </p>
            <h4 className="text-white font-extrabold text-xs md:text-sm leading-snug mb-3 line-clamp-2">
              {cert.title}
            </h4>
            <button
              onClick={handleButtonClick}
              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-[#ff2a2a] hover:bg-red-600 text-white font-black text-[10px] transition-all shadow-lg hover:shadow-red-500/20 active:scale-95 duration-200"
            >
              <span>View Verification</span>
              <svg className="ml-1" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-between border-t border-white/5 pt-2.5">
            <span className="text-white/40 font-mono text-[8px] uppercase font-bold">
              NODE ID: {cert.nodeId}
            </span>
            <span className="text-[#ff2a2a] font-mono text-[8px] uppercase font-black tracking-wider">
              VERIFIED
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Certificates = () => {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [flippedIndex, setFlippedIndex] = useState(null);

  // Double the list for seamless infinite scroll
  const doubleCertificates = [...certificates, ...certificates];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId;
    const speed = 0.8; // pixels per frame

    const scroll = () => {
      // Pause if hovered or a card is flipped
      if (!isPaused && flippedIndex === null) {
        container.scrollLeft += speed;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused, flippedIndex]);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;
    const halfWidth = container.scrollWidth / 2;
    if (container.scrollLeft >= halfWidth) {
      container.scrollLeft -= halfWidth;
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft += halfWidth;
    }
  };

  const handlePrev = () => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollBy({ left: -342, behavior: 'smooth' }); // card width + margin spacing
  };

  const handleNext = () => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollBy({ left: 342, behavior: 'smooth' });
  };

  const handleCardFlip = (index) => {
    setFlippedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section
      id="certificates"
      className="bg-[#0a0a0a] min-h-screen flex flex-col justify-center pt-16 pb-16 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-white/5 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div data-aos="fade-right">
            <div className="inline-block border border-white/10 rounded-full px-5 py-1.5 text-xs text-white/50 font-bold mb-6 bg-white/5 uppercase tracking-wider font-mono">
              Certificates
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Professional <span className="text-[#ff2a2a] font-black">Credentials</span>
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div data-aos="fade-left" className="flex items-center gap-4 self-end md:self-auto z-20">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white/5 text-white/80 shadow-[0_4px_12px_rgba(0,0,0,0.2)] flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer border border-white/10 hover:bg-[#ff2a2a] hover:text-white hover:border-[#ff2a2a] group"
              aria-label="Previous Credentials"
            >
              <svg className="w-5 h-5 transform group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white/5 text-white/80 shadow-[0_4px_12px_rgba(0,0,0,0.2)] flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer border border-white/10 hover:bg-[#ff2a2a] hover:text-white hover:border-[#ff2a2a] group"
              aria-label="Next Credentials"
            >
              <svg className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Marquee Row */}
        <div className="relative w-full my-8">
          {/* Horizontal dotted line intersecting the card pins */}
          <div className="absolute top-[14px] left-0 w-full h-[1px] border-t-2 border-dashed border-white/10 z-0"></div>

          {/* Marquee container track */}
          <div
            ref={containerRef}
            onScroll={handleScroll}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
              setIsPaused(false);
              setFlippedIndex(null);
            }}
            className="flex overflow-x-auto scrollbar-none py-8 relative z-10 w-full"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {doubleCertificates.map((cert, index) => (
              <div key={`${cert.id}-${index}`}>
                <CertificateCard
                  cert={cert}
                  isFlipped={flippedIndex === index}
                  onFlip={() => handleCardFlip(index)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Caption */}
        <div data-aos="fade-up" className="text-center mt-6">
          <p className="text-white/40 font-serif italic text-sm md:text-base">
            Click a credential card to inspect authentication node • Total of {certificates.length} micro-modules active.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
