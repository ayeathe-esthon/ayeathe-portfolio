import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} Ayeathe. All rights reserved.
      </p>
      <p className="footer-sub">Designed & Built by Ayeathe</p>
    </footer>
  )
}

export default Footer