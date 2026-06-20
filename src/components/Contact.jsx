import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Access the key from the .env file using Vite's import.meta.env
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000); // Reset status after 3 seconds
      } else {
        setStatus('error');
        console.error(result);
      }
    } catch (error) {
      setStatus('error');
      console.error(error);
    }
  };

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 md:pb-0 border-t border-gray-900">
      {/* Huge Background Text */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1
          className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Form Card Overlay */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white flex flex-col justify-between"
        >
          <div className="text-xs font-bold tracking-[0.2em] mb-12 md:mb-20 uppercase opacity-90">
            Get In Touch
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-12 md:gap-16 w-full">
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full">
              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-10">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-label="Your Name"
                    placeholder="Name"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-label="Your Email"
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1 flex flex-col">
                <div className="relative h-full flex flex-col">
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-label="Your Message"
                    placeholder="Type your message here"
                    className="w-full h-full min-h-[120px] bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium resize-none rounded-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row gap-12 mt-4">
              <div className="flex-1 flex flex-col gap-2 text-sm font-bold text-white/90">
                <p className="text-xs uppercase tracking-widest text-white/60 mb-1">Or reach me directly</p>
                <a href="mailto:maniarasan2815@gmail.com" className="hover:text-white transition-colors underline underline-offset-4">
                  maniarasan2815@gmail.com
                </a>
                <div className="flex flex-wrap gap-4 mt-4">
                  <a href="https://www.linkedin.com/in/maniarasan-j-175780248/" target="_blank" rel="noopener noreferrer" aria-label="Visit Maniarasan J's LinkedIn Profile"
                    className="group flex items-center gap-1.5 text-white/70 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest underline underline-offset-2">
                    <svg viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#000000" className="w-4 h-4 bg-white rounded-[2px] hover:scale-110 transition-transform"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055" fill="#0A66C2"> </path> </g> </g></svg>
                    LinkedIn
                  </a>
                  <a href="https://github.com/Mani2815" target="_blank" rel="noopener noreferrer" aria-label="Visit Maniarasan J's GitHub Profile"
                    className="group flex items-center gap-1.5 text-white/70 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest underline underline-offset-2">
                    <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" className="w-4 h-4 bg-white rounded-full hover:scale-110 transition-transform"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>
                    GitHub
                  </a>
                  <a href="https://hackerrank.com/maniarasan2815" target="_blank" rel="noopener noreferrer" aria-label="Visit Maniarasan J's HackerRank Profile"
                    className="group flex items-center gap-1.5 text-white/70 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest underline underline-offset-2">
                    <img src="https://cdn.simpleicons.org/hackerrank" alt="HackerRank" loading="lazy" className="w-4 h-4 hover:scale-110 transition-transform" />
                    HackerRank
                  </a>
                  <a href="https://leetcode.com/u/mani2815/" target="_blank" rel="noopener noreferrer" aria-label="Visit Maniarasan J's LeetCode Profile"
                    className="group flex items-center gap-1.5 text-white/70 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest underline underline-offset-2">
                    <img src="https://cdn.simpleicons.org/leetcode" alt="LeetCode" loading="lazy" className="w-4 h-4 hover:scale-110 transition-transform" />
                    LeetCode
                  </a>
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-8 text-xs text-white/70 font-medium">
                <p className="leading-relaxed max-w-[400px]">
                  Currently open to opportunities across AI/ML, Data Science, Data Engineering, Analytics, and Software Development.
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
                  <p className="max-w-[250px] leading-relaxed">
                    Based in Bengaluru, India. Available remotely worldwide.
                  </p>
                  <div className="flex flex-col gap-2 self-start sm:self-auto">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="px-8 py-3 rounded-full border border-white/40 text-white font-bold flex items-center justify-center gap-3 hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 group whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send'}
                      {status !== 'submitting' && status !== 'success' && (
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      )}
                    </button>
                    {status === 'error' && (
                      <span className="text-sm font-bold text-white tracking-wider">Failed to send message.</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
