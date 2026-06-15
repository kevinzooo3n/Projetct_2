import { motion } from "framer-motion"

const PROJECTS = [
  {
    title: "Automotive Motion",
    category: "Film",
    span: "md:col-span-7",
    aspect: "aspect-[4/3]",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
  },
  {
    title: "Urban Architecture",
    category: "Photography",
    span: "md:col-span-5",
    aspect: "aspect-[4/3]",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
  },
  {
    title: "Human Perspective",
    category: "Documentary",
    span: "md:col-span-5",
    aspect: "aspect-[4/3]",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
  },
  {
    title: "Brand Identity",
    category: "Branding",
    span: "md:col-span-7",
    aspect: "aspect-[4/3]",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  },
]

export default function SelectedWorks() {
  return (
    <section className="bg-bg py-12 md:py-16">
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
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Selected Work</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-body font-light text-text-primary">
              Featured{" "}
              <em className="font-display italic not-italic" style={{ fontStyle: "italic" }}>
                projects
              </em>
            </h2>
            <p className="text-muted text-sm mt-3 max-w-sm">
              A selection of projects I've worked on, from concept to launch.
            </p>
          </div>

          <div className="hidden md:block relative group rounded-full cursor-pointer flex-shrink-0">
            <span
              className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)" }}
            />
            <button className="relative border border-stroke bg-bg text-text-primary text-sm px-6 py-2.5 rounded-full cursor-pointer transition-colors duration-200 hover:border-transparent font-body">
              View all work →
            </button>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              className={`${project.span} ${project.aspect} relative rounded-3xl overflow-hidden bg-surface border border-stroke group cursor-pointer`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-80px" }}
            >
              {/* Image */}
              <img
                src={project.img}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Halftone overlay */}
              <div
                className="absolute inset-0 opacity-20 mix-blend-multiply"
                style={{
                  backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
                  backgroundSize: "4px 4px",
                }}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-lg" />

              {/* Hover label */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="relative rounded-full px-5 py-2.5">
                  <span
                    className="absolute inset-[-2px] rounded-full"
                    style={{ background: "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)" }}
                  />
                  <span className="relative bg-white text-black text-sm rounded-full px-4 py-2 block font-body">
                    View —{" "}
                    <em className="font-display not-italic" style={{ fontStyle: "italic" }}>
                      {project.title}
                    </em>
                  </span>
                </div>
              </div>

              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span className="text-xs text-muted uppercase tracking-[0.2em] bg-bg/60 backdrop-blur-sm px-2 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
