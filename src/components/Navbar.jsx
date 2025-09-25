import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-black text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#f1b621]">TPF Photography</h2>
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="hover:text-[#f1b621] transition">Home</Link>
          <Link to="/gallery" className="hover:text-[#f1b621] transition">Gallery</Link>
          <Link to="/about" className="hover:text-[#f1b621] transition">About</Link>
          <Link to="/contact" className="hover:text-[#f1b621] transition">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
