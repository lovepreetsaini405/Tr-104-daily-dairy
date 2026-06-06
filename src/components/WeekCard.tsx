import { motion, useReducedMotion } from 'framer-motion'
import {
  ChevronRight,
  FileType,
  BookOpen,
  Link as LinkIcon,
} from 'lucide-react'
import type { WeekData } from '@/data/weeks'

interface WeekCardProps {
  week: WeekData
  onSelectWeek: (week: WeekData) => void
}

export function WeekCard({ week, onSelectWeek }: WeekCardProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.button
      layout={prefersReducedMotion ? false : true}
      whileHover={
        prefersReducedMotion
          ? {}
          : {
              scale: 1.02,
              boxShadow: '0 10px 25px -5px rgb(0 0 0 / 0.1)',
            }
      }
      whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
      transition={{
        layout: { type: 'spring', damping: 22, stiffness: 260 },
        scale: { type: 'spring', damping: 15, stiffness: 300 },
        boxShadow: { duration: 0.2 },
      }}
      onClick={() => onSelectWeek(week)}
      className="group/card w-full text-left rounded-xl border border-border bg-card shadow-sm overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
    >
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-1">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm shrink-0">
                {week.id}
              </span>
              <h3 className="font-semibold text-base truncate">{week.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground ml-11 line-clamp-1">{week.topic}</p>
          </div>

          <motion.div
            whileHover={prefersReducedMotion ? {} : { x: 4 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="mt-1 shrink-0"
          >
            <div className="flex items-center justify-center w-6 h-6 rounded-md bg-accent/50 group-hover/card:bg-accent transition-colors">
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
          </motion.div>
        </div>

        <div className="flex gap-4 mt-3 ml-11">
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <FileType className="w-3.5 h-3.5" />
            {week.assignments} asgn
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <BookOpen className="w-3.5 h-3.5" />
            {week.notes} notes
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <LinkIcon className="w-3.5 h-3.5" />
            {week.links} links
          </span>
        </div>
      </div>
    </motion.button>
  )
}
