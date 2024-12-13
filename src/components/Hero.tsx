import { motion } from 'framer-motion'
import { Background } from './Background'

export const Hero = () => {
  return (
    <div className="relative min-h-screen h-fit overflow-hidden">
      <Background />
      
      {/* Animated Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Top Left Corner */}
          <motion.div
            className="absolute w-[35vmax] sm:w-[45vmax] h-[35vmax] sm:h-[45vmax] rounded-full -top-[20%] -left-[20%]"
            style={{
              background: 'radial-gradient(circle, rgba(147, 51, 234, 0.075) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.25, 0.35, 0.25],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Bottom Right Corner */}
          <motion.div
            className="absolute w-[40vmax] h-[40vmax] rounded-full -bottom-[15%] -right-[15%]"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Top Right Corner */}
          <motion.div
            className="absolute w-[35vmax] h-[35vmax] rounded-full -top-[10%] -right-[10%]"
            style={{
              background: 'radial-gradient(circle, rgba(236, 72, 153, 0.05) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative min-h-screen py-16 sm:py-20 flex items-center justify-center px-4 sm:px-6 md:px-8">
        <motion.div 
          className="text-center max-w-4xl mx-auto space-y-3 sm:space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-3 sm:mb-6 relative">
            {/* Enhanced glow backgrounds */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 sm:w-48 h-32 sm:h-48 bg-purple-500/30 blur-[100px] rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 sm:w-48 h-32 sm:h-48 bg-blue-500/20 blur-[50px] rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
            
            {/* Logo */}
            <img 
              src="/logo.svg" 
              alt="Momentum Logo" 
              className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 mx-auto"
              style={{
                filter: "drop-shadow(0 0 20px rgba(147,51,234,0.45)) drop-shadow(0 0 40px rgba(147,51,234,0.27))"
              }}
            />
          </div>
          
          {/* Title */}
          <motion.h1 
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gradient text-glow relative inline-block">
              Momentum 2025
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-500/20 blur-3xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The Ultimate Blockchain Innovation Series
          </motion.p>

          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Primary Button */}
            <button 
              className="relative overflow-hidden group bg-gradient-to-br from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 px-6 py-2.5 sm:py-3 rounded-lg w-full sm:w-auto sm:min-w-[180px] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative text-white font-medium">Get Started</span>
            </button>

            {/* Secondary Button */}
            <button 
              className="relative px-6 py-2.5 sm:py-3 rounded-lg w-full sm:w-auto sm:min-w-[180px] border border-white/10 hover:border-purple-500/50 bg-white/5 hover:bg-purple-500/10 transition-all duration-300"
            >
              <span className="text-white/80 group-hover:text-white font-medium">Learn More</span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-[rgb(var(--color-background))] to-transparent" />
    </div>
  )
} 