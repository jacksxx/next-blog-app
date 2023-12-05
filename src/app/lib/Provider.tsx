'use client';
import { SessionProvider} from 'next-auth/react';
import React, { ReactNode } from 'react'
import { QueryClientProvider} from '@tanstack/react-query'
import { queryClient } from './queryClient'

const Provider = ({ children }: { children: ReactNode }) => {  
  
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </SessionProvider>
  )
}

export default Provider