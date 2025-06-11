'use client'

import { PAGE_BREAD_CRUMBS } from '@/constants/pages'
import { usePaths } from '@/hooks/use-nav'
import { CircleHelp, Menu } from 'lucide-react'
import React from 'react'
import Sheet from '../sheet'
import UpgradeCard from '../sidebar/upgrade'
import ClerkAuthState from '../clerk-auth-state'
import { Separator } from '@/components/ui/separator'
import Items from '../sidebar/Items'
import CreateAutomation from '../create-automation'
import Search from '../search'
import Notifications from '../notifications/page'
import MainBreadCrumb from '../bread-crumbs/main-bread-crumb'

type Props = {
    slug : string
}

const Navbar = ({slug}: Props) => {
    const {page} = usePaths()

    const currentPage = true
    // PAGE_BREAD_CRUMBS.includes(page) || page == slug
  return currentPage && (
    <div className='flex flex-col'>
<div className='flex gap-x-3 lg:gap-x-5 justify-end'>
<span className='lg:hidden flex items-center flex-1 gap-x-2'>
    <Sheet
    trigger={<Menu></Menu>}
        className="lg:hidden" 
        side='left'
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
    </Sheet>
</span>
<Search></Search>
<CreateAutomation></CreateAutomation>
<Notifications></Notifications>
</div>
<MainBreadCrumb 
page={page == slug ? 'Home' : page}
slug={slug}
></MainBreadCrumb>
    </div>
  )
}

export default Navbar