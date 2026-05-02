import { useEffect, useRef } from 'react'

function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('reveal-visible')
        observer.unobserve(el)
      }
    }, {
      threshold: options.threshold || 0.15,
    })

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

export default useScrollReveal