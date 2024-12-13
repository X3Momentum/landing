export const Features = () => {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[rgb(var(--color-background))]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group glass-panel p-8 transition-all duration-500 hover:bg-white/[0.05]">
              <div className="w-16 h-16 mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF1CF7] to-[#7F27FF] rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative glass-panel h-full rounded-xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#FF1CF7] to-[#7F27FF] rounded-lg" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Feature {i}</h3>
              <p className="text-gray-300">
                Discover the power of our platform with our innovative features
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 