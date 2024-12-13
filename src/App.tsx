import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { About } from './components/sections/About'
import { Timeline } from './components/sections/Timeline'
import { Sponsors } from './components/sections/Sponsors'
import { Speakers } from './components/sections/Speakers'
import { FAQ } from './components/sections/FAQ'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div>
        <Hero />
      </div>
      <div className="pt-5 bg-[rgb(var(--color-background))]">
        <About />
      </div>
      <div className="pt-5 bg-[rgb(var(--color-background))]">
        <Timeline />
      </div>
      <div className="pt-5 bg-[rgb(var(--color-background))]">
        <Sponsors />
      </div>
      <div className="pt-5 bg-[rgb(var(--color-background))]">
        <Speakers />
      </div>
      <div className="pt-5 bg-[rgb(var(--color-background))]">
        <FAQ />
      </div>
      <div className="pt-5 pb-20 bg-[rgb(var(--color-background))]">
        <Contact />
      </div>
    </div>
  )
}

export default App
