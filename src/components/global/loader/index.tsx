import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    state: boolean
    className?: string 
    children: React.ReactNode
    color?: string
}

const Loader = ({children, className, state, color = "currentColor"}: Props) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {state && (
        <div 
          className="animate-spin rounded-full h-4 w-4 border-2 border-transparent border-t-current"
          style={{color: color}}
        />
      )}
      {children}
    </div>
  )
}

export default Loader