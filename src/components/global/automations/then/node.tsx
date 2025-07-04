"use client"
import { Separator } from '@/components/ui/separator'
import { useQueryAutomation } from '@/hooks/user.queries'
import { CircleAlert, Fan } from 'lucide-react'
import React from 'react'
import { Brain } from 'lucide-react';
import PostButton from '../post'

type Props = {
    id : string
}

const ThenNode = ({id}: Props) => {
 const {data} = useQueryAutomation(id)
   
 const commentTrigger = data?.data?.trigger.find((t) => t.type === 'COMMENT')
 
 return (
    !data?.data?.listener ? (
        <>

        </>
    ) : (
        <div className="w-full lg:w-10/12 relative xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3">
        <div className="absolute h-20 left-1/2 bottom-full flex flex-col items-center z-50">
          <span className="h-[9px] w-[9px] bg-connector/10 rounded-full" />
          <Separator
            orientation="vertical"
            className="bottom-full flex-1 border-[1px] border-connector/10"
          />
          <span className='h-[9px] w-[9px] bg-connector/10 rounded-full'>
          </span>
          
        </div>
        <div className='flex gap-2'>
          <CircleAlert />
          Then ...
          </div>
          <div className='bg-background-800 p-3 rounded-xl flex flex-col gap-y-2'>
            <div className='glex gap-x-2 items-center'>
                {
                    data.data.listener.listener === 'MESSAGE' ? (
                        <Fan />
                    ) : (
                        <Brain />
                    )
                }
                <p className='font-thin text-sm'>
                {
                    data.data.listener.listener === 'MESSAGE' ? ("Send the user a message") : ("Let Smart AI take over")
                }
                </p>
            </div>
            <p className='font-light text-text-secondary'>
                {data.data.listener.prompt}
            </p>
          </div>
          {data.data.posts.length > 0 ? <></> : commentTrigger ? (
            <PostButton id={id}></PostButton>
          ) : (
            <></>
          ) }
      </div>
      
    )
  )
}

export default ThenNode