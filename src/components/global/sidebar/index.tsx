"use client"
import { usePaths } from '@/hooks/use-nav'
import React from 'react'
import Items from './Items'
import { Separator } from '@/components/ui/separator'
import ClerkAuthState from '../clerk-auth-state'
import { CircleHelp } from 'lucide-react'
import SubscriptionPlan from '../subscription-plan'
import UpgradeCard from './upgrade'

type Props = {
    slug : string
}

const Sidebar = ({slug}: Props) => {
    const {page} = usePaths() ;

  return (
    <div
  className="w-[250px] 
  text-sm
  border-2 
  radial 
  fixed 
  left-0 
  lg:inline-block 
  border-[#545454] 
  bg-gradient-to-b from-[#768BDD] 
  via-[#171717]
   to-[#768BDD]
    hidden 
    bottom-0
     top-0
      m-3 
      rounded-3xl 
  overflow-hidden"

>

<div className="flex flex-col
gap-y-5
w-full
h-full
p-3
bg-[#0e0e0e]
bg-opacity-90
bg-clip-padding
backdrop-filter
backdrop-blur__safari
backdrop-blur-3xl"
>
    <div className='flex gap-x-2 items-center p-5 justify-center'>
        <img src="https://res.cloudinary.com/dci6nuwrm/image/upload/v1749550323/inverted_slide_logo_v0jve1.png" alt="" className='bg-opacity-90 bg-transparent'/>
    </div>
    <div className='flex flex-col py-3'>
        <Items page={page} slug={slug}></Items>
    </div>
    <div className='px-16'>
        <Separator
        orientation='horizontal'
        className='bg-[#444448]'
        ></Separator>
    </div>
    <div className='px-3 flex flex-col gap-y-5'>
        <div className='flex gap-x-3'>
<ClerkAuthState></ClerkAuthState>
<p className='mt-1 text-[#989CA0]'>Profile</p>
        </div>
        <div className='flex gap-x-3'>
        <CircleHelp />
        <p className='mt-0.5 text-[#989CA0]'>Help</p>
        </div>
    </div>
    {/* <SubscriptionPlan type='Free'> */}
        <div className='flex-1 flex flex-col justify-end'>
<UpgradeCard></UpgradeCard>
        </div>
    {/* </SubscriptionPlan> */}
    </div>
    </div>
  )
}

export default Sidebar