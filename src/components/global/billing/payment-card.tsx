import { Button } from '@/components/ui/button'
import { PLANS } from '@/constants/pages'
import { cn } from '@/lib/utils'
import { CircleCheck, Crown, Star } from 'lucide-react'
import React from 'react'

type Props = {
  label: string,
  current: 'PRO' | 'FREE'
  landing?: boolean
}

const PaymentCard = ({ label, current, landing }: Props) => {
  const isPro = label === 'PRO'
  const isCurrent = label === current
  const isUpgrade = current === 'FREE' && label === 'PRO'
  const isDowngrade = current === 'PRO' && label === 'FREE'

  return (
    <div className="relative group w-full max-w-sm">
      {/* Border wrapper */}
      <div
        className={cn(
          'rounded-xl overflow-hidden transition-all duration-300',
          isPro
            ? 'p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
            : 'p-[1px] bg-gray-600'
        )}
      >
        {/* Inner card */}
        <div
          className={cn(
            'flex flex-col rounded-xl p-6 h-full transition-all duration-300',
            'bg-gray-900 text-white',
            landing && isPro && 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
          )}
        >
          {/* Popular badge for PRO */}
          {isPro && landing && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
              <div className="flex items-center gap-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                <Crown className="w-3 h-3" />
                Most Popular
              </div>
            </div>
          )}

          {/* Header */}
          <div className="mb-4">
            {landing ? (
              <div className="flex items-center gap-2 mb-2">
                {isPro && <Star className="w-5 h-5 text-yellow-400" />}
                <h2 className={cn(
                  "text-xl font-bold",
                  isPro ? 'bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent' : 'text-white'
                )}>
                  {isPro ? 'Premium Plan' : 'Standard'}
                </h2>
              </div>
            ) : (
              <h2 className="text-xl font-bold text-white mb-2">
                {isCurrent
                  ? 'Your Current Plan'
                  : isDowngrade
                    ? 'Downgrade'
                    : 'Upgrade'}
              </h2>
            )}
            
            <p className="text-gray-400 text-sm mb-2">
              This is what your plan covers for automations and AI features
            </p>
          </div>

          {/* Plan name and price */}
          <div className="mb-4">
            {isPro ? (
              <div>
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold text-2xl block mb-2">
                  Smart AI
                </span>
                <p className="mb-2">
                  <span className="text-2xl font-bold text-white">$99.99</span>
                  <span className="text-gray-400">/month</span>
                </p>
              </div>
            ) : (
              <div>
                <p className="font-bold text-xl text-gray-300 mb-2">Standard</p>
                <p className="text-2xl mb-2 font-bold text-white">Free</p>
              </div>
            )}
          </div>

          {/* Features */}
          <div className="flex-1 mb-6">
            {PLANS[isPro ? 1 : 0].features.map((feature, index) => (
              <div key={feature} className="flex items-start gap-3 mt-3">
                <CircleCheck className="w-4 h-4 mt-0.5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Action button */}
          <Button
            className={cn(
              'rounded-full mt-auto w-full font-semibold transition-all duration-300',
              landing && isPro && 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white border-0',
              landing && !isPro && 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600',
              !landing && isCurrent && 'bg-gray-700 text-gray-300 cursor-default border border-gray-600',
              !landing && !isCurrent && isPro && 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white border-0',
              !landing && !isCurrent && !isPro && 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600'
            )}
            disabled={!landing && isCurrent}
          >
            {landing
              ? (isCurrent ? 'Get Started' : isUpgrade ? 'Get Started' : 'Free')
              : (isCurrent ? 'Active' : isDowngrade ? 'Downgrade' : 'Upgrade')
            }
          </Button>

          {/* Money back guarantee for PRO */}
          {isPro && landing && (
            <p className="text-center text-xs text-gray-500 mt-3">
              30-day money-back guarantee
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default PaymentCard

// import { Button } from '@/components/ui/button'
// import { PLANS } from '@/constants/pages'
// import { cn } from '@/lib/utils'
// import { CircleCheck } from 'lucide-react'
// import React from 'react'

// type Props = {
//     label : string ,
//     current : 'PRO' | 'FREE'
//     landing? : boolean
// }

// const PaymentCard = ({label ,current ,landing}: Props) => {
//   return (
//     <div
//     className={cn(
//       label !== current
//         ? 'bg-in-active'
//         : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500',
//       'p-[2px] rounded-xl overflow-hidden'
//     )}
//   >
  
//   <div
//     className={cn(
//       landing && 'radial-gradient-pink',
//       'flex flex-col rounded-xl pl-5 py-5 pr-10 bg-background-90'
//     )}
//   >
//     {landing ? (
//   <h2 className="text-2xl">
//     {label === 'PRO' && 'Premium Plan'}
//     {label === 'FREE' && 'Standard'}
//   </h2>
// ) : (
//   <h2 className="text-2xl">
//     {label === current
//       ? 'Your Current Plan'
//       : current === 'PRO'
//       ? 'Downgrade'
//       : 'Upgrade'}
//   </h2>
// )}

// <p className="text-text-secondary text-sm mb-2">
//   This is what your plan covers for automations and Ai features
// </p>
// {label === 'PRO' ? (
//   <span className="bg-gradient-to-r text-3xl from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold">
//     Smart AI
//   </span>
// ) : (
//   <p className="font-bold mt-2 text-text-secondary">Standard</p>
// )}

// {label === 'PRO' ? (
//   <p className="mb-2">
//     <b className="text-xl">$99.99</b>/month
//   </p>
// ) : (
//   <p className="text-xl mb-2">Free</p>
// )}

// {
//     PLANS[label === 'PRO' ? 1 : 0].features.map((i) => (
//         <p key={i} className='mt-2 text-muted-foreground flex gap-3'>
//              <CircleCheck className=''/>
//             {i}
//         </p>
//     ))
// }

// {landing ? (
//   <Button
//     className={cn(
//       'rounded-full mt-5',
//       label === 'PRO'
//         ? 'bg-gradient-to-r from-indigo-500 text-white via-purple-500 to-pink-500'
//         : 'bg-background-80 text-white hover:text-background-80'
//     )}
//   >
//     {label === current
//       ? 'Get Started'
//       : current === 'PRO'
//         ? 'Free'
//         : 'Get Started'}
//   </Button>
// ) : (
//     <Button
//   className="rounded-full mt-5 bg-background-80 text-white hover:text-background-80"
//   disabled={label === current}
// >
//   {label === current
//     ? 'Active'
//     : current === 'PRO'
//     ? 'Downgrade'
//     : 'Upgrade'}
// </Button>
// )}


//   </div>
//   </div>
  
//   )
// }

// export default PaymentCard