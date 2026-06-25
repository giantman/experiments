import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3">
      <Link to="/" className="text-[11px] font-mono text-[#2c2420] hover:opacity-50 transition-opacity">
        gmco
      </Link>
      <div className="flex gap-12">
        <NavLink
          to="/work"
          className="text-[11px] font-mono text-[#2c2420] hover:opacity-50 transition-opacity"
        >
          Work
        </NavLink>
        <NavLink
          to="/experiments"
          className="text-[11px] font-mono text-[#2c2420] hover:opacity-50 transition-opacity"
        >
          Experiments
        </NavLink>
      </div>
      <a
        href="mailto:hello@gmco.studio"
        className="text-[11px] font-mono text-[#2c2420] hover:opacity-50 transition-opacity"
      >
        Email, IG↗
      </a>
    </nav>
  )
}
