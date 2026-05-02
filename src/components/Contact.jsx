import './Contact.css'
import { FaYoutube, FaTiktok, FaEnvelope } from 'react-icons/fa'
import useScrollReveal from '../hooks/useScrollReveal'

function Contact() {
  const ref = useScrollReveal()

  return (
    <section id="contact" ref={ref} className="contact reveal">
      <h2 className="section-title">Get in Touch</h2>
      <p className="section-subtitle">Let's work on something great together</p>
      <div className="section-divider"></div>

      <div className="contact-card">
        <div className="contact-icon">
          <FaEnvelope />
        </div>
        <h3>Send me an Email</h3>
        <p className="contact-email">ayeadegenius@gmail.com</p>
        <a
          href="mailto:ayeadegenius@gmail.com"
          className="btn-primary contact-btn"
        >
          Send an Email ↗
        </a>
      </div>

      <div className="social-links">
        <a
          href="https://youtube.com/@ayeathemanu"
          target="_blank"
          rel="noopener noreferrer"
          className="social-card"
          >
        <FaYoutube className="social-icon youtube" />
            <p className="social-platform">YouTube</p>
            <p className="social-handle">@ayeathemanu</p>
          <span className="social-arrow">↗</span>
          </a>
        <a
          href="https://www.tiktok.com/@ayeathe_esthon"
          target="_blank"
          rel="noopener noreferrer"
          className="social-card"
          >
          <FaTiktok className="social-icon tiktok" />
            <p className="social-platform">TikTok</p>
            <p className="social-handle">@ayeathe_esthon</p>
            <span className="social-arrow">↗</span>
            </a>
          </div>
            
    </section>
  )
}

export default Contact