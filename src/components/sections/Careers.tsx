import { motion } from 'framer-motion';

interface JobPosition {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

const jobPositions: JobPosition[] = [
  {
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Join our core team to build cutting-edge AI solutions that transform industries."
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Shape the future of our product experience through innovative design solutions."
  },
  {
    title: "AI Research Scientist",
    department: "Research",
    location: "Remote",
    type: "Full-time",
    description: "Push the boundaries of AI technology and contribute to groundbreaking research."
  }
];

const JobCard = ({ position }: { position: JobPosition }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all cursor-pointer border border-white/10"
  >
    <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80">{position.department}</span>
      <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80">{position.location}</span>
      <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80">{position.type}</span>
    </div>
    <p className="text-white/70">{position.description}</p>
    <button className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-medium hover:opacity-90 transition-opacity">
      Apply Now
    </button>
  </motion.div>
);

export default function Careers() {
  return (
    <section id="careers" className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Join Our Team</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            We're looking for passionate individuals to help us build the future of AI technology.
            Join us in our mission to transform the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobPositions.map((position, index) => (
            <JobCard key={index} position={position} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Don't see the right role?</h3>
          <p className="text-white/70 mb-6">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <button className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-colors">
            Send General Application
          </button>
        </motion.div>
      </div>
    </section>
  );
} 