import { useQueryUser } from '@/hooks/user.queries'
import React from 'react'

type Props = {
    type : 'FREE' | 'PRO'
    children : React.ReactNode
}

const SubscriptionPlan = ({children ,type}: Props) => {
  const {
    data
  } = useQueryUser() ;


    return data?.data?.subscription?.plan === type && children
}

export default SubscriptionPlan