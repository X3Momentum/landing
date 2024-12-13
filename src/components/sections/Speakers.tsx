import { motion } from 'framer-motion'

interface Speaker {
  name: string;
  title: string;
  company: string;
  bio: string;
  image?: string;
}

const speakers: Speaker[] = [
  {
    name: "Peyman Momeni",
    title: "Co-founder & CEO",
    company: "Fairblock",
    bio: "CEO and Co-Founder of Fairblock, specializing in applied cryptography, algorithmic game theory, and blockchain infrastructure.",
    image: "/speakers/peyman.jpg"
  },
  {
    name: "William Wang",
    title: "Hackathon Winner",
    company: "Bloomberg",
    bio: "62x hackathon winner ($130K+ in prizes) with experience at Bloomberg, Cohere, and Microsoft, specializing in AI and Web3.",
    image: "/speakers/william.jpg"
  },
  {
    name: "Konrad Weber",
    title: "Co-President",
    company: "Waterloo Blockchain",
    bio: "Leading Waterloo Blockchain to empower 500+ students through Web3 education, hackathons, and industry connections.",
    image: "/speakers/konrad.jpg"
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
                {/* Speaker Image or Gradient Background */}
                <div className="aspect-[4/3] relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-300">
                  {speaker.image ? (
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />
                  )}
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
      </div>
    </section>
  )
} 