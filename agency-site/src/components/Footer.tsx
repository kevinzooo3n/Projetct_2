import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Hls from "hls.js"

const HLS_SRC = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8"
const MARQUEE_TEXT = "BUILDING THE FUTURE • "
const SOCIAL_LINKS = ["Twitter", "LinkedIn", "Dribbble", "GitHub"]

export default function Footer() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)

  // HLS video (flipped)
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(HLS_SRC)
      hls.attachMedia(video)
      return () => hls.destroy()
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HLS_SRC
    }
  }, [])

  // GSAP marquee
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1,
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <footer className="bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden relative">
      {/* Background video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute left-1/2 top-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1]"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10">
        {/* Marquee */}
        <div className="overflow-hidden mb-16">
          <div ref={marqueeRef} className="flex whitespace-nowrap will-change-transform">
            {Array(20).fill(MARQUEE_TEXT).map((text, i) => (
              <span
                key={i}
                className="text-4xl md:text-6xl font-display italic text-text-primary/20 pr-8 flex-shrink-0"
              >
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <p className="text-xs text-muted uppercase tracking-[0.3em] mb-4">Let's work together</p>
            <div className="relative inline-block group rounded-full cursor-pointer">
              <span
                className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)" }}
              />
              <a
                href="mailto:hello@michaelsmith.com"
                className="relative block border border-stroke bg-bg text-text-primary text-sm md:text-base px-8 py-4 rounded-full hover:border-transparent transition-colors duration-200 font-body"
              >
                hello@michaelsmith.com ↗
              </a>
            </div>
          </div>

          {/* Footer bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-stroke">
            <div className="flex items-center gap-6">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs text-muted hover:text-text-primary transition-colors duration-200 cursor-pointer"
                  aria-label={link}
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs text-muted">Available for projects</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
