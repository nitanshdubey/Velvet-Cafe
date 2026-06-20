import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Story from './components/Story'
import Menu from './components/Menu'
import Space from './components/Space'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    // Cursor
    const cursor = document.getElementById('cursor')
    const ring = document.getElementById('cursor-ring')
    let mx = 0, my = 0, rx = 0, ry = 0

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      cursor.style.left = mx + 'px'
      cursor.style.top = my + 'px'
    }
    document.addEventListener('mousemove', onMove)

    const animateRing = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      requestAnimationFrame(animateRing)
    }
    animateRing()

    const interactiveEls = document.querySelectorAll(
      'a, button, .menu-card, .testimonial-card, .experience-block, .gallery-item'
    )
    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = '20px'
        cursor.style.height = '20px'
        cursor.style.background = 'rgba(201,169,110,0.6)'
        ring.style.width = '56px'
        ring.style.height = '56px'
      })
      el.addEventListener('mouseleave', () => {
        cursor.style.width = '12px'
        cursor.style.height = '12px'
        cursor.style.background = '#c9a96e'
        ring.style.width = '36px'
        ring.style.height = '36px'
      })
    })

    // Nav scroll
    const nav = document.getElementById('main-nav')
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 60)
      document.querySelectorAll('.bean').forEach((bean, i) => {
        bean.style.transform = `translateY(${window.scrollY * (0.04 + i * 0.01)}px)`
      })
    }
    window.addEventListener('scroll', onScroll)

    // Reveal on scroll
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    reveals.forEach((el) => observer.observe(el))

    // Smooth anchor links
    const handleAnchor = (e) => {
      const href = e.currentTarget.getAttribute('href')
      if (href && href.startsWith('#')) {
        const target = document.querySelector(href)
        if (target) {
          e.preventDefault()
          target.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
    document.querySelectorAll('a[href^="#"]').forEach((a) =>
      a.addEventListener('click', handleAnchor)
    )

    return () => {
      document.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursor-ring" id="cursor-ring"></div>
      <Nav />
      <Hero />
      <Story />
      <Menu />
      <Space />
      <Experience />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}