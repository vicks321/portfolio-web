import Contact from '../components/Contact'
export default function Projects() {
  return <div className="container">
    <section className="page-intro"><p className="eyebrow">WORK / PERSONAL PROJECTS</p><h1>My work so far.</h1><p className="lead">This portfolio is my first public work sample. I’m now working toward applying my full-stack knowledge in complete applications.</p></section>
    <article className="case-study">
      <div className="case-top"><span className="eyebrow">01 / PERSONAL WEBSITE</span><span className="status-tag">Public source code</span></div>
      <h2>Developer portfolio</h2><p className="lead">A clear, responsive introduction to my background, skills, and next step as a developer.</p>
      <div className="tags">{['React', 'Vite', 'React Router', 'CSS', 'Netlify configuration'].map(tag => <span key={tag}>{tag}</span>)}</div>
      <div className="case-columns"><div><h3>The goal</h3><p>Give a recruiter one place to understand my technical focus, explore my work, and get in touch.</p></div><div><h3>The implementation</h3><p>Reusable React components, separate routes for work and background, responsive layouts, keyboard focus styles, and direct contact links.</p></div><div><h3>What it demonstrates</h3><p>Frontend structure, responsive styling, client-side routing, and a version-controlled workflow. Full-stack and cloud projects are the next step.</p></div></div>
      <a className="button primary" href="https://github.com/vicks321/portfolio-web" target="_blank" rel="noreferrer">Explore the source on GitHub ↗</a>
    </article>
    <Contact />
  </div>
}
