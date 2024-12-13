import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const tiers = [
  {
    name: "Visionary Partner",
    sponsors: [
      { name: "Available" },
      { name: "Available" },
    ]
  },
  {
    name: "Momentum Partners",
    sponsors: [
      { name: "Texas Blockchain", type: "Title Sponsor" },
      { name: "Columbia Blockchain", type: "Title Sponsor" },
      { name: "South Korea Event", type: "Title Sponsor" },
      { name: "Available", type: "Ambassador Partner" }
    ]
  },
  {
    name: "Genesis",
    sponsors: [
      { 
        name: "Fairblock Network",
        image: "/sponsors/fairblock.png",
        url: "https://www.fairblock.network/"
      },
      { name: "Available" },
      { name: "Available" },
      { name: "Available" },
    ]
  },
  {
    name: "Node",
    sponsors: [
      { name: "Available" },
      { name: "Available" },
      { name: "Available" },
      { name: "Available" },
      { name: "Available" },
      { name: "Available" },
    ]
  },
  {
    name: "Hash",
    sponsors: [
      { name: "Available" },
      { name: "Available" },
      { name: "Available" },
      { name: "Available" },
      { name: "Available" },
      { name: "Available" },
    ]
  }
]

const getRandomGradient = (index: number) => {
  const gradients = [
    'from-purple-500/20 to-blue-500/20',
    'from-blue-500/20 to-cyan-500/20',
    'from-cyan-500/20 to-teal-500/20',
    'from-teal-500/20 to-green-500/20',
    'from-purple-500/20 to-pink-500/20',
    'from-pink-500/20 to-rose-500/20',
  ]
  return gradients[index % gradients.length]
}

export const Sponsors = () => {
  return (
    <section id="sponsors" className="relative py-32 bg-[rgb(var(--color-background))]">
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
              Our Partners
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Backed by industry leaders who share our vision of advancing blockchain technology 
              and fostering innovation in the Web3 space.
            </p>
          </motion.div>
        </div>

        {/* Sponsor Tiers */}
        <div className="space-y-24">
          {tiers.map((tier, tierIndex) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white text-center mb-12">
                {tier.name}
              </h3>

              <div className={`grid ${
                tier.name === "Visionary Partner" ? 'md:grid-cols-2' : 
                tier.name === "Genesis" ? 'grid-cols-2 lg:grid-cols-4' : 
                tier.name === "Momentum Partners" ? 'grid-cols-1 md:grid-cols-4' :
                'grid-cols-2 md:grid-cols-3 lg:grid-cols-6'
              } gap-6 items-center justify-items-center`}>
                {tier.sponsors.map((sponsor, index) => (
                  <motion.div
                    key={sponsor.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4,
                      delay: index * 0.1 + tierIndex * 0.2
                    }}
                    whileHover={{ scale: 1.05 }}
                    className={`relative group w-full ${
                      tier.name === "Visionary Partner" ? 'aspect-[2/1]' :
                      tier.name === "Momentum Partners" || tier.name === "Genesis" ? 'aspect-[2/1]' :
                      'aspect-[3/2]'
                    } rounded-xl overflow-hidden cursor-pointer`}
                    onClick={() => sponsor.url && window.open(sponsor.url, '_blank', 'noopener noreferrer')}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${getRandomGradient(index)} opacity-50 group-hover:opacity-70 transition-all duration-300`} />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    <div className="absolute inset-[1px] rounded-xl bg-[rgb(var(--color-background))] bg-opacity-90 backdrop-blur-sm border border-white/10" />
                    
                    <div className="relative h-full flex flex-col items-center justify-center p-4">
                      {sponsor.image ? (
                        <div className="px-8 py-6 w-full flex items-center justify-center">
                          <img 
                            src={sponsor.image} 
                            alt={sponsor.name}
                            className="w-full h-auto object-contain max-h-16"
                          />
                        </div>
                      ) : (
                        /* Placeholder Design */
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-3">
                          <div className="w-6 h-6 rounded bg-white/20" />
                        </div>
                      )}
                      <div className="text-center -mt-2">
                        <div className="text-white/80 font-medium group-hover:text-white transition-colors duration-300">
                          {sponsor.name}
                        </div>
                        {tier.name === "Momentum Partners" && (
                          <div className="text-sm text-white/50 mt-1">
                            {sponsor.type}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
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
          className="mt-32 text-center space-y-8"
        >
          <div>
            <p className="text-gray-300 mb-6">
              Interested in becoming a sponsor?
            </p>
            <a 
              href="/sponsorship_package.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block relative overflow-hidden group bg-gradient-to-br from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 px-8 py-3 rounded-lg transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative text-white font-medium">View Sponsorship Packages</span>
            </a>
          </div>

          <div className="flex justify-center gap-4">
            <Link 
              to="/incubation"
              className="inline-block relative overflow-hidden group bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 px-8 py-3 rounded-lg transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative text-white font-medium">Incubation Portal</span>
            </Link>

            <Link 
              to="/recruitment"
              className="inline-block relative overflow-hidden group bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 px-8 py-3 rounded-lg transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative text-white font-medium">Recruitment Portal</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}