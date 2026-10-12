import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <nav className="container nav" aria-label="Main navigation" onKeyDown={event => { if (event.key === 'Escape') setOpen(false) }}>
      <Link to="/" className="brand" onClick={() => setOpen(false)}>vicky<span>.dev</span><span className="brand-dot"> / </span></Link>
      <button className="menu-toggle" aria-expanded={open} aria-controls="nav-links" onClick={() => setOpen(!open)}>{open ? 'Close menu' : 'Menu'}</button>
      <div id="nav-links" className={`nav-links ${open ? 'is-open' : ''}`}>
        <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink to="/projects" onClick={() => setOpen(false)}>Work</NavLink>
        <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
        <a href="https://vicks.hashnode.dev" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Writing ↗</a>
        <a className="nav-contact" href="https://www.linkedin.com/in/vicky-sah-707954350">Let’s talk <span aria-hidden="true">↗</span></a>
      </div>
    </nav>
  </header>
}
