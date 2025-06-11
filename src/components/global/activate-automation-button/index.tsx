import { Button } from '@/components/ui/button'
import React from 'react'
import Loader from '../loader'
import { Activity } from 'lucide-react'

type Props = {}

const ActivateAutomationButton = (props: Props) => {
    return (
        <Button className="lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70] ml-4">
          {/* WIP Set the loading state */}
          <Loader state={false}>
          <Activity />
            <p className="lg:inline hidden">Activate</p>
          </Loader>
        </Button>
      )
      
}

export default ActivateAutomationButton