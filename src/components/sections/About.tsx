import { motion } from 'framer-motion'
import CountUp from 'react-countup'

const stats = [
  { label: "Direct Reach", value: 1000, unit: "Developers", prefix: "", suffix: "+" },
  { label: "Digital Impact", value: 50000, unit: "Global Reach", prefix: "", suffix: "+" },
  { label: "Tech Talent", value: 700, unit: "Blockchain Devs", prefix: "", suffix: "+" },
  { label: "Innovation Hubs", value: 5, unit: "Major Cities", prefix: "", suffix: "" },
]

export const About = () => {
  return (
    <section id="about" className="relative py-32 bg-[rgb(var(--color-background))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="text-4xl sm:text-5xl text-purple-300 font-light mb-8 uppercase tracking-widest">
            Global Impact Series
          </div>
          <div className="space-y-8">
            <p className="text-2xl sm:text-3xl text-gray-300 leading-relaxed">
              <span className="text-white font-medium">Five premier innovation hubs.</span>{' '}
              <span className="text-purple-400">One groundbreaking mission.</span>{' '}
              Join the world's most ambitious blockchain event series, where top talent meets 
              industry pioneers.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Through hackathons and genre-defining conferences, we're building the future 
              of Web3 — one breakthrough at a time.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent mb-2">
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={0.75}
                  separator=","
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>
              <div className="text-sm text-purple-300 font-medium uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-400">
                {stat.unit}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 