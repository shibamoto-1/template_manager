import { Link } from "react-router-dom"

export default function Header() {
  return(
    <header className="bg-gray-200 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link to="/">My App</Link>
      </h1>
      <nav className="space-x-4">
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
      </nav>
    </header>
  )
}