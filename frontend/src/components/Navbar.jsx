import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="text-white p-4 ">
      <div className="bg-emerald-700 shadow-md container mx-auto flex justify-center items-center w-70 rounded-[10px] h-12">
        <Link to="/" className="text-3xl text-center font-light"><i>Mini TaskBoard</i></Link>
      </div>
    </nav>
  )
}
