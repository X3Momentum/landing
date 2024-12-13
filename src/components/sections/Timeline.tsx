import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const locations = [
  { name: "UT Austin", participants: "300+", date: "Feb 2025", color: "from-[#FF1CF7]" },
  { name: "Columbia", participants: "400+", date: "March 2025", color: "from-[#7F27FF]" },
  { name: "TBD", participants: "500+", date: "March/April 2025", color: "from-[#00c3ff]" },
  { name: "International", participants: "300+", date: "March 2025", color: "from-purple-500" },
  { name: "Finals", participants: "1000+", date: "May 2025", color: "from-blue-500" },
]

const TimelineItem = ({ location, index, isVisible }: { location: any, index: number, isVisible: boolean }) => {
  const animationDelay = 0.1 + (index * 0.05)
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.2, delay: animationDelay }}
      className="relative group"
    >
      {/* Connection Line */}
      <motion.div 
        className="absolute left-[calc(50%-1px)] top-0 w-[2px] h-12 bg-gradient-to-b from-purple-500/50 to-transparent"
        initial={{ scaleY: 0 }}
        animate={isVisible ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.2, delay: animationDelay }}
      />
      
      {/* Dot */}
      <motion.div 
        className="absolute left-[calc(47.5%-2px)] top-10 -translate-y-1/2 z-10"
        initial={{ scale: 0 }}
        animate={isVisible ? { scale: 1 } : { scale: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 400,
          damping: 20,
          delay: animationDelay 
        }}
      >
        <div className="w-4 h-4 rounded-full bg-[rgb(var(--color-background))] p-1 ring-2 ring-purple-500">
          <div className="w-full h-full rounded-full bg-purple-500" />
        </div>
      </motion.div>

      {/* Content Card */}
      <motion.div 
        className="pt-20 px-2 text-center group-hover:-translate-y-1 transition-transform duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.2, delay: animationDelay }}
      >
        <div className="relative">
          <h3 className="text-xl font-bold mb-2 text-white/90">{location.name}</h3>
          <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 mb-2">
            <span className="text-purple-400 text-sm font-medium">{location.participants}</span>
          </div>
          <div className="text-gray-400 text-sm">{location.date}</div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export const Timeline = () => {
  const timelineRef = useRef(null)
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-100px" })
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isTimelineInView) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          return prev + 2
        })
      }, 10)
      return () => clearInterval(interval)
    }
  }, [isTimelineInView])

  return (
    <section id="timeline" className="relative py-32 bg-[rgb(var(--color-background))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">The Journey</h2>
          <p className="text-xl text-gray-300">Five months. Five cities. Infinite possibilities.</p>
        </div>
        
        {/* Timeline Track */}
        <div className="relative" ref={timelineRef}>
          {/* Background Line */}
          <div className="absolute top-12 left-0 right-0 h-[2px] bg-white/5" />
          
          {/* Animated Progress Line */}
          <div className="absolute top-12 left-0 right-0 h-[2px] overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-[#FF1CF7] via-[#7F27FF] to-[#00c3ff]"
              style={{ 
                width: `${progress}%`,
                transition: 'width 0.1s linear',
                maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
              }}
            />
          </div>
          
          {/* Timeline Items */}
          <div className="relative grid grid-cols-5 gap-4">
            {locations.map((location, index) => (
              <TimelineItem 
                key={location.name}
                location={location}
                index={index}
                isVisible={progress >= ((index + 0.5) * (100 / locations.length))}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 