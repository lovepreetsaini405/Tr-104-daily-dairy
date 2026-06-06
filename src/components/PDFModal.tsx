import { useEffect, useState, useCallback } from 'react'
import { X, Download, Maximize2, FileText } from 'lucide-react'

interface PDFModalProps {
  isOpen: boolean
  pdfName: string | null
  onClose: () => void
}

export function PDFModal({ isOpen, pdfName, onClose }: PDFModalProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setVisible(true)
    } else {
      const timer = setTimeout(() => setVisible(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  const handleDownload = useCallback(() => {
    if (!pdfName) return
    const link = document.createElement('a')
    link.href = `/${pdfName}.pdf`
    link.download = `${pdfName}.pdf`
    link.click()
  }, [pdfName])

  const handleFullscreen = useCallback(() => {
    const iframe = document.getElementById('pdf-frame') as HTMLIFrameElement
    if (iframe?.requestFullscreen) {
      iframe.requestFullscreen()
    }
  }, [])

  if (!visible) return null

  const displayTitle = pdfName ? pdfName.replace(/-/g, ' ') : ''

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
        isOpen ? 'bg-black/60 backdrop-blur-sm' : 'bg-transparent pointer-events-none'
      }`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className={`w-[92%] max-w-[1000px] h-[85vh] bg-background border border-border rounded-xl overflow-hidden flex flex-col transition-all duration-300 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <div className="flex items-center gap-2 min-w-0">
            <FileText className="w-4 h-4 text-primary shrink-0" />
            <h3 className="font-semibold text-sm truncate capitalize">{displayTitle}</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-border rounded-lg hover:bg-accent transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              Download
            </button>
            <button
              onClick={handleFullscreen}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-border rounded-lg hover:bg-accent transition-colors"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              Fullscreen
            </button>
            <button
              onClick={onClose}
              className="ml-2 w-8 h-8 flex items-center justify-center border border-border rounded-lg hover:bg-accent transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-hidden bg-muted/30">
          {pdfName ? (
            <iframe
              id="pdf-frame"
              src={`/${pdfName}.pdf`}
              className="w-full h-full border-none"
              title="PDF Viewer"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              No PDF selected
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
