import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Outlets from './components/Outlets'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <Header />
      <Hero />
      <About />
      <Outlets />
      <Menu />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
