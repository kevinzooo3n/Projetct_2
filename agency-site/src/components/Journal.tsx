import { motion } from "framer-motion"

const ENTRIES = [
  {
    title: "The art of restraint in digital design",
    readTime: "4 min read",
    date: "Jun 2026",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    title: "Motion as a design language",
    readTime: "6 min read",
    date: "May 2026",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=80",
  },
  {
    title: "Building systems that breathe",
    readTime: "8 min read",
    date: "Apr 2026",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&q=80",
  },
  {
    title: "The invisible interface",
    readTime: "5 min read",
    date: "Mar 2026",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=200&q=80",
  },
]

export default function Journal() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          className="flex items-end justify-between mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Journal</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-body font-light text-text-primary">
              Recent{" "}
              <em className="font-display" style={{ fontStyle: "italic" }}>
                thoughts
              </em>
            </h2>
            <p className="text-muted text-sm mt-3">
              Reflections on design, craft, and the creative process.
            </p>
          </div>

          <div className="hidden md:block relative group rounded-full cursor-pointer flex-shrink-0">
            <span
              className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)" }}
            />
            <button className="relative border border-stroke bg-bg text-text-primary text-sm px-6 py-2.5 rounded-full cursor-pointer font-body">
              View all →
            </button>
          </div>
        </motion.div>

        {/* Entries */}
        <div className="flex flex-col gap-3">
          {ENTRIES.map((entry, i) => (
            <motion.div
              key={entry.title}
              className="flex items-center gap-6 p-4 bg-surface/30 hover:bg-surface border border-stroke rounded-[40px] sm:rounded-full cursor-pointer transition-colors duration-200 group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <img
                src={entry.img}
                alt={entry.title}
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                loading="lazy"
              />
              <p className="flex-1 text-sm text-text-primary font-body group-hover:text-text-primary/80 transition-colors duration-200">
                {entry.title}
              </p>
              <div className="hidden sm:flex items-center gap-4 flex-shrink-0">
                <span className="text-xs text-muted">{entry.readTime}</span>
                <span className="text-xs text-muted">{entry.date}</span>
              </div>
              <span className="text-muted group-hover:text-text-primary transition-colors duration-200 flex-shrink-0">
                →
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
