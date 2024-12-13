import { motion } from 'framer-motion'
import { FaXTwitter, FaLinkedin, FaGithub, FaDiscord, FaTelegram } from 'react-icons/fa6'

const socialLinks = [
  {
    name: 'Twitter',
    href: 'https://x.com/X3Momentum',
    icon: FaXTwitter,
  },
  {
    name: 'Telegram',
    href: 'https://t.me/cdermott',
    icon: FaTelegram,
  },
  // {
  //   name: 'LinkedIn',
  //   href: '#',
  //   icon: FaLinkedin,
  // },
  // {
  //   name: 'GitHub',
  //   href: '#',
  //   icon: FaGithub,
  // },
  // {
  //   name: 'Discord',
  //   href: '#',
  //   icon: FaDiscord,
  // },
]

export const Contact = () => {
  return (
    <section id="contact" className="relative py-32 bg-[rgb(var(--color-background))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-4xl mx-auto"> 
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-300">
                Have questions about sponsorship? We'd love to hear from you.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                  placeholder="Company Inc."
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                  placeholder="Tell us about your interests..."
                />
              </div>
              <button className="w-full relative overflow-hidden group bg-gradient-to-br from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 px-8 py-3 rounded-lg transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative text-white font-medium">Send Message</span>
              </button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:pl-12 lg:border-l lg:border-white/10"
            >
              <div className="prose prose-invert">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Connect With Us
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Join us in shaping the future of blockchain technology. Whether you're interested in sponsorship opportunities or have questions about the event series, we're here to help.
                  </p>
                  <div>
                    <strong className="text-white">Email:</strong>
                    <br />
                    <a href="mailto:team@x3momentum.com" className="text-purple-400 hover:text-purple-300">
                      team@x3momentum.com
                    </a>
                  </div>
                  <div>
                    <strong className="text-white">Location:</strong>
                    <br />
                    Waterloo, ON
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <div className="flex space-x-6">
                    {socialLinks.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-gray-400 hover:text-gray-300 transition-colors duration-300"
                      >
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}