import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, FileText, Image as ImageIcon } from 'lucide-react'
import type { WeekData, WeekItem } from '@/data/weeks'

const itemVariants = {
  hidden: { opacity: 0, y: -6 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, damping: 22, stiffness: 260, delay: i * 0.03 },
  }),
}

interface WeekModalProps {
  week: WeekData | null
  onClose: () => void
  onOpenPDF: (pdfName: string) => void
}

export function WeekModal({ week, onClose, onOpenPDF }: WeekModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (week) {
      document.addEventListener('keydown', handleKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [week, onClose])

  const handleItemClick = (item: WeekItem) => {
    if (item.type === 'pdf' && item.pdf) {
      onOpenPDF(item.pdf)
    } else if (item.url) {
      const a = document.createElement('a')
      a.href = item.url
      a.target = '_blank'
      a.rel = 'noopener noreferrer'
      a.click()
    }
  }

  const itemCount = week?.items.length ?? 0

  return (
    <AnimatePresence>
      {week && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-black/50 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            key={week.id}
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{
              type: 'spring',
              damping: 26,
              stiffness: 280,
              mass: 0.8,
            }}
            className="relative w-full max-w-lg max-h-[85vh] bg-background border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label={`Week ${week.id}: ${week.title}`}
          >
            <div className="flex items-start justify-between gap-4 px-6 pt-6 pb-4 border-b border-border shrink-0">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10 text-primary font-bold text-sm shrink-0">
                    {week.id}
                  </span>
                  <h2 className="font-semibold text-lg truncate">{week.title}</h2>
                </div>
                <p className="text-sm text-muted-foreground ml-12">{week.topic}</p>
              </div>
              <button
                onClick={onClose}
                className="mt-0.5 w-8 h-8 flex items-center justify-center rounded-lg border border-border hover:bg-accent transition-colors shrink-0"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {itemCount === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-8">No materials listed for this week.</p>
              ) : (
                <div className="grid gap-1">
                  {week.items.map((item, i) => (
                    <motion.button
                      key={i}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      custom={i}
                      onClick={() => handleItemClick(item)}
                      className="flex items-center gap-3 w-full text-left p-2.5 rounded-lg hover:bg-accent transition-colors group/item"
                    >
                      <ItemIcon type={item.type} />
                      <span className="flex-1 text-sm truncate">{item.label}</span>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium shrink-0">
                        {item.type}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover/item:opacity-100 transition-opacity shrink-0" />
                    </motion.button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

function ItemIcon({ type }: { type: WeekItem['type'] }) {
  const icons = {
    pdf: FileText,
    link: ExternalLink,
    image: ImageIcon,
  }
  const colors = {
    pdf: 'text-blue-500',
    link: 'text-emerald-500',
    image: 'text-purple-500',
  }
  const Icon = icons[type]
  return <Icon className={`w-4 h-4 ${colors[type]} shrink-0`} />
}
