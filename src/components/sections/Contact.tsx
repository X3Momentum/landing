import { motion } from 'framer-motion'
import { FaXTwitter, FaTelegram } from 'react-icons/fa6'
import { useState } from 'react'
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi'

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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const formElement = e.currentTarget
      const formData = new FormData(formElement)
      
      const response = await fetch('https://formsubmit.co/team@x3momentum.com', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) throw new Error('Failed to send message')
      
      setSubmitStatus('success')
      formElement.reset()
    } catch (error) {
      console.error('Failed to send message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                action="https://formsubmit.co/amir@konfer.ca"
                method="POST"
              >
                {/* Honeypot field to prevent spam */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                {/* Disable captcha */}
                <input type="hidden" name="_captcha" value="false" />
                {/* Success page */}
                <input type="hidden" name="_next" value={window.location.href} />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
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
                    required
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
                    required
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
                    required
                    className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                    placeholder="Your message here..."
                  />
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative overflow-hidden group bg-gradient-to-br from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 px-8 py-3 rounded-lg transition-all duration-300 disabled:opacity-50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative text-white font-medium">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 rounded-lg bg-purple-500/10 border border-purple-500/20"
                  >
                    <FiCheckCircle className="text-purple-400 text-xl flex-shrink-0" />
                    <div>
                      <p className="text-purple-400 font-medium">Message sent successfully!</p>
                      <p className="text-purple-400/80 text-sm">We'll get back to you soon.</p>
                    </div>
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 rounded-lg bg-purple-900/20 border border-purple-800/30"
                  >
                    <FiAlertCircle className="text-purple-300 text-xl flex-shrink-0" />
                    <div>
                      <p className="text-purple-300 font-medium">Failed to send message</p>
                      <p className="text-purple-400/80 text-sm">Please try again or contact us directly.</p>
                    </div>
                  </motion.div>
                )}
              </form>
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