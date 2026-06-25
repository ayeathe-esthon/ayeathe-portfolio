import './Work.css'
import useScrollReveal from '../hooks/useScrollReveal'
import VideoPlayer from './VideoPlayer'

const videos = [
  {
  id: 'K_e8YrL7pns',
  title: 'iPhone 17 Motion Graphics Ad',
  tag: 'Motion Graphics',
  featured: false
},
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

    <div className="video-grid">
      {videos.map(video => (
        <div key={video.id} className="video-card">
          <VideoPlayer id={video.id} title={video.title} />
          <div className="video-card-info">
            <span className="video-tag">{video.tag}</span>
            <p className="video-title">{video.title}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
)
}

export default Work
