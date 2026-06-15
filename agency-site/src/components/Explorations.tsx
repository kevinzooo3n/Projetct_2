import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion, AnimatePresence } from "framer-motion"

gsap.registerPlugin(ScrollTrigger)

const ITEMS = [
  { img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80", rotate: -3 },
  { img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80", rotate: 2 },
  { img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", rotate: -1 },
  { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", rotate: 3 },
  { img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80", rotate: -2 },
  { img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80", rotate: 1 },
]

export default function Explorations() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const col1Ref = useRef<HTMLDivElement>(null)
  const col2Ref = useRef<HTMLDivElement>(null)
  const [lightbox, setLightbox] = useState<string | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin center content
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: contentRef.current,
        pinSpacing: false,
      })

      // Parallax columns
      gsap.to(col1Ref.current, {
        y: -200,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

      gsap.to(col2Ref.current, {
        y: 200,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const col1 = ITEMS.slice(0, 3)
  const col2 = ITEMS.slice(3, 6)

  return (
    <>
      <section ref={sectionRef} className="relative min-h-[300vh] bg-bg overflow-hidden">
        {/* Center pinned content */}
        <div
          ref={contentRef}
          className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-6 pointer-events-none"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Explorations</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-body font-light text-text-primary mb-4">
            Visual{" "}
            <em className="font-display" style={{ fontStyle: "italic" }}>
              playground
            </em>
          </h2>
          <p className="text-muted text-sm max-w-xs mb-6">
            Experimental work, visual research, and creative explorations.
          </p>
          <div className="pointer-events-auto relative group rounded-full cursor-pointer">
            <span
              className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)" }}
            />
            <button className="relative border border-stroke bg-bg text-text-primary text-sm px-6 py-2.5 rounded-full cursor-pointer font-body">
              Dribbble ↗
            </button>
          </div>
        </div>

        {/* Parallax columns */}
        <div className="absolute inset-0 z-20 flex items-start justify-center pointer-events-none">
          <div className="w-full max-w-[1400px] px-6 grid grid-cols-2 gap-12 md:gap-40 pt-24">
            <div ref={col1Ref} className="flex flex-col gap-8 pointer-events-auto">
              {col1.map((item, i) => (
                <div
                  key={i}
                  className="aspect-square max-w-[320px] rounded-2xl overflow-hidden cursor-pointer"
                  style={{ transform: `rotate(${item.rotate}deg)` }}
                  onClick={() => setLightbox(item.img)}
                >
                  <img
                    src={item.img}
                    alt={`Exploration ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div ref={col2Ref} className="flex flex-col gap-8 mt-40 pointer-events-auto">
              {col2.map((item, i) => (
                <div
                  key={i}
                  className="aspect-square max-w-[320px] ml-auto rounded-2xl overflow-hidden cursor-pointer"
                  style={{ transform: `rotate(${item.rotate}deg)` }}
                  onClick={() => setLightbox(item.img)}
                >
                  <img
                    src={item.img}
                    alt={`Exploration ${i + 4}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              src={lightbox}
              alt="Lightbox"
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
