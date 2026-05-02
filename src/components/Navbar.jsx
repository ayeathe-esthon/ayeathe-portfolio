import { useState, useEffect, useRef } from 'react'
import './navbar.css'

const sections = ['home', 'work', 'about', 'contact']

function Navbar() {
  const [active, setActive] = useState('home')
  const [indicatorStyle, setIndicatorStyle] = useState({})
  const navRefs = useRef({})

  useEffect(() => {
    const observers = sections.map(id => {
      const el = document.getElementById(id)
      if (!el) return null

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setActive(id)
        }
      }, { threshold: 0.4 })

      observer.observe(el)
      return observer
    })

    return () => observers.forEach(obs => obs && obs.disconnect())
  }, [])

 useEffect(() => {
  const activeEl = navRefs.current[active]
  if (!activeEl) return

  const indicator = document.querySelector('.nav-indicator')
  if (!indicator) return

  // Shrink
  indicator.classList.add('shrink')
  indicator.classList.remove('grow')

  setTimeout(() => {
    // Move while invisible
    setIndicatorStyle({
      width: `${activeEl.offsetWidth}px`,
      left: `${activeEl.offsetLeft}px`,
    })

    // Grow
    indicator.classList.remove('shrink')
    indicator.classList.add('grow')

    setTimeout(() => {
      indicator.classList.remove('grow')
    }, 200)
  }, 150)
}, [active])

  const handleScroll = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setActive(id)
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => handleScroll('home')}>
        Ayeathe
      </div>
      <ul className="navbar-links">
        {sections.map(link => (
          <li
            key={link}
            ref={el => navRefs.current[link] = el}
            className={active === link ? 'active' : ''}
            onClick={() => handleScroll(link)}
          >
            {link.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase())}
          </li>
        ))}
        <div className="nav-indicator" style={indicatorStyle}></div>
      </ul>
    </nav>
  )
}

export default Navbar