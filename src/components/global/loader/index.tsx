import { Spinner } from '@/components/ui/ios-spinner'
import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    state : boolean
    className? : string 
    children:React.ReactNode
    color?:string
}

const Loader = ({children ,className,state,color}: Props) => {
  return state ? (
    <div className={cn(className)}>
         <Spinner size="lg" />
    </div>
  ) : (
    children
  )
}

export default Loader