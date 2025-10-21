import { NavLink, Outlet, Link } from 'react-router-dom'
import { Menu, User } from 'lucide-react'
import Logo from './Logo.jsx'
import { useProfiles } from '../context/ProfilesContext'

export default function AppLayout() {
  const { active } = useProfiles()
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 backdrop-blur bg-white/80 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-gray-900 hover:text-blue-600 transition-colors">
            <Logo className="w-6 h-6 text-blue-600" />
            <span>PantryMate</span>
          </Link>
          <nav className="hidden sm:flex items-center gap-1 text-sm">
            <NavLink className={({isActive}) => `px-3 py-2 rounded-lg font-medium transition-colors ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`} to="/pantry">Pantry</NavLink>
            <NavLink className={({isActive}) => `px-3 py-2 rounded-lg font-medium transition-colors ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`} to="/recipes">Recipes</NavLink>
            <NavLink className={({isActive}) => `px-3 py-2 rounded-lg font-medium transition-colors ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`} to="/list">Shopping</NavLink>
            <NavLink className={({isActive}) => `px-3 py-2 rounded-lg font-medium transition-colors ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`} to="/profiles">Profiles</NavLink>
            <Link to="/profiles" className="flex items-center gap-2 ml-2 px-3 py-2 rounded-lg bg-gray-100 text-gray-700 border border-gray-200 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-700 transition-all">
              <User className="w-4 h-4" />
              <span className="max-w-[120px] truncate font-medium">{active?.name}</span>
            </Link>
          </nav>
          <button className="sm:hidden p-2 rounded-md border border-gray-200 hover:bg-gray-100" aria-label="Menu">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>
      <main className="min-h-[calc(100vh-200px)]">
        <Outlet />
      </main>
    </div>
  )
}
