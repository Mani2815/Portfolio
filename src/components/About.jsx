import React from 'react';
import stackImage from '../assets/about/profile.png';
import pythonImg from '../assets/about/python.svg';
const javaImg = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg";
const streamlitImg = "https://cdn.simpleicons.org/streamlit/FF4B4B";
const sqlImg = "data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3e%3cellipse cx='12' cy='5' rx='9' ry='3'/%3e%3cpath d='M21 12c0 1.66-4 3-9 3s-9-1.34-9-3'/%3e%3cpath d='M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5'/%3e%3c/svg%3e";
import excelImg from '../assets/about/excel.svg';
import fastapiImg from '../assets/about/fastapi.svg';

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">

        {/* Left Side: ID Badge */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>

            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img
                  src={stackImage}
                  alt="Portrait of Maniarasan J - AI Engineer and MCA Student"
                  loading="lazy"
                  className="w-full h-full object-cover object-[center_10%]"
                />
              </div>
              {/* Badge info strip */}
              <div className="mt-2 px-2 pb-2 text-center">
                <p className="text-white font-black text-sm tracking-tight">Maniarasan J</p>
                <p className="text-red-400 font-bold text-[10px] uppercase tracking-wider">MCA Student</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">

          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">About Me</h2>
          <article>
            <p className="text-lg font-bold mb-4 leading-relaxed max-w-3xl text-red-50">
              I am <strong className="text-black text-xl font-black mx-1 tracking-wide uppercase">Maniarasan J</strong>, an <strong className="text-black">AI/ML Engineer</strong> and Data Engineer based in Bengaluru, India. I am currently pursuing an MCA at Christ University with a strong focus on <strong className="text-black">Large Language Models (LLMs)</strong>, Applied Artificial Intelligence, and scalable Data Analytics.
            </p>
            <p className="text-lg font-bold mb-8 leading-relaxed max-w-3xl text-red-100">
              Currently working as an <strong className="text-black">AI/ML Engineer Intern at JobJockey</strong>, I specialize in developing end-to-end AI applications including real-time Voice AI Agents, LLM-powered Hiring Assistants, and robust ETL pipelines using <strong className="text-black">Python, FastAPI, Next.js, and Vector Databases</strong>.
            </p>
          </article>

          {/* Horizontal Tech Icons */}
          <nav aria-label="Core Technologies" className="flex items-center gap-10 mt-6">
            <div data-aos="zoom-in" data-aos-delay="300" className="flex flex-col items-center gap-2 group">
              <img
                src={pythonImg}
                alt="Python Programming Language"
                loading="lazy"
                className="w-16 h-16 md:w-20 md:h-20 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl"
              />
              <span className="text-white/70 text-xs font-bold uppercase tracking-widest">Python</span>
            </div>
            <div data-aos="zoom-in" data-aos-delay="450" className="flex flex-col items-center gap-2 group">
              <img
                src={javaImg}
                alt="Java Programming Language"
                loading="lazy"
                className="w-16 h-16 md:w-20 md:h-20 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl"
              />
              <span className="text-white/70 text-xs font-bold uppercase tracking-widest">Java</span>
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="flex flex-col items-center gap-2 group">
              <img
                src={streamlitImg}
                alt="Streamlit Framework"
                loading="lazy"
                className="w-16 h-16 md:w-20 md:h-20 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl"
              />
              <span className="text-white/70 text-xs font-bold uppercase tracking-widest">Streamlit</span>
            </div>
            <div data-aos="zoom-in" data-aos-delay="750" className="flex flex-col items-center gap-2 group">
              <img
                src={sqlImg}
                alt="SQL Database Query Language"
                loading="lazy"
                className="w-16 h-16 md:w-20 md:h-20 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl"
              />
              <span className="text-white/70 text-xs font-bold uppercase tracking-widest">SQL</span>
            </div>
            <div data-aos="zoom-in" data-aos-delay="900" className="flex flex-col items-center gap-2 group">
              <img
                src={excelImg}
                alt="Microsoft Excel Data Analysis"
                loading="lazy"
                className="w-16 h-16 md:w-20 md:h-20 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl"
              />
              <span className="text-white/70 text-xs font-bold uppercase tracking-widest">Excel</span>
            </div>
            <div data-aos="zoom-in" data-aos-delay="1050" className="flex flex-col items-center gap-2 group">
              <img
                src={fastapiImg}
                alt="FastAPI Framework"
                loading="lazy"
                className="w-16 h-16 md:w-20 md:h-20 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl"
              />
              <span className="text-white/70 text-xs font-bold uppercase tracking-widest">FastAPI</span>
            </div>
          </nav>

          {/* Skills Tags */}
          <div id="skills" className="mt-10 flex flex-wrap gap-2">
            {['AWS', 'FastAPI', 'Docker', 'LLMs', 'SQL', 'Git & Github', 'Excel', 'Python', 'Java', 'Streamlit', 'HTML', 'CSS', 'JavaScript', 'Conversational AI', 'NLP', 'RAG', 'Machine Learning', 'Data Science', 'Data Analytics', 'Database Integration', 'Data Visualization', 'MongoDB', 'Deep Learning', 'Node JS', 'Express JS', 'Next JS', 'Deployment', 'Tableau', 'Power BI', 'Neural Networks', 'Web Development'].map(skill => (
              <span key={skill} className="px-3 py-1 rounded-full bg-black/20 border border-white/20 text-white text-xs font-bold backdrop-blur-sm hover:bg-black/40 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Torn paper divider */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" /></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" /></svg>
      </div>
    </section>
  );
};

export default About;
