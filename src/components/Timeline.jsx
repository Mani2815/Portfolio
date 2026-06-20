import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const GraduationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>;
const BookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></svg>;
const RocketIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>;
const PartyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5.8 11.3 2 22l10.7-3.79" /><path d="M4 3h.01" /><path d="M22 8h.01" /><path d="M15 2h.01" /><path d="M22 20h.01" /><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" /><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17" /><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7" /><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z" /></svg>;
const BriefcaseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>;

const events = [
  {
    year: "2022",
    icon: <GraduationIcon />,
    title: "Started B.Sc CS with Data Analytics",
    subtitle: "Sri Ramakrishna College of Arts & Science",
    desc: "Began undergraduate journey — built strong foundations in programming, mathematics, data structures, and analytics fundamentals.",
    tags: ["Python", "SQL", "Statistics", "DSA"],
    side: "left",
  },
  {
    year: "2023",
    icon: <BookIcon />,
    title: "Skill Building Phase",
    subtitle: "Self-paced + Academic",
    desc: "Expanded skills in Python, SQL, Pandas, NumPy, Scikit-learn, and machine learning. Completed multiple certification courses.",
    tags: ["Pandas", "NumPy", "Scikit-learn", "ML"],
    side: "right",
  },
  {
    year: "2024",
    icon: <RocketIcon />,
    title: "Projects & Hackathon Phase",
    subtitle: "Portfolio Building",
    desc: "Completed ML & analytics projects — Customer Churn Analysis, Crime Prediction, Reddit ETL Pipeline. Conceptualised the Women Safety Analytics hackathon idea.",
    tags: ["ML Projects", "ETL", "Power BI", "Hackathon"],
    side: "left",
  },
  {
    year: "2025 May",
    icon: <PartyIcon />,
    title: "B.Sc Graduation",
    subtitle: "Sri Ramakrishna College of Arts & Science",
    desc: "Completed B.Sc CS with Data Analytics.",
    tags: ["Graduation", "B.Sc CS", "Data Analytics"],
    side: "right",
  },
  {
    year: "2025 Jun",
    icon: <GraduationIcon />,
    title: "MCA Admission",
    subtitle: "Christ University, Bengaluru",
    desc: "Secured admission to Master of Computer Applications at Christ University, Central Campus.",
    tags: ["MCA", "Christ University"],
    side: "left",
  },
  {
    year: "Mar 2026 – Jun 2026",
    icon: <BriefcaseIcon />,
    title: "AI/ML Engineering Internship",
    subtitle: "Job Jockey",
    desc: "Contributed to the development, deployment, and optimization of JobJockey, Workspace, and Voice Agent platforms, gaining hands-on experience in full-stack engineering, AI-powered systems, and cloud-based SaaS applications.",
    tags: ["LLMs", "Voice AI", "FastAPI"],
    side: "right",
  },
];

const TimelineCard = ({ event, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 40%"],
  });
  const opacity = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  const isLeft = event.side === "left";

  return (
    <div
      ref={ref}
      className={`relative flex w-full items-center mb-12 md:mb-16 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
        } flex-row`}
    >
      {/* Card */}
      <motion.div
        style={{ opacity }}
        className={`w-full md:w-[44%] ${isLeft ? "md:pr-8" : "md:pl-8"} pl-10 md:pl-0`}
      >
        <div
          data-aos={isLeft ? "fade-right" : "fade-left"}
          data-aos-delay={index * 80}
          className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 hover:border-[#ff2a2a]/50 hover:shadow-[0_0_30px_rgba(255,42,42,0.12)] transition-all duration-500 group"
        >
          {/* Top row */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-6 text-[#ff2a2a]">{event.icon}</div>
            <span className="text-[#ff2a2a] font-black text-sm tracking-widest uppercase font-mono">
              {event.year}
            </span>
          </div>

          <h3 className="text-white font-black text-lg leading-tight mb-1 group-hover:text-[#ff2a2a] transition-colors duration-300">
            {event.title}
          </h3>
          <p className="text-white/40 text-xs font-bold uppercase tracking-wider mb-3">
            {event.subtitle}
          </p>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            {event.desc}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {event.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-[10px] font-bold group-hover:border-[#ff2a2a]/30 group-hover:text-white/70 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Centre dot — hidden on mobile (dot is replaced by left border line) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center z-10">
        <motion.div
          style={{ scale: opacity }}
          className="w-4 h-4 rounded-full bg-[#ff2a2a] border-4 border-black shadow-[0_0_16px_rgba(255,42,42,0.7)]"
        />
      </div>

      {/* Mobile left-rail dot */}
      <div className="md:hidden absolute left-0 top-6 flex flex-col items-center z-10">
        <div className="w-3 h-3 rounded-full bg-[#ff2a2a] border-2 border-black shadow-[0_0_10px_rgba(255,42,42,0.7)]" />
      </div>

      {/* Spacer for opposite side on desktop */}
      <div className="hidden md:block w-[44%]" />
    </div>
  );
};

const Timeline = () => {
  const lineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start center", "end center"],
  });
  const lineScaleY = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  return (
    <section
      id="timeline"
      className="bg-[#0d0d0d] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans"
    >
      {/* Section header */}
      <div data-aos="fade-up" className="max-w-6xl mx-auto mb-16 md:mb-20">
        <div className="inline-block border border-white/10 rounded-full px-5 py-1.5 text-sm text-white/40 font-bold mb-6 bg-white/5">
          My Journey
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.05] tracking-tight max-w-2xl">
          From student to{" "}
          <span className="text-[#ff2a2a]">AI/ML Engineer.</span>
        </h2>
        <p className="text-white/40 mt-4 text-base md:text-lg max-w-lg font-medium leading-relaxed">
          A timeline of academic milestones, projects, internships, and research that shaped who I am.
        </p>
      </div>

      {/* Timeline body */}
      <div ref={lineRef} className="max-w-6xl mx-auto relative">

        {/* Desktop animated centre line */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/5 overflow-hidden">
          <motion.div
            className="w-full bg-[#ff2a2a] origin-top"
            style={{ scaleY: lineScaleY, height: "100%" }}
          />
        </div>

        {/* Mobile left rail */}
        <div className="md:hidden absolute left-1.5 top-0 bottom-0 w-px bg-white/5">
          <motion.div
            className="w-full bg-[#ff2a2a] origin-top"
            style={{ scaleY: lineScaleY, height: "100%" }}
          />
        </div>

        {/* Cards */}
        {events.map((event, i) => (
          <TimelineCard key={i} event={event} index={i} />
        ))}
      </div>

      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
};

export default Timeline;
