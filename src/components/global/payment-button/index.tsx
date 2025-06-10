import { Button } from '@/components/ui/button'
import { Rocket } from 'lucide-react'
import React from 'react'

type Props = {}

const PaynmentButton = (props: Props) => {
    // get details of subscriptin
  return (
    <>
    <Button className="bg-gradient-to-br
                   text-white
                   rounded-md
                   from-[#6651bc]
                   via-[#8129ce]
                   to-[#d160d7]
                   font-bold">
  Upgrade   <Rocket />
</Button>

    </>
  )
}

export default PaynmentButton