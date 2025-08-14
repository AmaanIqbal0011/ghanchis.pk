import React from 'react'
import Link from 'next/link'

const GhanchisLogo = () => {
  return (
   <Link href="/" className="flex items-center space-x-2 sticky top-0 z-50">
       <span className="text-3xl font-bold text-black">G</span>
       <div className="flex flex-col">
         <span className="text-xl font-semibold leading-tight">
           <span className="text-black">hanchi</span>
           <span className="text-red-600">&apos;s</span>
         </span>
         <span className="text-xs text-yellow-600 tracking-wide">
           The Smart Collection
         </span>
       </div>
     </Link>
  )
}

export default GhanchisLogo