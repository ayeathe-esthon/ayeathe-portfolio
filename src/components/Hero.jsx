import { useState, useEffect } from 'react'
import './Hero.css'

const titles = ['Video Editor', 'Motion Graphics Designer', 'Content Creator']

function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [titleIndex, setTitleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = titles[titleIndex]
    const speed = isDeleting ? 50 : 100

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1))
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1))
        if (displayed.length - 1 === 0) {
          setIsDeleting(false)
          setTitleIndex((prev) => (prev + 1) % titles.length)
        }
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, titleIndex])

  const handleScroll = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
        <section id="home" className="hero">      
        <div className="hero-content">
        <p className="hero-greeting">Hi, my name is</p>
        <h1 className="hero-name">Ayeathe.</h1>
        <h2 className="hero-titles">
          {displayed}<span className="cursor">|</span>
        </h2>
        <p className="hero-tagline">Crafting visuals that leave an impression.</p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => handleScroll('work')}>
            ▶ View My Work
          </button>
          <button className="btn-secondary" onClick={() => handleScroll('contact')}>
            Let's Work Together
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero