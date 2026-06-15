import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import LoadingScreen from "./components/LoadingScreen"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import SelectedWorks from "./components/SelectedWorks"
import Journal from "./components/Journal"
import Explorations from "./components/Explorations"
import Stats from "./components/Stats"
import Footer from "./components/Footer"
import ScrollProgress from "./components/ScrollProgress"
import CustomCursor from "./components/CustomCursor"
import "./index.css"

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <CustomCursor />
      <ScrollProgress />

      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <SelectedWorks />
            <Journal />
            <Explorations />
            <Stats />
            <Footer />
          </main>
        </>
      )}
    </>
  )
}
