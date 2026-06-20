import React, { Suspense, lazy } from 'react'
import SEO from './components/SEO'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

// Lazy-load below-the-fold sections for faster initial paint (LCP/FCP improvement)
const About = lazy(() => import('./components/About'))
const Timeline = lazy(() => import('./components/Timeline'))
const Services = lazy(() => import('./components/Services'))
const Certificates = lazy(() => import('./components/Certificates'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <>
      {/* Inject all JSON-LD structured data into <head> */}
      <SEO />
      <Preloader />
      <Navbar />
      <Hero />
      {/* Suspense wraps lazy-loaded sections — null fallback keeps layout stable */}
      <Suspense fallback={null}>
        <About />
        <Timeline />
        <Services />
        <Certificates />
        <Contact />
        <Footer />
      </Suspense>
    </>
  )
}

export default App
