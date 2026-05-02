import './About.css'
import glasses from '../assets/glasses.jpg'
import useScrollReveal from '../hooks/useScrollReveal'

function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" ref={ref} className="about reveal">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">The person behind the work</p>
      <div className="section-divider"></div>

      <div className="about-container">
        <div className="about-image">
          <img src={glasses} alt="Ayeathe" />
        </div>

        <div className="about-text">
          <p className="about-bio">
            I'm a video editor and motion graphics designer based in <span className="highlight">Nigeria</span>, 
            crafting content that ranges from high-energy social media marketing videos 
            to clean, polished motion graphics — all built in <span className="highlight">After Effects</span>.
          </p>
          <p className="about-bio">
            I believe <span className="highlight">creativity matters more than skill</span> — 
            though I'm glad I've got both. Every project I take on is driven by a genuine 
            desire to make something that actually looks and feels different.
          </p>
          <p className="about-bio">
            When I'm not editing, you'll find me lost in a good novel or deep in a 
            Minecraft world. Yes, both.
          </p>

          <div className="about-tags">
            <span>After Effects</span>
            <span>Motion Graphics</span>
            <span>Social Media Content</span>
            <span>Video Editing</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
