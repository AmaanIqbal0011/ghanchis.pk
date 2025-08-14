'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import React from 'react'

const NoProductAvailable = ({
  params,
  className,
}: {
  params: string
  className?: string
}) => {
  return (
    <div className="flex justify-center w-full mt-10 px-4">
      <div
        className={cn(
          'flex flex-col items-center justify-center py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 space-y-4 sm:space-y-5 w-full max-w-[550px] bg-gray-50 rounded-2xl border border-gray-200 shadow',
          className
        )}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-gray-800 text-center"
        >
          No Products Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-600 text-center text-sm sm:text-base leading-relaxed"
        >
          We&apos;re sorry — there are currently no products available that match
          your criteria for{' '}
          <span className="font-semibold text-gray-800 capitalize">
            {params}
          </span>
          .
        </motion.p>

        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex items-center space-x-2 text-primary"
        >
          <Loader2 className="w-4 h-4 animate-spin text-red-900" />
          <span className="text-sm sm:text-base text-red-900">Restocking soon...</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xs sm:text-sm text-gray-500 text-center"
        >
          Please check back later or explore our other categories.
        </motion.p>
      </div>
    </div>
  )
}

export default NoProductAvailable
