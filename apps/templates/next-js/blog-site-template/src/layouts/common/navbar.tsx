"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import SearchBar from "./search-bar"

// This type defines the structure for our navigation links
type NavItem = {
  title: string
  href: string
  count?: number
}

// Navigation data - you can easily add/remove items here
const navigationItems: NavItem[] = [
  { title: "Articles", href: "/", count: 460 },
  { title: "Radio", href: "/radio", count: 8 },
  { title: "Podcast", href: "/podcast", count: 46 },
  { title: "Be a writer", href: "/writer" },
  { title: "Talk to us", href: "/contact" },
]

// Additional mobile-only navigation items
const mobileOnlyNavItems: NavItem[] = [
  { title: "Categories", href: "/categories" },
  { title: "Best of the week", href: "/best-of-week" },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  return (
    <nav className="flex justify-between items-center py-6 px-4 md:px-8 relative z-50">
      <div className="flex items-center">
        <Link href="/">
          <motion.div className="text-2xl font-bold" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Blog Spot.
          </motion.div>
        </Link>
      </div>

      <div className="flex items-center space-x-3">
        <SearchBar inNavbar={true} />

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="outline" size="sm" className="rounded-full" onClick={() => router.push('/auth/sign-in')}>
            Sign In
          </Button>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button size="sm" className="rounded-full" onClick={() => router.push('/auth/sign-up')}>
            Sign Up
          </Button>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="outline" className="rounded-full px-5" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="h-4 w-4 mr-1" /> : <Menu className="h-4 w-4 mr-1" />}
            Menu
          </Button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-40 pt-24 px-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close button inside menu */}
            <motion.button
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </motion.button>

            <div className="flex flex-col space-y-6 text-xl">
              {/* Map through all navigation items for mobile */}
              {[...navigationItems, ...mobileOnlyNavItems].map((item) => (
                <MobileNavLink key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.title}
                  {item.count && <span className="text-xs text-gray-500 ml-2">({item.count})</span>}
                </MobileNavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

interface NavLinkProps {
  children: React.ReactNode
  href: string
  active?: boolean
}

const NavLink: React.FC<NavLinkProps> = ({ children, href, active }) => {
  return (
    <Link href={href} className="text-sm font-medium relative">
      {children}
      {active && (
        <motion.div
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black"
          layoutId="navbar-underline"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </Link>
  )
}

interface MobileNavLinkProps {
  children: React.ReactNode
  href: string
  onClick: () => void
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ children, href, onClick }) => {
  return (
    <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.2 }}>
      <Link href={href} className="block py-2 font-medium" onClick={onClick}>
        {children}
      </Link>
    </motion.div>
  )
}

export default Navbar

