import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      {/* Top Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <div className="flex-1 text-center md:text-left">
          
          {/* Live Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Open to Engineering Internships & Roles
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.15]">
            Hi, I’m <span className="text-amber-600 dark:text-amber-500">Vicky K Sah</span>.
          </h1>
          
          <p className="text-lg sm:text-xl font-medium text-neutral-700 dark:text-neutral-300 mt-2">
            Computer Engineer & Full-Stack Engineer
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Link
              to="/projects"
              className="px-6 py-2.5 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors shadow-sm"
            >
              View Projects
            </Link>
            <a
              href="https://github.com/vicks321"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              GitHub Profile
            </a>
          </div>
        </div>

        {/* Profile Image with subtle framing */}
        <div className="relative group">
          <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-2xl overflow-hidden shadow-xl border-2 border-neutral-200 dark:border-neutral-800 bg-neutral-100">
            <img
              src="/image.jpg"
              alt="Vicky Kumar Sah"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-700 -z-10 blur-sm opacity-25 group-hover:opacity-50 transition duration-300"></div>
        </div>
      </div>

      {/* Engineering Highlights / Proof of Work */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-neutral-200 dark:border-neutral-800 pt-10">
        <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/60 dark:border-neutral-800">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wider">Frontend</h3>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">React, Tailwind CSS, Vite, JavaScript (ES6+), Responsive UI</p>
        </div>
        <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/60 dark:border-neutral-800">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wider">Backend & Systems</h3>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">Node.js, Express, REST APIs, C / C++, Data Structures</p>
        </div>
        <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/60 dark:border-neutral-800">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wider">Workflow & Cloud</h3>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">Git, GitHub Actions</p>
        </div>
      </div>
    </div>
  )
}

export default Home