import { motion } from 'framer-motion'

const speakers = [
  {
    name: "Speaker 1",
    title: "Role 1",
    company: "Company 1",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
  },
  {
    name: "Speaker 2",
    title: "Role 2",
    company: "Company 2",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
  },
  {
    name: "Speaker 3",
    title: "Role 3",
    company: "Company 3",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
  },
  {
    name: "Speaker 4",
    title: "Role 4",
    company: "Company 4",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
  },
  {
    name: "Speaker 5",
    title: "Role 5",
    company: "Company 5",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
  },
  {
    name: "Speaker 6",
    title: "Role 6",
    company: "Company 6",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
  }
]

const getRandomGradient = (index: number) => {
  const gradients = [
    'from-purple-500/10 via-blue-500/10 to-cyan-500/10',
    'from-blue-500/10 via-cyan-500/10 to-teal-500/10',
    'from-teal-500/10 via-green-500/10 to-emerald-500/10',
    'from-purple-500/10 via-pink-500/10 to-rose-500/10',
    'from-rose-500/10 via-orange-500/10 to-amber-500/10',
    'from-amber-500/10 via-yellow-500/10 to-lime-500/10',
  ]
  return gradients[index % gradients.length]
}

export const Speakers = () => {
  return (
    <section id="speakers" className="relative py-32 bg-[rgb(var(--color-background))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Featured Speakers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn from industry experts and thought leaders shaping the future of Web3
            </p>
          </motion.div>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1
              }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${getRandomGradient(index)} rounded-xl opacity-40`} />
              
              <div className="relative bg-[rgb(var(--color-background))] border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm">
                {/* Speaker Image Placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{speaker.name}</h3>
                    <p className="text-gray-300 text-sm">{speaker.title}</p>
                    <p className="text-gray-400 text-sm">{speaker.company}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-300">{speaker.bio}</p>
                </div>

                {/* Subtle Purple Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <button className="relative overflow-hidden group bg-gradient-to-br from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 px-8 py-3 rounded-lg transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative text-white font-medium">View All Speakers</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
} 