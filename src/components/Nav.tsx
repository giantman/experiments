import { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import starIcon from '../assets/star.svg'

export default function Nav() {
  const [rotation, setRotation] = useState(0)
  const [isSpinning, setIsSpinning] = useState(false)
  const spinningRef = useRef(false)

  const handleStarMouseEnter = () => {
    if (spinningRef.current) return
    spinningRef.current = true
    setIsSpinning(true)
  }

  const handleStarAnimationEnd = () => {
    setRotation((r) => r + 360)
    setIsSpinning(false)
    spinningRef.current = false
  }

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm leading-snug transition-opacity hover:opacity-50 ${isActive ? 'text-[#E85430]' : 'text-[#1a1917]'}`

  return (
    <nav className="grid grid-cols-[auto_1fr_1fr_auto] gap-8 px-8 pt-6 pb-5 items-center fixed top-0 left-0 right-0 z-10">
      <Link
        to="/"
        className="inline-flex items-center text-sm text-[#1a1917] hover:opacity-50 transition-opacity leading-none"
      >
        <span
          className="inline-block shrink-0"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <img
            src={starIcon}
            alt=""
            width={12}
            height={12}
            onMouseEnter={handleStarMouseEnter}
            onAnimationEnd={handleStarAnimationEnd}
            className={`block ${isSpinning ? 'star-spin' : ''}`}
          />
        </span>
      </Link>

      <div className="flex gap-4">
        <NavLink to="/work" className={linkClass}>Work</NavLink>
        <NavLink to="/labs" className={linkClass}>Labs</NavLink>
      </div>

      <div className="text-sm text-[#1a1917]/50 leading-snug">
        Design and Engineering
      </div>

      <div className="flex gap-4">
        <NavLink to="/profile" className={linkClass}>Profile</NavLink>
        <a
          href="mailto:manukyanrobert@gmail.com"
          className="text-sm text-[#1a1917] hover:opacity-50 transition-opacity whitespace-nowrap"
        >
          Contact
        </a>
      </div>
    </nav>
  )
}
