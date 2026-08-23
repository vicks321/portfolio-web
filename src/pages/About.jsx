import React from 'react'

const About = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["JavaScript (ES6+)", "C / C++", "Python", "HTML5 & CSS3/Tailwind", "SQL"]
    },
    {
      category: "Frameworks & Libraries",
      skills: ["React.js", "Node.js", "Express", "Vite"]
    },
    {
      category: "Developer Tools & Platforms",
      skills: ["Git & GitHub", "Linux CLI", "DNS & Web Infrastructure", "Postman / REST APIs"]
    },
    {
      category: "Computer Engineering Core",
      skills: ["Data Structures & Algorithms", "Computer Architecture", "Operating Systems Fundamentals", "Object-Oriented Design"]
    }
  ]

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
        About Me
      </h1>

      <div className="mt-6 space-y-4 text-neutral-600 dark:text-neutral-400 text-base sm:text-lg leading-relaxed">
        <p>
          I am a <strong className="text-neutral-900 dark:text-white">Computer Engineering student</strong> passionate about software development, systems thinking, and building modern, reliable web applications.
        </p>
        <p>
          My approach combines strong low-level computing fundamentals with hands-on full-stack development. I enjoy taking ideas from fundamental algorithmic logic all the way to polished, production-ready user interfaces.
        </p>
      </div>

      {/* Technical Skill Grid */}
      <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mt-12 mb-6">
        Technical Competencies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((group) => (
          <div
            key={group.category}
            className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-500 mb-3">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-mono border border-neutral-200/60 dark:border-neutral-700/60"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About