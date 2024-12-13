import { motion } from 'framer-motion'

export const RecruitmentPortal = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[rgb(var(--color-background))]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center px-4"
      >
        {/* Logo */}
        <div className="w-48 h-48 mx-auto mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-xl" />
          <img src="/logo.svg" alt="X3 Momentum Logo" className="relative w-full h-full object-contain" />
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Coming Soon
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Our recruitment portal is under development. Stay tuned for exciting opportunities.
        </p>
      </motion.div>
    </section>
  )
} 