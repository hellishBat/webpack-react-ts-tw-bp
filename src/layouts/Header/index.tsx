// Header
import { useEffect, useState, useRef } from 'react'
import Container from '@/components/Container'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const headerRef = useRef(null)

  const handleScroll = () => {
    const offsetY = window.scrollY
    if (offsetY >= 80) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [])

  return (
    <header className={`py-4 ${isScrolled ? 'shadow-md transition-colors' : ''}`} ref={headerRef}>
      <Container>
        <div className="header__inner">
          <a href="#">Link</a>
        </div>
      </Container>
    </header>
  )
}

export default Header
