import { useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

function Layout() {
  const { pathname } = useLocation()
  const main = useRef(null)
  const previousPath = useRef(pathname)
  useEffect(() => {
    const titles = { '/': 'Full-Stack Developer & Computer Engineering Student', '/about': 'About', '/projects': 'Work' }
    document.title = `Vicky Kumar Sah | ${titles[pathname] || 'Page not found'}`
    window.scrollTo(0, 0)
    if (previousPath.current !== pathname) main.current?.focus()
    previousPath.current = pathname
  }, [pathname])
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Navbar />
    <main id="main-content" ref={main} tabIndex="-1"><Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<section className="container page-intro"><p className="eyebrow">404 / PAGE NOT FOUND</p><h1>Let’s get you back.</h1><Link className="button primary" to="/">Back to home ↗</Link></section>} />
    </Routes></main>
    <footer className="container footer"><div><Link className="brand" to="/">vicky<span>.dev</span></Link><p>Computer Engineering student · Kathmandu, Nepal</p></div><div className="footer-links"><a href="https://www.linkedin.com/in/vicky-sah-707954350">Contact ↗</a><a href="https://github.com/vicks321" target="_blank" rel="noreferrer">GitHub ↗</a></div><p className="copyright">© {new Date().getFullYear()} Vicky Kumar Sah</p></footer>
  </>
}
export default function App() { return <BrowserRouter><Layout /></BrowserRouter> }
