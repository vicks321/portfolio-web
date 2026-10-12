import { Link } from 'react-router-dom'
import Contact from '../components/Contact'

export default function Home() {
  return <div className="container">
    <section className="hero">
      <div className="hero-copy">
        <p className="availability"><span aria-hidden="true" /> Open to full-stack internships</p>
        <p className="eyebrow hero-name">VICKY KUMAR SAH · KATHMANDU, NEPAL</p>
        <h1>Hi, I’m Vicky.<br /><em>I’m a web developer.</em></h1>
        <p className="hero-description">Computer Engineering student with a full-stack foundation in React, Node.js, Express, NestJS, and MongoDB. Ready to turn that knowledge into useful software with a team.</p>
        <div className="actions"><a className="button primary" href="https://www.linkedin.com/in/vicky-sah-707954350">Let’s connect ↗</a><Link className="button secondary" to="/projects">Explore my work <span aria-hidden="true">↓</span></Link></div>
        <div className="hero-links"><a href="https://github.com/vicks321" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/vicky-sah-707954350" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
      </div>
      <div className="portrait-panel">
        <span className="photo-label">VICKY KUMAR SAH</span>
        <img src="/vicky.jpeg" alt="Vicky Kumar Sah" width="420" height="480" fetchPriority="high" />
        <div className="portrait-caption"><span>Computer Engineering student</span><span aria-hidden="true">↗</span></div>
      </div>
    </section>
    <section className="stack-strip" aria-label="Core technologies"><span className="eyebrow">MY TOOLKIT</span>{['React', 'Node.js', 'Express', 'NestJS', 'MongoDB'].map(skill => <span key={skill}>{skill}</span>)}</section>
    <section className="section">
      <div className="section-heading"><div><p className="eyebrow">01 / MY FOCUS</p><h2>What I’m learning and using.</h2></div><Link className="text-link" to="/about">A little more about me ↗</Link></div>
      <div className="focus-grid">
        <article><span className="card-number">01</span><h3>Frontend development</h3><p>React, JavaScript, and responsive layouts. I care about clear interfaces that work across screen sizes.</p><span className="card-footnote">React · Tailwind CSS · Vite</span></article>
        <article><span className="card-number">02</span><h3>Backend development</h3><p>My backend toolkit includes Node.js, Express, NestJS, and MongoDB, with a focus on APIs and application logic.</p><span className="card-footnote">Node.js · REST APIs · MongoDB</span></article>
        <article><span className="card-number">03</span><h3>Cloud foundations</h3><p>I’ve studied AWS Cloud Practitioner concepts and am developing my understanding of how applications are hosted.</p><span className="card-footnote">AWS fundamentals · Linux · Git</span></article>
      </div>
    </section>
    <section className="work-feature">
      <div className="project-art" aria-hidden="true"><div className="mini-browser"><div className="browser-dots">● ● ●</div><div className="mini-wordmark">vicky<span>.dev</span></div><div className="mini-line" /><div className="mini-line short" /><div className="mini-blocks"><i /><i /><i /></div></div><span>REACT / VITE / CSS</span></div>
      <div className="feature-copy"><p className="eyebrow">02 / FIRST WORK SAMPLE</p><h2>My personal portfolio.</h2><p>This portfolio is my first public work sample: a React site that brings together my background, technical interests, and contact details.</p><div className="tags"><span>React</span><span>Vite</span><span>Responsive CSS</span></div><Link className="text-link" to="/projects">Explore the implementation ↗</Link></div>
    </section>
    <Contact />
  </div>
}
