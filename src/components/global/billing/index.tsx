import React from 'react'
import PaymentCard from './payment-card'

type Props = {}

const Billing = (props: Props) => {

    // fetching billing informations
  return (
    <div className='flex lg:flex-row flex-col gap-5 w-full lg:w-10/12 cl:w-8/12 container'>
            <PaymentCard
            current={'FREE'}
            label='FREE'
            ></PaymentCard>

<PaymentCard
            current={'PRO'}
            label='PRO'
            ></PaymentCard>
    </div>
  )
}

export default Billing