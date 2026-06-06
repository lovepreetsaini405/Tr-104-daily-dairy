import * as React from 'react'

export interface HeroIcon {
  id: number
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  className: string
}

// Python icon
const PythonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C7.58 2 4 2.5 4 5.5V8c0 2.5 2 3 6 3h4c3.5 0 6 1.5 6 3v2.5c0 3-3.5 3.5-8 3.5s-8-.5-8-3.5V17" stroke="#3776AB" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 21c0 1.5 2 2 4 2s4-.5 4-2" stroke="#FFD43B" strokeWidth="1.5"/>
    <circle cx="9" cy="8" r="1" fill="#3776AB"/>
    <circle cx="15" cy="16" r="1" fill="#FFD43B"/>
  </svg>
)

// NumPy icon
const NumPyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="16" height="16" rx="2" stroke="#4DABCF" strokeWidth="1.5"/>
    <path d="M8 8h3l2 4 2-4h3" stroke="#4DABCF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 16V8" stroke="#4DABCF" strokeWidth="1.5"/>
  </svg>
)

// Pandas icon
const PandasIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="16" height="16" rx="2" stroke="#150458" strokeWidth="1.5"/>
    <path d="M8 7v10" stroke="#150458" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 7v10" stroke="#150458" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 7v10" stroke="#150458" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

// ML icon (neural network)
const MLIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="4" r="2" stroke="#2563eb" strokeWidth="1.5"/>
    <circle cx="5" cy="12" r="2" stroke="#2563eb" strokeWidth="1.5"/>
    <circle cx="19" cy="12" r="2" stroke="#2563eb" strokeWidth="1.5"/>
    <circle cx="12" cy="20" r="2" stroke="#2563eb" strokeWidth="1.5"/>
    <path d="M12 6L5 12M12 6L19 12M12 18L5 12M12 18L19 12" stroke="#2563eb" strokeWidth="1.5"/>
  </svg>
)

// Deep Learning icon
const DLIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="3" r="1.5" stroke="#7c3aed" strokeWidth="1.5"/>
    <circle cx="4" cy="9" r="1.5" stroke="#7c3aed" strokeWidth="1.5"/>
    <circle cx="12" cy="9" r="1.5" stroke="#7c3aed" strokeWidth="1.5"/>
    <circle cx="20" cy="9" r="1.5" stroke="#7c3aed" strokeWidth="1.5"/>
    <circle cx="8" cy="15" r="1.5" stroke="#7c3aed" strokeWidth="1.5"/>
    <circle cx="16" cy="15" r="1.5" stroke="#7c3aed" strokeWidth="1.5"/>
    <circle cx="12" cy="21" r="1.5" stroke="#7c3aed" strokeWidth="1.5"/>
    <path d="M12 4.5v3M4 10.5l4 3M12 10.5l-2 3M20 10.5l-4 3M8 16.5l2 3M16 16.5l-2 3" stroke="#7c3aed" strokeWidth="1"/>
  </svg>
)

// Data icon (database)
const DatabaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#059669" strokeWidth="1.5"/>
    <path d="M4 6v6c0 3 3.5 3 8 3s8 0 8-3V6" stroke="#059669" strokeWidth="1.5"/>
    <path d="M4 12v6c0 3 3.5 3 8 3s8 0 8-3v-6" stroke="#059669" strokeWidth="1.5"/>
  </svg>
)

// Chart icon (visualization)
const ChartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="16" height="16" rx="2" stroke="#dc2626" strokeWidth="1.5"/>
    <path d="M7 16l3-4 3 2 4-5" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 12V8" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M17 12V8" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

// SQL icon
const SQLIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="16" height="16" rx="2" stroke="#f59e0b" strokeWidth="1.5"/>
    <path d="M8 8h8M8 12h5M8 16h6" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

// PowerBI icon
const PowerBIIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="16" height="16" rx="2" stroke="#f2c811" strokeWidth="1.5"/>
    <path d="M8 16V8" stroke="#f2c811" strokeWidth="2" strokeLinecap="round"/>
    <path d="M11 16v-4" stroke="#f2c811" strokeWidth="2" strokeLinecap="round"/>
    <path d="M14 16v-6" stroke="#f2c811" strokeWidth="2" strokeLinecap="round"/>
    <path d="M17 16v-2" stroke="#f2c811" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

// Stats/Probability icon
const StatsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 20h18" stroke="#0891b2" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7 20V10" stroke="#0891b2" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M11 20V6" stroke="#0891b2" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M15 20V8" stroke="#0891b2" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M19 20V4" stroke="#0891b2" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

// Matplotlib icon
const MPLIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#11557c" strokeWidth="1.5"/>
    <path d="M6 18l4-6 3 3 5-7" stroke="#11557c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Scikit-learn icon
const SKLearnIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 18l4-6 3 2 5-8" stroke="#f7931e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="4" cy="18" r="1.5" fill="#f7931e"/>
    <circle cx="8" cy="12" r="1.5" fill="#f7931e"/>
    <circle cx="11" cy="14" r="1.5" fill="#f7931e"/>
    <circle cx="16" cy="6" r="1.5" fill="#f7931e"/>
  </svg>
)

export const heroIcons: HeroIcon[] = [
  { id: 1, icon: PythonIcon, className: 'top-[10%] left-[8%]' },
  { id: 2, icon: NumPyIcon, className: 'top-[15%] right-[10%]' },
  { id: 3, icon: PandasIcon, className: 'top-[75%] left-[12%]' },
  { id: 4, icon: MLIcon, className: 'bottom-[12%] right-[8%]' },
  { id: 5, icon: DLIcon, className: 'top-[8%] left-[35%]' },
  { id: 6, icon: DatabaseIcon, className: 'top-[8%] right-[32%]' },
  { id: 7, icon: ChartIcon, className: 'bottom-[15%] left-[28%]' },
  { id: 8, icon: SQLIcon, className: 'top-[50%] left-[5%]' },
  { id: 9, icon: PowerBIIcon, className: 'top-[70%] right-[30%]' },
  { id: 10, icon: StatsIcon, className: 'top-[92%] left-[65%]' },
  { id: 11, icon: MPLIcon, className: 'top-[45%] right-[5%]' },
  { id: 12, icon: SKLearnIcon, className: 'top-[55%] left-[75%]' },
]
