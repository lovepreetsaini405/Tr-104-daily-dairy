import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FloatingIconsHero } from '@/components/ui/floating-icons-hero-section'
import { WeekCard } from '@/components/WeekCard'
import { WeekModal } from '@/components/WeekModal'
import { PDFModal } from '@/components/PDFModal'
import { heroIcons } from '@/data/hero-icons'
import { weeks } from '@/data/weeks'
import type { WeekData } from '@/data/weeks'
import { Moon, Sun } from 'lucide-react'

const easeOutQuint = [0.22, 1, 0.36, 1] as const

function App() {
  const [selectedWeek, setSelectedWeek] = useState<WeekData | null>(null)
  const [pdfModalOpen, setPdfModalOpen] = useState(false)
  const [activePdf, setActivePdf] = useState<string | null>(null)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  const handleSelectWeek = (week: WeekData) => {
    setSelectedWeek(week)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleOpenPDF = (pdfName: string) => {
    setActivePdf(pdfName)
    setPdfModalOpen(true)
  }

  return (
    <div className={`min-h-screen bg-background ${selectedWeek ? 'overflow-hidden' : ''}`}>
      <button
        onClick={() => setDark(!dark)}
        className="fixed top-4 right-4 z-40 w-10 h-10 flex items-center justify-center rounded-xl border border-border bg-background shadow-sm hover:bg-accent hover:shadow-md transition-all"
        aria-label="Toggle theme"
      >
        {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </button>

      <FloatingIconsHero
        title="TR-104 Training Report"
        subtitle="22 weeks of comprehensive training in Python, Machine Learning, Deep Learning, Power BI, and Dataiku at Sun Foundation, Ludhiana"
        ctaText="Explore the Journey"
        ctaHref="#weeks"
        icons={heroIcons}
      />

      <section id="weeks" className="py-20 md:py-28 px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: easeOutQuint }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
              Training Timeline
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Click any week to expand and explore the assignments, notes, and resources.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 items-start">
            {weeks.map((week, i) => (
              <motion.div
                key={week.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.3), ease: easeOutQuint }}
              >
                <WeekCard week={week} onSelectWeek={handleSelectWeek} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-4">
        <div className="mx-auto max-w-6xl text-center text-sm text-muted-foreground">
          <p>TR-104 Training Report &mdash; Guru Nanak Dev Engineering College, Ludhiana</p>
        </div>
      </footer>

      <WeekModal
        week={selectedWeek}
        onClose={() => setSelectedWeek(null)}
        onOpenPDF={handleOpenPDF}
      />

      <PDFModal
        isOpen={pdfModalOpen}
        pdfName={activePdf}
        onClose={() => {
          setPdfModalOpen(false)
          setActivePdf(null)
        }}
      />
    </div>
  )
}

export default App
