"use client"
import { Button } from '@/components/ui/button'
import React, { useMemo } from 'react'
import Loader from '../loader'
import { Activity } from 'lucide-react'
import { useCreateAutomation } from '@/hooks/use-automations'
import { v4 } from 'uuid'

type Props = {}

const CreateAutomation = (props: Props) => {

    const mutationId = useMemo(() => v4() ,[])

console.log(mutationId) ;

const {
    isPending ,mutate
} = useCreateAutomation(mutationId) 

// console.log(mutationId);

  return (
    <>
    <Button onClick={() => 
    mutate({
        name : 'Untitled' 
        ,id : mutationId 
        ,createdAt : new Date() ,
        keywords : [] ,
    })

} 
     className='lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70]'>
        <Loader state={isPending}>
        <Activity />
            <p className='lg:inline hidden'>Create an Automation</p>
        </Loader>
    </Button>
    </>
  )
}

export default CreateAutomation