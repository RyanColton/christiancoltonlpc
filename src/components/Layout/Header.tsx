'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import BirdIcon from '../../svgs/bird'
import { Title } from '../../svgs/title'
import { routes } from '@/consts/routes'
import { useState } from 'react'

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-themeDarkBlue z-50 relative">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center min-h-[120px] sm:h-64 p-4">
          {/* Logo - smaller on mobile */}
          <div className="flex flex-row md:flex-col items-center gap-4">
            <BirdIcon className="h-18 sm:h-32" />
            <Title className="h-16 sm:h-20 min-w-[150px]" />
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-col gap-4 items-start">
            <div className="flex flex-row gap-x-2 md:gap-x-4">
              {routes.map((route) => {
                const isActive = pathname === route.route || (route.route === '/' && pathname === '/')
                return (
                  <Link
                    className={`text-white sm:text-md lg:text-xl relative hover:text-gray-200 transition-colors duration-200 
                      after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white 
                      ${isActive ? 'after:scale-x-100' : 'after:scale-x-0'} 
                      hover:after:scale-x-100 after:transition-transform after:duration-300`}
                    target={route.title === 'Client Portal' ? '_blank' : '_self'}
                    key={route.title}
                    href={route.route}
                  >
                    {route.title}
                  </Link>
                )
              })} 
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-full left-0 right-0 bg-themeDarkBlue`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {routes.map((route) => {
              const isActive = pathname === route.route
              return (
                <Link
                  key={route.title}
                  href={route.route}
                  target={route.title === 'Client Portal' ? '_blank' : '_self'}
                  className={`block px-3 py-2 text-white text-base ${isActive ? 'bg-themeDarkBlue/50' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {route.title}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    </header>
  )
} 