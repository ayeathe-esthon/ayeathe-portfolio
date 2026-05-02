import './Work.css'
import useScrollReveal from '../hooks/useScrollReveal'


const videos = [
  {
    id: 'wbEMZsbv7Js',
    title: 'Motion Graphics Edit',
    tag: 'Motion Graphics',
    featured: true
  },
  {
    id: 'W9YKkftu4B4',
    title: 'Social Media Marketing Edit',
    tag: 'Video Editing',
    featured: false
  },
  {
    id: 'a22oypcEmZY',
    title: 'Motion Graphics Short',
    tag: 'Motion Graphics',
    featured: false
  }
]

function Work() {
  const ref = useScrollReveal()
  return (
      <section id="work" ref={ref} className="work reveal">
      <h2 className="section-title">My Work</h2>
      <p className="section-subtitle">A selection of my best work</p>
      <div className="section-divider"></div>

      <div className="featured-wrapper">
        <span className="featured-label">Featured</span>
        <div className="featured-video">
          <iframe
            src={`https://www.youtube.com/embed/${videos.find(v => v.featured).id}`}
            title="Featured Video"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>

      <div className="video-grid">
        {videos.filter(v => !v.featured).map(video => (
          <a
            key={video.id}
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="video-card"
          >
            <img
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
            />
            <div className="video-card-info">
              <span className="video-tag">{video.tag}</span>
              <p className="video-title">{video.title}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Work
