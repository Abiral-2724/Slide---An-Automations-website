import AutomationBreadCrumbs from '@/components/global/bread-crumbs/automations'
import { ShieldAlert } from 'lucide-react'
import React from 'react'
import Trigger from '@/components/global/automations/trigger'
import { getAutomationInfo } from '@/actions/automations'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { PrefetchUserAutomation } from '@/react-query/prefetch'
import ThenNode from '@/components/global/automations/then/node'
import PostNode from '@/components/global/automations/post/node'
type Props = {
    params : {id : string}
}

// wip set some metadata
export async function generateMetaData ({params} : {
    params : {id : string}
}) {
    const info = await getAutomationInfo(params.id) 

    return {

        title : info.data?.name
    }
}


const page = async ({params }: Props) => {
    // wip : prefetch user automation data 
    const query = new QueryClient() 
    await PrefetchUserAutomation(query ,params.id)


  return (
    <HydrationBoundary state={dehydrate(query)}>
         <div className='flex flex-col items-center gap-y-20'>
<AutomationBreadCrumbs id={params.id}></AutomationBreadCrumbs>
<div className="w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3">
  <div className="flex gap-x-2">
  <ShieldAlert />
    When...
  </div>
  <Trigger id={params.id} />
</div>
<ThenNode id={params.id}></ThenNode>
  <PostNode id={params.id}></PostNode>
    </div>
    </HydrationBoundary>
   
  )
}

export default page