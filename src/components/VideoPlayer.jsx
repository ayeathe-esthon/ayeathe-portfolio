import { useState } from 'react'
import './VideoPlayer.css'

function VideoPlayer({ id, title }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="video-player" onClick={() => setPlaying(true)}>
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title={title}
          allowFullScreen
          allow="autoplay"
        />
      ) : (
        <>
          <img
            src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
            alt={title}
          />
          <div className="play-button">
            <svg viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M66.5 7.7a8.5 8.5 0 0 0-6-6C55.8 0 34 0 34 0S12.2 0 7.5 1.7a8.5 8.5 0 0 0-6 6C0 11.4 0 24 0 24s0 12.6 1.5 16.3a8.5 8.5 0 0 0 6 6C12.2 48 34 48 34 48s21.8 0 26.5-1.7a8.5 8.5 0 0 0 6-6C68 36.6 68 24 68 24s0-12.6-1.5-16.3z" fill="#ff0000"/>
              <path d="M27 34l18-10-18-10v20z" fill="#fff"/>
            </svg>
          </div>
        </>
      )}
    </div>
  )
}

export default VideoPlayer