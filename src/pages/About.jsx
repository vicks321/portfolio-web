import Contact from '../components/Contact'
const groups = [
  ['Frontend', ['JavaScript', 'React', 'HTML & CSS', 'Tailwind CSS', 'Vite']],
  ['Backend & data', ['Node.js', 'Express', 'NestJS', 'MongoDB', 'REST APIs']],
  ['Programming foundations', ['C / C++', 'Python', 'Data structures', 'Object-oriented programming']],
  ['Tools & learning', ['Git & GitHub', 'Linux CLI', 'AWS cloud fundamentals']]
]
export default function About() {
  return <div className="container">
    <section className="page-intro"><p className="eyebrow">ABOUT / VICKY KUMAR SAH</p><h1>A little about me.</h1><p className="lead">I’m Vicky Kumar Sah, a Computer Engineering student at Lalitpur Engineering College, affiliated with Tribhuvan University, based in Kathmandu, Nepal.</p></section>
    <section className="about-layout section">
      <div><h2>What I’m working toward</h2><p>I’m interested in how the pieces of a web application fit together: the interface, the API, the database, and the infrastructure behind it.</p><p>I’ve been learning full-stack development with React and the Node.js ecosystem, alongside AWS Cloud Practitioner concepts. My next step is applying that foundation through practical work and team experience.</p><p>I’m seeking full-stack internships and entry-level opportunities where I can contribute, ask good questions, and improve through feedback.</p></div>
      <aside className="education-card"><p className="eyebrow">EDUCATION</p><h3>Computer Engineering</h3><p>Lalitpur Engineering College<br />Tribhuvan University</p><span className="tags"><span>Currently studying</span></span><hr /><p className="eyebrow">CURRENT DIRECTION</p><p>Full-stack development<br />Cloud fundamentals</p></aside>
    </section>
    <section className="section"><div className="section-heading"><div><p className="eyebrow">MY TECHNICAL FOUNDATION</p><h2>Tools I’m familiar with.</h2></div></div><div className="skills-grid">{groups.map(([title, skills]) => <article key={title}><h3>{title}</h3><div className="tags">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></article>)}</div><p className="section-note">AWS learning reflects foundational study, not a certification or production cloud experience.</p></section>
    <Contact />
  </div>
}
