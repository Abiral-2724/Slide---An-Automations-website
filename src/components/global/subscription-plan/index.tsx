import React from 'react'

type Props = {
    type : 'Free' | 'Pro'
    children : React.ReactNode
}

const SubscriptionPlan = ({children ,type}: Props) => {
  return (
    <div>Subscription Plan</div>
  )
}

export default SubscriptionPlan