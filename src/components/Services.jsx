import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';

const ProjectCard = ({ number, title, text, tech, links, className, aosDelay, aosType, pathLength, containerRef }) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!ref.current || !containerRef.current) return;
    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    const cardTopRelativeToContainer = cardRect.top - containerRect.top;
    const containerHeight = containerRect.height;
    const triggerY = cardTopRelativeToContainer + 50;
    const lineTipY = latest * containerHeight;
    if (lineTipY >= triggerY && !isActive) setIsActive(true);
    else if (lineTipY < triggerY && isActive) setIsActive(false);
  });

  return (
    <div
      ref={ref}
      data-aos={aosType || "fade-up"}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 relative flex flex-col items-center hover:scale-[1.02] transition-all duration-700 z-10 ${className} ${
        isActive
          ? 'bg-[#ff2a2a] border-red-400 shadow-[0_20px_50px_rgba(255,42,42,0.4)]'
          : 'bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]'
      }`}
    >
      <div className="w-5 h-5 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] absolute top-4 border border-gray-300 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-gray-800 rounded-full opacity-20"></div>
      </div>

      <div className={`w-full h-full rounded-[1.5rem] mt-8 p-8 flex flex-col min-h-[280px] transition-colors duration-700 ${
        isActive ? 'bg-red-700/50' : 'bg-[#f4f4f4]'
      }`}>
        <span className={`text-xl font-bold mb-2 font-serif italic transition-colors duration-700 ${
          isActive ? 'text-red-200' : 'text-gray-400'
        }`}>{number}</span>

        <h3 className={`text-xl font-black mb-3 tracking-tight transition-colors duration-700 ${
          isActive ? 'text-white' : 'text-gray-900'
        }`}>{title}</h3>

        <p className={`text-sm leading-relaxed font-medium mb-4 transition-colors duration-700 ${
          isActive ? 'text-red-100' : 'text-gray-500'
        }`}>{text}</p>

        <div className="flex flex-wrap gap-1 mt-auto mb-4">
          {tech.map(t => (
            <span key={t} className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-colors duration-700 ${
              isActive ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'
            }`}>{t}</span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {links.map(({ label, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs font-bold underline underline-offset-2 transition-colors duration-300 ${
                isActive ? 'text-white hover:text-red-200' : 'text-[#ff2a2a] hover:text-red-800'
              }`}
            >
              {label} →
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  const projects = [
    {
      number: "01",
      title: "Crime Prediction & Analysis",
      text: "Predictive analytics system using ML to forecast crime patterns and perpetrator profiles. Time-series analysis and geospatial modelling to help law enforcement allocate resources efficiently.",
      tech: ["Python", "Scikit-learn", "Pandas", "Machine Learning", "Geospatial"],
      links: [{ label: "GitHub", url: "https://github.com/Mani2815/Crime_Prediction" }],
      aosType: "fade-left",
      className: "md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6",
      aosDelay: "100"
    },
    {
      number: "02",
      title: "Reddit ETL Pipeline",
      text: "Scalable ETL pipeline to extract, transform, and load Reddit data. Automated data collection, cleaning, and storage with efficient DB schemas and data quality checks.",
      tech: ["Python", "SQL", "APIs", "Data Engineering"],
      links: [{ label: "GitHub", url: "https://github.com/Mani2815/Social-Media-ETL-Dashboard---Reddit" }],
      aosType: "fade-right",
      className: "md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6",
      aosDelay: "200"
    },
    {
      number: "03",
      title: "Civitas — Smart City CMS",
      text: "Full-stack Smart City Complaint Management & Analytics System. Role-based portals for citizens, staff, and admins with interactive Leaflet maps, Recharts analytics, AI chatbot, and real-time complaint tracking.",
      tech: ["React", "Vite", "Tailwind", "Leaflet", "Recharts", "Framer Motion", "FastAPI"],
      links: [
        { label: "Frontend", url: "https://github.com/Mani2815/civitas-frontend" },
        { label: "Backend", url: "https://github.com/Mani2815/civitas-backend" }
      ],
      aosType: "fade-left",
      className: "md:absolute md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3",
      aosDelay: "300"
    },
    {
      number: "04",
      title: "Customer Churn Analysis",
      text: "ML churn prediction model with data preprocessing, feature engineering, and model evaluation techniques to achieve high accuracy in identifying at-risk customers.",
      tech: ["Python", "Pandas", "Scikit-learn", "Power BI"],
      links: [{ label: "GitHub", url: "https://github.com/Mani2815/E-Commerce-Customer-Churn-Analysis" }],
      aosType: "fade-right",
      className: "md:absolute md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3",
      aosDelay: "400"
    }
  ];

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-white pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1400px]">

        {/* Header */}
        <div data-aos="fade-up" className="md:absolute top-0 left-0 md:w-[450px] z-20 mb-16 md:mb-0">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-8 shadow-sm bg-white">
            Featured Projects
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight relative">
            Building systems that learn, scale, and deliver
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-sm font-medium leading-relaxed">
            From predictive ML models and scalable ETL pipelines to full-stack Smart City systems — scroll to explore my work.
          </p>
        </div>

        {/* Desktop SVG Animated Dashed Line */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1400px] pointer-events-none z-0"
          viewBox="0 0 1000 1400"
          preserveAspectRatio="none"
        >
          <path
            d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1250"
            fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="8 10"
          />
          <mask id="path-mask">
            <motion.path
              d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1250"
              fill="none" stroke="white" strokeWidth="20" style={{ pathLength }}
            />
          </mask>
          <path
            d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1250"
            fill="none" stroke="black" strokeWidth="2" strokeDasharray="8 10"
            mask="url(#path-mask)" className="drop-shadow-sm"
          />
        </svg>

        {/* Mobile Animated Vertical Dashed Line */}
        <svg
          className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-[100%] pointer-events-none z-0"
          viewBox="0 0 4 100" preserveAspectRatio="none"
        >
          <path d="M 2,0 L 2,100" fill="none" stroke="#cbd5e1" strokeWidth="4" strokeDasharray="4 6" vectorEffect="non-scaling-stroke" />
          <mask id="path-mask-mobile">
            <motion.path d="M 2,0 L 2,100" fill="none" stroke="white" strokeWidth="4" style={{ pathLength }} vectorEffect="non-scaling-stroke" />
          </mask>
          <path d="M 2,0 L 2,100" fill="none" stroke="black" strokeWidth="4" strokeDasharray="4 6" mask="url(#path-mask-mobile)" vectorEffect="non-scaling-stroke" />
        </svg>

        {/* Cards */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10 w-full pt-4 md:pt-0 pb-12 md:pb-0">
          {projects.map((p) => (
            <ProjectCard
              key={p.number}
              {...p}
              pathLength={pathLength}
              containerRef={containerRef}
            />
          ))}

          <a
            href="https://github.com/Mani2815"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-in"
            data-aos-delay="600"
            className="hidden md:flex items-center gap-2 absolute top-[1300px] left-[55%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6 hover:text-[#ff2a2a] transition-colors duration-300"
          >
            More projects on GitHub!
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="-rotate-6 group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
