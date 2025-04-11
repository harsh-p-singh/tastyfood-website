export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">TastyFood</h1>
        <ul className="flex gap-4 text-sm font-medium">
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}
