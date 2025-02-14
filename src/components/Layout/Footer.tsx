import Link from 'next/link'
import { routes } from '@/consts/routes'

export function Footer() {
  return (
    <footer className="bg-themeBrown">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-medium text-lg">Christian Colton, LLC</h3>
            <p className="mt-4 text-neutral-400 text-sm sm:text-base">
              Christian Colton LPC is a licensed professional counselor in Eugene, Oregon.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-medium text-lg">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {routes.map((route) => (
                <li key={route.title}>
                  <Link 
                    href={route.route}
                    className="text-neutral-400 hover:text-white text-sm sm:text-base"
                  >
                    {route.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="https://www.psychologytoday.com/us/therapists/christian-j-colton-eugene-or/897974"
                  className="text-neutral-400 hover:text-white text-sm sm:text-base"
                >
                  Psychology Today
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left col-span-1 sm:col-span-2 md:col-span-1">
            <h3 className="text-white font-medium text-lg">Contact</h3>
            <ul className="mt-4 space-y-2 text-neutral-400 text-sm sm:text-base">
              <li>Email: therapist@christiancoltonlpc.com</li>
              <li>Phone: (541) 230-7299</li>
              <li>Address: 132 E Broadway St<br />Eugene, OR 97401</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
} 