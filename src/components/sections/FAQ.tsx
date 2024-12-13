import { motion } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    question: "What is Momentum 2025?",
    answer: "Momentum 2025 is a premier blockchain innovation series connecting sponsors with top talent, industry leaders, and the Web3 community. It includes multiple hackathons and conferences across major tech hubs, culminating in a grand finals event."
  },
  {
    question: "Where and when are the events taking place?",
    answer: "The series spans multiple locations throughout 2025: UT Austin (February), Columbia University (March), TBD (March/April), International venues (March), with the Finals in May. Each event targets 300-500+ participants, with the Finals expecting 1000+ attendees."
  },
  {
    question: "What sponsorship tiers are available?",
    answer: "We offer four main sponsorship tiers: Visionary Partner ($150,000+), Genesis ($75,000+), Node ($30,000+), and Hash ($15,000+). Each tier includes different levels of branding, speaking rights, recruitment access, and marketing benefits. Regional title sponsorships are also available."
  },
  {
    question: "What is the expected reach and impact?",
    answer: "The series provides access to 700+ qualified blockchain developers, digital reach of 50,000+ through content and streams, direct hiring pipeline from top tech programs, brand presence across major tech hubs, and cross-border partnership opportunities."
  },
  {
    question: "Are there any early bird incentives?",
    answer: "Yes! Until January 1, 2025, sponsors can receive 5% off the base price, additional speaking time (+10 minutes) or workshop time (+15 minutes), and premium booth locations based on tier level."
  },
  {
    question: "What add-on packages are available?",
    answer: "We offer several premium add-on packages including the Momentum Brand Ambassador Program ($50,000), Elite Recruitment Package ($30,000), Premium Networking Package ($35,000), and standard packages like Executive Access ($20,000) and Community Builder ($15,000)."
  }
]

const AccordionItem = ({ question, answer, isOpen, onClick }: { 
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void 
}) => {
  return (
    <div className="border-b border-white/10">
      <button
        className="w-full py-6 text-left flex justify-between items-center focus:outline-none"
        onClick={onClick}
      >
        <span className="text-lg text-white font-medium">{question}</span>
        <span className={`ml-6 flex-shrink-0 text-purple-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-300 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  )
}

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative py-32 bg-[rgb(var(--color-background))]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to know about the event series
            </p>
          </motion.div>
        </div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-2"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
} 