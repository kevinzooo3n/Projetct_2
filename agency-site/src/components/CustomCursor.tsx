import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const dot = dotRef.current
    if (!cursor || !dot) return

    let mouseX = 0
    let mouseY = 0
    let curX = 0
    let curY = 0

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      gsap.to(dot, { x: mouseX, y: mouseY, duration: 0 })
    }

    const tick = () => {
      curX += (mouseX - curX) * 0.12
      curY += (mouseY - curY) * 0.12
      gsap.set(cursor, { x: curX, y: curY })
      requestAnimationFrame(tick)
    }

    const onMouseEnterLink = () => gsap.to(cursor, { scale: 2.5, duration: 0.3 })
    const onMouseLeaveLink = () => gsap.to(cursor, { scale: 1, duration: 0.3 })

    window.addEventListener("mousemove", onMouseMove)
    const raf = requestAnimationFrame(tick)

    const links = document.querySelectorAll("a, button, [role='button'], .cursor-pointer")
    links.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterLink)
      el.addEventListener("mouseleave", onMouseLeaveLink)
    })

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] hidden md:block"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div className="w-8 h-8 rounded-full border border-text-primary/30 mix-blend-difference" />
      </div>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] hidden md:block"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div className="w-1 h-1 rounded-full bg-text-primary mix-blend-difference" />
      </div>
    </>
  )
}
