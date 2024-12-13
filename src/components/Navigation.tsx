import { Fragment, useState, useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '#', section: 'home' },
  { name: 'Timeline', href: '#timeline', section: 'timeline' },
  { name: 'Sponsors', href: '#sponsors', section: 'sponsors' },
  { name: 'Speakers', href: '#speakers', section: 'speakers' },
  { name: 'FAQ', href: '#faq', section: 'faq' },
  { name: 'Contact', href: '#contact', section: 'contact' },
]

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth'

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Find the current section
      const sections = navigation.map(nav => nav.section)
      const sectionElements = sections.map(section => 
        section === 'home' 
          ? document.querySelector('main') 
          : document.querySelector(`#${section}`)
      )

      const currentSectionIndex = sectionElements.findIndex((element) => {
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom > 100
      })

      if (currentSectionIndex !== -1) {
        setActiveSection(sections[currentSectionIndex])
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  const isCurrentSection = (section: string) => activeSection === section

  return (
    <Popover as="nav" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[rgb(var(--color-background))]/80 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="w-40">
            {/* Empty div to maintain spacing */}
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300
                  ${isCurrentSection(item.section)
                    ? 'text-purple-400 bg-white/5' 
                    : 'text-white/80 hover:text-white hover:bg-white/[0.05]'
                  }`}
              >
                {item.name}
              </a>
            ))}
          </div>
          
          {/* Sign Up Button */}
          <div className="hidden md:block">
            <button className="relative overflow-hidden group bg-gradient-to-br from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 px-6 py-2.5 rounded-lg transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative text-white font-medium">Sign Up</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Popover.Button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="duration-150 ease-in"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1"
      >
        <Popover.Panel className="absolute inset-x-0 top-full bg-[rgb(var(--color-background))]/80 backdrop-blur-lg md:hidden">
          {({ close }) => (
            <div className="p-4 space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-2.5 text-base font-medium rounded-lg transition-all duration-300 ${
                    isCurrentSection(item.section)
                      ? 'text-purple-400 bg-white/5'
                      : 'text-white/80 hover:text-white hover:bg-white/[0.05]'
                  }`}
                  onClick={() => {
                    close()
                    setActiveSection(item.section)
                  }}
                >
                  {item.name}
                </a>
              ))}
              <button 
                className="w-full relative overflow-hidden group bg-gradient-to-br from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 px-4 py-2.5 rounded-lg transition-all duration-300"
                onClick={() => close()}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative text-white font-medium">Sign Up</span>
              </button>
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  )
} 