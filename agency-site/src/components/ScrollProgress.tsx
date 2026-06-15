import { useEffect, useState } from "react"

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-stroke/30">
      <div
        className="h-full accent-gradient transition-none origin-left"
        style={{
          width: `${progress}%`,
          boxShadow: "0 0 6px rgba(137, 170, 204, 0.4)",
        }}
      />
    </div>
  )
}
