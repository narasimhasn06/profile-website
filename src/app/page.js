"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("narasimhamurthy.sn@hotmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const experiences = [
    {
      company: "Skycliff IT",
      duration: "8 years 8 months",
      roles: [
        {
          title: "Director of IT, YourDoctors",
          period: "April 2021 - December 2025 (4 years 9 months)",
          location: "Bengaluru, Karnataka, India",
          highlights: []
        },
        {
          title: "Program Manager",
          period: "November 2020 - April 2021 (6 months)",
          location: "Bengaluru, Karnataka, India",
          highlights: []
        },
        {
          title: "Techno Functional Leader",
          period: "May 2017 - November 2020 (3 years 7 months)",
          location: "Bengaluru Area, India",
          highlights: []
        }
      ]
    },
    {
      company: "Honeywell",
      duration: "10 years 9 months",
      roles: [
        {
          title: "Technology Specialist",
          period: "January 2014 - May 2017 (3 years 5 months)",
          location: "Bangalore, India",
          highlights: []
        },
        {
          title: "Tech Lead",
          period: "September 2006 - December 2013 (7 years 4 months)",
          location: "Bangalore, India",
          highlights: []
        }
      ]
    },
    {
      company: "Trigent Software",
      duration: "1 year 5 months",
      roles: [
        {
          title: "Senior Software Engineer",
          period: "April 2005 - August 2006 (1 year 5 months)",
          location: "India",
          highlights: [
            "Worked as senior software engineer"
          ]
        }
      ]
    },
    {
      company: "Dhithi Inforserve (P) Ltd",
      duration: "3 years 11 months",
      roles: [
        {
          title: "System Analyst",
          period: "June 2001 - April 2005 (3 years 11 months)",
          location: "India",
          highlights: [
            "Started my career from this wonderful company"
          ]
        }
      ]
    }
  ];

  const education = [
    {
      institution: "Sikkim Manipal University - Distance Education",
      degree: "Master of Computer Application (MCA)",
      years: "2008 - 2009"
    },
    {
      institution: "Bangalore University",
      degree: "Bachelor's degree, Physics, Chemistry and Mathematics",
      years: "1994 - 1997"
    }
  ];

  const skillCategories = [
    {
      name: "Core Development",
      description: "Full-stack capabilities and technical architecture.",
      skills: ["Full-Stack Development", "JSON", "APIs & Integrations"]
    },
    {
      name: "Domain Expertise",
      description: "Specialized knowledge in business domains and frameworks.",
      skills: ["Healthcare IT Systems", "EHR / Digital Health Solutions"]
    },
    {
      name: "Leadership & Management",
      description: "Strategic program planning and organization direction.",
      skills: ["IT Direction & Strategy", "Program Management", "Techno-Functional Leadership", "Team Mentoring"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 dark:bg-[#030712] dark:text-slate-100 transition-colors duration-300">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent dark:from-indigo-500/5 pointer-events-none z-0" />
      <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-indigo-500/8 dark:bg-indigo-500/4 blur-[100px] pointer-events-none z-0 animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute top-[60%] left-[5%] w-[450px] h-[450px] rounded-full bg-cyan-500/8 dark:bg-cyan-500/4 blur-[120px] pointer-events-none z-0 animate-pulse" style={{ animationDuration: '12s' }} />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-[#030712]/80">
        {/* Scroll Progress Bar */}
        <div 
          className="h-[3px] bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 transition-all duration-75" 
          style={{ width: `${scrollProgress}%` }}
        />
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 dark:from-violet-400 dark:via-indigo-400 dark:to-cyan-400">
            Narasimha Murthy S N
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600 dark:text-slate-300">
            <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Experience</a>
            <a href="#education" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Education</a>
            <a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="rounded-full p-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-800 focus:outline-none"
              aria-label="Toggle theme"
            >
              {!mounted ? (
                <div className="h-5 w-5 rounded-full bg-slate-200 dark:bg-slate-800 animate-pulse" />
              ) : theme === "dark" ? (
                // Sun Icon
                <svg className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m2.828 0l-.707-.707m2.828-14.142l-.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
                </svg>
              ) : (
                // Moon Icon
                <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <a
              href="/Profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex h-9 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 px-4 text-sm font-semibold text-white transition-all shadow-md shadow-indigo-500/10 hover:shadow-lg"
            >
              Download CV
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 mx-auto max-w-5xl px-6 py-16 md:py-24 flex flex-col gap-28">
        
        {/* Hero Section */}
        <section id="about" className="grid md:grid-cols-5 gap-12 items-center pt-4">
          <div className="md:col-span-3 flex flex-col gap-6">
            <div className="inline-flex self-start rounded-full px-3.5 py-1 text-xs font-bold bg-indigo-500/10 text-indigo-700 dark:bg-indigo-500/5 dark:text-indigo-300 border border-indigo-500/20 dark:border-indigo-500/10">
              Technology Leader & Strategist
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-white">
              Narasimha Murthy S N
            </h1>
            <p className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 dark:from-violet-400 dark:via-indigo-400 dark:to-cyan-400">
              Director of IT & Technical Leader
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              I am a seasoned technology executive and full-stack technical leader with a proven history of success driving engineering teams, architectures, and operations. Specializing in healthcare IT systems, program leadership, and techno-functional management, I lead scale-up initiatives from vision to high-performance delivery.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 px-6 font-semibold transition-all shadow-md"
              >
                Let's Connect
              </a>
              <a
                href="/Profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 hover:bg-slate-50 dark:hover:bg-slate-900 px-6 font-semibold transition-all"
              >
                View PDF Resume
              </a>
            </div>
          </div>
          
          {/* Stylized Monogram Graphic */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 border border-slate-200 dark:border-slate-800/80 p-8 shadow-inner overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative flex items-center justify-center w-full h-full rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/50 shadow-md">
                <span className="text-7xl font-black bg-clip-text text-transparent bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-500 dark:from-violet-400 dark:via-indigo-400 dark:to-cyan-400 select-none">
                  NM
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="flex flex-col gap-12 scroll-mt-24">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">Professional Experience</h2>
            <div className="mt-3.5 h-1.5 w-16 bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 rounded-full" />
          </div>
          
          <div className="relative border-l-2 border-slate-200 dark:border-slate-800/80 ml-4 md:ml-6 pl-6 md:pl-10 flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Node Dot */}
                <div className="absolute -left-[35px] md:-left-[51px] top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-indigo-600 dark:border-indigo-400 bg-slate-50 dark:bg-[#030712] z-10 shadow-sm">
                  <div className="h-2.5 w-2.5 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse" />
                </div>
                
                {/* Card Container */}
                <div className="glass p-6 md:p-8 rounded-2xl transition-all hover:shadow-lg dark:hover:shadow-indigo-500/5 hover:-translate-y-0.5 duration-300">
                  
                  {/* Card Title Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/50 dark:border-slate-800/50 pb-5 mb-6">
                    <div>
                      <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">{exp.company}</h3>
                    </div>
                    <span className="inline-flex self-start sm:self-center px-3.5 py-1 text-sm font-semibold rounded-full bg-indigo-500/10 text-indigo-700 dark:bg-indigo-500/5 dark:text-indigo-300 border border-indigo-500/20 dark:border-indigo-500/10">
                      {exp.duration}
                    </span>
                  </div>

                  {/* Sub roles */}
                  <div className="flex flex-col gap-8">
                    {exp.roles.map((role, rIndex) => (
                      <div key={rIndex} className="relative pl-5 border-l-2 border-indigo-500/20 dark:border-indigo-400/20">
                        <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100">{role.title}</h4>
                        
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500 dark:text-slate-400 mt-1.5 font-semibold">
                          <span>{role.period}</span>
                          <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
                          <span>{role.location}</span>
                        </div>

                        {role.highlights.length > 0 && (
                          <ul className="mt-4 space-y-2">
                            {role.highlights.map((highlight, hIndex) => (
                              <li key={hIndex} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
                                <svg className="h-5 w-5 text-indigo-600 dark:text-indigo-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="flex flex-col gap-12 scroll-mt-24">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">Skills & Expertise</h2>
            <div className="mt-3.5 h-1.5 w-16 bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skillCategories.map((cat, index) => (
              <div key={index} className="glass p-6 md:p-8 rounded-2xl transition-all hover:shadow-md duration-300 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {cat.name}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 font-semibold">
                  {cat.description}
                </p>
                <div className="flex flex-wrap gap-2.5 mt-auto">
                  {cat.skills.map((skill, sIndex) => (
                    <span
                      key={sIndex}
                      className="px-3.5 py-1.5 text-xs font-bold rounded-xl bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300 border border-slate-200/50 dark:border-slate-800/80 transition-all hover:border-indigo-500/50 dark:hover:border-indigo-400/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="flex flex-col gap-12 scroll-mt-24">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">Education</h2>
            <div className="mt-3.5 h-1.5 w-16 bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div key={index} className="glass p-6 md:p-8 rounded-2xl transition-all hover:shadow-md hover:-translate-y-0.5 duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50 mb-6">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-snug">{edu.institution}</h3>
                  <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-2">{edu.degree}</p>
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-6 pt-4 border-t border-slate-200/50 dark:border-slate-800/50 font-bold">
                  {edu.years}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Block */}
        <section id="contact" className="flex flex-col gap-12 scroll-mt-24">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">Get in Touch</h2>
            <div className="mt-3.5 h-1.5 w-16 bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 rounded-full" />
          </div>

          <div className="glass p-8 md:p-12 rounded-3xl text-center flex flex-col items-center max-w-3xl mx-auto w-full relative overflow-hidden">
            {/* Ambient Background Circles */}
            <div className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-indigo-500/10 blur-xl pointer-events-none" />
            <div className="absolute -left-16 -bottom-16 w-32 h-32 rounded-full bg-cyan-500/10 blur-xl pointer-events-none" />

            <h3 className="text-3xl font-black text-slate-900 dark:text-white">Let's Connect</h3>
            <p className="text-slate-600 dark:text-slate-300 mt-4 max-w-md leading-relaxed text-base">
              Whether you want to discuss technology strategy, program execution, or healthcare system implementations, feel free to reach out.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-10 w-full max-w-md relative z-10">
              
              {/* Copy Email Button */}
              <button
                onClick={copyEmail}
                className="flex items-center justify-center gap-3 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/60 hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-all group relative cursor-pointer focus:outline-none"
              >
                <svg className="h-5 w-5 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-bold text-sm text-slate-700 dark:text-slate-300">
                  {copied ? "Copied!" : "Copy Email Address"}
                </span>
              </button>

              {/* LinkedIn Button */}
              <a
                href="https://www.linkedin.com/in/narasimha-murthy-s-n-06b63520"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/60 hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-all group cursor-pointer"
              >
                <svg className="h-5 w-5 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span className="font-bold text-sm text-slate-700 dark:text-slate-300">LinkedIn Profile</span>
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200/50 dark:border-slate-800/50 w-full">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">Direct Email</span>
              <a
                href="mailto:narasimhamurthy.sn@hotmail.com"
                className="text-lg font-bold text-indigo-600 dark:text-indigo-400 hover:underline mt-1 block"
              >
                narasimhamurthy.sn@hotmail.com
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#030712] mt-24 relative z-10">
        <div className="mx-auto max-w-5xl px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
          <div>
            © {new Date().getFullYear()} Narasimha Murthy S N. All rights reserved.
          </div>
          <div className="flex gap-6 font-semibold">
            <a href="#about" className="hover:underline">About</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
